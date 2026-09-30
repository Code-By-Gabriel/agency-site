export default function BlogListLoading() {
  return (
    <section className="container mx-auto px-4 py-20 max-w-3xl animate-pulse">
      <div className="h-12 w-48 bg-muted rounded" />
      <div className="h-5 w-full max-w-md bg-muted rounded mt-4" />

      <div className="mt-12 space-y-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="py-6">
            <div className="h-3 w-48 bg-muted rounded" />
            <div className="h-6 w-3/4 bg-muted rounded mt-3" />
            <div className="h-4 w-full bg-muted rounded mt-3" />
          </div>
        ))}
      </div>
    </section>
  );
}