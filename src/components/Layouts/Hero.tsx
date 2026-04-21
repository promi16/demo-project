import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  featuresRef: React.RefObject<HTMLDivElement | null>;
  pricingRef: React.RefObject<HTMLDivElement | null>;
  faqRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

const Hero: React.FC<HeroProps> = ({
  featuresRef,
  pricingRef,
  faqRef,
  aboutRef,
}) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const heroRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (
    elementRef: React.RefObject<HTMLDivElement | null>,
    tabName: string,
  ) => {
    if (elementRef && elementRef.current) {
      const offset = 80;
      const elementPosition = elementRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveTab(tabName);
      setIsMenuOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  const originalMenuItems = [
    { name: "Features", ref: featuresRef },
    { name: "About", ref: aboutRef },
    { name: "Pricing", ref: pricingRef },
    { name: "FAQ", ref: faqRef },
  ];

  return (
    <div className="font-['Manrope',_sans-serif]">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0f2f1d]/95 backdrop-blur-lg border-b border-white/10">
        <div className="flex justify-between items-center px-4 md:px-10 py-4 md:py-5 max-w-[1440px] mx-auto relative">
          <h1
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveTab("Home");
              setIsMenuOpen(false);
            }}
            className="font-extrabold text-[#a3ff4a] cursor-pointer text-[32px] md:text-[36px] z-[110]"
          >
            Finorix
          </h1>

          <ul className="hidden lg:flex gap-8 text-gray-300 font-bold text-[18px]">
            {originalMenuItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05, color: "#a3ff4a" }}
                onClick={() => scrollToSection(item.ref, item.name)}
                className={`relative cursor-pointer transition-colors duration-300 ${
                  activeTab === item.name
                    ? "text-[#a3ff4a]"
                    : "hover:text-[#a3ff4a]"
                }`}
              >
                {item.name}
                {activeTab === item.name && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#a3ff4a]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4 z-[110]">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#a3ff4a] text-black px-6 py-2 rounded-full text-sm font-extrabold shadow-lg shadow-[#a3ff4a]/20 cursor-pointer hidden sm:block transition-all hover:scale-105 active:scale-95"
            >
              Book a Demo ➜
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#a3ff4a] text-3xl cursor-pointer p-2 transition-transform"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div
        ref={heroRef}
        className="relative pt-24 min-h-[750px] md:min-h-[860px] bg-gradient-to-br from-[#0f2f1d] via-[#0b3d1f] to-[#071e14] text-white overflow-hidden flex flex-col justify-between"
      >
        <div className="text-center mt-12 md:mt-16 px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 text-xs rounded-full bg-[#1c3d2a] text-[#a3ff4a] mb-6 border border-[#a3ff4a]/20 font-bold animate-bounce"
          >
            ✨ Unlock your financial potential
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-[800] text-[#a3ff4a] tracking-tight leading-tight"
          >
            Get Your Finances Under <br className="hidden md:block" /> Control
            in Minutes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mt-6 max-w-xl mx-auto text-base md:text-lg"
          >
            Take control of your finances, grow your investments, and secure
            your financial future.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 w-full max-w-md mx-auto sm:max-w-none px-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto bg-[#a3ff4a] text-black px-10 py-4 rounded-full font-[900] cursor-pointer hover:bg-white transition-all duration-300 hover:scale-105 shadow-xl shadow-[#a3ff4a]/30"
            >
              Book a Demo ➜
            </button>
            <button
              onClick={() => scrollToSection(aboutRef, "About")}
              className="w-full sm:w-auto border border-gray-500 text-white px-10 py-4 rounded-full font-bold cursor-pointer hover:border-[#a3ff4a] hover:text-[#a3ff4a] transition-all"
            >
              Learn More ➜
            </button>
          </div>
        </div>

        {/* --- IMAGE DESIGN RESTORED (AGER MOTO) --- */}
        <div className="relative w-full h-[300px] md:h-[400px] mt-12 flex justify-center items-end overflow-hidden z-10">
          <motion.img
            initial={{ y: 100, rotate: 0 }}
            animate={{ y: "40%", rotate: -6 }} // অরিজিনাল রোটেশন
            transition={{ duration: 1 }}
            src="photo1.png"
            className="w-[180px] md:w-[380px] z-10"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://via.placeholder.com/400x800/0f2f1d/a3ff4a?text=Finorix+1";
            }}
          />
          <motion.img
            initial={{ y: 100, rotate: 0 }}
            animate={{ y: "40%", rotate: 6 }} // অরিজিনাল রোটেশন
            transition={{ duration: 1, delay: 0.2 }}
            src="photo2.png"
            className="w-[180px] md:w-[380px] -ml-24 z-20" // অরিজিনাল নেগেটিভ মার্জিন
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "https://via.placeholder.com/400x800/0f2f1d/a3ff4a?text=Finorix+2";
            }}
          />
        </div>
      </div>

      {/* LOGIN MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={closeModal}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#0b3d1f] border border-[#a3ff4a]/30 w-full max-w-md rounded-3xl p-8 relative z-[210]"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 text-gray-400 hover:text-[#a3ff4a] text-2xl"
              >
                ✕
              </button>

              <div className="text-center">
                {!isSubmitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsSubmitted(true);
                      setTimeout(() => {
                        navigate("/dashboard");
                      }, 1500);
                    }}
                  >
                    <div className="w-16 h-16 bg-[#a3ff4a]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                      🔐
                    </div>
                    <h2 className="text-[#a3ff4a] text-2xl font-extrabold mb-2">
                      Welcome Back
                    </h2>
                    <div className="space-y-4 mt-8">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-[#071e14] border border-green-900 rounded-xl px-5 py-4 text-white outline-none focus:border-[#a3ff4a]"
                        required
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-[#071e14] border border-green-900 rounded-xl px-5 py-4 text-white outline-none focus:border-[#a3ff4a]"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#a3ff4a] text-black font-black py-4 rounded-xl hover:bg-white transition-all"
                      >
                        Login ➜
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="py-6">
                    <div className="w-20 h-20 bg-[#a3ff4a]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-black text-4xl">
                      ✓
                    </div>
                    <h2 className="text-white text-3xl font-extrabold mb-3">
                      All Set!
                    </h2>
                    <p className="text-gray-400">Redirecting to Dashboard...</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
