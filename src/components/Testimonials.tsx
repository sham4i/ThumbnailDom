
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      channel: "Tech Explained",
      subscribers: "250K",
      testimonial: "My click-through rate increased by 40% after switching to their thumbnail designs. The research-backed approach really works!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      channel: "Daily Vlogs",
      subscribers: "180K",
      testimonial: "Finally found a service that understands my brand. Every thumbnail feels uniquely mine while still getting amazing results.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      channel: "Business Mindset",
      subscribers: "95K",
      testimonial: "The strategic consultation calls have been game-changing. They don't just design – they help me understand what works and why.",
      rating: 5
    },
    {
      name: "David Park",
      channel: "Gaming Universe",
      subscribers: "420K",
      testimonial: "Consistent quality, fast delivery, and designs that actually convert. This service has become essential to my channel's growth.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Join hundreds of successful creators who've transformed their channels with our thumbnail designs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.channel}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{testimonial.subscribers} subscribers</p>
                  </div>
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
