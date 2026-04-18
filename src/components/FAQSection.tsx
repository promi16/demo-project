import { Plus, ArrowRight } from "lucide-react";

const FAQItem: React.FC<{ question: string }> = ({ question }) => (
  <div className="flex items-center justify-between bg-[#F8F9F8] p-6 rounded-2xl mb-4 cursor-pointer hover:bg-[#f0f2f0] transition-colors">
    <span className="text-[18px] font-semibold text-[#1A3015]">{question}</span>
    <Plus className="text-gray-400" size={24} />
  </div>
);

const FAQSection: React.FC = () => {
  const questions = [
    "What Services do you Offer?",
    "Do you offer support after project completion?",
    "How long does a typical project take?",
    "Can you work with startup and small business?",
    "How do you price your services?",
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-20 lg:px-40 w-full font-sans">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-[64px] font-bold text-[#1A3015] leading-[1.1] mb-8">
            Frequently <br /> Asked Questions?
          </h2>
          <p className="text-gray-600 text-[18px] leading-relaxed mb-10 max-w-md">
            Choose from our flexible plans tailored for businesses of all sizes.
            Find the right fit and get started today!
          </p>
          <button className="bg-[#C1FF72] text-[#1A3015] font-bold py-4 px-8 rounded-full flex items-center gap-3 hover:bg-[#aee664] transition-colors">
            Book a Demo
            <div className="bg-[#1A3015] rounded-full p-1">
              <ArrowRight className="text-[#C1FF72]" size={16} />
            </div>
          </button>
        </div>

        <div className="flex-1">
          {questions.map((q, index) => (
            <FAQItem key={index} question={q} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
