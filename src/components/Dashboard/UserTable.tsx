import React from "react";
import { userData } from "../Dashboard/Data";

export const UserTable: React.FC = () => {
  return (
    <div className="bg-white mt-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-gray-50">
        <h3 className="font-black text-[#0f2f1d]">Recent User Registrations</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <tbody className="divide-y divide-gray-50">
            {userData.map((user) => (
              <tr
                key={user.email}
                className="hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-8 py-5">
                  <p className="font-black text-sm text-[#0f2f1d]">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </td>
                <td className="px-8 py-5 text-sm text-gray-500">{user.date}</td>
                <td className="px-8 py-5 text-right">
                  <span
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black ${
                      user.role === "Seller"
                        ? "bg-[#FF6B35] text-white" // Changed Seller badge to Orange
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {user.role.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
