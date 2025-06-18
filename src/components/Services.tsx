import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useCheckout } from "@/hooks/useCheckout";

const Services = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { initiateCheckout, isLoading } = useCheckout();

  const services = [
    {
      name: "Test Drive",
      subtitle: "Single Design",
      price: 60,
      isOneTime: true,
      description: "Perfect for trying our service. One high-converting thumbnail to test the waters.",
      features: [
        "1 custom thumbnail design",
        "Niche research included",
        "2 revision rounds",
        "48-hour delivery",
        "High-resolution files (PNG/JPG)"
      ],
      popular: false,
      cta: "Get Started",
      serviceType: "test-drive",
      learnMoreLink: "/service/test-drive"
    },
    {
      name: "Creator Pro",
      subtitle: "Monthly Retainer",
      price: 247,
      annualDiscount: 0.1,
      isOneTime: false,
      description: "For consistent creators who need regular, professional thumbnails that convert.",
      features: [
        "5 custom thumbnails per month",
        "Priority support",
        "Unlimited revisions",
        "Brand consistency guide",
        "24-hour delivery",
        "Performance analytics"
      ],
      popular: true,
      cta: "Start Creating",
      serviceType: "creator-pro",
      learnMoreLink: "/service/creator-pro"
    },
    {
      name: "Creator Pro+",
      subtitle: "Premium Retainer",
      price: 447,
      annualDiscount: 0.15,
      isOneTime: false,
      description: "For serious creators who demand maximum impact and strategic guidance.",
      features: [
        "10 custom thumbnails per month",
        "A/B testing variants",
        "Monthly strategy calls",
        "Custom brand assets",
        "Same-day delivery option",
        "Performance optimization",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Go Premium",
      serviceType: "creator-pro-plus",
      learnMoreLink: "/service/creator-pro-plus"
    },
    {
      name: "Enterprise",
      subtitle: "Custom Solution",
      price: null,
      isOneTime: false,
      description: "Tailored solutions for agencies, teams, and high-volume creators.",
      features: [
        "Unlimited thumbnails",
        "Multiple brand guidelines",
        "Team collaboration tools",
        "White-label options",
        "Custom workflows",
        "Dedicated design team",
        "SLA guarantees"
      ],
      popular: false,
      cta: "Contact Sales",
      serviceType: "enterprise",
      learnMoreLink: "/service/enterprise"
    }
  ];

  const calculatePrice = (service: any) => {
    if (service.price === null || service.isOneTime) return service.price;
    if (isAnnual && service.annualDiscount) {
      return Math.round(service.price * (1 - service.annualDiscount));
    }
    return service.price;
  };

  const calculateSavings = (service: any) => {
    if (!service.annualDiscount || !isAnnual) return 0;
    const monthlyTotal = service.price * 12;
    const annualTotal = calculatePrice(service) * 12;
    return monthlyTotal - annualTotal;
  };

  const formatPrice = (service: any) => {
    const price = calculatePrice(service);
    if (price === null) return "Let's talk";
    if (service.isOneTime) return `$${price}`;
    return `$${price}/month`;
  };

  const handleServiceClick = (service: any) => {
    if (service.serviceType === "enterprise") {
      // Enterprise requires custom consultation
      window.location.href = "/contact?service=enterprise";
      return;
    }

    initiateCheckout({
      serviceType: service.serviceType,
      isAnnual: !service.isOneTime && isAnnual,
    });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            From single designs to full retainer packages. Scale your thumbnail game at your own pace.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full ml-2 font-medium">
                Save up to 15%
              </span>
            )}
          </div>
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
                  <CardDescription className="text-sm font-medium text-primary">
                    {service.subtitle}
                  </CardDescription>
                </div>
                
                <div className="py-4">
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {formatPrice(service)}
                  </div>
                  {isAnnual && service.annualDiscount && calculateSavings(service) > 0 && (
                    <div className="text-sm text-green-600 font-medium">
                      Save ${calculateSavings(service)}/year
                    </div>
                  )}
                  {isAnnual && service.price && !service.isOneTime && service.annualDiscount && (
                    <div className="text-xs text-muted-foreground line-through">
                      ${service.price}/month
                    </div>
                  )}
                </div>
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