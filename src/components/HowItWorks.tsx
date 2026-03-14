
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Search, Palette, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Brief",
      description: "You send the video concept, current title idea, and any assets.",
      time: "5 minutes"
    },
    {
      icon: Search,
      title: "Packaging Strategy",
      description: "We analyze your niche and develop 2–3 packaging directions.",
      time: "24 hours"
    },
    {
      icon: Palette,
      title: "Thumbnail Design",
      description: "We design a high-impact thumbnail supporting the strongest title hook.",
      time: "24-48 hours"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "You receive final files and optional A/B testing recommendations.",
      time: "Instant"
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our 4-Step Packaging Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we strategically craft packaging that turns impressions into views.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-200 border-l-4 border-l-primary/20 hover:border-l-primary">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {index + 1}
                  </span>
                  <span className="text-xs text-muted-foreground">{step.time}</span>
                </div>
                <CardTitle className="text-lg">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Average project completion: 48 hours
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
