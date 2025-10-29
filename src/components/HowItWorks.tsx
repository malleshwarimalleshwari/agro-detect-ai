import { Upload, Cpu, CheckCircle, Bell } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Image",
    description: "Capture or upload a photo of your crops using any device - smartphone, tablet, or camera."
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our advanced machine learning model analyzes the image in seconds, detecting pest patterns and anomalies."
  },
  {
    icon: CheckCircle,
    title: "Instant Results",
    description: "Get immediate identification of pests, severity levels, and affected areas with high accuracy."
  },
  {
    icon: Bell,
    title: "Early Warning",
    description: "Receive alerts and actionable recommendations to protect your crops before damage spreads."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple, fast, and accurate pest detection powered by cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card p-8 rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 h-full hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-medium">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
