import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { statsData } from "../Dashboard/Data";

export const StatsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat, i) => {
        const Icon = LucideIcons[
          stat.icon as keyof typeof LucideIcons
        ] as LucideIcon;

        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label}
            className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-center group hover:border-[#FF6B35] transition-colors"
          >
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                {stat.label}
              </p>
              <h3 className="text-2xl font-black text-[#0f2f1d] mt-1">
                {stat.value}
              </h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-[#0f2f1d] group-hover:text-[#FF6B35] transition-all">
              {Icon && <Icon size={24} />}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
