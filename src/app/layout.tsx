import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RedSea Website",
  description: "Fresh Next.js + TypeScript + Tailwind project"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-ocean text-ocean-foreground">{children}</body>
    </html>
  );
}
