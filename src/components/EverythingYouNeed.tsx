import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ShieldCheck,
  Languages,
  FileText,
  CreditCard,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
interface FeatureProps {
  icon: React.ReactElement<LucideProps>;
  title: string;
  description: string;
  index: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -10 }}
    className="group relative bg-[#F9FBF9] rounded-[32px] md:rounded-[40px] p-8 md:p-10 flex flex-col items-start min-h-[300px] transition-all duration-500 border border-[#E9EFE9] hover:border-[#a3ff4a]/50 hover:bg-white hover:shadow-[0_32px_64px_-16px_rgba(26,48,21,0.08)] cursor-pointer font-manrope overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
      <ArrowUpRight size={120} strokeWidth={1} />
    </div>

    <div className="relative z-10 mb-10">
      <motion.div
        whileHover={{ rotate: 8, scale: 1.1 }}
        className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-[#E9EFE9] group-hover:bg-[#a3ff4a] group-hover:border-[#a3ff4a] transition-all duration-500"
      >
        <div className="text-[#1A3015] group-hover:scale-110 transition-transform duration-500">
          {React.cloneElement(icon, { size: 28 })}
        </div>
      </motion.div>
    </div>

    <div className="relative z-10">
      <h3 className="text-xl md:text-2xl font-bold text-[#1A3015] mb-4 tracking-tight group-hover:text-[#3a5a2d] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[#5B6B58] leading-relaxed text-sm md:text-[16px] font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
    </div>

    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#a3ff4a] group-hover:w-full transition-all duration-700 ease-in-out" />
  </motion.div>
);

const EverythingYouNeed: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck />,
      title: "Privacy First",
      description:
        "We are committed to protecting your data at the core of our approach with end-to-end encryption.",
    },
    {
      icon: <Languages />,
      title: "60+ Languages",
      description:
        "Experience true global finance with support for over 60 languages tailored for local needs.",
    },
    {
      icon: <FileText />,
      title: "Wealth Management",
      description:
        "Smart portfolio tracking and automated insights to help you manage assets effortlessly.",
    },
    {
      icon: <CreditCard />,
      title: "Global Payments",
      description:
        "Accept and send payments across borders with zero hidden fees and instant settlement.",
    },
    {
      icon: <Lock />,
      title: "Ironclad Security",
      description:
        "Multi-factor authentication and biometrics keep your account safe from any unauthorized access.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  return (
    <section className="bg-white py-20 md:py-32 px-6 w-full font-manrope overflow-hidden">
      <motion.div
        className="max-w-[1240px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span
            variants={cardVariants}
            className="px-4 py-1.5 rounded-full bg-[#F0F4F0] text-[#3a5a2d] text-xs font-bold uppercase tracking-widest mb-6 border border-[#e2eee2]"
          >
            All-In-One Solution
          </motion.span>
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-6xl font-extrabold text-[#1A3015] leading-[1.1] mb-8 tracking-tighter"
          >
            Everything you need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3015] to-[#a3ff4a]">
              And way more.
            </span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-[#5B6B58] text-base md:text-xl max-w-2xl font-medium leading-relaxed"
          >
            Take full control of your financial ecosystem with tools built for
            speed, security, and global scale.
          </motion.p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} index={index} {...feature} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
            {features.slice(3).map((feature, index) => (
              <FeatureCard key={index + 3} index={index + 3} {...feature} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EverythingYouNeed;
