import {
  dumpImagePaths,
  internships,
  sideProjects,
  type PortfolioRow,
} from "@/data/portfolio";
import { Clock } from "./Clock";
import { DumpGallery } from "./DumpGallery";

const nav = [
  { label: "GitHub", href: "https://github.com/hmngp" },
  { label: "Email", href: "mailto:hemangbpatel1109@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/hemangbpatel" },
] as const;

function PortfolioRows({ rows }: { rows: PortfolioRow[] }) {
  return (
    <ul className="mt-3 space-y-3 font-mono text-[13px] md:text-sm">
      {rows.map((row) => (
        <li
          key={`${row.year}-${row.title}`}
          className="grid grid-cols-[4.5rem_1fr] gap-6 sm:grid-cols-[6rem_1fr] md:gap-10"
        >
          <span className="text-muted tabular-nums">{row.year}</span>
          <span className="min-w-0 text-surface">
            {row.href ? (
              <a
                href={row.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[var(--border)] underline-offset-[5px] transition-colors hover:decoration-muted"
              >
                {row.title}
              </a>
            ) : (
              row.title
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function MinimalHome() {
  return (
    <div className="relative min-h-screen">
      <div className="mat-grid pointer-events-none fixed inset-0 z-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-14">
        <header>
          <div className="flex w-full min-w-0 flex-wrap items-center justify-between gap-4 sm:gap-6">
            <a href="/">
              <img
                src="/Logo.svg"
                alt=""
                width={112}
                height={112}
                className="block h-24 w-24 shrink-0 md:h-28 md:w-28"
                decoding="async"
              />
            </a>
            <p className="shrink-0 font-mono text-[13px] leading-none text-surface md:text-sm">
              <Clock />
            </p>
          </div>
          <div
            className="mt-4 h-[2px] w-full bg-[var(--border)] md:h-[3px]"
            aria-hidden
          />
          <div className="mt-5 min-w-0 space-y-3 font-mono text-[13px] leading-snug text-surface md:mt-6 md:text-sm">
            <p className="text-muted">
              <span className="text-surface">·</span> Hemang Patel
            </p>
            <p className="text-muted">IT student, JCU Brisbane.</p>
            <p className="text-muted">I love Design & Data.</p>
            <nav className="flex flex-wrap gap-x-1 text-muted">
              {nav.map((item, i) => (
                <span key={item.href} className="inline-flex items-center gap-x-1">
                  {i > 0 ? <span className="text-[var(--border)]">·</span> : null}
                  <a
                    href={item.href}
                    className="text-surface underline decoration-[var(--border)] underline-offset-4 transition-colors hover:decoration-muted"
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </a>
                </span>
              ))}
            </nav>
          </div>
        </header>

        <div className="mt-10 h-[2px] w-full bg-[var(--border)]" aria-hidden />

        <div id="internships" className="mt-10 scroll-mt-6">
          <h2 className="font-mono text-[13px] font-normal uppercase tracking-wide text-muted md:text-sm">
            internships:
          </h2>
          <PortfolioRows rows={internships} />
        </div>

        <div className="my-10 h-[2px] w-full bg-[var(--border)]" aria-hidden />

        <div id="side-projects" className="scroll-mt-6">
          <h2 className="font-mono text-[13px] font-normal uppercase tracking-wide text-muted md:text-sm">
            side projects:
          </h2>
          <PortfolioRows rows={sideProjects} />
        </div>

        <div className="my-10 h-[2px] w-full bg-[var(--border)]" aria-hidden />

        <div id="dump" className="scroll-mt-6">
          <h2 className="font-mono text-[13px] font-normal uppercase tracking-wide text-muted md:text-sm">
            dump:
          </h2>
          <DumpGallery paths={dumpImagePaths} />
        </div>

        <footer className="mt-24 font-mono text-[12px] text-muted">
          © {new Date().getFullYear()} hemang patel.
        </footer>
      </div>
    </div>
  );
}
