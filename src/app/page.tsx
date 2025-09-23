"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="container py-12">
      <section className="mb-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
          ● RedSea
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-bold leading-tight">
          Next.js + TypeScript + Tailwind
        </h1>
        <p className="mt-3 max-w-2xl text-lg/7 opacity-80">
          Brand-new source created from scratch. Minimal dependencies.
        </p>
        <div className="mt-6 flex gap-3">
          <Button>Get Started</Button>
          <Button variant="ghost">Docs</Button>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Clean App Router" subtitle="src/app/* with layout and page" />
        <Card title="Strict TypeScript" subtitle="Configured TS for good DX" />
        <Card title="Tailwind Ready" subtitle="Edit theme in tailwind.config.ts" />
      </section>
    </main>
  );
}
