import { useState } from "react";

const Hero = () => {
  // Menu open/close state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-[860px] bg-gradient-to-br from-[#0f2f1d] via-[#0b3d1f] to-[#071e14] text-white overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 opacity-10 px-4 md:px-10 py-10 md:py-20 pointer-events-none z-0">
        {" "}
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="border border-green-400 rounded-xl"></div>
        ))}
      </div>

      {/* Navbar Container */}
      <div className="flex justify-between items-center px-4 md:px-10 py-4 md:py-6 relative z-30">
        <h1 className="text-lg md:text-xl font-semibold text-[#a3ff4a]">
          Finorix
        </h1>
        {/* Desktop Menu */}{" "}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Pricing</li>
          <li className="hover:text-white cursor-pointer">FAQ</li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="bg-[#a3ff4a] text-black px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-2">
            Book a Demo ➜
          </button>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            className="md:hidden text-[#a3ff4a] text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0b3d1f] border-b border-green-900/50 flex flex-col items-center py-6 gap-4 md:hidden z-30 animate-in fade-in slide-in-from-top-5">
            <li
              className="list-none hover:text-[#a3ff4a] cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </li>
            <li
              className="list-none hover:text-[#a3ff4a] cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </li>
            <li
              className="list-none hover:text-[#a3ff4a] cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </li>
            <li
              className="list-none hover:text-[#a3ff4a] cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </li>
          </div>
        )}
      </div>

      <div className="text-center mt-12 md:mt-20 px-4 relative z-20">
        <div className="inline-block px-3 md:px-4 py-1 text-[10px] md:text-xs rounded-full bg-[#1c3d2a] text-[#a3ff4a] mb-4 md:mb-6">
          ✨ Unlock your financial potential
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#a3ff4a]">
          Get Your Finances Under <br />
          Control in Minutes
        </h1>

        <p className="text-gray-300 mt-4 md:mt-6 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
          Take control of your finances, grow your investments, and secure your
          financial future by empowering your financial journey.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-6 md:mt-8">
          <button className="bg-[#a3ff4a] text-black px-5 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-medium flex items-center justify-center gap-2">
            Book a Demo ➜
          </button>

          <button className="border border-gray-500 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm flex items-center justify-center gap-2">
            Learn More ➜
          </button>
        </div>
      </div>

      <div className="absolute bottom-[-40px] md:bottom-[-60px] left-1/2 -translate-x-1/2 w-[260px] sm:w-[320px] md:w-[420px] h-[220px] sm:h-[260px] md:h-[290px] overflow-hidden relative">
        <img
          src="photo1.png"
          alt="Dashboard"
          className="absolute left-0 w-[240px] sm:w-[190px] md:w-[240px] ml-4 sm:ml-8 md:ml-10 mt-4 md:mt-7 -rotate-6 shadow-2xl"
        />

        <img
          src="photo2.png"
          alt="Graph"
          className="absolute left-16 sm:left-20 md:left-24 w-[240px] sm:w-[190px] md:w-[240px] rotate-3 shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
