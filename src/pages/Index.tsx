import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SparkleClean Pro | Professional Home Cleaning Services</title>
        <meta
          name="description"
          content="Transform your space into a sparkling sanctuary. Professional, eco-friendly cleaning services trusted by 10,000+ happy homes. Book your free quote today!"
        />
        <meta name="keywords" content="cleaning services, home cleaning, professional cleaners, eco-friendly cleaning, deep cleaning, maid service" />
        <link rel="canonical" href="https://sparklecleanpro.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <FinalCTASection />
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
