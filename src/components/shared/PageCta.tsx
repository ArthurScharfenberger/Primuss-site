// src/components/shared/PageCta.tsx
import Link from "next/link";

type PageCtaProps = {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
  note?: string;
  points?: readonly string[];
};

export function PageCta({
  eyebrow = "Contato",
  title,
  description,
  buttonLabel,
  href = "/contato",
  note,
  points,
}: PageCtaProps) {
  return (
    <section className="relative border-t border-slate-800 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 px-6 py-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur sm:px-10 sm:py-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex w-fit items-center rounded-full bg-yellow-400 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-950">
                {eyebrow}
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {description}
              </p>

              {points && points.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-2 text-[12px] text-slate-200">
                  {points.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {note ? (
                <p className="mt-4 text-[11px] text-slate-400">{note}</p>
              ) : null}
            </div>

            <div className="flex flex-col items-start gap-2 md:items-end">
              <Link
                href={href}
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-yellow-300"
              >
                {buttonLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
