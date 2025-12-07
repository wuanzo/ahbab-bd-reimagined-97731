import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { useShop } from "@/contexts/ShopContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Package, Truck, Store, Banknote, Smartphone, AlertTriangle, ShieldCheck } from "lucide-react";
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
  });

  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subtotal = getCartTotal();
  const shipping = deliveryMethod === "delivery" ? 60 : 0;
  const total = subtotal + shipping;

  // Calculate advance payment
  const getAdvanceAmount = () => {
    if (total > 500) return 300;
    if (total > 300) return 150;
    return 0;
  };

  const advanceAmount = getAdvanceAmount();
  const requiresAdvance = advanceAmount > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (deliveryMethod === "delivery" && (!formData.address || !formData.city)) {
      toast({
        title: "Missing Address",
        description: "Please provide a complete delivery address",
        variant: "destructive",
      });
      return;
    }

    if (paymentMethod === "bkash" && requiresAdvance && !agreedToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the advance payment terms before proceeding",
        variant: "destructive",
      });
      return;
    }

    if (paymentMethod === "bkash") {
      toast({
        title: "Redirecting to Bkash",
        description: `Please pay ৳${advanceAmount} advance via Bkash...`,
      });
      setTimeout(() => {
        window.open("https://bkash.com", "_blank");
        navigate("/order-confirmation");
      }, 1500);
      return;
    }

    toast({
      title: "Order Placed Successfully!",
      description: "We'll contact you shortly to confirm your order.",
    });
    
    setTimeout(() => navigate("/order-confirmation"), 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="glass-card max-w-md mx-auto p-8 rounded-3xl border-2 border-primary/20">
            <Package className="w-16 h-16 mx-auto text-primary/50 mb-4" />
            <h1 className="text-2xl font-display text-primary mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">Add some items to get started</p>
            <Link to="/">
              <Button className="rounded-full bg-gradient-to-r from-primary to-accent px-8">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-8">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-display text-primary mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your order</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Left Column - Forms */}
            <div className="lg:col-span-3 space-y-6">
              {/* Delivery Method */}
              <div className="glass-card rounded-2xl p-6 border-2 border-primary/10">
                <h2 className="text-lg font-display text-primary mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5" />
                  Delivery Method
                </h2>
                <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="grid grid-cols-2 gap-3">
                  <Label
                    htmlFor="delivery"
                    className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all ${
                      deliveryMethod === "delivery" 
                        ? "border-primary bg-primary/10" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="delivery" id="delivery" />
                    <div>
                      <p className="font-medium">Home Delivery</p>
                      <p className="text-xs text-muted-foreground">৳60 shipping</p>
                    </div>
                  </Label>
                  <Label
                    htmlFor="pickup"
                    className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all ${
                      deliveryMethod === "pickup" 
                        ? "border-primary bg-primary/10" 
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <RadioGroupItem value="pickup" id="pickup" />
                    <div>
                      <p className="font-medium">Store Pickup</p>
                      <p className="text-xs text-muted-foreground">Free</p>
                    </div>
                  </Label>
                </RadioGroup>
              </div>

              {/* Contact & Address */}
              <div className="glass-card rounded-2xl p-6 border-2 border-primary/10">
                <h2 className="text-lg font-display text-primary mb-4">Contact & Address</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="rounded-xl border-2 border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="01XXXXXXXXX"
                        className="rounded-xl border-2 border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="rounded-xl border-2 border-border/50 focus:border-primary"
                    />
                  </div>

                  {deliveryMethod === "delivery" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="House, Road, Area"
                          className="rounded-xl border-2 border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Dhaka"
                            className="rounded-xl border-2 border-border/50 focus:border-primary"
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
                            className="rounded-xl border-2 border-border/50 focus:border-primary"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div className="glass-card rounded-2xl p-6 border-2 border-primary/10">
                <h2 className="text-lg font-display text-primary mb-4">Payment Method</h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                  <Label
                    htmlFor="bkash"
                    className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer border-2 transition-all ${
                      paymentMethod === "bkash" 
                        ? "border-pink-500 bg-pink-500/10" 
                        : "border-border hover:border-pink-500/50"
                    }`}
                  >
                    <RadioGroupItem value="bkash" id="bkash" className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Smartphone className="w-5 h-5 text-pink-500" />
                        <span className="font-semibold text-pink-600">Bkash</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Pay advance via Bkash mobile banking</p>
                      {requiresAdvance && (
                        <div className="mt-2 p-2 bg-pink-500/10 rounded-lg">
                          <p className="text-sm font-medium text-pink-600">
                            Advance Required: ৳{advanceAmount}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Remaining ৳{total - advanceAmount} on delivery
                          </p>
                        </div>
                      )}
                    </div>
                  </Label>

                  <Label
                    htmlFor="cod"
                    className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer border-2 transition-all ${
                      paymentMethod === "cod" 
                        ? "border-green-500 bg-green-500/10" 
                        : "border-border hover:border-green-500/50"
                    }`}
                  >
                    <RadioGroupItem value="cod" id="cod" className="mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Banknote className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-600">Cash on Delivery</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Pay full amount when you receive your order</p>
                    </div>
                  </Label>
                </RadioGroup>

                {/* Agreement Section for Bkash */}
                {paymentMethod === "bkash" && requiresAdvance && (
                  <div className="mt-4 p-4 bg-amber-500/10 border-2 border-amber-500/30 rounded-xl">
                    <div className="flex items-start gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-700">Important Notice</p>
                        <p className="text-sm text-amber-600 mt-1">
                          You are required to pay ৳{advanceAmount} in advance. This advance payment is 
                          <span className="font-semibold"> non-refundable</span> if you are unable to receive the order for any reason.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pt-3 border-t border-amber-500/20">
                      <Checkbox 
                        id="terms" 
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                        className="mt-0.5"
                      />
                      <Label htmlFor="terms" className="text-sm text-foreground cursor-pointer">
                        I understand and agree that the advance payment of ৳{advanceAmount} is non-refundable 
                        if I cannot receive the order.
                      </Label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-6 border-2 border-primary/10 sticky top-4">
                <h2 className="text-lg font-display text-primary mb-4">Order Summary</h2>
                
                <div className="space-y-3 max-h-[250px] overflow-y-auto pr-2 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3 p-3 bg-muted/30 rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-primary">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>৳{subtotal.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `৳${shipping}`}</span>
                  </div>
                  {paymentMethod === "bkash" && requiresAdvance && (
                    <div className="flex justify-between text-pink-600">
                      <span>Advance (Bkash)</span>
                      <span>৳{advanceAmount}</span>
                    </div>
                  )}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center mb-6">
                  <span className="font-medium">Total</span>
                  <span className="text-2xl font-display text-primary">৳{total.toFixed(0)}</span>
                </div>

                {paymentMethod === "bkash" && requiresAdvance && (
                  <div className="mb-4 p-3 bg-muted/50 rounded-xl text-center">
                    <p className="text-sm text-muted-foreground">Pay now via Bkash</p>
                    <p className="text-xl font-bold text-pink-600">৳{advanceAmount}</p>
                    <p className="text-xs text-muted-foreground">+ ৳{total - advanceAmount} on delivery</p>
                  </div>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={paymentMethod === "bkash" && requiresAdvance && !agreedToTerms}
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-accent text-base font-semibold py-6 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {paymentMethod === "bkash" ? (
                    <>
                      <Smartphone className="w-5 h-5 mr-2" />
                      Pay with Bkash
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5 mr-2" />
                      Place Order
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Secure checkout powered by trusted partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
