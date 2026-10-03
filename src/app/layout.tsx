import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from 'next/font/google';
import { BackToTop } from "@/components/back-to-top";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // ← change this
  title: {
    default: "Studio - Design & Engineering",
    template: "%s | Studio",
  },
  description:
    "Design & engineering studio helping ambitious teams ship better products.",
  openGraph: {
    type: "website",
    siteName: "Studio",
    title: "Studio - Design & Engineering",
    description:
      "Design & engineering studio helping ambitious teams ship better products.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio - Design & Engineering",
    description:
      "Design & engineering studio helping ambitious teams ship better products.",
  },
  icons: { icon: "/favicon.ico" },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={inter.variable}>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <BackToTop />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}