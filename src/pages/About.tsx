import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Heart, Users, Award, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-display text-primary text-center mb-6">
          About Stationery Parlour
        </h1>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          Your trusted partner in creativity and artistic expression since 2024
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">Passion Driven</h3>
              <p className="text-sm text-muted-foreground">
                We love art and creativity as much as you do
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Only the best supplies for your creative journey
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">Community First</h3>
              <p className="text-sm text-muted-foreground">
                Building a community of creative artists
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-success-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Quick and reliable shipping nationwide
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display text-primary mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2024, Stationery Parlour began with a simple mission: to provide artists, students, and creative professionals with access to premium quality stationery supplies that inspire creativity and excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a small collection has grown into a comprehensive range of art supplies, carefully curated to meet the diverse needs of our creative community. We believe that the right tools can unlock limitless potential, and we're committed to making those tools accessible to everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display text-primary mb-4">Our Promise</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Authentic, high-quality products from trusted brands</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Competitive prices without compromising on quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Exceptional customer service and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Fast, secure, and reliable delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">Continuous expansion of our product range based on your needs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
