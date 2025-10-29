import { Button } from "@/components/ui/button";
import { ArrowRight, Scan } from "lucide-react";
import heroImage from "@/assets/hero-crops.jpg";

const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Agricultural crops"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium">
            <Scan className="w-4 h-4" />
            <span>AI-Powered Agriculture</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            AI-Based Pest Detection
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
            Smart Farming. Healthy Crops. Zero Pests.
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to detect pests early, protect your crops, 
            and maximize yield. Real-time detection that saves time, money, and your harvest.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToDemo}
              className="bg-white text-primary hover:bg-white/90 shadow-strong transition-all hover:scale-105 hover:shadow-xl group"
            >
              Try Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all hover:scale-105"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-white">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-white/80 mt-1">Detection Accuracy</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-white/80 mt-1">Real-Time Monitoring</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold">40%</div>
              <div className="text-white/80 mt-1">Increased Yield</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
