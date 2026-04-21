import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { StatsGrid } from "./StatsGrid";
import { ChartsSection } from "./ChartsSection";
import { UserTable } from "./UserTable";
import { Menu, Bell } from "lucide-react";

const DashboardMain: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const profileImageUrl =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop";

  return (
    <div className="flex min-h-screen bg-[#fcfdfe] font-['Manrope'] text-[#0f2f1d]">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      <main className="flex-1 flex flex-col min-w-0 w-full">
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:px-10 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Menu size={20} />
          </button>

          <div className="hidden lg:block">
            <h2 className="font-black text-xl">Overview</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative p-3 bg-[#FF6B35] rounded-xl cursor-pointer hover:bg-[#FF6B35]/90 transition-colors">
              <Bell size={20} className="text-white" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-black rounded-full border border-white" />
            </div>

            <div className="w-[1px] h-8 bg-gray-100" />

            <div className="flex items-center gap-3 cursor-pointer p-1 rounded-full hover:bg-gray-50 transition-colors">
              <img
                src={profileImageUrl}
                alt="Admin Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-white ring-1 ring-gray-100 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="font-bold text-sm text-[#FF6B35]">Admin</span>
                <span className="text-xs text-gray-500 font-medium">
                  admin@platform.com
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 lg:p-10 w-full max-w-[1600px] mx-auto overflow-y-auto">
          <StatsGrid />
          <ChartsSection />
          <UserTable />
        </div>
      </main>
    </div>
  );
};

export default DashboardMain;
