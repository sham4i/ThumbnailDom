
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <p className="text-lg">
                <strong>Last updated:</strong> December 2024
              </p>
              <p>
                Thumb Domination Agency respects your privacy and is committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p>We collect information you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Name and contact information</li>
                <li>Project requirements and preferences</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Communication records and project files</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide thumbnail design services</li>
                <li>Communicate about your projects</li>
                <li>Process payments and maintain records</li>
                <li>Improve our services and user experience</li>
                <li>Send occasional updates about our services (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except as described in this policy:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>With service providers who assist in our operations</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. All sensitive data is encrypted 
                and stored securely.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to improve your browsing experience, 
                analyze site usage, and assist in our marketing efforts. You can control cookie 
                settings through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or want to exercise your rights, 
                please contact us at privacy@thumbdomination.com or through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
