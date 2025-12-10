// src/components/home/SolutionsSection.tsx
import Link from "next/link";
import { AssemblyIcon, CncIcon, ProcessIcon, Dot } from "./icons";

export function SolutionsSection() {
  const solutions = [
    {
      title: "Usinagem CNC seriada",
      description:
        "Produção estável, alta repetibilidade e controle dimensional.",
      icon: <CncIcon />,
    },
    {
      title: "Montagem técnica",
      description: "Montagem com torque controlado, testes e rastreabilidade.",
      icon: <AssemblyIcon />,
    },
    {
      title: "Engenharia de processo",
      description: "Desenvolvimento de rota, dispositivos e parâmetros.",
      icon: <ProcessIcon />,
    },
  ];

  return (
    <section
      className="border-b border-slate-800 bg-slate-950 text-slate-50"
      id="solucoes"
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Soluções industriais
            </h2>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-[#FFE500]" />
            <p className="mt-2 text-lg font-medium text-slate-50">
              Usinagem CNC, montagem e engenharia.
            </p>
          </div>

          <p className="max-w-md text-xs text-slate-300">
            Desde o desenvolvimento até a produção seriada, entregamos
            componentes com precisão, repetibilidade e confiabilidade.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-[#FFE500]/80"
            >
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-800 text-slate-50">
                    {solution.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Solução Primuss
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-slate-50">
                  {solution.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  {solution.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <Dot /> Processo controlado
                </span>
                <span className="inline-flex items-center gap-1">
                  <Dot /> Documentação técnica
                </span>
                <span className="inline-flex items-center gap-1">
                  <Dot /> Foco em prazo
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/solucoes"
            className="text-xs font-semibold text-slate-100 underline-offset-4 hover:underline"
          >
            Ver capacidades completas →
          </Link>
        </div>
      </div>
    </section>
  );
}
