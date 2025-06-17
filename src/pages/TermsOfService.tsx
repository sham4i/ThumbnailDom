
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Service Agreement</h2>
              <p>
                By engaging Thumb Domination Agency for thumbnail design services, you agree to these terms. 
                We provide professional YouTube thumbnail design services to help increase your content's click-through rates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Design Process & Delivery</h2>
              <p>Our standard delivery time is 48 hours from project confirmation. Rush orders may be available for an additional fee.</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Initial design concepts delivered within 48 hours</li>
                <li>Up to 3 rounds of revisions included</li>
                <li>Final files delivered in high-resolution formats</li>
                <li>Source files provided upon request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Payment Terms</h2>
              <p>
                Payment is required before work begins. We accept major credit cards and PayPal. 
                Refunds are available within 24 hours of initial design delivery if you're not satisfied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p>
                Upon full payment, you receive full commercial rights to use the thumbnail designs. 
                We retain the right to showcase completed work in our portfolio unless otherwise requested.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide clear project requirements and reference materials</li>
                <li>Respond to design concepts within 72 hours</li>
                <li>Provide high-quality images and assets when needed</li>
                <li>Ensure all provided content is legally owned or licensed</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p>
                Thumb Domination Agency's liability is limited to the amount paid for services. 
                We are not responsible for YouTube algorithm changes or guaranteed performance metrics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
              <p>
                For questions about these terms, please contact us at legal@thumbdomination.com or 
                through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
