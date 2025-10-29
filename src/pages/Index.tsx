import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import DemoSection from "@/components/DemoSection";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Features />
      <UseCases />
      <DemoSection />
      <Comparison />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
