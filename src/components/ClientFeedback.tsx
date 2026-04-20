import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  text: string;
  name: string;
  role: string;
  image: string;
  index: number;
}

// কার্ডের জন্য আলাদা এনিমেশন ভেরিয়েন্ট
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.21, 1.11, 0.81, 0.99], // Custom Elastic Ease
    },
  }),
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  text,
  name,
  role,
  image,
  index,
}) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    whileHover={{
      y: -10,
      rotateZ: index % 2 === 0 ? 1 : -1, // হালকা ডানে বা বামে টিল্ট হবে
      transition: { duration: 0.3 },
    }}
    className="group bg-white rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#E9EFE9] relative z-10 h-full font-manrope overflow-hidden"
  >
    {/* Decorative Quote Icon */}
    <div className="absolute -right-2 -top-2 opacity-[0.05] group-hover:opacity-10 transition-opacity">
      <Quote size={100} fill="#1A3015" />
    </div>

    <div>
      {/* Stars with Sequential Animation */}
      <div className="flex gap-1.5 mb-6">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <Star size={18} fill="#A3FF4A" className="text-[#A3FF4A]" />
          </motion.div>
        ))}
      </div>

      <p className="text-[#1A3015] text-base md:text-lg font-medium leading-relaxed mb-8 relative z-10">
        "{text}"
      </p>
    </div>

    <div className="flex items-center gap-4 relative z-10">
      <div className="relative">
        <div className="absolute inset-0 bg-[#A3FF4A] rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
        <img
          src={image}
          alt={name}
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white"
        />
      </div>
      <div>
        <h4 className="font-extrabold text-[#1A3015] text-[16px] md:text-[18px] tracking-tight leading-none mb-1">
          {name}
        </h4>
        <p className="text-[#5B6B58] text-xs md:text-sm font-semibold tracking-wide uppercase">
          {role}
        </p>
      </div>
    </div>
  </motion.div>
);

const ClientFeedback: React.FC = () => {
  const testimonials = [
    {
      text: "This app completely changed how I manage my money. Everything feels simple, organized, and stress-free now.",
      name: "Chloe Heartley",
      role: "Agency CEO",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      text: "I've tried many finance tools before, but this one finally made budgeting easy and actually enjoyable.",
      name: "Minor Day",
      role: "Marketing Head",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "The interface is clean and intuitive. I can track everything without feeling overwhelmed.",
      name: "Sarah Jenkins",
      role: "Freelance Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "Securing my investments has never been this transparent. A must-have for modern investors.",
      name: "David Miller",
      role: "Tech Entrepreneur",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      text: "The support team is incredible. They really care about your financial success.",
      name: "Emma Wilson",
      role: "Startup Founder",
      image: "https://randomuser.me/api/portraits/women/66.jpg",
    },
    {
      text: "Highly recommended for anyone looking to scale their wealth with data-driven insights.",
      name: "James Bond",
      role: "Investment Banker",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 px-6 relative overflow-hidden font-manrope">
      {/* Background Animated Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[40%] h-[40%] blur-[120px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, #A3FF4A 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[40%] h-[40%] blur-[120px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, #BEF264 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-[72px] font-extrabold text-[#1A3015] mb-8 tracking-tighter leading-[0.95]"
          >
            Client feedback that <br />
            <span className="text-[#3A5A2D]">speaks volumes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#5B6B58] text-base md:text-xl max-w-2xl mx-auto font-medium"
          >
            Their honest feedback not only motivates our team but also reflects
            the standards we uphold in every single interaction.
          </motion.p>
        </div>

        {/* Testimonials Grid with Staggered Entrance */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} index={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientFeedback;
