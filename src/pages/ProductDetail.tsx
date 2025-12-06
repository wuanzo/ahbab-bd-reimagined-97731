import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, ArrowLeft, Sparkles, User, Facebook, MessageCircle, Plus, Minus } from "lucide-react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailSkeleton } from "@/components/ProductDetailSkeleton";
import { BackToTop } from "@/components/BackToTop";
import { useShop } from "@/contexts/ShopContext";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, toggleFavorite, isFavorite } = useShop();
  const { toast } = useToast();
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [id]);
  
  // Mock product data - in real app, fetch based on id
  const product = {
    id: id || "1",
    name: "Premium Watercolor Paint Set",
    price: "৳2,499",
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598982220203-ac2e31f69563?w=600&h=600&fit=crop"
    ],
    video: "https://player.vimeo.com/video/148751763",
    category: "paints",
    description: "This professional watercolor paint set includes 24 vibrant colors perfect for creating stunning artwork. Each color is carefully crafted with high-quality pigments for smooth, brilliant results. Ideal for both beginners and experienced artists.",
    features: [
      "24 vibrant, fade-resistant colors",
      "Professional-grade pigments",
      "Smooth, creamy texture",
      "Suitable for all skill levels",
      "Eco-friendly packaging"
    ],
    rating: 4.8,
    totalReviews: 128,
    stock: 15 // Mock stock - 0 for out of stock
  };

  // Social links for the shop
  const shopSocials = {
    facebook: "https://facebook.com/yourshop",
    whatsapp: "https://wa.me/1234567890"
  };

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Sarah J.",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely love these paints! The colors are so vibrant and blend beautifully. Perfect for my art projects.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      id: 2,
      author: "Mike P.",
      rating: 4,
      date: "1 week ago",
      comment: "Great quality paints! My daughter uses them for her art class and she's very happy with them.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"
    },
    {
      id: 3,
      author: "Emma L.",
      rating: 5,
      date: "2 weeks ago",
      comment: "These are the best watercolors I've ever used! The pigmentation is amazing and they last forever!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    }
  ]);

  const handleSubmitComment = () => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required 🔒",
        description: "Please log in to leave a review",
        variant: "destructive"
      });
      return;
    }
    
    if (newComment.trim() && userName.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: userName,
        rating: newRating,
        date: "Just now",
        comment: newComment,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userName}`
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setUserName("");
      setNewRating(5);
      toast({
        title: "Review Posted",
        description: "Thank you for your feedback!"
      });
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({ ...product, image: product.images[0] });
    }
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} added to your cart`,
    });
    setQuantity(1);
  };

  const incrementQuantity = () => {
    if (product.stock > 0 && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleToggleFavorite = () => {
    toggleFavorite({ ...product, image: product.images[0] });
    toast({
      title: isFavorite(product.id) ? "Removed from Favorites" : "Added to Favorites",
      description: isFavorite(product.id) 
        ? "Item removed from your wishlist" 
        : "Item saved to your wishlist",
    });
  };

  const relatedProducts = [
    { id: "r1", name: "Acrylic Paint Set", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500", price: "৳ 899", category: "paints" },
    { id: "r2", name: "Premium Brush Set", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500", price: "৳ 599", category: "brushes" },
    { id: "r3", name: "Canvas Board Pack", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500", price: "৳ 399", category: "canvases" },
    { id: "r4", name: "Mixing Palette", image: "https://images.unsplash.com/photo-1598982220203-ac2e31f69563?w=500", price: "৳ 299", category: "palettes" },
  ];

  const renderStars = (rating: number, size: string = "w-4 h-4") => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${size} ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-3 md:px-4 py-4 md:py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4 md:mb-6 font-medium text-sm md:text-base">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          {/* Product Media Gallery */}
          <div className="space-y-4">
            {/* Main Image/Video */}
            <div className="relative">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border-2 md:border-4 border-white bg-white">
                {currentImageIndex === product.images.length ? (
                  <iframe
                    src={product.video}
                    className="w-full h-[300px] md:h-[400px]"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Product video"
                  />
                ) : (
                  <img
                    src={product.images[currentImageIndex]}
                    alt={`${product.name} - View ${currentImageIndex + 1}`}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                )}
              </div>
              <Badge className="absolute top-2 md:top-4 right-2 md:right-4 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm bg-gradient-to-r from-accent via-white to-primary bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out]">
                NEW
              </Badge>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? "border-primary shadow-lg scale-105"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-16 md:h-20 object-cover"
                  />
                </button>
              ))}
              <button
                onClick={() => setCurrentImageIndex(product.images.length)}
                className={`rounded-lg overflow-hidden border-2 transition-all flex items-center justify-center bg-black/80 ${
                  currentImageIndex === product.images.length
                    ? "border-primary shadow-lg scale-105"
                    : "border-gray-200 hover:border-primary/50"
                }`}
              >
                <span className="text-white text-2xl">▶</span>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h1 className="text-2xl md:text-4xl font-display text-primary mb-3">{product.name}</h1>
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(Math.round(product.rating), "w-4 h-4 md:w-5 md:h-5")}
                </div>
                <span className="text-sm md:text-base font-medium text-foreground/70">
                  {product.rating} ({product.totalReviews} reviews)
                </span>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-4">{product.price}</p>
              
              {/* Stock Status */}
              <div className="mb-6">
                {product.stock > 0 ? (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400/20 to-accent/20 border-2 border-green-400/30 text-green-600 font-medium text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-400/20 to-primary/20 border-2 border-red-400/30 text-red-500 font-medium text-sm">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Out of Stock
                  </span>
                )}
              </div>
            </div>

            <Card className="border-2 border-primary/20 glass-card">
              <CardContent className="p-5 md:p-6 space-y-4">
                <h3 className="font-display text-lg md:text-xl text-primary">Product Details</h3>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{product.description}</p>
                <div className="pt-2">
                  <h4 className="font-semibold text-sm md:text-base text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm md:text-base text-foreground/80">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-foreground/70">Quantity:</span>
              <div className="flex items-center gap-2 glass-card rounded-full p-1 border-2 border-primary/20">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1 || product.stock === 0}
                  className="h-10 w-10 rounded-full hover:bg-primary/10"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-bold text-lg text-primary">{quantity}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stock || product.stock === 0}
                  className="h-10 w-10 rounded-full hover:bg-primary/10"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <Button 
                size="lg" 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 rounded-full text-base sm:text-lg font-medium h-12 sm:h-14 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Add to Cart</span>
                <span className="sm:hidden">Add</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleToggleFavorite}
                className={`rounded-full border-4 h-12 sm:h-14 px-4 sm:px-6 ${
                  isFavorite(product.id) 
                    ? "border-red-400 bg-red-50 hover:bg-red-100" 
                    : "border-primary/20 hover:bg-primary/10"
                }`}
              >
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorite(product.id) ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-3 mt-4">
              <a
                href={shopSocials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  className="w-full rounded-full h-12 border-2 border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-primary/10 hover:from-blue-500/20 hover:to-primary/20 text-blue-600 gap-2"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </Button>
              </a>
              <a
                href={shopSocials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  className="w-full rounded-full h-12 border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-accent/10 hover:from-green-500/20 hover:to-accent/20 text-green-600 gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-display text-primary mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} {...relatedProduct} />
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display text-primary">Customer Reviews</h2>
          
          {/* Leave a Comment */}
          <Card className="border-2 border-primary/20 glass-card">
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg md:text-xl text-primary">Leave a Review</h3>
                {!isLoggedIn && (
                  <Link to="/auth">
                    <Button variant="outline" size="sm" className="gap-2">
                      <User className="h-4 w-4" />
                      Login to Review
                    </Button>
                  </Link>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="rounded-xl border-2"
                    disabled={!isLoggedIn}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Rating</label>
                  <div className="flex gap-2">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => setNewRating(i + 1)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 ${i < newRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Review</label>
                  <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={isLoggedIn ? "Share your experience with this product..." : "Please log in to leave a review"}
                    className="rounded-xl border-2 min-h-[120px]"
                    disabled={!isLoggedIn}
                  />
                </div>

                <Button 
                  onClick={handleSubmitComment}
                  className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  disabled={!isLoggedIn}
                >
                  Post Review
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id} className="border-2 sm:border-4 border-primary/10 hover:border-primary/20 transition-colors glass-card">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-4 mb-3">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={comment.avatar} alt={comment.author} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {comment.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-lg text-foreground">{comment.author}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex gap-0.5">
                              {renderStars(comment.rating)}
                            </div>
                            <span className="text-sm text-muted-foreground">{comment.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{comment.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default ProductDetail;
