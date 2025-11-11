import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, ArrowLeft, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailSkeleton } from "@/components/ProductDetailSkeleton";
import { useShop } from "@/contexts/ShopContext";
import { useToast } from "@/hooks/use-toast";

interface Comment {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, toggleFavorite, isFavorite } = useShop();
  const { toast } = useToast();
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [id]);
  
  // Mock product data - in real app, fetch based on id
  const product = {
    id: id || "1",
    name: "Premium Watercolor Paint Set ✨",
    price: "৳2,499",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop",
    category: "paints",
    description: "This delightful watercolor paint set includes 24 vibrant colors perfect for creating your masterpieces! Each color is carefully crafted with high-quality pigments for smooth, brilliant results. Whether you're a beginner or a seasoned artist, this set will bring joy to your creative journey! 🎨",
    features: [
      "24 vibrant, fade-resistant colors 🌈",
      "Professional-grade pigments ✨",
      "Smooth, creamy texture 💖",
      "Perfect for all skill levels 🎭",
      "Eco-friendly packaging 🌿"
    ],
    rating: 4.8,
    totalReviews: 128
  };

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Sarah J.",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely love these paints! The colors are so vibrant and blend beautifully. Perfect for my art projects! 💕"
    },
    {
      id: 2,
      author: "Mike P.",
      rating: 4,
      date: "1 week ago",
      comment: "Great quality paints! My daughter uses them for her art class and she's very happy with them. 🎨"
    },
    {
      id: 3,
      author: "Emma L.",
      rating: 5,
      date: "2 weeks ago",
      comment: "These are the best watercolors I've ever used! The pigmentation is amazing and they last forever! ✨"
    }
  ]);

  const handleSubmitComment = () => {
    if (newComment.trim() && userName.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: userName,
        rating: newRating,
        date: "Just now",
        comment: newComment
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setUserName("");
      setNewRating(5);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to Cart! 🛒",
      description: `${product.name} has been added to your cart! 💖`,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product);
    toast({
      title: isFavorite(product.id) ? "Removed from Favorites 💔" : "Added to Favorites! 💖",
      description: isFavorite(product.id) 
        ? "Item removed from your wishlist" 
        : "Item saved to your wishlist! ✨",
    });
  };

  const relatedProducts = [
    { id: "r1", name: "Acrylic Paint Set ✨", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500", price: "৳ 899", category: "paints" },
    { id: "r2", name: "Premium Brush Set 🖌️", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500", price: "৳ 599", category: "brushes" },
    { id: "r3", name: "Canvas Board Pack 🖼️", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500", price: "৳ 399", category: "canvases" },
    { id: "r4", name: "Mixing Palette 🌈", image: "https://images.unsplash.com/photo-1598982220203-ac2e31f69563?w=500", price: "৳ 299", category: "palettes" },
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 text-sm">
              NEW ✨
            </Badge>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-display text-primary mb-2">{product.name}</h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(Math.round(product.rating), "w-5 h-5")}
                </div>
                <span className="text-lg font-medium text-foreground/80">
                  {product.rating} ({product.totalReviews} reviews)
                </span>
              </div>
              <p className="text-4xl font-bold text-primary mb-4">{product.price}</p>
            </div>

            <Card className="border-4 border-primary/20 bg-gradient-to-br from-pink-50/50 to-purple-50/50">
              <CardContent className="p-6">
                <h3 className="font-display text-xl text-primary mb-3">Product Details 💝</h3>
                <p className="text-foreground/80 mb-4 leading-relaxed">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex gap-3 sm:gap-4">
              <Button 
                size="lg" 
                onClick={handleAddToCart}
                className="flex-1 rounded-full text-base sm:text-lg font-medium h-12 sm:h-14 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
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
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl sm:text-3xl font-display text-primary">You Might Also Love 💕</h2>
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-accent animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} {...relatedProduct} />
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display text-primary">Customer Reviews 💬</h2>
          
          {/* Leave a Comment */}
          <Card className="border-4 border-primary/20 bg-gradient-to-br from-pink-50/50 to-purple-50/50">
            <CardContent className="p-6 space-y-4">
              <h3 className="font-display text-xl text-primary">Leave a Review ✍️</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="rounded-xl border-2"
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
                    placeholder="Share your experience with this product..."
                    className="rounded-xl border-2 min-h-[120px]"
                  />
                </div>

                <Button 
                  onClick={handleSubmitComment}
                  className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  Post Review ✨
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card key={comment.id} className="border-4 border-primary/10 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
