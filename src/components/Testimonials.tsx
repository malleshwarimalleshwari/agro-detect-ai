import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Organic Farm Owner",
    location: "California, USA",
    quote: "This AI system saved my entire tomato crop! Early detection meant I could act before the infestation spread. Absolutely game-changing technology.",
    rating: 5,
    savings: "$45,000"
  },
  {
    name: "Rajesh Kumar",
    role: "Rice Farmer",
    location: "Punjab, India",
    quote: "I was skeptical at first, but after using it for one season, my yield increased by 35%. The mobile app makes monitoring my 50-acre farm incredibly easy.",
    rating: 5,
    savings: "35% yield increase"
  },
  {
    name: "Maria Garcia",
    role: "Agricultural Researcher",
    location: "São Paulo, Brazil",
    quote: "The accuracy is remarkable. We've integrated it into our research lab for pest studies. The data export features are perfect for academic work.",
    rating: 5,
    savings: "Research breakthrough"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Farmers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            Real stories from farmers who transformed their harvest with AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Savings Badge */}
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.savings}
                  </span>
                </div>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
