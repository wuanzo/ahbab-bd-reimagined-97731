import { Skeleton } from "@/components/ui/skeleton";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";

export const ProductDetailSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-32 mb-6" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image Skeleton */}
          <Skeleton className="w-full h-[400px] md:h-[500px] rounded-3xl" />

          {/* Info Skeleton */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-12 w-32" />
            </div>

            <Skeleton className="h-64 rounded-3xl" />

            <div className="flex gap-4">
              <Skeleton className="h-14 flex-1 rounded-full" />
              <Skeleton className="h-14 w-14 rounded-full" />
            </div>
          </div>
        </div>

        {/* Related Products Skeleton */}
        <div className="space-y-6">
          <Skeleton className="h-10 w-64" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-3xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
