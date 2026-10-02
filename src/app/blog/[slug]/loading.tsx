import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetailLoading() {
  return (
    <>
      {/* Back link */}
      <div className="container mx-auto px-4 pt-10 md:pt-14">
        <Skeleton className="h-5 w-28" />
      </div>

      {/* Content grid */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_240px] gap-12 lg:gap-16">
          {/* Article */}
          <article className="min-w-0 max-w-3xl">
            {/* Meta */}
            <div className="flex items-center gap-3 mb-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-1 w-1 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>

            {/* Title */}
            <div className="space-y-3">
              <Skeleton className="h-10 md:h-12 w-full" />
              <Skeleton className="h-10 md:h-12 w-3/4" />
            </div>

            {/* Summary */}
            <div className="mt-8 space-y-3">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-5/6" />
            </div>

            {/* Author line */}
            <div className="mt-10 pt-6 border-t flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>

            {/* Body */}
            <div className="mt-16 space-y-4">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
              <Skeleton className="h-7 w-1/3 mt-10" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>
          </article>

          {/* TOC sidebar */}
          <aside className="hidden lg:block">
            <div className="space-y-3 sticky top-24">
              <Skeleton className="h-3 w-24 mb-4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}