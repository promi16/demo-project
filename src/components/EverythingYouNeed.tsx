import React from "react";
import {
  ShieldCheck,
  Languages,
  FileText,
  CreditCard,
  Lock,
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-[#F6F8F6] rounded-[32px] p-8 flex flex-col items-start min-h-[320px] transition-all hover:shadow-md">
    <div className="bg-white p-3 rounded-xl mb-16 shadow-sm">
      <div className="text-gray-700 w-6 h-6 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-[22px] font-bold text-[#1A3015] mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-[16px]">{description}</p>
  </div>
);

const EverythingYouNeed: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Privacy First",
      description:
        "We are Committed to protecting your data at the care of our approach",
    },
    {
      icon: <Languages size={24} />,
      title: "60+ languages",
      description:
        "We are Committed to protecting your data at the care of our approach",
    },
    {
      icon: <FileText size={24} />,
      title: "Management",
      description:
        "We are Committed to protecting your data at the care of our approach",
    },
    {
      icon: <CreditCard size={24} />,
      title: "Accept Payments",
      description:
        "We are Committed to protecting your data at the care of our approach",
    },
    {
      icon: <Lock size={24} />,
      title: "Data Protection",
      description:
        "We are Committed to protecting your data at the care of our approach",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 w-full">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[#1A3015] leading-[1.2] mb-6">
            You'll Find Everything you <br /> Need And More
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Instant balance check is one of the most popular choices for taking
            control of your finances and investments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {features.slice(3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EverythingYouNeed;
