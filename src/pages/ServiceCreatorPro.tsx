import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, ArrowRight, Clock, Target, Zap, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useCheckout } from "@/hooks/useCheckout";

const ServiceCreatorPro = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { initiateCheckout, isLoading } = useCheckout();
  
  const basePrice = 247;
  const annualDiscount = 0.1;
  
  const calculatePrice = () => {
    if (isAnnual) {
      return Math.round(basePrice * (1 - annualDiscount));
    }
    return basePrice;
  };

  const calculateSavings = () => {
    if (!isAnnual) return 0;
    const monthlyTotal = basePrice * 12;
    const annualTotal = calculatePrice() * 12;
    return monthlyTotal - annualTotal;
  };

  const features = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "5 Custom Thumbnails",
      description: "Monthly allocation of professional thumbnail designs"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Priority Support",
      description: "Skip the queue with dedicated priority assistance"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "24-Hour Delivery",
      description: "Faster turnaround for your urgent content needs"
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Performance Analytics",
      description: "Track your thumbnail performance and optimization"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Brand Consistency",
      description: "Custom brand guide to maintain visual identity"
    }
  ];

  const faqs = [
    {
      question: "Can I roll over unused thumbnails?",
      answer: "Yes! Unused thumbnails from your monthly allocation can roll over to the next month, up to a maximum of 2 months worth of credits."
    },
    {
      question: "What if I need more than 5 thumbnails?",
      answer: "You can purchase additional thumbnails at a discounted rate of $35 each, or upgrade to Creator Pro+ for higher volume needs."
    },
    {
      question: "How does priority support work?",
      answer: "As a Pro member, your requests are processed ahead of Test Drive customers, ensuring faster response times and quicker delivery."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with 30 days notice. We believe in earning your business through results."
    },
    {
      question: "What analytics do you provide?",
      answer: "We track click-through rates, view performance, and provide insights on which thumbnail styles work best for your audience."
    }
  ];

  const handleStartCreatingClick = () => {
    initiateCheckout({
      serviceType: 'creator-pro',
      isAnnual: isAnnual,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="default" className="mb-4">
                <Zap className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Creator Pro Monthly
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Perfect for consistent creators who need regular, professional thumbnails that convert. Build your brand with strategic design consistency.
              </p>
              
              {/* Pricing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-6">
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
                    Save 10%
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="text-4xl font-bold text-primary">${calculatePrice()}</div>
                <div className="text-muted-foreground">per month</div>
                {isAnnual && calculateSavings() > 0 && (
                  <div className="text-sm text-green-600 font-medium">
                    Save ${calculateSavings()}/year
                  </div>
                )}
              </div>
              {isAnnual && (
                <div className="text-xs text-muted-foreground line-through mb-4">
                  ${basePrice}/month
                </div>
              )}
              
              <Button 
                size="lg" 
                className="text-lg px-8 py-4" 
                onClick={handleStartCreatingClick}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Start Creating"} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Creators Choose Pro</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Everything Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Deliverables</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>5 custom thumbnail designs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Unlimited revisions on all designs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Custom brand consistency guide</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Performance analytics dashboard</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Premium Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Priority support queue</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>24-hour delivery guarantee</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Direct designer communication</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Monthly strategy consultation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Dominate Your Niche?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join successful creators who've increased their click-through rates by 40% or more with consistent, professional thumbnail designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4" 
                onClick={handleStartCreatingClick}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Start Your Pro Journey"} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ServiceCreatorPro;