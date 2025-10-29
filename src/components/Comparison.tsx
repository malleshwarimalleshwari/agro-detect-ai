import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const comparisonData = [
  { feature: "Detection Speed", ai: "2-3 seconds", manual: "Hours to days" },
  { feature: "Accuracy", ai: "99% precise", manual: "60-70% accurate" },
  { feature: "Cost", ai: "Low per scan", manual: "High labor cost" },
  { feature: "Early Detection", ai: "Yes, pre-symptom", manual: "Only visible damage" },
  { feature: "Scalability", ai: "Unlimited fields", manual: "Limited by workforce" },
  { feature: "Data Insights", ai: "Detailed analytics", manual: "Basic observations" },
  { feature: "24/7 Availability", ai: "Always available", manual: "Business hours only" },
];

const Comparison = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI vs Manual Detection
          </h2>
          <p className="text-xl text-muted-foreground">
            See why thousands of farmers are switching to AI-powered pest detection
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-strong border-2 border-border overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div className="grid grid-cols-3 bg-primary text-primary-foreground">
                <div className="p-6 font-semibold">Feature</div>
                <div className="p-6 font-semibold border-x border-primary-foreground/20 text-center">
                  AI Detection
                </div>
                <div className="p-6 font-semibold text-center">Manual Detection</div>
              </div>

              {/* Rows */}
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${
                    index % 2 === 0 ? "bg-background" : "bg-muted/30"
                  } hover:bg-muted/50 transition-colors animate-fade-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="p-6 font-medium text-foreground">
                    {row.feature}
                  </div>
                  <div className="p-6 border-x border-border text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{row.ai}</span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-5 h-5 text-destructive flex-shrink-0" />
                      <span className="text-muted-foreground">{row.manual}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Bottom Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card p-6 rounded-xl border border-border text-center shadow-soft">
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-muted-foreground">Faster Detection</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border text-center shadow-soft">
              <div className="text-4xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border text-center shadow-soft">
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-muted-foreground">Less Crop Loss</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
