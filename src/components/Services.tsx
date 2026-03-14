import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useCheckout } from "@/hooks/useCheckout";

const Services = () => {
  const { initiateCheckout, isLoading } = useCheckout();

  const services = [
    {
      name: "Packaging Test",
      subtitle: "$149",
      price: 149,
      effectivePrice: null,
      isOneTime: true,
      description: "Try our YouTube packaging strategy with one complete project.",
      features: [
        "1 YouTube packaging concept",
        "Custom thumbnail design",
        "2 title direction options",
        "Niche research",
        "2 revision rounds",
        "48 hour delivery"
      ],
      popular: false,
      cta: "Start Test",
      serviceType: "test-drive",
      learnMoreLink: "/service/test-drive"
    },
    {
      name: "Creator Plan",
      subtitle: "$597 / month",
      price: 597,
      effectivePrice: "$119 per packaging",
      isOneTime: false,
      description: "For consistent creators who need regular packaging strategies.",
      features: [
        "5 packaging designs per month",
        "Thumbnail + title exploration",
        "Brand visual alignment",
        "Priority delivery",
        "Unlimited revisions"
      ],
      popular: true,
      cta: "Start Creator Plan",
      serviceType: "creator-pro",
      learnMoreLink: "/service/creator-pro"
    },
    {
      name: "Growth Plan",
      subtitle: "$1,097 / month",
      price: 1097,
      effectivePrice: "$109 per packaging",
      isOneTime: false,
      description: "Scale your channel with strategic packaging and performance analysis.",
      features: [
        "10 packaging designs per month",
        "Thumbnail + title strategy",
        "A/B testing variants",
        "Monthly performance review",
        "Priority support"
      ],
      popular: false,
      cta: "Scale My Channel",
      serviceType: "creator-pro-plus",
      learnMoreLink: "/service/creator-pro-plus"
    },
    {
      name: "Enterprise Packaging",
      subtitle: "Custom Quote",
      price: null,
      effectivePrice: null,
      isOneTime: false,
      description: "For agencies, large YouTube channels, and media teams.",
      features: [
        "Dedicated design team",
        "Packaging audits",
        "Channel visual systems",
        "High-volume production"
      ],
      popular: false,
      cta: "Contact Us",
      serviceType: "enterprise",
      learnMoreLink: "/service/enterprise"
    }
  ];

  const handleServiceClick = (service: any) => {
    if (service.serviceType === "enterprise") {
      window.location.href = "/contact?service=enterprise";
      return;
    }

    initiateCheckout({
      serviceType: service.serviceType,
      isAnnual: false,
    });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            YouTube Packaging Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic packaging solutions for creators at every stage.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={`relative transition-all duration-200 hover:shadow-xl ${
              service.popular 
                ? 'ring-2 ring-primary border-primary/20 shadow-lg scale-105' 
                : 'hover:border-primary/20'
            }`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Zap className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mb-2">
                  <CardTitle className="text-xl mb-1">{service.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold">
                    {service.subtitle}
                  </CardDescription>
                </div>

                {service.effectivePrice && (
                  <div className="py-2">
                    <div className="text-sm text-muted-foreground">
                      {service.effectivePrice}
                    </div>
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Main CTA Button - Direct to Checkout */}
                <Button 
                  onClick={() => handleServiceClick(service)}
                  disabled={isLoading}
                  className={`w-full font-medium mb-3 ${
                    service.popular 
                      ? "bg-primary hover:bg-primary/90 shadow-md" 
                      : ""
                  }`}
                  variant={service.popular ? "default" : "outline"}
                >
                  {isLoading ? "Processing..." : service.cta}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
                
                {/* Learn More Link */}
                <div className="text-center">
                  <Link 
                    to={service.learnMoreLink}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
                  >
                    Learn more about {service.name}
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-border/50">
          <p className="text-lg text-muted-foreground mb-4">
            Want to see all options in detail?
          </p>
          <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/work-with-us">View All Plans</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;