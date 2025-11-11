import { useState } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-display text-primary text-center mb-6">
          Get in Touch
        </h1>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-2 border-border">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-lg mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                hello@stationaryparlour.com
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-lg mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">
                +880 1234-567890
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-border">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                123 Creative Street, Dhaka
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display text-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="rounded-xl border-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="rounded-xl border-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="rounded-xl border-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your inquiry..."
                    className="rounded-xl border-2 min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full rounded-xl bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border">
              <CardContent className="p-6">
                <h3 className="font-display text-lg mb-4">Frequently Asked Questions</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-1">What are your shipping options?</p>
                    <p className="text-muted-foreground">We offer standard and express shipping nationwide.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Do you accept returns?</p>
                    <p className="text-muted-foreground">Yes, within 7 days of delivery with original packaging.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">How can I track my order?</p>
                    <p className="text-muted-foreground">You'll receive a tracking number via email once shipped.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
