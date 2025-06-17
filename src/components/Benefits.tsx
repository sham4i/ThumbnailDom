
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Shield, Zap, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Our clients see an average 40% increase in click-through rates within the first month.",
      stat: "40% CTR boost"
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Get professional thumbnails delivered in 24-48 hours. Never miss an upload deadline again.",
      stat: "48h delivery"
    },
    {
      icon: Target,
      title: "Data-Driven Design",
      description: "Every design decision is backed by research and proven psychological triggers that drive clicks.",
      stat: "Research-backed"
    },
    {
      icon: Users,
      title: "Niche Expertise",
      description: "We understand what works in your specific niche and create thumbnails that resonate with your audience.",
      stat: "500+ niches"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "Not happy with your thumbnail? We'll revise it until it's perfect or give you a full refund.",
      stat: "100% guarantee"
    },
    {
      icon: Zap,
      title: "No AI, Pure Human",
      description: "Every thumbnail is hand-crafted by experienced designers who understand YouTube psychology.",
      stat: "Human-made"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Creators Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful creators who've transformed their channels with our strategic thumbnail designs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200 group border-0 bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {benefit.stat}
                  </span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Happy Creators</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">10K+</div>
              <div className="text-sm text-muted-foreground">Thumbnails Created</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">40%</div>
              <div className="text-sm text-muted-foreground">Avg CTR Increase</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">48h</div>
              <div className="text-sm text-muted-foreground">Avg Delivery Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
