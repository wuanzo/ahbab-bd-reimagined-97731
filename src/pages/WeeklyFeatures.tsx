import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, ExternalLink, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const weeklyFavorites = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80",
    title: "Dreamy sunset watercolor vibes 🌸✨",
    platform: "Instagram",
    platformIcon: Instagram,
    originalUrl: "https://instagram.com",
    productsUsed: ["Watercolor Dream Set", "Premium Sketchbook A4", "Round Brush Set"],
    likes: 1234
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=600&q=80",
    title: "The prettiest brush collection ever! 💕",
    platform: "Facebook",
    platformIcon: Facebook,
    originalUrl: "https://facebook.com",
    productsUsed: ["Taklon Brush Set", "Acrylic Mediums", "Canvas Board"],
    likes: 892
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
    title: "Creating magic with acrylics 🎨💫",
    platform: "YouTube",
    platformIcon: Youtube,
    originalUrl: "https://youtube.com",
    productsUsed: ["Acrylic Paint Set", "Palette Knives", "Stretched Canvas"],
    likes: 2156
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80",
    title: "Soft pastel morning sketches 🌷",
    platform: "Instagram",
    platformIcon: Instagram,
    originalUrl: "https://instagram.com",
    productsUsed: ["Soft Pastel Set", "Toned Paper Pad", "Blending Stumps"],
    likes: 1567
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
    title: "Abstract florals in bloom 🌺💖",
    platform: "Instagram",
    platformIcon: Instagram,
    originalUrl: "https://instagram.com",
    productsUsed: ["Gouache Set", "Hot Press Paper", "Detail Brush Set"],
    likes: 2089
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80",
    title: "Calligraphy practice session ✍️💕",
    platform: "Facebook",
    platformIcon: Facebook,
    originalUrl: "https://facebook.com",
    productsUsed: ["Calligraphy Pen Set", "Ink Bottles", "Calligraphy Paper"],
    likes: 756
  }
];

export default function WeeklyFeatures() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-3 sm:px-4 py-6 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-primary">Updated Weekly</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-primary mb-3 md:mb-4">
            Weekly Favorites
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Our curated picks from the community! See what amazing creations our pookies made this week 💖
          </p>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {weeklyFavorites.map((item) => (
            <Card 
              key={item.id}
              className="group overflow-hidden border-2 border-primary/20 hover:border-primary/40 rounded-3xl glass-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Platform Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border-0 shadow-lg"
                    >
                      <item.platformIcon className="h-3.5 w-3.5 text-primary" />
                      <span className="text-xs font-medium text-foreground">{item.platform}</span>
                    </Badge>
                  </div>
                  {/* Likes Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                      <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" />
                      <span className="text-xs font-medium text-foreground">{item.likes.toLocaleString()}</span>
                    </div>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-4">
                  {/* Title */}
                  <p className="text-base font-medium text-foreground leading-relaxed">
                    {item.title}
                  </p>

                  {/* Products Used */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Products Used ✨
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.productsUsed.map((product, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline" 
                          className="text-xs px-2 py-0.5 rounded-full border-secondary/50 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 transition-colors"
                        >
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Link to Original */}
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full rounded-full gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all group/btn"
                    onClick={() => window.open(item.originalUrl, '_blank')}
                  >
                    <span className="text-sm">View Original Post</span>
                    <ExternalLink className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="border-2 border-primary/20 glass-card overflow-hidden">
          <div className="relative p-6 sm:p-8 md:p-12 text-center">
            {/* Decorative Elements - Hidden on mobile */}
            <div className="hidden sm:block absolute top-4 left-4 text-4xl opacity-20">🌸</div>
            <div className="hidden sm:block absolute bottom-4 right-4 text-4xl opacity-20">✨</div>
            <div className="hidden md:block absolute top-1/2 left-8 text-2xl opacity-10">💕</div>
            <div className="hidden md:block absolute top-1/3 right-8 text-2xl opacity-10">🎨</div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-primary mb-3 md:mb-4">
                Want to be featured? 💖
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto">
                Share your creations with us! Tag us on social media and you might be our next weekly favorite pookie 🌟
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4">
                <Button 
                  className="w-full sm:w-auto rounded-full gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg text-sm md:text-base"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <Instagram className="h-4 w-4" />
                  Follow on Instagram
                </Button>
                <Button 
                  className="w-full sm:w-auto rounded-full gap-2 bg-gradient-to-r from-secondary to-accent hover:opacity-90 transition-opacity shadow-lg text-sm md:text-base"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                >
                  <Facebook className="h-4 w-4" />
                  Follow on Facebook
                </Button>
                <Button 
                  className="w-full sm:w-auto rounded-full gap-2 bg-gradient-to-r from-accent to-primary hover:opacity-90 transition-opacity shadow-lg text-sm md:text-base"
                  onClick={() => window.open('https://youtube.com', '_blank')}
                >
                  <Youtube className="h-4 w-4" />
                  Subscribe on YouTube
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
}
