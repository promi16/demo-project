import React from "react";
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
  return (
    <>
      <Hero />
      <Logo />
      <Features />
      <EverythingYouNeed />
      <SavingsMetrics />
      <ClientFeedback />
      <PricingSection />
      <FAQSection />
      <FinorixMainDisplay />
      <Footer />
    </>
  );
};

export default App;
