import heroImage from "@/assets/hero-art-supplies.jpg";
import { Sparkles, Palette, PenTool } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const fullText = "Premium Stationery\nfor Creative Minds";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);
  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl md:rounded-3xl shadow-xl border border-border md:border-2 mx-3 md:mx-0">
      <img
        src={heroImage}
        alt="Premium Stationery Supplies"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-accent/70 to-secondary/60 flex items-center">
        <div className="container mx-auto px-3 sm:px-4 md:px-8">
          <div className="max-w-2xl space-y-2 sm:space-y-4 md:space-y-6">
            <div className="flex gap-2 md:gap-3">
              <Palette className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white animate-pulse" />
              <PenTool className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display text-white leading-tight drop-shadow-lg min-h-[100px] sm:min-h-[150px] md:min-h-[200px] whitespace-pre-wrap">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h2>
            <p className="text-sm sm:text-lg md:text-2xl text-white font-medium drop-shadow-md">
              Discover quality supplies that inspire<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>your artistic journey
            </p>
            <Button className="mt-2 sm:mt-4 md:mt-6 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 bg-white text-primary font-bold text-sm sm:text-base md:text-lg rounded-full shadow-xl hover:scale-105 transition-all">
              Explore Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
