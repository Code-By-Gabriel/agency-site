export default function BlogLoading() {
  return (
    <article className="container mx-auto px-4 py-20 max-w-3xl animate-pulse">
      <div className="h-3 w-40 bg-muted rounded" />
      <div className="h-12 w-full bg-muted rounded mt-6" />
      <div className="h-12 w-3/4 bg-muted rounded mt-2" />
      <div className="h-5 w-full bg-muted rounded mt-6" />

      <div className="mt-12 space-y-4">
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-5/6 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded mt-8" />
        <div className="h-4 w-4/5 bg-muted rounded" />
      </div>
    </article>
  );
}