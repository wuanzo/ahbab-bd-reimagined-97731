import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle, Package, Mail, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OrderConfirmation() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-success text-center">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-12 w-12 text-success-foreground" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-display text-primary mb-4">
                Order Confirmed!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Thank you for your order. We've received your purchase and will start processing it right away.
              </p>

              <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                <p className="text-sm text-muted-foreground mb-2">Order Number</p>
                <p className="text-2xl font-bold text-primary font-display">
                  #SP{Math.floor(Math.random() * 1000000)}
                </p>
              </div>

              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Confirmation Email</h3>
                    <p className="text-sm text-muted-foreground">
                      A confirmation email has been sent to your registered email address with order details and tracking information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Order Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Your order is being prepared for shipment. You'll receive tracking details within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="flex-1 rounded-xl bg-primary hover:bg-primary/90">
                  <Link to="/">
                    <Home className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1 rounded-xl border-2">
                  <Link to="/contact">
                    Contact Support
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6 border-2 border-border">
            <CardContent className="p-6">
              <h3 className="font-display text-lg mb-4">What's Next?</h3>
              <ol className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>We'll prepare your items with care and quality packaging</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>You'll receive a tracking number via email</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>Your order will be delivered to your specified address</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>Enjoy your new stationery supplies!</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
