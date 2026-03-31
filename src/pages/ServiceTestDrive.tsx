import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Clock, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useCheckout } from "@/hooks/useCheckout";

const ServiceTestDrive = () => {
  const { initiateCheckout, isLoading } = useCheckout();

  const features = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "3 Episodes",
      description: "Test high-quality packaging on three real episodes"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Before vs After",
      description: "Clear results on three key videos to see the impact"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "48-Hour Delivery",
      description: "Get each thumbnail within 48 hours"
    }
  ];

  const faqs = [
    {
      question: "What exactly do I get?",
      answer: "You get 3 complete episode packages - one thumbnail per episode, 2 title options for each, and 1 revision round per thumbnail. This gives you a clear before/after comparison on three key videos."
    },
    {
      question: "How many revisions are included?",
      answer: "You get 1 revision round per thumbnail to ensure the final design meets your expectations."
    },
    {
      question: "What if I want to continue after the audit?",
      answer: "If you love the results, you can easily upgrade to Creator Packaging ($1,200/month) or Growth System ($1,500/month) for ongoing support."
    },
    {
      question: "What file formats will I receive?",
      answer: "You'll get high-resolution PNG and JPG files optimized for YouTube's requirements, plus the title options as a text document."
    }
  ];

  const handleOrderClick = () => {
    initiateCheckout({
      serviceType: 'starter-audit',
      isAnnual: false,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">Starter Audit Package</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Starter Audit — $450
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                For channels that want to test high-quality packaging on real episodes. Get a clear "before vs after" on three key videos.
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="text-4xl font-bold text-primary">$450</div>
                <div className="text-muted-foreground">one-time payment</div>
              </div>
              <Button
                size="lg"
                className="text-lg px-8 py-4"
                onClick={handleOrderClick}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Start Your Audit"} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
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
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Everything You Get</h2>
              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>3 long-form episodes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>1 thumbnail per episode</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>2 title options per episode</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>1 revision round per thumbnail</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>48-hour delivery per thumbnail</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Clear "before vs after" on three key videos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Audit?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              See the impact of better packaging with a clear before vs after on three of your key videos.
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-4"
              onClick={handleOrderClick}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Start Your Audit Now"} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ServiceTestDrive;