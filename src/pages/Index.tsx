
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "Open Mobile - Open-Source Mobile Apps for Android & iOS";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <AppShowcase />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
