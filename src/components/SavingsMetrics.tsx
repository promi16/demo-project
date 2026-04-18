import React from "react";
import { Check } from "lucide-react";

const SavingsMetrics: React.FC = () => {
  const stats = [
    { value: "1200+", label: "Many Satisfied Users trust" },
    { value: "2000+", label: "Growing reviews highlight" },
    { value: "4.9", subValue: "/5", label: "Many Satisfied Users trust" },
    { value: "32B+", label: "Over 32B secure transactions" },
  ];

  return (
    <section className="bg-white py-12 md:py-20 w-full font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-24">
        <div className="flex-1 bg-[#F6F8F6] rounded-[30px] md:rounded-[40px] p-4 md:p-8 w-full">
          <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-sm border border-gray-100">
            <img
              src="f-3.png"
              alt="Savings Progress Chart"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex-1 w-full text-left">
          <h2 className="text-3xl md:text-4xl lg:text-[56px] font-bold text-[#1A3015] leading-[1.1] mb-6">
            Saving money isn’t as hard as you think
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-10 max-w-lg">
            Your current total savings have reached $16,531, reflecting steady
            growth and consistent contributions.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-sm max-w-md">
              <Check className="text-black shrink-0" size={20} />
              <span className="text-gray-800 font-medium text-sm md:text-base">
                Maximum savings contribution achieved
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-sm max-w-md sm:ml-6 md:ml-12">
              <Check className="text-black shrink-0" size={20} />
              <span className="text-gray-800 font-medium text-sm md:text-base">
                Maximum savings contribution achieved
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-sm max-w-md sm:ml-12 md:ml-24">
              <Check className="text-black shrink-0" size={20} />
              <span className="text-gray-800 font-medium text-sm md:text-base">
                Maximum savings contribution achieved
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl md:text-[48px] font-bold text-[#1A3015] mb-12">
          Key metrics behind <br className="hidden md:block" /> our success
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#F6F8F6] rounded-[24px] p-6 md:p-8 border border-transparent hover:border-gray-200 transition-all"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-2xl md:text-[32px] font-bold text-black">
                  {stat.value}
                </span>
                {stat.subValue && (
                  <span className="text-gray-400 text-lg md:text-xl font-medium">
                    {stat.subValue}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm md:text-[16px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavingsMetrics;
