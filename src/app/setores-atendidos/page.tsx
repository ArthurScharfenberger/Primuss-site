import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Setores atendidos | Primuss",
};

type Setor = {
  nome:
    | "Automotivo"
    | "Agrícola"
    | "Energia & Geração"
    | "Máquinas & Equipamentos"
    | "Linha Branca & Bens de Consumo"
    | "Projetos Especiais";
  descricao: string;
  destaques: readonly string[];
};

const SETORES: readonly Setor[] = [
  {
    nome: "Automotivo",
    descricao: "Peças usinadas para freios, eixos e transmissões.",
    destaques: ["Lotes médios/grandes", "Rastreio por lote", "Parceria contínua"],
  },
  {
    nome: "Agrícola",
    descricao: "Peças para máquinas e implementos em uso severo.",
    destaques: ["Alta resistência", "Tratamentos", "Controle dimensional"],
  },
  {
    nome: "Energia & Geração",
    descricao: "Componentes para geração e sistemas auxiliares.",
    destaques: ["Baixa tolerância", "Docs completos", "Normas"],
  },
  {
    nome: "Máquinas & Equipamentos",
    descricao: "Conjuntos para máquinas e linhas de montagem.",
    destaques: ["Montagem", "Validação", "Coengenharia"],
  },
  {
    nome: "Linha Branca & Bens de Consumo",
    descricao: "Peças seriadas com repetibilidade e acabamento.",
    destaques: ["Processo estável", "Ciclo otimizado", "Controle estatístico"],
  },
  {
    nome: "Projetos Especiais",
    descricao: "Sob medida, do protótipo à pré-série.",
    destaques: ["Desenvolvimento", "Protótipo/pré-série", "Flexibilidade"],
  },
];

function IconCar() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 13.5V11a2 2 0 0 1 1.5-1.94l2.6-.66 1.3-2.6A2.5 2.5 0 0 1 10.64 4h2.72a2.5 2.5 0 0 1 2.24 1.4l1.3 2.6 2.6.66A2 2 0 0 1 21 11v2.5" />
      <path d="M6 17.5h.01M18 17.5h.01" />
      <path d="M5 17.5a2 2 0 1 0 4 0M15 17.5a2 2 0 1 0 4 0" />
      <path d="M3 13.5h18" />
    </svg>
  );
}

function IconTractor() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14V9h6l2 3h6v5H9" />
      <path d="M7.5 17.5a2.5 2.5 0 1 0 0 .01" />
      <path d="M17.5 17.5a2.5 2.5 0 1 0 0 .01" />
      <path d="M6 9V6h4" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  );
}

function IconFactory() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21V10l6 3V10l6 3V8l6 3v10" />
      <path d="M3 21h18" />
      <path d="M7 21v-6h4v6" />
    </svg>
  );
}

function IconAppliance() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 16h.01M12 16h.01M15 16h.01" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 9 21 3l-3 7" />
      <path d="M10 14 3 21l7-3" />
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M7 17c-1.5.5-3 .5-4 0 .5-1 0-2.5 0-4 1.5-.5 3-.5 4 0" />
    </svg>
  );
}

const ICONS: Record<Setor["nome"], { Icon: () => JSX.Element; tone: string }> = {
  Automotivo: { Icon: IconCar, tone: "text-amber-700 bg-amber-50 ring-amber-200" },
  Agrícola: { Icon: IconTractor, tone: "text-emerald-700 bg-emerald-50 ring-emerald-200" },
  "Energia & Geração": { Icon: IconBolt, tone: "text-sky-700 bg-sky-50 ring-sky-200" },
  "Máquinas & Equipamentos": { Icon: IconFactory, tone: "text-indigo-700 bg-indigo-50 ring-indigo-200" },
  "Linha Branca & Bens de Consumo": {
    Icon: IconAppliance,
    tone: "text-violet-700 bg-violet-50 ring-violet-200",
  },
  "Projetos Especiais": { Icon: IconRocket, tone: "text-rose-700 bg-rose-50 ring-rose-200" },
};


function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-3">
      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-[12px] text-slate-100">{value}</p>
    </div>
  );
}


function StatusDot({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      <span>{label}</span>
    </div>
  );
}


