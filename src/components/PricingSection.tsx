import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

interface PricingPlanProps {
  name: string;
  price: string;
  isPopular?: boolean;
  features: string[];
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  isPopular,
  features,
}) => (
  <div
    className={`rounded-[32px] p-8 flex flex-col h-full transition-all ${isPopular ? "bg-[#1A3015] text-white shadow-xl" : "bg-white text-[#1A3015] border border-gray-100 shadow-sm"}`}
  >
    <div className="mb-8">
      <h3
        className={`text-xl font-medium mb-6 ${isPopular ? "text-[#C1FF72]" : "text-[#1A3015]"}`}
      >
        {name}
      </h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-[48px] font-bold">${price}</span>
        <span
          className={`${isPopular ? "text-gray-300" : "text-gray-500"} text-lg`}
        >
          /month
        </span>
      </div>
      <p
        className={`text-sm leading-relaxed ${isPopular ? "text-gray-300" : "text-gray-500"}`}
      >
        Essential tools to help you manage your finances smarter and faster.
      </p>
    </div>

    <button
      className={`w-full py-4 px-6 rounded-full flex items-center justify-between mb-10 transition-all ${isPopular ? "bg-[#C1FF72] text-black hover:bg-[#a6e056]" : "bg-white border border-gray-200 text-black hover:bg-gray-50"}`}
    >
      <span className="font-semibold">Get Started now</span>
      <div
        className={`p-1 rounded-full ${isPopular ? "bg-black text-white" : "bg-[#C1FF72] text-black"}`}
      >
        <ArrowRight size={18} />
      </div>
    </button>

    <ul className="space-y-4 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="mt-1">
            <Check
              size={16}
              className={isPopular ? "text-[#C1FF72]" : "text-black"}
              strokeWidth={3}
            />
          </div>
          <span
            className={`text-[15px] ${isPopular ? "text-gray-200" : "text-gray-700"}`}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly",
  );

  const plans = [
    {
      name: "Starter Plan",
      price: "19",
      features: [
        "Track expenses & categorize spending",
        "Set monthly budgets & savings goals",
        "Automated reports",
        "Bank-level security & data encryption",
        "Basic financial insights",
      ],
    },
    {
      name: "Business",
      price: "99",
      isPopular: true,
      features: [
        "Track expenses & categorize spend",
        "Set monthly budgets & savings goals",
        "Advanced automated reporting",
        "Enhanced security & data protection",
        "Comprehensive financial insights",
      ],
    },
    {
      name: "Enterprise",
      price: "149",
      features: [
        "Track expenses & categorize spend",
        "Set monthly budgets & savings goals",
        "Automated reports",
        "Bank-level security & data encryption",
        "Basic financial insights",
      ],
    },
  ];

  return (
    <section className="bg-white py-24 px-6 min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[56px] font-bold text-[#1A3015] leading-tight mb-12">
            Prices That are Simple <br /> And Transparent
          </h2>

          <div className="inline-flex items-center bg-[#F6F8F6] p-1 rounded-full mb-12 border border-gray-100">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${billingCycle === "monthly" ? "bg-[#C1FF72] text-black shadow-sm" : "bg-transparent text-gray-500"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${billingCycle === "annually" ? "bg-[#C1FF72] text-black shadow-sm" : "bg-transparent text-gray-500"}`}
            >
              Annually
              <span className="bg-[#1A3015] text-white text-[10px] px-2 py-1 rounded-full">
                -10%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
