import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowUpRight,
  X,
  TrendingUp,
  Users,
  ShieldCheck,
  Globe,
} from "lucide-react";

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const SavingsMetrics: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    {
      value: "1200",
      suffix: "+",
      label: "Many Satisfied Users trust",
      icon: <Users size={20} />,
    },
    {
      value: "2000",
      suffix: "+",
      label: "Growing reviews highlight",
      icon: <TrendingUp size={20} />,
    },
    {
      value: "4.9",
      suffix: "/5",
      label: "Community rating success",
      icon: <ShieldCheck size={20} />,
    },
    {
      value: "32",
      suffix: "B+",
      label: "Secure transactions processed",
      icon: <Globe size={20} />,
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 w-full font-manrope overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-[800] text-[#1A3015] tracking-tighter">
              Key metrics behind <br /> our success
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 text-[#3a5a2d] font-bold text-base md:text-lg lg:text-xl cursor-pointer group bg-[#F0F4F0] px-6 py-3 rounded-full hover:bg-[#a3ff4a] transition-all duration-300"
          >
            View Full Report{" "}
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F9FBF9] rounded-[32px] p-8 md:p-10 border border-[#E9EFE9] hover:bg-white hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl md:text-5xl font-extrabold text-[#1A3015] tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[#3a5a2d] text-xl md:text-2xl font-bold">
                  {stat.suffix}
                </span>
              </div>
              <div className="w-12 h-1 bg-[#a3ff4a]/30 mb-6 group-hover:w-full transition-all duration-500" />
              <p className="text-[#5B6B58] text-sm md:text-base font-bold leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#0f2f1d]/60 backdrop-blur-md"
            />

            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white w-full max-w-2xl rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl border border-white/20"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-[#F6F8F6] text-[#1A3015] hover:bg-[#a3ff4a] transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <span className="text-[#3a5a2d] font-bold text-xs md:text-sm uppercase tracking-widest bg-[#F0F4F0] px-4 py-1 rounded-full">
                    Annual Report 2024
                  </span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#1A3015] mt-4 tracking-tighter leading-tight">
                    Transparency is our <br /> core value.
                  </h3>
                </div>

                <div className="space-y-4 mb-10">
                  {stats.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 md:p-5 bg-[#F9FBF9] rounded-2xl border border-[#E9EFE9] hover:border-[#a3ff4a]/40 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-white rounded-xl shadow-sm text-[#3a5a2d]">
                          {item.icon}
                        </div>
                        <span className="text-[#5B6B58] text-sm md:text-base lg:text-lg font-bold">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-[#1A3015] font-black text-lg md:text-xl lg:text-2xl">
                        {item.value}
                        {item.suffix}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1A3015] text-[#a3ff4a] py-4 md:py-6 rounded-2xl font-black text-base md:text-lg lg:text-xl shadow-xl shadow-[#1A3015]/20 flex items-center justify-center gap-3"
                >
                  Download Detailed PDF Report <ArrowUpRight size={22} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SavingsMetrics;
