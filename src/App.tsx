import React, { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Layouts/Hero";
import Logo from "./components/common/Logo";
import Features from "./components/specific/sections/Features";
import EverythingYouNeed from "./components/specific/sections/EverythingYouNeed";
import SavingsMetrics from "./components/specific/sections/SavingsMetrics";
import ClientFeedback from "./components/Feedback/ClientFeedback";
import PricingSection from "./components/specific/sections/PricingSection";
import FAQSection from "./components/specific/sections/FAQSection";
import FinorixMainDisplay from "./components/specific/sections/FinorixMainDisplay";
import Footer from "./components/Layouts/Footer";
import DashboardMain from "./components/Dashboard/DashboardMain";

const App: React.FC = () => {
  // ১. সব সেকশনের জন্য রেফারেন্স তৈরি
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <Router>
      <Routes>
        {/* মেইন ল্যান্ডিং পেজ রুট */}
        <Route
          path="/"
          element={
            <>
              <Hero
                featuresRef={featuresRef}
                pricingRef={pricingRef}
                faqRef={faqRef}
                aboutRef={aboutRef}
              />
              <Logo />
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
          }
        />

        {/* ড্যাশবোর্ড পেজ রুট */}
        <Route path="/dashboard" element={<DashboardMain />} />
      </Routes>
    </Router>
  );
};

export default App;
