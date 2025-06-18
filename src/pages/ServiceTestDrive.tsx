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
      title: "Custom Design",
      description: "One unique thumbnail tailored to your content and niche"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Niche Research",
      description: "We analyze your competition and target audience"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "48-Hour Delivery",
      description: "Get your thumbnail within 2 business days"
    }
  ];

  const faqs = [
    {
      question: "What do I need to provide?",
      answer: "We need your video screenshots or photos, video topic/title, any specific text requirements, and your brand colors if you have them."
    },
    {
      question: "How many revisions are included?",
      answer: "You get 2 revision rounds to ensure the final design meets your expectations."
    },
    {
      question: "What file formats will I receive?",
      answer: "You'll get high-resolution PNG and JPG files optimized for YouTube's requirements."
    },
    {
      question: "Can I upgrade to a retainer later?",
      answer: "Absolutely! If you love our work, you can easily upgrade to Creator Pro or Pro+ at any time."
    }
  ];

  const handleOrderClick = () => {
    initiateCheckout({
      serviceType: 'test-drive',
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
              <Badge variant="secondary" className="mb-4">Single Design Package</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Test Drive Our Service
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Perfect for trying our service with one high-converting thumbnail design. See the difference professional design makes for your content.
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="text-4xl font-bold text-primary">$60</div>
                <div className="text-muted-foreground">one-time payment</div>
              </div>
              <Button 
                size="lg" 
                className="text-lg px-8 py-4" 
                onClick={handleOrderClick}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Order Now"} <ArrowRight className="ml-2 h-5 w-5" />
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
                      <span>1 custom thumbnail design tailored to your content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive niche research and competitor analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>2 rounds of revisions to perfect your design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>48-hour delivery guarantee</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>High-resolution files (PNG & JPG) optimized for YouTube</span>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Test Drive?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of creators who've seen dramatic improvements in their click-through rates with our professional thumbnail designs.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4" 
              onClick={handleOrderClick}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Order Your Thumbnail Now"} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ServiceTestDrive;