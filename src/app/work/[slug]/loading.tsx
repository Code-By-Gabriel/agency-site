import { Skeleton } from "@/components/ui/skeleton";

export default function WorkDetailLoading() {
  return (
    <article className="border-t">
      {/* Back link */}
      <div className="container mx-auto px-4 pt-10 md:pt-14">
        <Skeleton className="h-4 w-28" />
      </div>

      {/* ══════════════  SPLIT-BRIEF  ══════════════ */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* ─── LEFT RAIL ─── */}
          <aside className="md:col-span-4 lg:col-span-3">
            {/* Eyebrow */}
            <Skeleton className="h-4 w-24 mb-6" />

            {/* Title */}
            <Skeleton className="h-9 md:h-10 w-full mb-3" />
            <Skeleton className="h-9 md:h-10 w-3/4 mb-10" />

            {/* Meta list */}
            <div className="border-t pt-8 space-y-6">
              <div>
                <Skeleton className="h-3 w-16 mb-2" />
                <Skeleton className="h-5 w-32" />
              </div>
              <div>
                <Skeleton className="h-3 w-16 mb-2" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div>
                <Skeleton className="h-3 w-20 mb-2" />
                <Skeleton className="h-5 w-36" />
                <Skeleton className="h-5 w-24 mt-1" />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t">
              <Skeleton className="h-5 w-32" />
            </div>
          </aside>

          {/* ─── RIGHT COLUMN ─── */}
          <div className="md:col-span-8 lg:col-span-9 min-w-0">
            {/* Summary (hook) */}
            <div className="space-y-3 mb-12">
              <Skeleton className="h-8 md:h-9 w-full" />
              <Skeleton className="h-8 md:h-9 w-5/6" />
              <Skeleton className="h-8 md:h-9 w-2/3" />
            </div>

            {/* Hero image */}
            <Skeleton className="aspect-[16/10] rounded-xl mb-16" />

            {/* Content */}
            <div className="max-w-2xl space-y-4">
              <Skeleton className="h-6 w-1/3 mb-6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />

              <Skeleton className="h-6 w-1/4 mt-8 mb-4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}