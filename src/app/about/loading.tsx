import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <>
      {/* ═══════════════════════  INTRO  ═══════════════════════ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-24 md:py-32">
          {/* Header */}
          <div className="max-w-3xl">
            <Skeleton className="h-4 w-20 mb-6" />
            <div className="space-y-3">
              <Skeleton className="h-14 md:h-16 w-full max-w-3xl" />
              <Skeleton className="h-14 md:h-16 w-3/4 max-w-3xl" />
            </div>
          </div>

          {/* Story + facts */}
          <div className="grid gap-12 md:grid-cols-12 md:gap-16 mt-20">
            {/* Story (left) */}
            <div className="md:col-span-7 space-y-6">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-5/6" />
              <Skeleton className="h-8 w-full mt-10" />
              <Skeleton className="h-8 w-3/4" />
            </div>

            {/* Facts (right) */}
            <div className="md:col-span-4 md:col-start-9">
              <div className="space-y-8 border-t pt-10">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-3 w-20 mb-3" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════  PRINCIPLES  ═══════════════════════ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-24 md:py-32">
          {/* Header */}
          <div className="max-w-3xl">
            <Skeleton className="h-4 w-32 mb-6" />
            <div className="space-y-3">
              <Skeleton className="h-14 md:h-16 w-full max-w-3xl" />
              <Skeleton className="h-14 md:h-16 w-2/3 max-w-3xl" />
            </div>
          </div>

          {/* Principles grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-20">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-8 w-2/3" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════  TEAM  ═══════════════════════ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-24 md:py-32">
          {/* Header */}
          <div className="max-w-2xl">
            <Skeleton className="h-10 md:h-12 w-40" />
            <Skeleton className="h-4 w-full max-w-md mt-4" />
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square rounded-lg" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-40" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════  CLOSING  ═══════════════════════ */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Skeleton className="h-6 w-72" />
            <Skeleton className="h-9 w-40 rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
}