
import { Button } from "@/components/ui/button";

const PortfolioCTA = () => {
  return (
    <section className="text-center mt-16 py-12 bg-muted/30 rounded-lg">
      <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Join Our Success Stories?</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Let's create thumbnails that not only look amazing but also drive real results for your YouTube channel.
      </p>
      <Button size="lg" asChild>
        <a href="/contact">Start Your Project Today</a>
      </Button>
    </section>
  );
};

export default PortfolioCTA;
