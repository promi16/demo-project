import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ShieldCheck, Send } from "lucide-react";

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<"privacy" | "contact" | null>(
    null,
  );

  const footerLinks = {
    Menu: [
      { name: "About", href: "#about" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQ", href: "#faq" },
    ],
    Pages: [
      { name: "Styleguide", href: "#" },
      { name: "License", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "404", href: "#" },
    ],
    Social: [
      { name: "Facebook", href: "https://facebook.com" },
      { name: "Twitter", href: "https://twitter.com" },
      { name: "Instagram", href: "https://instagram.com" },
      { name: "Linkedin", href: "https://linkedin.com" },
    ],
  };

  return (
    <footer className="bg-white pt-20 md:pt-32 pb-10 px-6 md:px-10 lg:px-20 font-sans border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C1FF72] to-transparent opacity-30" />

      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full overflow-hidden"
          >
            <motion.h1
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="text-[70px] sm:text-[110px] md:text-[150px] lg:text-[190px] font-black text-[#F1F3F1] leading-none select-none tracking-tighter drop-shadow-sm"
            >
              Finorix
            </motion.h1>
          </motion.div>

          <div className="flex flex-wrap gap-12 sm:gap-16 md:gap-24 relative z-10">
            {Object.entries(footerLinks).map(([title, links], sectionIdx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIdx * 0.1 + 0.3 }}
                className="flex flex-col gap-5 md:gap-7"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-black text-[#1A3015] tracking-tight">
                  {title}
                </h3>
                <ul className="flex flex-col gap-3 md:gap-5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        target={title === "Social" ? "_blank" : "_self"}
                        rel={title === "Social" ? "noopener noreferrer" : ""}
                        whileHover={{ x: 5 }}
                        className="text-gray-500 hover:text-[#1A3015] transition-all duration-300 text-sm md:text-[16px] font-medium flex items-center group cursor-pointer"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C1FF72] transition-all duration-300 group-hover:w-full" />
                        </span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-[#1A3015] rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-[#C1FF72]/20 transition-all">
              <span className="text-[#C1FF72] font-bold text-xs">F</span>
            </div>
            <p className="text-gray-500 text-xs md:text-sm">
              © 2026 - All rights reserved by{" "}
              <span className="font-bold text-[#1A3015]">Finorix</span>
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setActiveModal("privacy")}
              className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#1A3015] border border-gray-200 rounded-full hover:bg-[#F1F3F1] transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveModal("contact")}
              className="px-5 py-2 text-xs font-bold uppercase tracking-widest bg-[#1A3015] text-white rounded-full hover:shadow-[0_10px_20px_rgba(26,48,21,0.2)] transition-all active:scale-95 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      {/* Pop-up Modals */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[500] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-lg md:max-w-xl lg:max-w-2xl rounded-[32px] p-8 md:p-12 relative shadow-[0_30px_100px_rgba(0,0,0,0.3)] border border-gray-100 overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <X size={20} className="text-[#1A3015]" />
              </button>

              {activeModal === "privacy" ? (
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-[#C1FF72]/20 rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={32} className="text-[#1A3015]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#1A3015] tracking-tight">
                    Privacy Policy
                  </h2>
                  <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4 h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                    <p>
                      Welcome to Finorix. Your privacy is critically important
                      to us. It is Finorix's policy to respect your privacy
                      regarding any information we may collect while operating
                      our website.
                    </p>
                    <h3 className="font-bold text-[#1A3015]">
                      1. Information We Collect
                    </h3>
                    <p>
                      We only ask for personal information when we truly need it
                      to provide a service to you. We collect it by fair and
                      lawful means, with your knowledge and consent.
                    </p>
                    <h3 className="font-bold text-[#1A3015]">
                      2. Data Security
                    </h3>
                    <p>
                      We protect your personal information using commercially
                      acceptable means to prevent loss and theft, as well as
                      unauthorized access, disclosure, copying, use or
                      modification.
                    </p>
                    <p>
                      Your continued use of our website will be regarded as
                      acceptance of our practices around privacy and personal
                      information.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="w-14 h-14 bg-[#1A3015] rounded-2xl flex items-center justify-center">
                    <Mail size={28} className="text-[#C1FF72]" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#1A3015] tracking-tight mb-2">
                      Get in touch
                    </h2>
                    <p className="text-gray-500">
                      We'd love to hear from you. Our team is always here to
                      help.
                    </p>
                  </div>
                  <form
                    className="space-y-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#C1FF72] transition-all font-medium"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#C1FF72] transition-all font-medium"
                      />
                    </div>
                    <textarea
                      placeholder="How can we help?"
                      rows={4}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-[#C1FF72] transition-all font-medium resize-none"
                    ></textarea>
                    <button className="w-full py-5 bg-[#1A3015] text-[#C1FF72] rounded-2xl font-black flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#1A3015]/20 transition-all cursor-pointer group">
                      Send Message
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
