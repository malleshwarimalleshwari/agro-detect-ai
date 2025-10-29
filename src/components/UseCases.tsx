import { Sprout, FlaskConical, Home } from "lucide-react";

const useCases = [
  {
    icon: Sprout,
    title: "Small & Large Farms",
    description: "From family-owned farms to large agricultural operations, protect your livelihood with AI-powered pest detection. Monitor multiple fields simultaneously and get instant alerts.",
    benefits: ["Multi-field monitoring", "Cost-effective solutions", "Scalable technology"]
  },
  {
    icon: FlaskConical,
    title: "Agriculture Labs",
    description: "Research institutions and agricultural labs use our technology for pest study, crop research, and developing new farming methodologies with precise data collection.",
    benefits: ["Research-grade accuracy", "Data export capabilities", "Collaboration tools"]
  },
  {
    icon: Home,
    title: "Smart Greenhouses",
    description: "Perfect for controlled environment agriculture. Integrate with your smart greenhouse systems for automated pest monitoring and climate optimization.",
    benefits: ["IoT integration", "Automated alerts", "Climate correlation"]
  }
];

const UseCases = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for Every Scale
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by farmers, researchers, and agricultural professionals worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl">
                <useCase.icon className="w-10 h-10 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {useCase.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {useCase.description}
              </p>

              <div className="space-y-2">
                {useCase.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
