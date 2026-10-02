import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <Skeleton className="h-12 w-56" />
      <Skeleton className="h-5 w-full max-w-lg mt-4" />

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex items-start gap-3">
            <Skeleton className="h-5 w-5 shrink-0" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-36 w-full" />
        </div>
        <Skeleton className="h-11 w-40" />
      </div>
    </section>
  );
}