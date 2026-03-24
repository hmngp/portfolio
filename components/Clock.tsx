"use client";

import { useEffect, useState } from "react";

type ClockState = {
  hour: string;
  minute: string;
  am: boolean;
  second: number;
};

function readClock(d: Date): ClockState {
  let h = d.getHours();
  const am = h < 12;
  h = h % 12;
  if (h === 0) h = 12;
  const m = d.getMinutes();
  const mm = m < 10 ? `0${m}` : `${m}`;
  return { hour: String(h), minute: mm, am, second: d.getSeconds() };
}

/** Two stacked dots; opacity toggles each wall second when motion is allowed */
function SecondDots({ visible }: { visible: boolean }) {
  return (
    <span
      className={`mx-0.5 inline-flex flex-col items-center justify-center gap-[2px] self-center px-px transition-opacity duration-75 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden
    >
      <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-current" />
      <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-current" />
    </span>
  );
}

export function Clock() {
  const [state, setState] = useState<ClockState | null>(null);

  useEffect(() => {
    const tick = () => setState(readClock(new Date()));
    tick();
    const id = window.setInterval(tick, 1_000);
    return () => window.clearInterval(id);
  }, []);

  /* Visible placeholder until client hydrates (avoids “missing” clock on slow/JS issues) */
  if (state === null) {
    return (
      <span
        className="inline-flex items-center tabular-nums text-muted/70"
        aria-hidden
      >
        <span>--</span>
        <SecondDots visible />
        <span>--</span>
        <span className="ml-1">--</span>
      </span>
    );
  }

  const dotsLit = state.second % 2 === 0;

  return (
    <span
      className="inline-flex items-center tabular-nums"
      aria-live="polite"
      aria-atomic="true"
    >
      <span>{state.hour}</span>
      <SecondDots visible={dotsLit} />
      <span>{state.minute}</span>
      <span className="ml-1">{state.am ? "AM" : "PM"}</span>
    </span>
  );
}
