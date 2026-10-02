import { Skeleton } from "@/components/ui/skeleton";

export default function BlogListLoading() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Header */}
        <div className="max-w-3xl">
          <Skeleton className="h-4 w-20 mb-6" />
          <div className="space-y-3">
            <Skeleton className="h-14 md:h-16 w-full max-w-3xl" />
            <Skeleton className="h-14 md:h-16 w-3/4 max-w-3xl" />
          </div>
          <div className="mt-8 space-y-2">
            <Skeleton className="h-7 md:h-8 w-full max-w-2xl" />
            <Skeleton className="h-7 md:h-8 w-2/3 max-w-2xl" />
          </div>
        </div>

        {/* Posts */}
        <div className="mt-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="py-10 border-b last:border-b-0">
              {/* Meta row */}
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-1 w-1 rounded-full" />
                <Skeleton className="h-4 w-20" />
              </div>

              {/* Title */}
              <Skeleton className="h-9 md:h-10 w-3/4" />

              {/* Summary */}
              <div className="mt-4 space-y-2 max-w-2xl">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}