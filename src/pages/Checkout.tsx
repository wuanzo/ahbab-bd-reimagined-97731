import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { useShop } from "@/contexts/ShopContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Package, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const { cart, getCartTotal } = useShop();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields! 💖",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Order Placed! 🎉",
      description: "Thank you for your order! We'll send you a confirmation email soon! 💝",
    });
    
    setTimeout(() => navigate("/"), 2000);
  };

  const subtotal = getCartTotal();
  const shipping = 50;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-display text-primary mb-4">Your cart is empty! 🛒</h1>
          <p className="text-muted-foreground mb-8">Add some cute items to get started! ✨</p>
          <Link to="/">
            <Button className="rounded-full bg-gradient-to-r from-primary to-secondary px-8">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-6 md:py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <h1 className="text-3xl md:text-4xl font-display text-primary mb-8 flex items-center gap-3">
          <Package className="h-8 w-8 md:h-10 md:w-10" />
          Checkout 💝
        </h1>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-4 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary">Shipping Information 📦</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="rounded-xl border-2"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+880 1234567890"
                      className="rounded-xl border-2"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="rounded-xl border-2"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street, Apt 4B"
                    className="rounded-xl border-2"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Dhaka"
                      className="rounded-xl border-2"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="1200"
                      className="rounded-xl border-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-4 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary flex items-center gap-2">
                  <CreditCard className="h-6 w-6" />
                  Payment Information 💳
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    className="rounded-xl border-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardExpiry">Expiry Date</Label>
                    <Input
                      id="cardExpiry"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="rounded-xl border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardCVV">CVV</Label>
                    <Input
                      id="cardCVV"
                      name="cardCVV"
                      value={formData.cardCVV}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="rounded-xl border-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-4 border-primary/20 sticky top-4">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-primary">Order Summary 📝</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3 p-2 bg-muted/50 rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm font-bold text-primary">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span className="font-semibold">৳ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping:</span>
                    <span className="font-semibold">৳ {shipping.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary font-display text-2xl">৳ {total.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-lg font-bold py-6 hover:opacity-90"
                >
                  Place Order 💝
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By placing your order, you agree to our terms and conditions ✨
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
