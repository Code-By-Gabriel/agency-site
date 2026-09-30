export default function WorkLoading() {
  return (
    <article className="container mx-auto px-4 py-20 max-w-3xl animate-pulse">
      <div className="h-3 w-32 bg-muted rounded" />
      <div className="h-12 w-full bg-muted rounded mt-6" />
      <div className="h-6 w-2/3 bg-muted rounded mt-6" />

      <div className="flex gap-2 mt-6">
        <div className="h-6 w-16 bg-muted rounded-full" />
        <div className="h-6 w-20 bg-muted rounded-full" />
        <div className="h-6 w-14 bg-muted rounded-full" />
      </div>

      <div className="mt-12 aspect-video bg-muted rounded-lg" />

      <div className="mt-12 space-y-4">
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-5/6 bg-muted rounded" />
      </div>
    </article>
  );
}