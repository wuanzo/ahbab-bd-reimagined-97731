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
import { ArrowLeft, Package, Truck, Store, Smartphone, AlertTriangle, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const STORE_ADDRESS = "House 12, Road 5, Dhanmondi, Dhaka 1205, Bangladesh";
const STORE_COORDS = { lat: 23.7461, lng: 90.3742 };
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${STORE_COORDS.lat},${STORE_COORDS.lng}`;

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
  const [paymentMethod, setPaymentMethod] = useState("bkash");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subtotal = getCartTotal();
  const shipping = deliveryMethod === "delivery" ? 60 : 0;
  const total = subtotal + shipping;

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

    if (requiresAdvance && !agreedToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the advance payment terms before proceeding",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Redirecting to Bkash",
      description: `Please pay ৳${advanceAmount} advance via Bkash...`,
    });
    setTimeout(() => {
      window.open("https://bkash.com", "_blank");
      navigate("/order-confirmation");
    }, 1500);
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

        <div className="max-w-6xl mx-auto">
          {/* Step Indicators */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">1</div>
              <span className="text-primary font-medium">Details</span>
              <div className="w-12 h-0.5 bg-primary/30 mx-2" />
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold">2</div>
              <span className="text-muted-foreground">Payment</span>
              <div className="w-12 h-0.5 bg-primary/30 mx-2" />
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold">3</div>
              <span className="text-muted-foreground">Confirm</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Delivery Method Card */}
              <div className="glass-card rounded-2xl p-6 border-2 border-primary/10">
                <h2 className="text-lg font-display text-primary mb-5 text-center">Choose Delivery Method</h2>
                <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="grid grid-cols-2 gap-4">
                  <Label
                    htmlFor="delivery"
                    className={`flex flex-col items-center gap-3 p-5 rounded-2xl cursor-pointer border-2 transition-all text-center ${
                      deliveryMethod === "delivery" 
                        ? "border-primary bg-primary/10 shadow-lg shadow-primary/10" 
                        : "border-border/50 hover:border-primary/50 bg-muted/30"
                    }`}
                  >
                    <RadioGroupItem value="delivery" id="delivery" className="sr-only" />
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      deliveryMethod === "delivery" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}>
                      <Truck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Home Delivery</p>
                      <p className="text-sm text-muted-foreground">৳60 shipping</p>
                    </div>
                  </Label>
                  <Label
                    htmlFor="pickup"
                    className={`flex flex-col items-center gap-3 p-5 rounded-2xl cursor-pointer border-2 transition-all text-center ${
                      deliveryMethod === "pickup" 
                        ? "border-primary bg-primary/10 shadow-lg shadow-primary/10" 
                        : "border-border/50 hover:border-primary/50 bg-muted/30"
                    }`}
                  >
                    <RadioGroupItem value="pickup" id="pickup" className="sr-only" />
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      deliveryMethod === "pickup" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}>
                      <Store className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Store Pickup</p>
                      <p className="text-sm text-muted-foreground">Free</p>
                    </div>
                  </Label>
                </RadioGroup>
              </div>

              {/* Store Location Map - Show when pickup selected */}
              {deliveryMethod === "pickup" && (
                <div className="glass-card rounded-2xl p-6 border-2 border-primary/10">
                  <h2 className="text-lg font-display text-primary mb-4 text-center flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Store Location
                  </h2>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all group"
                  >
                    <img
                      src={`https://maps.googleapis.com/maps/api/staticmap?center=${STORE_COORDS.lat},${STORE_COORDS.lng}&zoom=15&size=600x300&maptype=roadmap&markers=color:pink%7C${STORE_COORDS.lat},${STORE_COORDS.lng}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                      alt="Store Location Map"
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <span className="text-white font-medium text-sm">Click to open in Google Maps</span>
                    </div>
                  </a>
                  <div className="mt-4 p-4 bg-muted/50 rounded-xl text-center">
                    <p className="text-sm font-medium text-foreground">{STORE_ADDRESS}</p>
                    <p className="text-xs text-muted-foreground mt-1">Open: 10 AM - 8 PM (Sat-Thu)</p>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              <div className="glass-card rounded-2xl p-6 border-2 border-primary/10">
                <h2 className="text-lg font-display text-primary mb-5 text-center">Your Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-sm font-medium">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="rounded-xl border-2 border-border/50 focus:border-primary h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="01XXXXXXXXX"
                        className="rounded-xl border-2 border-border/50 focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email (Optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="rounded-xl border-2 border-border/50 focus:border-primary h-12"
                    />
                  </div>

                  {deliveryMethod === "delivery" && (
                    <>
                      <Separator className="my-2" />
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-sm font-medium">Delivery Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="House, Road, Area"
                          className="rounded-xl border-2 border-border/50 focus:border-primary h-12"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city" className="text-sm font-medium">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Dhaka"
                            className="rounded-xl border-2 border-border/50 focus:border-primary h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode" className="text-sm font-medium">Postal Code</Label>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            placeholder="1200"
                            className="rounded-xl border-2 border-border/50 focus:border-primary h-12"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="glass-card rounded-2xl p-6 border-2 border-primary/10">
                <h2 className="text-lg font-display text-primary mb-5 text-center">Order Summary</h2>
                
                <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 p-3 bg-muted/30 rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        <p className="font-semibold text-primary">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">৳{subtotal.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? "Free" : `৳${shipping}`}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="text-2xl font-display text-primary">৳{total.toFixed(0)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="glass-card rounded-2xl p-6 border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-primary/5">
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-lg font-display text-pink-600">Pay with Bkash</h2>
                </div>

                {requiresAdvance ? (
                  <div className="text-center mb-5">
                    <p className="text-sm text-muted-foreground mb-2">Advance Payment Required</p>
                    <div className="text-4xl font-display text-pink-600 mb-1">৳{advanceAmount}</div>
                    <p className="text-sm text-muted-foreground">
                      Remaining ৳{total - advanceAmount} {deliveryMethod === "delivery" ? "on delivery" : "at pickup"}
                    </p>
                  </div>
                ) : (
                  <div className="text-center mb-5">
                    <p className="text-sm text-muted-foreground mb-2">Full Payment</p>
                    <div className="text-4xl font-display text-pink-600">৳{total.toFixed(0)}</div>
                  </div>
                )}

                {requiresAdvance && (
                  <div className="p-4 bg-amber-500/10 border-2 border-amber-500/30 rounded-xl mb-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-amber-700 font-medium">Important Notice</p>
                        <p className="text-xs text-amber-600 mt-1">
                          The advance payment of ৳{advanceAmount} is <span className="font-semibold">non-refundable</span> if you are unable to receive the order.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 mt-4 pt-3 border-t border-amber-500/20">
                      <Checkbox 
                        id="terms" 
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                        className="mt-0.5"
                      />
                      <Label htmlFor="terms" className="text-xs text-foreground cursor-pointer leading-relaxed">
                        I understand and agree that the advance payment is non-refundable if I cannot receive the order.
                      </Label>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleSubmit}
                  disabled={requiresAdvance && !agreedToTerms}
                  className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white text-base font-semibold py-6 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {requiresAdvance ? `Pay ৳${advanceAmount} with Bkash` : `Pay ৳${total.toFixed(0)} with Bkash`}
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Secure payment powered by Bkash
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
