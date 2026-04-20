import React from "react";
import { motion } from "framer-motion";

const Logo: React.FC = () => {
  const logos = [
    { src: "Vector (1).png", name: "Logoipsum" },
    { src: "Vector (2).png", name: "Logoipsum" },
    { src: "Vector (3).png", name: "Logoipsum" },
    { src: "Vector (4).png", name: "Logoipsum" },
    { src: "Vector (5).png", name: "Logoipsum" },
    { src: "Vector (6).png", name: "Logoipsum" },
  ];

  // লুপটি সিমলেস করার জন্য লোগো লিস্ট ডাবল করা হয়েছে
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-white pt-16 pb-24 px-4 md:px-10 overflow-hidden font-manrope">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#5B6B58] text-sm md:text-[15px] font-semibold uppercase tracking-[0.2em] mb-4">
            Trusted by innovative companies
          </p>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#3a5a2d40] to-transparent mx-auto" />
        </motion.div>

        {/* Infinite Scroll Container */}
        <div className="relative group">
          {/* Gradient Overlays for Smooth Fading */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 md:gap-24 items-center whitespace-nowrap py-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 25, // গতি কমানোর জন্য সময় বাড়ানো হয়েছে
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.08,
                    filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.05))",
                  }}
                  className="flex items-center gap-3 shrink-0 cursor-pointer transition-all duration-300"
                >
                  <div className="p-2 rounded-2xl bg-transparent group-hover:bg-[#f8faf8] transition-colors duration-500">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-7 md:h-9 w-auto object-contain"
                    />
                  </div>
                  <p className="text-[#1A3015] font-bold text-sm md:text-lg tracking-tight pt-1">
                    {logo.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logo;
