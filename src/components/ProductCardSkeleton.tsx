import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <div className="group rounded-3xl overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-card to-card/80 shadow-md">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Skeleton className="w-full h-full" />
      </div>
      
      <div className="p-3 sm:p-4 space-y-2">
        <Skeleton className="h-5 sm:h-6 w-3/4" />
        <Skeleton className="h-4 sm:h-5 w-1/2" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-9 sm:h-10 flex-1 rounded-full" />
          <Skeleton className="h-9 sm:h-10 w-9 sm:w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};
