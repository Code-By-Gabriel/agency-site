import { Skeleton } from "@/components/ui/skeleton";

export default function WorkLoading() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Header */}
        <div className="max-w-3xl">
          <Skeleton className="h-4 w-32 mb-6" />
          <div className="space-y-3">
            <Skeleton className="h-14 md:h-16 w-full max-w-3xl" />
            <Skeleton className="h-14 md:h-16 w-3/4 max-w-3xl" />
          </div>
          <div className="mt-8 space-y-2">
            <Skeleton className="h-8 md:h-9 w-full max-w-2xl" />
            <Skeleton className="h-8 md:h-9 w-2/3 max-w-2xl" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border overflow-hidden"
            >
              {/* Image */}
              <Skeleton className="aspect-video rounded-none" />

              {/* Content */}
              <div className="p-6">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-7 w-2/3 mt-2" />
                <div className="mt-3 space-y-2">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-4/5" />
                </div>
                <div className="flex gap-2 mt-5">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-20 border-t pt-10 flex flex-wrap items-center justify-between gap-4">
          <Skeleton className="h-6 w-72" />
          <Skeleton className="h-9 w-40 rounded-full" />
        </div>
      </div>
    </section>
  );
}