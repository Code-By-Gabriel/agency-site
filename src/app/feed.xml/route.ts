import { getAllPosts } from "@/lib/mdx";

export const dynamic = "force-static";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

function escapeXml(str: string) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export async function GET() {
    const posts = getAllPosts();

    const items = posts
        .map(
            (p) => `<item>
<title>${escapeXml(p.title)}</title>
<link>${BASE_URL}/blog/${p.slug}</link>
<guid isPermaLink="true">${BASE_URL}/blog/${p.slug}</guid>
<description>${escapeXml(p.summary)}</description>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
<author>${escapeXml(p.author)}</author>
</item>`
        )
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>Studio - Blog</title>
<link>${BASE_URL}/blog</link>
<description>Notes on design, engineering, and shipping products.</description>
<language>en</language>
<atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
</channel>
</rss>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
}