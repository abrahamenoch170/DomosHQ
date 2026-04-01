import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is MyDomos?",
    answer: "MyDomos is a trust layer and payment infrastructure for renting in Africa. We provide a secure platform where tenants can find verified properties, landlords can guarantee payments, and proptech platforms can integrate our trust tools to make renting safer for everyone."
  },
  {
    question: "How does MyDomos protect my money?",
    answer: "When you pay through MyDomos, your funds are securely held and tracked. We verify all landlords and properties before any transaction is completed, ensuring you never lose money to fake agents or scams."
  },
  {
    question: "Can I pay my rent monthly?",
    answer: "Yes! We understand that paying 1-2 years of rent upfront is a huge burden. MyDomos offers flexible monthly payment options for verified tenants, making moving in much easier."
  },
  {
    question: "I am a landlord. Why should I use MyDomos?",
    answer: "MyDomos gives you peace of mind by verifying tenants, guaranteeing timely payments, and providing a clear digital record of all transactions and agreements. No more chasing rent or dealing with disputes."
  },
  {
    question: "Does MyDomos list properties?",
    answer: "No, we are not a listing site. We are the infrastructure that powers safe renting. You can find a house anywhere—on social media, offline, or through an agent—and use MyDomos to verify it and pay securely."
  },
  {
    question: "Can I save or take loans with MyDomos?",
    answer: "Absolutely! MyDomos helps you manage your finances better. You can save money with interest and access loans directly through our platform, ensuring you have the financial support you need for your rental journey."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-24 pointer-events-auto relative z-10 bg-white/40 backdrop-blur-sm border-t border-black/[0.04]">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="uppercase text-[11px] tracking-[0.12em] opacity-60 font-bold mb-3 text-[#1E3A8A]">
            Got Questions?
          </div>
          <h2 className="text-[2rem] lg:text-[2.5rem] font-[700] text-[#1E3A8A] leading-[1.08] tracking-[-0.04em]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-md border border-black/[0.06] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-[#1F2937] font-semibold text-[1.125rem] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-[#6B7280] shrink-0"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-[#4B5563] text-[1rem] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
