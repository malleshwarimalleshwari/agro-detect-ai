import { Zap, TrendingUp, Smartphone, Shield, Clock, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Real-Time Detection",
    description: "Instant pest identification with results in seconds, enabling immediate action to protect your crops."
  },
  {
    icon: Clock,
    title: "Early Warnings",
    description: "Get notified at the first sign of infestation before visible damage occurs, saving time and resources."
  },
  {
    icon: TrendingUp,
    title: "Increased Yield",
    description: "Protect your harvest and boost productivity by up to 40% with proactive pest management."
  },
  {
    icon: Smartphone,
    title: "Mobile Integration",
    description: "Access powerful AI detection from any smartphone or tablet with our easy-to-use mobile app."
  },
  {
    icon: Shield,
    title: "99% Accuracy",
    description: "State-of-the-art machine learning models trained on millions of crop images for reliable results."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track pest trends, monitor field health, and make data-driven decisions with detailed insights."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to protect your crops and maximize your harvest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
