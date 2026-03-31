import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, ArrowRight, Clock, Target, Zap, ChartBar as BarChart3, Users, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { useCheckout } from "@/hooks/useCheckout";

const ServiceCreatorProPlus = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { initiateCheckout, isLoading } = useCheckout();

  const basePrice = 1500;
  const annualDiscount = 0.15;

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
      title: "8 Thumbnails Monthly",
      description: "Everything in Creator Packaging, plus more volume"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Visual System",
      description: "Custom palette, typography, layout rules, and host framing"
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Structured A/B Tests",
      description: "Data-driven testing on thumbnails and titles"
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Performance Reviews",
      description: "Monthly review with clear next-step recommendations"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Priority Delivery",
      description: "Priority queue for faster turnaround"
    }
  ];

  const faqs = [
    {
      question: "What makes Growth System different from Creator Packaging?",
      answer: "Growth System includes 8 thumbnails (vs 4), a complete visual system for your channel, structured A/B tests, monthly performance reviews, and priority delivery."
    },
    {
      question: "What is a visual system?",
      answer: "A comprehensive design framework including your color palette, typography choices, layout rules, and host framing guidelines. You get a system guide that your team can follow internally."
    },
    {
      question: "How do structured A/B tests work?",
      answer: "We create strategic variations and help you test different approaches on thumbnails and titles, using data to inform what works best for your audience."
    },
    {
      question: "What's included in the performance review?",
      answer: "Monthly analysis of your packaging performance with clear, actionable recommendations for improvement based on real data from your channel."
    },
    {
      question: "What's the member add-on rate?",
      answer: "Need more than 8 thumbnails in a month? Get any additional thumbnails at 15% off our standard per-thumbnail price while on this plan."
    }
  ];

  const handleGoPremiumClick = () => {
    initiateCheckout({
      serviceType: 'creator-pro-plus',
      isAnnual: isAnnual,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500/10 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="default" className="mb-4">
                <Zap className="h-3 w-3 mr-1" />
                Recommended
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Growth System — $1,500/month
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                For channels that want a proper visual system and ongoing optimization. Build a cohesive brand with strategic testing.
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
                    Save 15%
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
                className="text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700" 
                onClick={handleGoPremiumClick}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Go Premium"} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Premium Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full w-fit">
                      <div className="text-purple-600">{feature.icon}</div>
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
              <h2 className="text-3xl font-bold text-center mb-12">Premium Package Includes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Deliverables</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>10 custom thumbnail designs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>A/B testing variants (2-3 per design)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Custom brand asset creation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Performance optimization reports</span>
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
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Monthly 30-min strategy calls</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Same-day delivery option (2x/month)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Priority queue placement</span>
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
        <section className="py-16 bg-purple-50 dark:bg-purple-950/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Premium Growth?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join elite creators who've achieved 60%+ increases in click-through rates with our premium thumbnail design and strategic optimization service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-purple-600 hover:bg-purple-700" 
                onClick={handleGoPremiumClick}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Start Premium Service"} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <Link to="/contact">Schedule Strategy Call</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ServiceCreatorProPlus;