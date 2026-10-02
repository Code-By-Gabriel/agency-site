"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; text: string; level: number };

export function Toc() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [active, setActive] = useState<string | null>(null);

  // Scan the rendered article to build the TOC from real heading IDs
  useEffect(() => {
    const container = document.querySelector(".prose-custom");
    if (!container) return;

    const headings = Array.from(
      container.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];

    const tocItems: TocItem[] = headings
      .filter((h) => h.id)
      .map((h) => ({
        id: h.id,
        text: (h.textContent ?? "").replace(/#/g, "").trim(),
        level: h.tagName === "H2" ? 2 : 3,
      }));

    setItems(tocItems);
  }, []);

  // Track active heading on scroll
  useEffect(() => {
    if (items.length === 0) return;

    const OFFSET = 120;

    const onScroll = () => {
      const headings = items
        .map((item) => {
          const el = document.getElementById(item.id);
          return el ? { id: item.id, top: el.getBoundingClientRect().top } : null;
        })
        .filter(Boolean) as { id: string; top: number }[];

      if (headings.length === 0) return;

      let current = headings[0].id;
      for (const h of headings) {
        if (h.top <= OFFSET) current = h.id;
        else break;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
        On this page
      </div>

      <ul className="space-y-1 border-l border-border">
        {items.map((i) => {
          const isActive = active === i.id;
          return (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(i.id);
                  if (!el) return;
                  const top = el.getBoundingClientRect().top + window.scrollY - 96;
                  window.scrollTo({ top, behavior: "smooth" });
                  window.history.replaceState(null, "", `#${i.id}`);
                }}
                className={
                  "block -ml-px border-l-2 py-2 pr-3 text-base transition-colors " +
                  (i.level === 3 ? "pl-7" : "pl-4") +
                  " " +
                  (isActive
                    ? "border-foreground text-foreground font-medium"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-foreground/30")
                }
              >
                {i.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}