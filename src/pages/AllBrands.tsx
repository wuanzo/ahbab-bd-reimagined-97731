import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const brands = [
  {
    id: 1,
    name: "Camel",
    logo: "https://images.unsplash.com/photo-1582845512747-e42001c95638?w=200&q=80",
    category: "Art Supplies",
    products: 45
  },
  {
    id: 2,
    name: "Faber-Castell",
    logo: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=200&q=80",
    category: "Drawing & Coloring",
    products: 38
  },
  {
    id: 3,
    name: "Winsor & Newton",
    logo: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=200&q=80",
    category: "Professional Paints",
    products: 52
  },
  {
    id: 4,
    name: "Staedtler",
    logo: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=200&q=80",
    category: "Technical Drawing",
    products: 34
  },
  {
    id: 5,
    name: "Copic",
    logo: "https://images.unsplash.com/photo-1615395604485-f0dfedcf2cef?w=200&q=80",
    category: "Markers",
    products: 28
  },
  {
    id: 6,
    name: "Sakura",
    logo: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=200&q=80",
    category: "Gel Pens & Pastels",
    products: 41
  },
  {
    id: 7,
    name: "Prismacolor",
    logo: "https://images.unsplash.com/photo-1590682680873-c7a1db205b3f?w=200&q=80",
    category: "Colored Pencils",
    products: 36
  },
  {
    id: 8,
    name: "Liquitex",
    logo: "https://images.unsplash.com/photo-1611244806813-e82c3e05f032?w=200&q=80",
    category: "Acrylic Paints",
    products: 44
  },
  {
    id: 9,
    name: "Tombow",
    logo: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=200&q=80",
    category: "Dual Brush Pens",
    products: 30
  },
  {
    id: 10,
    name: "Strathmore",
    logo: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200&q=80",
    category: "Paper & Canvas",
    products: 25
  },
  {
    id: 11,
    name: "Golden",
    logo: "https://images.unsplash.com/photo-1579783483458-83d02161294e?w=200&q=80",
    category: "Professional Acrylics",
    products: 39
  },
  {
    id: 12,
    name: "Arteza",
    logo: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=200&q=80",
    category: "All Art Supplies",
    products: 67
  }
];

const BrandCard = ({ brand }: { brand: typeof brands[0] }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <Card 
      ref={ref}
      className={`group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-500 border-2 border-primary/20 hover:border-primary rounded-3xl glass-card ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Link to={`/category/${brand.category.toLowerCase().replace(/ /g, '-')}`}>
        <CardContent className="p-4 md:p-6">
          <div className="aspect-square mb-3 md:mb-4 overflow-hidden rounded-xl md:rounded-2xl bg-background/50">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h3 className="font-display text-base md:text-xl text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors truncate">
            {brand.name}
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground mb-0.5 md:mb-1 truncate">{brand.category}</p>
          <p className="text-xs text-primary font-semibold">{brand.products} Products</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default function AllBrands() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-3 sm:px-4 py-6 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Award className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-primary">All Brands</h1>
          </div>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Explore our curated collection of premium art supply brands from around the world
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>

      <Footer />
      <BackToTop />
    </div>
  );
}
