import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X, Sparkles } from "lucide-react";
import type { Variants } from "framer-motion";

interface PricingSectionProps {
  pricingRef?: React.RefObject<HTMLDivElement | null>;
}

interface PricingPlanProps {
  name: string;
  price: string;
  isPopular?: boolean;
  features: string[];
  billingCycle: "monthly" | "annually";
  isSelected: boolean;
  index: number;
  onClick: () => void;
  onGetStarted: (planName: string) => void;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  isPopular,
  features,
  billingCycle,
  isSelected,
  index,
  onClick,
  onGetStarted,
}) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    onClick={onClick}
    whileHover={{ y: -10 }}
    className={`relative rounded-[32px] md:rounded-[40px] p-8 md:p-10 flex flex-col h-full transition-all duration-500 cursor-pointer overflow-hidden ${
      isSelected
        ? "bg-[#1A3015] text-white shadow-[0_40px_80px_-15px_rgba(26,48,21,0.3)] scale-[1.03] z-10 border border-[#a3ff4a]/20"
        : "bg-white text-[#1A3015] border border-[#E9EFE9] hover:shadow-2xl hover:shadow-black/5"
    }`}
  >
    {/* Background Glow for Selected Card */}
    {isSelected && (
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#a3ff4a]/10 blur-[80px] rounded-full" />
    )}

    {isPopular && (
      <div className="absolute top-6 right-6">
        <span className="bg-[#a3ff4a] text-[#1A3015] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
          <Sparkles size={10} /> Popular
        </span>
      </div>
    )}

    <div className="mb-8 relative z-10">
      <h3
        className={`text-lg md:text-xl font-bold mb-6 ${isSelected ? "text-[#a3ff4a]" : "text-[#1A3015]"}`}
      >
        {name}
      </h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-sm md:text-lg font-bold opacity-60">$</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={price}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-[64px] font-black tracking-tighter"
          >
            {price}
          </motion.span>
        </AnimatePresence>
        <span className={`text-sm md:text-base font-medium opacity-60`}>
          /{billingCycle === "monthly" ? "mo" : "yr"}
        </span>
      </div>
      <p
        className={`text-sm leading-relaxed ${isSelected ? "text-gray-400" : "text-gray-500"}`}
      >
        Perfect for those who want to take their first step towards financial
        freedom.
      </p>
    </div>

    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.stopPropagation();
        onGetStarted(name);
      }}
      className={`w-full py-4 md:py-5 px-6 rounded-2xl flex items-center justify-between mb-10 transition-all duration-300 font-black text-sm md:text-base cursor-pointer ${
        isSelected
          ? "bg-[#a3ff4a] text-[#1A3015] shadow-lg shadow-[#a3ff4a]/20"
          : "bg-[#1A3015] text-white hover:bg-[#2a4d22]"
      }`}
    >
      <span>Get Started Now</span>
      <ArrowRight size={20} />
    </motion.button>

    <ul className="space-y-4 flex-grow relative z-10">
      {features.map((feature, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * i }}
          className="flex items-start gap-3"
        >
          <div
            className={`mt-1 p-0.5 rounded-full ${isSelected ? "bg-[#a3ff4a]/20 text-[#a3ff4a]" : "bg-[#1A3015]/5 text-[#1A3015]"}`}
          >
            <Check size={14} strokeWidth={4} />
          </div>
          <span className="text-sm md:text-[16px] font-medium leading-snug">
            {feature}
          </span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const PricingSection: React.FC<PricingSectionProps> = ({ pricingRef }) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly",
  );
  const [selectedPlan, setSelectedPlan] = useState<number>(1);
  const [modalData, setModalData] = useState<string | null>(null);

  const plans = [
    {
      name: "Starter Plan",
      monthlyPrice: 19,
      features: [
        "Track expenses",
        "Set budgets",
        "Automated reports",
        "Data encryption",
        "Basic insights",
      ],
    },
    {
      name: "Business Pro",
      monthlyPrice: 99,
      isPopular: true,
      features: [
        "Unlimited tracking",
        "Custom budgets",
        "Advanced reporting",
        "Priority support",
        "AI Insights",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: 149,
      features: [
        "Multi-user access",
        "Custom integrations",
        "Bank-level security",
        "Dedicated manager",
        "Full API Access",
      ],
    },
  ];

  const getDisplayPrice = (monthlyPrice: number) => {
    if (billingCycle === "monthly") return monthlyPrice.toString();
    return Math.floor(monthlyPrice * 12 * 0.9).toString();
  };

  return (
    <section
      ref={pricingRef}
      className="bg-white py-20 md:py-32 px-6 font-manrope overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-6xl lg:text-[72px] font-black text-[#1A3015] leading-[1] mb-10 tracking-tighter"
          >
            Simple Prices. <br />
            <span className="text-[#3A5A2D]">No Surprises.</span>
          </motion.h2>

          {/* Animated Toggle Switch */}
          <div className="inline-flex items-center bg-[#F6F8F6] p-1.5 rounded-full border border-[#E9EFE9] shadow-inner">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative px-8 md:px-10 py-3 rounded-full text-sm font-bold transition-all duration-500 cursor-pointer z-10 ${
                billingCycle === "monthly"
                  ? "bg-[#1A3015] text-white shadow-lg"
                  : "text-[#5B6B58] hover:text-[#1A3015]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`relative px-8 md:px-10 py-3 rounded-full text-sm font-bold transition-all duration-500 flex items-center gap-2 cursor-pointer z-10 ${
                billingCycle === "annually"
                  ? "bg-[#1A3015] text-white shadow-lg"
                  : "text-[#5B6B58] hover:text-[#1A3015]"
              }`}
            >
              Annually
              <span className="bg-[#a3ff4a] text-[#1A3015] text-[10px] px-2 py-0.5 rounded-full font-black animate-pulse">
                SAVE 10%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              index={index}
              {...plan}
              price={getDisplayPrice(plan.monthlyPrice)}
              billingCycle={billingCycle}
              isSelected={selectedPlan === index}
              onClick={() => setSelectedPlan(index)}
              onGetStarted={(name) => setModalData(name)}
            />
          ))}
        </div>
      </div>

      {/* Modern Pop-up Modal */}
      <AnimatePresence>
        {modalData && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalData(null)}
              className="absolute inset-0 bg-[#0f2f1d]/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[40px] p-10 md:p-14 max-w-lg w-full relative shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-white/20"
            >
              <button
                onClick={() => setModalData(null)}
                className="absolute top-8 right-8 text-[#1A3015] hover:rotate-90 transition-transform duration-300 cursor-pointer"
              >
                <X size={28} />
              </button>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#a3ff4a] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#a3ff4a]/30">
                  <Check size={40} className="text-[#1A3015]" strokeWidth={3} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-[#1A3015] mb-4 tracking-tight">
                  Excellent Choice!
                </h3>
                <p className="text-[#5B6B58] text-lg font-medium mb-10">
                  You've selected the{" "}
                  <span className="text-[#1A3015] font-black">{modalData}</span>
                  . Let's finish setting up your account.
                </p>
                <div className="flex flex-col gap-4">
                  <button className="w-full py-5 bg-[#1A3015] text-[#a3ff4a] rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-98 transition-all cursor-pointer">
                    Confirm & Proceed
                  </button>
                  <button
                    onClick={() => setModalData(null)}
                    className="w-full py-4 text-[#5B6B58] font-bold hover:text-[#1A3015] transition-colors cursor-pointer"
                  >
                    Change My Mind
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PricingSection;
