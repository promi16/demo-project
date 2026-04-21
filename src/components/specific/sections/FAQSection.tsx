import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, Minus, X } from "lucide-react";

// --- Types & Interfaces ---
interface FAQSectionProps {
  faqRef?: React.RefObject<HTMLDivElement | null>;
}

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

// --- FAQItem Component ---
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className={`mb-4 overflow-hidden bg-white rounded-2xl transition-all duration-500 border ${
        isOpen
          ? "border-[#a3ff4a]/40 shadow-[0_10px_30px_rgba(163,255,74,0.1)]"
          : "border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
      } hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)]`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-5 md:p-7 cursor-pointer hover:bg-[#f9fbf9] transition-colors"
      >
        <span className="text-sm sm:text-base lg:text-[18px] font-bold text-[#1A3015] leading-snug">
          {question}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            backgroundColor: isOpen ? "#1A3015" : "#ffffff",
          }}
          className="shrink-0 ml-4 p-1.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-50"
        >
          {isOpen ? (
            <Minus className="text-[#a3ff4a]" size={16} />
          ) : (
            <Plus className="text-gray-400" size={16} />
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 md:px-7 pb-7 text-gray-500 text-sm md:text-base leading-relaxed border-t border-gray-50 pt-5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main FAQSection Component ---
const FAQSection: React.FC<FAQSectionProps> = ({ faqRef }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  const faqData = [
    {
      question: "What Services do you Offer?",
      answer:
        "We offer a wide range of financial services including expense tracking, investment management, automated budgeting, and deep financial analytics to help businesses grow.",
    },
    {
      question: "Do you offer support after project completion?",
      answer:
        "Yes, we provide 24/7 dedicated support and regular maintenance updates to ensure your financial tools always run smoothly.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Most onboarding and setup processes take between 1 to 2 weeks, depending on the complexity of your financial data and integration requirements.",
    },
    {
      question: "Can you work with startup and small business?",
      answer:
        "Absolutely! We have flexible plans specifically tailored to help startups and small businesses scale their financial operations efficiently.",
    },
    {
      question: "How do you price your services?",
      answer:
        "Our pricing is transparent and simple. You can choose from our Monthly or Annual plans, with our Business plan being the most popular for growing teams.",
    },
  ];

  return (
    <section
      ref={faqRef}
      className="bg-white py-20 md:py-32 px-6 md:px-10 lg:px-40 relative overflow-hidden font-sans"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#C1FF72]/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#1A3015]/5 blur-[100px] rounded-full -z-10" />

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        {/* Left Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[72px] font-black text-[#1A3015] leading-[1] mb-8 tracking-tighter drop-shadow-sm">
            Frequently <br /> Asked Questions?
          </h2>
          <p className="text-[#5B6B58] text-base md:text-xl leading-relaxed mb-10 max-w-md font-medium">
            Choose from our flexible plans tailored for businesses of all sizes.
            Find the right fit and get started today!
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 20px 40px rgba(193,255,114,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-[#C1FF72] text-[#1A3015] text-sm md:text-lg font-[900] py-4 px-10 rounded-full flex items-center gap-3 transition-all cursor-pointer group shadow-[0_10px_25px_rgba(193,255,114,0.2)]"
          >
            Book a Demo
            <div className="bg-[#1A3015] rounded-full p-1.5 group-hover:rotate-[-45deg] transition-transform duration-300 shadow-md">
              <ArrowRight className="text-[#C1FF72]" size={16} />
            </div>
          </motion.button>
        </motion.div>

        {/* Right Accordion Area */}
        <div className="flex-1">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#071e14]/90 backdrop-blur-sm cursor-pointer"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="bg-[#0b3d1f] border border-[#a3ff4a]/20 w-full max-w-lg rounded-[40px] p-10 md:p-14 relative z-[210] shadow-[0_50px_100px_rgba(0,0,0,0.6)]"
            >
              <button
                onClick={closeModal}
                className="absolute top-8 right-8 text-gray-400 hover:text-[#a3ff4a] transition-all cursor-pointer hover:rotate-90 duration-300"
              >
                <X size={28} />
              </button>

              <div className="text-center">
                {!isSubmitted ? (
                  <div>
                    <div className="w-20 h-20 bg-[#a3ff4a]/10 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[inset_0_0_20px_rgba(163,255,74,0.1)]">
                      <span className="text-3xl">📅</span>
                    </div>
                    <h2 className="text-[#a3ff4a] text-3xl md:text-4xl font-black mb-4 tracking-tight">
                      Let's Talk!
                    </h2>
                    <p className="text-gray-300 mb-10 font-medium">
                      Schedule a call with our experts.
                    </p>

                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-[#071e14] border border-green-900/50 rounded-2xl px-6 py-5 outline-none focus:border-[#a3ff4a] text-white shadow-inner transition-all"
                        required
                      />
                      <motion.button
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0px 0px 30px rgba(163,255,74,0.2)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsSubmitted(true)}
                        className="w-full bg-[#a3ff4a] text-[#1A3015] font-black py-5 rounded-2xl shadow-lg cursor-pointer transition-all"
                      >
                        Confirm Booking ➜
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10"
                  >
                    <div className="w-24 h-24 bg-[#a3ff4a]/20 rounded-full flex items-center justify-center mx-auto mb-8 text-[#a3ff4a] text-5xl shadow-[0_0_40px_rgba(163,255,74,0.2)]">
                      ✓
                    </div>
                    <h2 className="text-white text-3xl font-black mb-4">
                      Success!
                    </h2>
                    <p className="text-gray-400 mb-8">
                      We will contact you soon at your email.
                    </p>
                    <button
                      onClick={closeModal}
                      className="w-full border-2 border-[#a3ff4a] text-[#a3ff4a] py-4 rounded-2xl font-black cursor-pointer hover:bg-[#a3ff4a] hover:text-[#1A3015] transition-all shadow-md"
                    >
                      Close Window
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FAQSection;
