import React, { useRef } from "react";
import "./App.css";

import Hero from "./components/Hero";
import Logo from "./components/Logo";
import Features from "./components/Features";
import EverythingYouNeed from "./components/EverythingYouNeed";
import SavingsMetrics from "./components/SavingsMetrics";
import ClientFeedback from "./components/ClientFeedback";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import FinorixMainDisplay from "./components/FinorixMainDisplay";
import Footer from "./components/Footer";

const App: React.FC = () => {
  // ১. সব সেকশনের জন্য রেফারেন্স তৈরি করুন
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* ২. হিরো সেকশনে সব রেফারেন্স পাঠিয়ে দিন যাতে নববার এগুলো ব্যবহার করতে পারে */}
      <Hero
        featuresRef={featuresRef}
        pricingRef={pricingRef}
        faqRef={faqRef}
        aboutRef={aboutRef}
      />

      <Logo />

      {/* ৩. প্রতিটি কম্পোনেন্টকে তার নিজস্ব Ref দিয়ে কানেক্ট করুন */}
      <div ref={featuresRef}>
        <Features />
      </div>

      <div ref={aboutRef}>
        <EverythingYouNeed />
      </div>

      <SavingsMetrics />
      <ClientFeedback />

      <div ref={pricingRef}>
        <PricingSection />
      </div>

      <div ref={faqRef}>
        <FAQSection />
      </div>

      <FinorixMainDisplay />
      <Footer />
    </>
  );
};

export default App;
