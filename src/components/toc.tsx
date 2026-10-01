"use client";
import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/toc";

export function Toc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-24 h-fit">
      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
        On this page
      </div>
      <ul className="space-y-2 text-sm border-l">
        {items.map((i) => (
          <li key={i.id} style={{ paddingLeft: i.level === 3 ? "1.5rem" : "0.75rem" }}>
            <a
              href={`#${i.id}`}
              className={`block -ml-px border-l pl-3 py-0.5 transition ${
                active === i.id
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {i.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}