import heroImage from "@/assets/hero-art-supplies.jpg";
import { Sparkles, Palette, PenTool } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-xl border-2 border-border">
      <img
        src={heroImage}
        alt="Premium Stationery Supplies"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-accent/70 to-secondary/60 flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl space-y-4 md:space-y-6">
            <div className="flex gap-3">
              <Palette className="h-6 w-6 md:h-8 md:w-8 text-white animate-pulse" />
              <PenTool className="h-6 w-6 md:h-8 md:w-8 text-white animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-white animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white leading-tight drop-shadow-lg">
              Premium Stationery<br />for Creative Minds
            </h2>
            <p className="text-lg md:text-2xl text-white font-medium drop-shadow-md">
              Discover quality supplies that inspire<br />
              your artistic journey
            </p>
            <Button className="mt-4 md:mt-6 px-6 md:px-8 py-4 md:py-6 bg-white text-primary font-bold text-base md:text-lg rounded-full shadow-xl hover:scale-105 transition-all">
              Explore Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
