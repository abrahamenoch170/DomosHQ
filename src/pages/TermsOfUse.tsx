import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  useEffect(() => {
    document.title = "Terms of Use – MyDomos Africa | Rental Trust Service Agreement";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Review the Terms of Use for MyDomos Africa. Understand user responsibilities, rental escrow transaction terms, and legal safety guidelines.");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://www.mydomos.org/terms");
    }
    return () => {
      if (canonical) {
        canonical.setAttribute("href", "https://www.mydomos.org");
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-6 md:px-12 lg:px-24">
      {/* Breadcrumb Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.mydomos.org/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Terms of Use",
              "item": "https://www.mydomos.org/terms"
            }
          ]
        })}
      </script>
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-6">Terms of Use</h1>
        <p className="text-gray-500 mb-8">Last updated: April 2026</p>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using MyDomos, you agree to comply with and be bound by these Terms of Use. 
              If you do not agree with any part of these terms, you must not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-3">2. Description of Service</h2>
            <p>
              MyDomos provides a platform for managing rental transactions, including but not limited to 
              lease agreements, rent payments, and communication between landlords, tenants, and agents. 
              We do not own or manage properties directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-3">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You must provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree not to use the platform for any illegal or unauthorized purpose.</li>
              <li>You must comply with all local, state, and national laws regarding housing and rentals.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-3">4. Payments and Fees</h2>
            <p>
              Certain features of MyDomos may require payment. All fees are clearly stated before you 
              commit to a transaction. We use secure third-party payment processors, and we do not store 
              your full credit card information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-3">5. Intellectual Property</h2>
            <p>
              All content, features, and functionality on the MyDomos platform, including text, graphics, 
              logos, and software, are the exclusive property of MyDomos and are protected by international 
              copyright and trademark laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-3">6. Limitation of Liability</h2>
            <p>
              MyDomos shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages resulting from your use of or inability to use the service. We do not guarantee the 
              accuracy of listings or the behavior of other users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material 
              changes via email or through a notice on the platform. Continued use of the service after 
              changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1F2937] mb-3">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:hello@mydomos.org" className="text-blue-600 hover:underline">hello@mydomos.org</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
