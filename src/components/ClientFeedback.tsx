import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  text,
  name,
  role,
  image,
}) => (
  <div className="bg-white rounded-[24px] p-8 flex flex-col justify-between shadow-sm border border-gray-50 relative z-10">
    <div>
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="#F97316" color="#F97316" />
        ))}
      </div>
      <p className="text-gray-700 text-[16px] leading-relaxed mb-8">"{text}"</p>
    </div>
    <div className="flex items-center gap-3">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="font-bold text-[#1A3015] text-[16px]">{name}</h4>
        <p className="text-gray-500 text-[14px]">{role}</p>
      </div>
    </div>
  </div>
);

const ClientFeedback: React.FC = () => {
  const testimonials = [
    {
      text: "This app completely changed how I manage my money. Everything feels simple, organized, and stress-free now.",
      name: "Chloe Heartley",
      role: "Agency CEO",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      text: "I've tried many finance tools before, but this one finally made budgeting easy and actually enjoyable.",
      name: "Minor day",
      role: "Agency CEO",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      text: "The interface is clean and intuitive. I can track everything without feeling overwhelmed.",
      name: "Chloe Heartley",
      role: "Agency CEO",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[50%] opacity-60 blur-[100px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #BEF264 0%, #D9F99D 30%, transparent 70%)",
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-[56px] font-bold text-[#1A3015] mb-6 leading-tight">
            Client feedback that <br /> speaks volume
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Their honest feedback not only motivates our team but also reflects
            the standards we serve and we uphold in every standard
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index + 3} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
