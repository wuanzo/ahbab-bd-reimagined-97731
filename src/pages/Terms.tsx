import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-primary text-center mb-4 md:mb-6">
          Terms & Conditions
        </h1>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 md:mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <Card className="max-w-4xl mx-auto border-2 border-border glass-card">
          <CardContent className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
            <section>
              <h2 className="text-2xl font-display text-primary mb-3">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Stationery Parlour, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Permission is granted to temporarily access the materials (information or software) on Stationery Parlour for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-muted-foreground">This license shall automatically terminate if you violate any of these restrictions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">3. Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">4. Pricing and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices are in BDT (Bangladeshi Taka) unless otherwise stated. We reserve the right to modify prices at any time. Payment must be received before order processing begins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">5. Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We aim to deliver products within the estimated timeframe. However, delivery dates are estimates and we are not responsible for delays beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">6. Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Products may be returned within 7 days of delivery in their original condition and packaging. Refunds will be processed within 14 business days of receiving the returned item.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">7. User Account</h2>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Stationery Parlour shall not be held liable for any damages arising from the use or inability to use our products or services, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">9. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the site constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary mb-3">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms & Conditions, please contact us at hello@stationaryparlour.com or +880 1234-567890.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
