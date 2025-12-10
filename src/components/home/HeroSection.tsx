// src/components/home/HeroSection.tsx
import Link from "next/link";
import Image from "next/image";
import { FactoryIcon } from "./icons";

export function HeroSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 lg:flex-row lg:items-center">
        {/* LADO ESQUERDO */}
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center rounded-full bg-[#FFE500] px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-[#111111] shadow">
            USINAGEM · ENGENHARIA · QUALIDADE
          </p>

          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Componentes usinados com precisão
              <span className="block text-slate-200">
                para aplicações industriais críticas.
              </span>
            </h1>

            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              Soluções de usinagem CNC e montagem de conjuntos para setores que
              exigem confiabilidade, repetibilidade e controle dimensional.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contato"
              className="rounded-full bg-[#FFE500] px-5 py-2.5 text-sm font-semibold text-[#111111] shadow-md transition hover:bg-[#FFF48A]"
            >
              Falar com o time comercial
            </Link>

            <Link
              href="/quem-somos"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-white/10"
            >
              Conhecer a Primuss
            </Link>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Experiência consolidada em usinagem seriada.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>ISO 9001:2015 e laboratório dimensional.</span>
            </div>
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl">
              <Image
                src="/banner.png"
                alt="Vista do parque fabril da Primuss"
                fill
                className="object-cover scale-[1.2] object-[45%_55%]"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/5 to-transparent" />
            </div>

            <div className="pointer-events-none absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-slate-900/95 px-4 py-3 text-xs text-slate-100 shadow-xl backdrop-blur">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE500] text-slate-900 shadow-sm">
                <FactoryIcon />
              </div>
              <div>
                <p className="font-semibold">Parque fabril estruturado</p>
                <p className="text-[11px] text-slate-400">
                  Usinagem CNC e montagem seriada.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute -top-6 right-4 rounded-full bg-[#FFE500] px-3 py-2 text-[11px] font-semibold text-[#111111] shadow-xl">
              Foco em qualidade e entrega
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
