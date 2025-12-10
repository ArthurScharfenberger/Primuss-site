// src/components/home/QualitySustainabilitySection.tsx
import Link from "next/link";
import { LabIcon, LeafIcon } from "./icons";

export function QualitySustainabilitySection() {
  return (
    <section className="border-b border-slate-200 bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Qualidade & sustentabilidade
          </h2>
          <p className="mt-3 text-2xl font-semibold text-slate-50">
            Qualidade, rastreabilidade e responsabilidade ambiental.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-slate-300">
            Controle dimensional, processos auditáveis e utilização de energia
            renovável compõem a base das operações da Primuss.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.55)]">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-emerald-400">
                <LabIcon />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Gestão da qualidade
                </p>
                <p className="text-[11px] text-slate-400">ISO 9001:2015</p>
              </div>
            </div>

            <p className="text-sm font-medium text-slate-50">
              Processos controlados e suporte metrológico em toda a produção.
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              Garantia de conformidade, repetibilidade e documentação completa.
            </p>

            <Link
              href="/qualidade"
              className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-[#FFE500] underline-offset-4 hover:underline"
            >
              Ver detalhes →
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">
                <LeafIcon />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  Responsabilidade ambiental
                </p>
                <p className="text-[11px] text-slate-400">Energia renovável</p>
              </div>
            </div>

            <p className="text-sm font-medium text-slate-50">
              Compromisso com o uso eficiente de recursos e matriz energética
              limpa.
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              Energia incentivada, redução de emissões e gestão de resíduos.
            </p>

            <Link
              href="/sustentabilidade"
              className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-100 underline-offset-4 hover:underline"
            >
              Ver mais →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
