import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { bookingData } from "../Dashboard/Data";

export const ChartsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-black text-[#0f2f1d] mb-6">Bookings Trend</h3>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={bookingData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f1f5f9"
              />
              <XAxis
                dataKey="name"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0f2f1d"
                strokeWidth={4}
                dot={{
                  r: 6,
                  fill: "#FF6B35", // Changed to Orange
                  strokeWidth: 3,
                  stroke: "#0f2f1d",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="font-black text-[#0f2f1d] mb-6">Revenue Trend</h3>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bookingData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f1f5f9"
              />
              <XAxis
                dataKey="name"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip cursor={{ fill: "#f8fafc" }} />
              <Bar
                dataKey="value"
                fill="#FF6B35" // Changed to Orange
                radius={[8, 8, 0, 0]}
                barSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
