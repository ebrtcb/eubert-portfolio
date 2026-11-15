import "./globals.css";
import type { Metadata, Viewport } from "next";
import { profile } from "@/lib/data";

const title = `${profile.name} · ${profile.title}`;
export const metadata: Metadata = { title, description: profile.summary, openGraph: { title, description: profile.tagline, type: "website" }, twitter: { card: "summary", title, description: profile.tagline } };
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f1f4fb" }, { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" }] };
const themeScript = `try{var t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript><style>{".reveal{opacity:1!important;transform:none!important}"}</style></noscript>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Figtree:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