export default function SetoresAtendidosPage() {
  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-950 text-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 lg:flex-row lg:items-center">
          {/* LADO ESQUERDO – TEXTO */}
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center rounded-full bg-[#FFE500] px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-[#111111] shadow">
              PRECISÃO · SETORES · APLICAÇÕES
            </p>

            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Setores que atendemos
              </h1>

              <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                Atuamos em segmentos com exigência de repetibilidade, tolerâncias controladas e rastreabilidade —
                do protótipo à produção seriada.
              </p>
            </div>

            {/* chips – enxutos, padrão Home */}
            <div className="flex flex-wrap gap-3 text-[11px] text-slate-300">
              <span className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1">Automotivo · Agrícola · Energia</span>
              <span className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1">Máquinas · Linha Branca</span>
              <span className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1">Projetos sob medida</span>
            </div>

            {/* métricas – no padrão de chips da Home */}
            <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <MetricPill label="Cobertura" value="6 setores atendidos" />
              <MetricPill label="Suporte" value="Atendimento técnico" />
              <MetricPill label="Entrega" value="Prazos e qualidade" />
            </div>

            {/* CTAs – igual vibe da Home */}
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-[#FFE500] px-5 py-2.5 text-sm font-semibold text-[#111111] shadow-md transition hover:bg-[#FFF48A]"
              >
                Falar com a Primuss
              </Link>
              <Link
                href="/solucoes"
                className="inline-flex items-center text-xs font-semibold text-slate-100 underline-offset-4 hover:underline"
              >
                Ver soluções →
              </Link>
            </div>
          </div>

          {/* LADO DIREITO – PAINEL SIMPLIFICADO, padrão card da Home */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 px-5 py-6 text-slate-50 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Visão da produção
              </p>

              <div className="mt-4 space-y-3 text-xs text-slate-300">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusDot label="Automotivo" />
                  <StatusDot label="Agrícola" />
                  <StatusDot label="Energia" />
                  <StatusDot label="Máquinas" />
                  <StatusDot label="Linha Branca" />
                  <StatusDot label="Projetos especiais" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Equipamentos
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-50">
                      Tolerâncias e repetibilidade
                    </p>
                    <p className="mt-2 text-[11px] text-slate-300">
                      Centros verticais e horizontais, tornos CNC cabeçote
                      móvel/fixo e eletroerosão.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Programas
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-50">
                      Do protótipo à série
                    </p>
                    <p className="mt-2 text-[11px] text-slate-300">
                      Foco em contratos de longo prazo, ramp-up faseado e
                      estabilidade de fornecimento.
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-[#FFE500]/30 bg-[#FFE500]/5 p-4 text-[11px] text-slate-100">
                  <p className="font-medium text-[#FFE500]">
                    Como garantimos consistência
                  </p>
                  <p className="mt-1 text-slate-200">
                    A Primuss estrutura células específicas para peças críticas,
                    combinando usinagem CNC, montagem e ferramentaria própria
                    para garantir repetibilidade e rastreabilidade.
                  </p>
                  <p className="mt-2 text-slate-300">
                    Centro de torneamento 2600Y · células de usinagem
                    vertical/horizontal · eletroerosão para ferramentas
                    especiais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SETORES */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Onde nossas peças estão presentes
            </h2>
            <p className="max-w-2xl text-sm text-slate-600">
              Atendemos setores com exigência de tolerância, materiais e volume — com processo estável e segurança.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SETORES.map((setor) => {
              const { Icon, tone } = ICONS[setor.nome];

              return (
                <article
                  key={setor.nome}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md hover:border-slate-200"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-xl ring-1 ring-inset ${tone}`}
                    >
                      <Icon />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {setor.nome}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                      {setor.descricao}
                    </p>

                    <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs">
                      {setor.destaques.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-700 transition group-hover:border-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contato"
                      className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-slate-950"
                    >
                      Falar com a Primuss <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-slate-800 bg-slate-950 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Vamos falar do seu próximo lote
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Envie desenho, volume e prazo. Retornamos com um direcionamento rápido e objetivo.
              </p>
            </div>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full border border-yellow-300 bg-yellow-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-yellow-200 hover:border-yellow-200"
            >
              Falar com a equipe Primuss
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
