import { Skeleton } from "@/components/ui/skeleton";

export function HomeSkeleton() {
  return (
    <>
      {/* Hero */}
      <section className="container mx-auto px-4 pt-28 pb-24 text-center">
        <div className="flex flex-col items-center gap-8">
          <Skeleton className="h-8 w-52 rounded-full" />
          <div className="space-y-3 max-w-4xl w-full">
            <Skeleton className="h-16 w-full mx-auto" />
            <Skeleton className="h-16 w-4/5 mx-auto" />
          </div>
          <div className="space-y-3 max-w-2xl w-full">
            <Skeleton className="h-6 w-full mx-auto" />
            <Skeleton className="h-6 w-3/4 mx-auto" />
          </div>
          <div className="flex gap-3 mt-2">
            <Skeleton className="h-11 w-44" />
            <Skeleton className="h-11 w-36" />
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <Skeleton className="h-3 w-40 mx-auto mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-full max-w-[100px] mx-auto" />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-24 border-t">
        <Skeleton className="h-12 w-48" />
        <Skeleton className="h-6 w-full max-w-lg mt-5" />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-lg border p-8 space-y-5">
              <Skeleton className="h-10 w-10" />
              <Skeleton className="h-7 w-32" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 border-t">
        <Skeleton className="h-12 w-64" />
        <Skeleton className="h-5 w-full max-w-lg mt-5" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-lg border p-6 space-y-4">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
              <div className="pt-4 border-t space-y-2 mt-4">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-40" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="container mx-auto px-4 py-24 border-t">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="space-y-4 max-w-2xl">
            <Skeleton className="h-12 w-56" />
            <Skeleton className="h-5 w-72" />
          </div>
          <Skeleton className="h-9 w-24" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-lg border overflow-hidden">
              <Skeleton className="aspect-video rounded-none" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24">
        <div className="rounded-3xl border bg-muted/40 px-8 py-16 md:px-16 md:py-20 flex flex-col items-center gap-6">
          <Skeleton className="h-12 w-96 max-w-full" />
          <Skeleton className="h-6 w-full max-w-xl" />
          <div className="flex gap-3 mt-2">
            <Skeleton className="h-11 w-40" />
            <Skeleton className="h-11 w-36" />
          </div>
        </div>
      </section>
    </>
  );
}