
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Youtube, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Dominate YouTube?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stop letting poor thumbnails hold back your amazing content. 
            Get professional, conversion-focused designs that your audience can't ignore.
          </p>
          <Button size="lg" className="text-lg px-8 py-4" onClick={() => scrollToSection('services')}>
            Get Started Today
          </Button>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-2">Thumb Domination Agency</h4>
            <p className="text-sm text-muted-foreground">
              Professional YouTube thumbnail design that converts.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link to="/portfolio">Portfolio</Link>
            </Button>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link to="/terms">Terms of Service</Link>
            </Button>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link to="/privacy">Privacy Policy</Link>
            </Button>
            <Button variant="link" className="p-0 h-auto" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Youtube className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Thumb Domination Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
