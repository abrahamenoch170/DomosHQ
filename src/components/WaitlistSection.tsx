import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { User, Building, Network, ArrowRight, ArrowLeft, CheckCircle2, Copy } from 'lucide-react';
import { doc, runTransaction, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import confetti from 'canvas-confetti';
import { DomosIllustration } from './DomosIllustration';

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo",
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa",
  "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
  "Yobe", "Zamfara"
];

const COUNTRIES = ["Nigeria", "Ghana", "South Africa", "Other"];

export const WaitlistSection = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<'Tenant' | 'LandlordAgent' | 'Proptech' | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successData, setSuccessData] = useState<{ position?: number; code?: string } | null>(null);

  // Form Data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'Nigeria',
    state: '',
    city: '',
    propertiesCount: '',
    
    companyName: '',
    website: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
    platformType: 'Listing Site',
    listingsCount: '',
    integrationInterest: {
      API: false,
      Referral: false,
      Other: false
    },
    
    referredBy: ''
  });

  // Check URL for referral code on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');
    if (ref) {
      setFormData(prev => ({ ...prev, referredBy: ref }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string) => {
    setFormData(prev => ({
      ...prev,
      integrationInterest: {
        ...prev.integrationInterest,
        [name]: !prev.integrationInterest[name as keyof typeof prev.integrationInterest]
      }
    }));
  };

  const validateStep2 = () => {
    setError('');
    // Standard email regex that accepts all professional and generic TLDs
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (role === 'Tenant' || role === 'LandlordAgent') {
      if (!formData.fullName || !formData.email || !formData.phone || !formData.country || !formData.city) {
        setError('Please fill in all required fields.');
        return false;
      }
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address.');
        return false;
      }
      if (formData.country === 'Nigeria' && !formData.state) {
        setError('Please select your state.');
        return false;
      }
      if (formData.country === 'Nigeria' && !/^0[789][01]\d{8}$/.test(formData.phone)) {
        setError('Please enter a valid Nigerian phone number (e.g., 08012345678).');
        return false;
      }
    } else if (role === 'Proptech') {
      if (!formData.companyName || !formData.website || !formData.contactPerson || !formData.contactEmail || !formData.country) {
        setError('Please fill in all required fields.');
        return false;
      }
      if (!emailRegex.test(formData.contactEmail)) {
        setError('Please enter a valid contact email address.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && !role) {
      setError('Please select a role to continue.');
      return;
    }
    if (step === 2 && !validateStep2()) {
      return;
    }
    
    setError('');
    
    // Skip step 3 for Proptech
    if (step === 2 && role === 'Proptech') {
      handleSubmit();
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setError('');
    setStep(prev => prev - 1);
  };

  const generateCode = (name: string) => {
    const cleanName = name.replace(/[^a-zA-Z0-9]/g, '').substring(0, 6).toUpperCase();
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    return cleanName ? `${cleanName}-${randomPart}` : randomPart;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    
    const nameBase = role === 'Proptech' ? formData.companyName : formData.fullName;
    const code = generateCode(nameBase);
    const waitlistRef = doc(db, 'waitlist', code);
    const counterRef = doc(db, 'counters', 'waitlist');
    
    const userEmail = (role === 'Proptech' ? formData.contactEmail : formData.email).toLowerCase().trim();
    const emailRef = doc(db, 'waitlist_emails', userEmail);
    
    let referrerRef = null;
    if (formData.referredBy && role !== 'Proptech') {
      referrerRef = doc(db, 'waitlist', formData.referredBy);
    }

    try {
      const result = await runTransaction(db, async (transaction) => {
        // 0. Check email uniqueness
        const emailDoc = await transaction.get(emailRef);
        if (emailDoc.exists()) {
          throw new Error("This email is already on the waitlist.");
        }

        // 1. Read counter
        const counterDoc = await transaction.get(counterRef);
        let currentCount = 0;
        if (counterDoc.exists()) {
          currentCount = counterDoc.data().count || 0;
        }

        // 2. Read referrer
        let referrerDoc = null;
        if (referrerRef) {
          referrerDoc = await transaction.get(referrerRef);
          if (!referrerDoc.exists()) {
            throw new Error("Invalid referral code. Please check and try again, or leave it blank.");
          }
        }

        // 3. Write new user
        const position = currentCount + 1;
        
        // Prepare base data
        const baseData = {
          role,
          country: formData.country,
          createdAt: serverTimestamp(),
          referralCode: code,
          position
        };

        // Add role-specific data
        let entryData: any = { ...baseData };
        
        if (role === 'Tenant' || role === 'LandlordAgent') {
          entryData = {
            ...entryData,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            state: formData.state,
            city: formData.city,
            referralCount: 0,
            points: 0,
            referredBy: formData.referredBy || null
          };
          if (role === 'LandlordAgent' && formData.propertiesCount) {
            entryData.propertiesCount = parseInt(formData.propertiesCount, 10);
          }
        } else if (role === 'Proptech') {
          entryData = {
            ...entryData,
            companyName: formData.companyName,
            website: formData.website,
            contactPerson: formData.contactPerson,
            contactEmail: formData.contactEmail,
            contactPhone: formData.contactPhone || null,
            platformType: formData.platformType,
            integrationInterest: Object.keys(formData.integrationInterest).filter(k => formData.integrationInterest[k as keyof typeof formData.integrationInterest])
          };
          if (formData.listingsCount) {
            entryData.listingsCount = parseInt(formData.listingsCount, 10);
          }
        }

        transaction.set(waitlistRef, entryData);
        transaction.set(emailRef, { referralCode: code });

        // 4. Update counter
        transaction.set(counterRef, { count: position }, { merge: true });

        // 5. Update referrer
        if (referrerDoc && referrerRef) {
          const newRefCount = (referrerDoc.data().referralCount || 0) + 1;
          const newPoints = (referrerDoc.data().points || 0) + 1;
          transaction.update(referrerRef, {
            referralCount: newRefCount,
            points: newPoints
          });
        }

        return { position, code };
      });

      // Success
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#1E3A8A', '#F59E0B', '#10B981']
      });
      
      setSuccessData({ position: result.position, code: result.code });
      setStep(4);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (successData?.code) {
      navigator.clipboard.writeText(`https://mydomos.com?ref=${successData.code}`);
      alert('Referral link copied to clipboard!');
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0
    })
  };

  return (
    <section id="waitlist" className="w-full px-6 md:px-12 lg:px-24 py-24 pointer-events-auto relative z-10 bg-[#FEF7E6]">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
        
        {/* Form Container */}
        <div className="w-full">
          {step < 4 && (
            <div className="text-center mb-10">
              <h2 className="text-[2rem] lg:text-[2.5rem] font-[700] text-[#1E3A8A] leading-[1.08] tracking-[-0.04em] mb-4">
                Join the Waitlist
              </h2>
              <p className="text-[#6B7280] text-[1.125rem]">
                Step {step} of {role === 'Proptech' ? 2 : 3}
              </p>
              
              {/* Progress Bar */}
              <div className="w-full max-w-md mx-auto h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  className="h-full bg-[#2563EB]"
                  initial={{ width: '33%' }}
                  animate={{ width: `${(step / (role === 'Proptech' ? 2 : 3)) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-10 relative overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait" custom={1}>
            
            {/* STEP 1: ROLE SELECTION */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                className="flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-[#1F2937] mb-6 text-center">I am joining as a...</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <button 
                    onClick={() => { setRole('Tenant'); setError(''); }}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${role === 'Tenant' ? 'border-[#2563EB] bg-blue-50/50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${role === 'Tenant' ? 'bg-[#2563EB] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <User size={24} />
                    </div>
                    <span className="font-semibold text-[#1F2937]">Tenant</span>
                  </button>
                  
                  <button 
                    onClick={() => { setRole('LandlordAgent'); setError(''); }}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${role === 'LandlordAgent' ? 'border-[#2563EB] bg-blue-50/50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${role === 'LandlordAgent' ? 'bg-[#2563EB] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <Building size={24} />
                    </div>
                    <span className="font-semibold text-[#1F2937]">Landlord or Agent</span>
                  </button>
                  
                  <button 
                    onClick={() => { setRole('Proptech'); setError(''); }}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${role === 'Proptech' ? 'border-[#2563EB] bg-blue-50/50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${role === 'Proptech' ? 'bg-[#2563EB] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <Network size={24} />
                    </div>
                    <span className="font-semibold text-[#1F2937]">Proptech / Listing Site</span>
                  </button>
                </div>

                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <div className="mt-auto flex justify-end">
                  <button 
                    onClick={handleNext}
                    className="bg-[#2563EB] text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    Next <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: ROLE-SPECIFIC FIELDS */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                className="flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-[#1F2937] mb-6">Your Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {(role === 'Tenant' || role === 'LandlordAgent') && (
                    <>
                      <div className="col-span-1 md:col-span-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input id="fullName" autoFocus aria-label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input id="email" aria-label="Email Address" type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                        <input id="phone" aria-label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="08012345678" />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                        <select id="country" aria-label="Country" name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                          {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      {formData.country === 'Nigeria' && (
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                          <select id="state" aria-label="State" name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                            <option value="">Select State</option>
                            {NIGERIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      )}
                      <div className={formData.country === 'Nigeria' ? 'col-span-1 md:col-span-2' : ''}>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                        <input id="city" aria-label="City" type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Lagos" />
                      </div>
                      {role === 'LandlordAgent' && (
                        <div className="col-span-1 md:col-span-2">
                          <label htmlFor="propertiesCount" className="block text-sm font-medium text-gray-700 mb-1">How many properties do you manage? (Optional)</label>
                          <input id="propertiesCount" aria-label="Number of properties managed" type="number" name="propertiesCount" value={formData.propertiesCount} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="e.g. 5" />
                        </div>
                      )}
                    </>
                  )}

                  {role === 'Proptech' && (
                    <>
                      <div className="col-span-1 md:col-span-2">
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                        <input id="companyName" autoFocus aria-label="Company Name" type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Acme Properties" />
                      </div>
                      <div className="col-span-1 md:col-span-2">
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Company Website *</label>
                        <input id="website" aria-label="Company Website" type="url" name="website" value={formData.website} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="https://example.com" />
                      </div>
                      <div>
                        <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Contact Person Name *</label>
                        <input id="contactPerson" aria-label="Contact Person Name" type="text" name="contactPerson" value={formData.contactPerson} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Jane Doe" />
                      </div>
                      <div>
                        <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
                        <input type="email" name="contactEmail" value={formData.contactEmail} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact Phone (Optional)</label>
                        <input type="tel" name="contactPhone" value={formData.contactPhone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="+234..." />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                        <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                          {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Platform Type *</label>
                        <select name="platformType" value={formData.platformType} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                          <option value="Listing Site">Listing Site</option>
                          <option value="Property Management">Property Management</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Number of Listings (Optional)</label>
                        <input type="number" name="listingsCount" value={formData.listingsCount} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="e.g. 1000" />
                      </div>
                      <div className="col-span-1 md:col-span-2 mt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Integration Interest</label>
                        <div className="flex flex-wrap gap-4">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={formData.integrationInterest.API} onChange={() => handleCheckboxChange('API')} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                            <span className="text-sm text-gray-700">API</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={formData.integrationInterest.Referral} onChange={() => handleCheckboxChange('Referral')} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                            <span className="text-sm text-gray-700">Referral partnership</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" checked={formData.integrationInterest.Other} onChange={() => handleCheckboxChange('Other')} className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
                            <span className="text-sm text-gray-700">Other</span>
                          </label>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <div className="mt-auto flex justify-between">
                  <button 
                    onClick={handleBack}
                    className="text-gray-500 font-medium px-6 py-3 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={isLoading}
                    className="bg-[#2563EB] text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-70"
                  >
                    {role === 'Proptech' ? (isLoading ? 'Submitting...' : 'Submit') : 'Next'} {!isLoading && role !== 'Proptech' && <ArrowRight size={18} />}
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: REFERRAL CODE (Tenant / LandlordAgent only) */}
            {step === 3 && role !== 'Proptech' && (
              <motion.div
                key="step3"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-[#1F2937] mb-2 text-center">Got a referral code?</h3>
                <p className="text-gray-500 text-center mb-8">If someone invited you, enter their code below to boost their points.</p>
                
                <div className="max-w-md mx-auto w-full mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Referral Code (Optional)</label>
                  <input 
                    type="text" 
                    name="referredBy" 
                    value={formData.referredBy} 
                    onChange={handleInputChange} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all uppercase" 
                    placeholder="e.g. A1B2C3D4" 
                  />
                </div>

                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <div className="mt-auto flex justify-between">
                  <button 
                    onClick={handleBack}
                    className="text-gray-500 font-medium px-6 py-3 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft size={18} /> Back
                  </button>
                  <button 
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="bg-[#2563EB] text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-70"
                  >
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex flex-col items-center text-center py-8 h-full justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} strokeWidth={2.5} />
                </div>
                
                {role === 'Proptech' ? (
                  <>
                    <h3 className="text-2xl font-bold text-[#1F2937] mb-4">You're on the partner waitlist!</h3>
                    <p className="text-gray-600 max-w-md">
                      Thank you for your interest. We'll reach out to you as soon as our API and partnership programs are ready.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-[#1F2937] mb-2">You're on the waitlist!</h3>
                    <div className="bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-full mb-6 inline-block">
                      Position: #{successData?.position?.toLocaleString() || '---'}
                    </div>
                    
                    <div className="w-full max-w-md bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
                      <p className="text-sm text-gray-500 mb-2 font-medium uppercase tracking-wider">Your Unique Referral Link</p>
                      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-2">
                        <input 
                          type="text" 
                          readOnly 
                          value={`https://mydomos.com?ref=${successData?.code}`} 
                          className="flex-1 bg-transparent outline-none text-gray-700 text-sm px-2"
                        />
                        <button 
                          onClick={copyToClipboard}
                          className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                          title="Copy to clipboard"
                        >
                          <Copy size={18} />
                        </button>
                      </div>
                      
                      <div className="flex justify-between mt-6 pt-6 border-t border-gray-200">
                        <div className="text-center flex-1">
                          <p className="text-2xl font-bold text-[#1F2937]">0</p>
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Referrals</p>
                        </div>
                        <div className="w-px bg-gray-200"></div>
                        <div className="text-center flex-1">
                          <p className="text-2xl font-bold text-amber-500">0</p>
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">Points</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500 max-w-md">
                      Share your link to move up the waitlist. Top referrers get priority onboarding and exclusive perks.
                    </p>
                  </>
                )}
              </motion.div>
            )}

          </AnimatePresence>
          </div>

          {/* Privacy Policy and Terms of Use */}
          <div className="mt-6 text-center lg:text-left text-sm text-gray-500">
            By joining, you agree to our{' '}
            <Link to="/terms" className="text-blue-600 hover:underline">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            {formData.country ? ` applicable in ${formData.country}` : ''}.
          </div>
        </div>

        {/* Right Column: Illustration */}
        <div className="hidden lg:flex items-center justify-center w-full h-full">
          <DomosIllustration />
        </div>

      </div>
    </section>
  );
};
