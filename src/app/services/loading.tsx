import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesLoading() {
  return (
    <section className="border-t">
      <div className="container mx-auto px-4 py-24 md:py-32">
        {/* Header */}
        <div className="max-w-3xl">
          <Skeleton className="h-4 w-32 mb-6" />
          <div className="space-y-3">
            <Skeleton className="h-14 md:h-16 w-full max-w-3xl" />
            <Skeleton className="h-14 md:h-16 w-4/5 max-w-3xl" />
          </div>
          <div className="mt-8 space-y-2">
            <Skeleton className="h-8 md:h-9 w-full max-w-2xl" />
            <Skeleton className="h-8 md:h-9 w-2/3 max-w-2xl" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border p-8 md:p-10 flex flex-col"
            >
              {/* Icon */}
              <Skeleton className="h-10 w-10 md:h-12 md:w-12 rounded-lg mb-8" />

              {/* Title */}
              <Skeleton className="h-8 md:h-10 w-2/3" />

              {/* Description */}
              <div className="mt-5 space-y-3">
                <Skeleton className="h-5 md:h-6 w-full" />
                <Skeleton className="h-5 md:h-6 w-5/6" />
              </div>

              {/* Divider + includes */}
              <div className="mt-10 pt-8 border-t space-y-3">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Skeleton className="h-1 w-1 rounded-full shrink-0" />
                    <Skeleton className="h-4 md:h-5 w-full" />
                  </div>
                ))}
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