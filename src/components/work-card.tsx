import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { WorkMeta } from "@/lib/mdx";

export function WorkCard({ work }: { work: WorkMeta }) {
  return (
    <Link href={`/work/${work.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition group-hover:border-foreground/30">
        <div className="relative aspect-video overflow-hidden bg-muted">
          {work.cover ? (
            <Image
              src={work.cover}
              alt={work.title}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : null}
        </div>
        <CardContent className="p-6">
          <div className="text-xs text-muted-foreground mb-2">
            {work.client} · {work.year}
          </div>
          <h3 className="text-lg font-semibold">{work.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{work.summary}</p>
          {work.tags?.length ? (
            <div className="flex gap-2 mt-4 flex-wrap">
              {work.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </CardContent>
      </Card>
    </Link>
  );
}