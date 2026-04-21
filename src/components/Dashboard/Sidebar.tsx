import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  CheckCircle,
  CreditCard,
  Headphones,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Users", icon: Users },
    { name: "Seller Approval", icon: CheckCircle },
    { name: "Payments", icon: CreditCard },
    { name: "Support", icon: Headphones },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      <motion.aside
        animate={{ x: isLargeScreen ? 0 : isOpen ? 0 : -280 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`fixed lg:static top-0 left-0 z-50 w-72 h-screen bg-white border-r border-gray-100 flex flex-col shadow-xl lg:shadow-none`}
      >
        <div className="p-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black text-[#0f2f1d] tracking-tighter">
              Karoo
            </h2>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              Admin Panel
            </p>
          </div>
          <X
            className="lg:hidden cursor-pointer text-gray-400 hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <motion.div
                key={item.name}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setActiveTab(item.name);
                  if (!isLargeScreen) setIsOpen(false);
                }}
                className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-300 group ${
                  isActive
                    ? "bg-[#0f2f1d] text-[#FF6B35] shadow-lg shadow-[#0f2f1d]/20"
                    : "text-gray-500 hover:bg-[#FF6B35]/10 hover:text-[#0f2f1d]"
                }`}
              >
                <item.icon
                  size={20}
                  className={`transition-colors duration-300 ${isActive ? "text-[#FF6B35]" : "group-hover:text-[#0f2f1d]"}`}
                />
                <span
                  className={`font-bold text-sm transition-colors duration-300 ${isActive ? "text-[#FF6B35]" : ""}`}
                >
                  {item.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FF6B35]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </nav>

        <div className="p-6 border-t border-gray-50">
          <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3 border border-transparent hover:border-[#FF6B35]/30 transition-all cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-[#FF6B35] flex items-center justify-center font-bold text-[#0f2f1d] shadow-sm">
              A
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black truncate">Admin User</p>
              <p className="text-[10px] text-gray-400 truncate">
                admin@platform.com
              </p>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};
