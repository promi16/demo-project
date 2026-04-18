import React from "react";

const Footer: React.FC = () => {
  const footerLinks = {
    Menu: ["About", "Features", "Pricing", "Testimonials"],
    Pages: ["Styleguide", "License", "Changelog", "404"],
    Templates: ["Facebook", "Twitter", "Instagram", "Linkedin"],
  };

  return (
    <footer className="bg-white pt-20 pb-10 px-6 md:px-20 font-sans border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="flex-1">
            <h1 className="text-[120px] md:text-[180px] font-bold text-[#F1F3F1] leading-none select-none">
              Finorix
            </h1>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-24">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-6">
                <h3 className="text-xl font-bold text-[#1A3015]">{title}</h3>
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#1A3015] transition-colors text-[16px]"
                      >
                        {link === "Testimonials" ? "Testimonils" : link}{" "}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 - All rights reserved by{" "}
            <a href="#" className="underline font-medium text-[#1A3015]">
              Finorix
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
