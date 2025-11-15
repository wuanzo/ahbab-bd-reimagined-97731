import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ProductCard } from "@/components/ProductCard";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  {
    id: "featured-1",
    name: "Watercolor Dream Set",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80",
    price: "৳ 1,299",
    category: "Watercolors",
    badge: "hot" as const
  },
  {
    id: "featured-2",
    name: "Premium Sketchbook A4",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&q=80",
    price: "৳ 599",
    category: "Paper",
    badge: "new" as const
  },
  {
    id: "featured-3",
    name: "Calligraphy Pen Set",
    image: "https://images.unsplash.com/photo-1590682680873-c7a1db205b3f?w=500&q=80",
    price: "৳ 799",
    category: "Pens",
    badge: "hot" as const
  },
  {
    id: "featured-4",
    name: "Acrylic Mediums Collection",
    image: "https://images.unsplash.com/photo-1611244806813-e82c3e05f032?w=500&q=80",
    price: "৳ 1,099",
    category: "Mediums",
    badge: "new" as const
  }
];

const socialPosts = [
  {
    platform: "Instagram",
    icon: Instagram,
    post: "Check out this amazing watercolor technique!",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80",
    likes: 234,
    url: "#"
  },
  {
    platform: "Facebook",
    icon: Facebook,
    post: "New arrivals: Premium brush collection",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=400&q=80",
    likes: 189,
    url: "#"
  },
  {
    platform: "YouTube",
    icon: Youtube,
    post: "Tutorial: Creating depth with acrylic paints",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80",
    views: 1523,
    url: "#"
  }
];

export default function WeeklyFeatures() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-10 w-10 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-display text-primary">Weekly Features</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked favorites from this week, featuring the best arts and crafts supplies
          </p>
        </div>

        {/* Featured Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-display text-foreground mb-8 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            This Week's Top Picks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Social Media Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-display text-foreground mb-8 text-center">
            From Our Social Media
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialPosts.map((post, index) => (
              <Card 
                key={index}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-500 border-2 border-primary/20 hover:border-primary rounded-3xl glass-card"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.post}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 p-2 glass-card rounded-full">
                      <post.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <p className="text-sm text-foreground line-clamp-2 min-h-[40px]">
                      {post.post}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {post.platform === "YouTube" ? `${post.views} views` : `${post.likes} likes`}
                      </span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="rounded-full"
                        onClick={() => window.open(post.url, '_blank')}
                      >
                        View Post
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="border-2 border-primary/20 glass-card text-center p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-display text-primary mb-4">
            Follow Us for More Inspiration
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Stay updated with our latest products, tutorials, and creative inspiration
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button className="rounded-full gap-2 bg-gradient-to-r from-primary to-accent">
              <Instagram className="h-4 w-4" />
              Instagram
            </Button>
            <Button className="rounded-full gap-2 bg-gradient-to-r from-primary to-accent">
              <Facebook className="h-4 w-4" />
              Facebook
            </Button>
            <Button className="rounded-full gap-2 bg-gradient-to-r from-primary to-accent">
              <Youtube className="h-4 w-4" />
              YouTube
            </Button>
          </div>
        </Card>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
}
