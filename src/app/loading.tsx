export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-muted border-t-foreground animate-spin" />
      <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}