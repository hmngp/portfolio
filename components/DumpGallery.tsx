"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

type DumpGalleryProps = {
  paths: string[];
};

export function DumpGallery({ paths }: DumpGalleryProps) {
  const [order, setOrder] = useState<string[]>(() => paths);

  useEffect(() => {
    if (paths.length === 0) return;
    setOrder(shuffle(paths));
  }, [paths]);

  if (paths.length === 0) {
    return (
      <p className="mt-3 max-w-xl font-mono text-xs leading-relaxed text-muted">
        Images will appear here in random order. Drop files in{" "}
        <code className="rounded bg-[#0a1610] px-1 py-px text-[11px] text-muted">
          public/dump/
        </code>{" "}
        and add their paths to{" "}
        <code className="rounded bg-[#0a1610] px-1 py-px text-[11px] text-muted">
          dumpImagePaths
        </code>{" "}
        in{" "}
        <code className="rounded bg-[#0a1610] px-1 py-px text-[11px] text-muted">
          data/portfolio.ts
        </code>
        .
      </p>
    );
  }

  return (
    <ul
      className="mt-4 columns-2 gap-2 sm:columns-3 sm:gap-3"
      aria-label="Dump"
    >
      {order.map((src) => (
        <li
          key={src}
          className="mb-2 break-inside-avoid overflow-hidden border border-[var(--border)] bg-[#0a1610] sm:mb-3"
        >
          <Image
            src={src}
            alt=""
            width={600}
            height={600}
            className="h-auto w-full"
            sizes="(max-width: 640px) 50vw, 300px"
          />
        </li>
      ))}
    </ul>
  );
}
