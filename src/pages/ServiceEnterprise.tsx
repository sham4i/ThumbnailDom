import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, ArrowRight, Building2, Users, Shield, Zap, Globe, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceEnterprise = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Unlimited Thumbnails",
      description: "No limits on monthly thumbnail production"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Dedicated Design Team",
      description: "Your own team of professional designers"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "SLA Guarantees",
      description: "Service level agreements with guaranteed uptime"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "White-Label Options",
      description: "Rebrand our service as your own offering"
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Custom Workflows",
      description: "Tailored processes to fit your organization"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "API Integration",
      description: "Direct integration with your existing systems"
    }
  ];

  const benefits = [
    "Unlimited thumbnail designs",
    "Multiple brand guidelines management",
    "Team collaboration dashboard",
    "White-label reseller options",
    "Custom approval workflows",
    "Dedicated design team (3-5 designers)",
    "24/7 priority support",
    "Custom SLA agreements",
    "API access for automation",
    "Advanced analytics and reporting",
    "Bulk upload and processing",
    "Custom brand asset libraries"
  ];

  const useCases = [
    {
      title: "Media Agencies",
      description: "Manage multiple client brands with dedicated workflows and white-label options for reselling services."
    },
    {
      title: "Content Networks",
      description: "Support dozens of creators with consistent branding and streamlined approval processes."
    },
    {
      title: "Educational Institutions",
      description: "Create thumbnails for course content, lectures, and educational materials at scale."
    },
    {
      title: "Corporate Training",
      description: "Professional thumbnails for internal training videos, webinars, and corporate communications."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-500/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <Building2 className="h-3 w-3 mr-1" />
                Enterprise Solution
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enterprise Custom Solution
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tailored solutions for agencies, teams, and high-volume creators. Custom workflows, dedicated teams, and enterprise-grade support for your organization.
              </p>
              
              {/* Pricing Toggle (for consistency, even though price is custom) */}
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
                    Custom Discounts Available
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="text-4xl font-bold text-primary">Custom Pricing</div>
              </div>
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/contact?service=enterprise">Contact Sales <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Enterprise Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-slate-100 dark:bg-slate-800 rounded-full w-fit">
                      <div className="text-slate-600 dark:text-slate-400">{feature.icon}</div>
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

        {/* What's Included */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Enterprise Package Includes</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">1</div>
                  <h3 className="text-xl font-semibold mb-2">Discovery Call</h3>
                  <p className="text-muted-foreground">We analyze your needs, team size, and current workflows to design the perfect solution.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">2</div>
                  <h3 className="text-xl font-semibold mb-2">Custom Setup</h3>
                  <p className="text-muted-foreground">We configure your dedicated environment, team, and workflows according to your specifications.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">3</div>
                  <h3 className="text-xl font-semibold mb-2">Launch & Scale</h3>
                  <p className="text-muted-foreground">Go live with your dedicated team and scale your thumbnail production without limits.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Thumbnail Production?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and create a custom solution that scales with your organization. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link to="/contact?service=enterprise">Contact Sales Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ServiceEnterprise;