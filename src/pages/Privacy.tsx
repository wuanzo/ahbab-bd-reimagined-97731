import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-primary text-center mb-4 md:mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <Card className="max-w-4xl mx-auto border-2 border-border glass-card">
          <CardContent className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <section>
              <h2 className="text-2xl font-display text-primary mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Name, email address, phone number, and shipping address</li>
                <li>• Payment information (processed securely by our payment partners)</li>
                <li>• Order history and preferences</li>
                <li>• Communications with our customer service team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Process and fulfill your orders</li>
                <li>• Communicate with you about your orders and our services</li>
                <li>• Send promotional materials (with your consent)</li>
                <li>• Improve our website and customer experience</li>
                <li>• Detect and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">5. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Access the personal information we hold about you</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Object to processing of your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us at hello@stationaryparlour.com or +880 1234-567890.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
