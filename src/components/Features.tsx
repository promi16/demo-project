import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
const Features: React.FC = () => {
  // Typescript-safe Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const floatingAnimation: Variants = {
    initial: { y: 15 },
    animate: {
      y: [15, 0, 15],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="bg-[#FFFFFF] py-20 md:py-32 px-6 md:px-12 w-full overflow-hidden font-manrope">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.div
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0F4F0] text-[#3a5a2d] text-xs font-bold uppercase tracking-widest mb-6 border border-[#e2eee2]"
          >
            <span className="w-2 h-2 rounded-full bg-[#3a5a2d] animate-pulse" />
            Smart Experience
          </motion.div>

          <motion.h1
            variants={cardVariants}
            className="text-[#1A3015] mb-8 font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.05]"
          >
            Empowering your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3015] via-[#4b7a3a] to-[#1A3015]">
              financial future.
            </span>
          </motion.h1>

          <motion.p
            variants={cardVariants}
            className="text-[#5B6B58] text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Precision tools designed for the next generation of investors.
            Track, analyze, and grow your wealth with ease.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Card 1 - Balance Check */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -15 }}
            className="group relative flex-[0.4] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#3a5a2d10] to-transparent rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-white rounded-[40px] p-8 md:p-12 h-full flex flex-col justify-between border border-[#E9EFE9] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-[#3a5a2d30]">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F6F8F6] flex items-center justify-center mb-8 group-hover:bg-[#1A3015] group-hover:text-white transition-colors duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A3015] mb-4 tracking-tight">
                  Balance Check
                </h3>
                <p className="text-[#5B6B58] text-sm md:text-base leading-relaxed mb-12">
                  Instant real-time updates across all linked accounts in one
                  unified, elegant dashboard.
                </p>
              </div>

              <div className="relative bg-[#F6F8F6] rounded-[32px] pt-12 px-6 overflow-hidden h-[240px] flex items-end shadow-inner">
                <motion.img
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  src="f-26.png"
                  alt="Balance Chart"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Data Analytics */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -15 }}
            className="group relative flex-[0.6] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#3a5a2d10] to-transparent rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-white rounded-[40px] p-8 md:p-12 h-full flex flex-col justify-between border border-[#E9EFE9] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-[#3a5a2d30]">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F6F8F6] flex items-center justify-center mb-8 group-hover:bg-[#1A3015] group-hover:text-white transition-colors duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A3015] mb-4 tracking-tight">
                  Advanced Analytics
                </h3>
                <p className="text-[#5B6B58] text-sm md:text-base leading-relaxed max-w-md mb-12">
                  AI-driven insights to help you optimize your portfolio and
                  reach your financial milestones faster.
                </p>
              </div>

              <div className="relative bg-[#F6F8F6] rounded-[32px] pt-12 px-10 overflow-hidden h-[240px] flex items-end shadow-inner">
                <motion.img
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.5 }}
                  src="f-27.png"
                  alt="Data Analytics"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
