export default function WorkListLoading() {
  return (
    <section className="container mx-auto px-4 py-20 animate-pulse">
      <div className="h-12 w-40 bg-muted rounded" />
      <div className="h-5 w-full max-w-xl bg-muted rounded mt-4" />

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border overflow-hidden">
            <div className="aspect-video bg-muted" />
            <div className="p-6 space-y-3">
              <div className="h-3 w-24 bg-muted rounded" />
              <div className="h-5 w-2/3 bg-muted rounded" />
              <div className="h-4 w-full bg-muted rounded" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}