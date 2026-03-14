import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, FileText, BarChart3 } from "lucide-react";

const Benefits = () => {
  const features = [
    {
      icon: Target,
      title: "Thumbnail Strategy",
      description: "Visual hierarchy designed to capture attention instantly in crowded feeds."
    },
    {
      icon: FileText,
      title: "Title Hooks",
      description: "Curiosity-driven title directions designed alongside the thumbnail."
    },
    {
      icon: BarChart3,
      title: "Channel Consistency",
      description: "A visual system that strengthens brand credibility across your entire channel."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            We Don't Just Design Thumbnails. We Engineer Click-Winning Packaging.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            High-performing YouTube videos are not built around thumbnails alone.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            They are built around packaging — the combination of thumbnail design, title hooks, and visual storytelling that makes viewers stop scrolling and click.
          </p>
          <p className="text-xl font-semibold">
            Every project focuses on one goal: Turning impressions into views.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200 group border-0 bg-gradient-to-br from-background to-muted/20">
              <CardHeader className="pb-4">
                <div className="mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors inline-block">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
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

export default Benefits;