// src/components/home/SectorsSection.tsx
import Link from "next/link";
import { AeroIcon, DefenseIcon, GearIcon, TractorIcon } from "./icons";

export function SectorsSection() {
  const sectors = [
    {
      title: "Automotivo & motopeças",
      description:
        "Peças com requisitos rigorosos de desempenho e rastreabilidade.",
      icon: <GearIcon />,
    },
    {
      title: "Agronegócio",
      description:
        "Componentes robustos para máquinas e implementos agrícolas.",
      icon: <TractorIcon />,
    },
    {
      title: "Aeroespacial",
      description: "Tolerâncias apertadas e materiais especiais.",
      icon: <AeroIcon />,
    },
    {
      title: "Segurança & defesa",
      description:
        "Confiabilidade em componentes para aplicações críticas.",
      icon: <DefenseIcon />,
    },
  ];

  return (
    <section
      className="border-b border-slate-200 bg-white"
      id="setores-atendidos"
    >
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-8 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Setores atendidos
          </h2>
          <p className="mt-2 text-lg font-medium text-slate-900">
            Presença em diferentes segmentos da indústria.
          </p>
          <p className="mt-2 mx-auto max-w-xl text-xs text-slate-500">
            A experiência da Primuss permite atender mercados com requisitos
            técnicos distintos, mantendo qualidade, confiabilidade e
            competitividade.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-left shadow-sm"
            >
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-700">
                {sector.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {sector.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/setores-atendidos"
            className="text-xs font-semibold text-slate-700 underline-offset-4 hover:underline"
          >
            Ver todos os setores →
          </Link>
        </div>
      </div>
    </section>
  );
}
