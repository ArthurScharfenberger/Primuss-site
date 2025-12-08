// src/app/sustentabilidade/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sustentabilidade | Primuss",
};

const PILARES = [
  {
    nome: "Ambiental",
    descricao:
      "Uso responsável de recursos, foco em eficiência energética e redução de resíduos no processo produtivo.",
    destaques: [
      "Programas de redução de sucata",
      "Reaproveitamento de insumos sempre que possível",
      "Busca constante por eficiência energética",
    ],
    icon: "ambiental" as const,
  },
  {
    nome: "Social",
    descricao:
      "Compromisso com a segurança, desenvolvimento e bem-estar das pessoas que fazem parte da Primuss.",
    destaques: [
      "Treinamentos e capacitações contínuas",
      "Foco em saúde e segurança do trabalho",
      "Ambiente ético e colaborativo",
    ],
    icon: "social" as const,
  },
  {
    nome: "Governança",
    descricao:
      "Gestão responsável, alinhada a normas e requisitos dos clientes, com foco em transparência e melhoria contínua.",
    destaques: [
      "Processos padronizados e auditáveis",
      "Indicadores de desempenho acompanhados",
      "Compromisso com normas e certificações",
    ],
    icon: "governanca" as const,
  },
];

const ACOES = [
  {
    titulo: "Gestão de resíduos e reaproveitamento",
    texto:
      "Controle de sucata gerada, separação adequada e busca por parceiros para reciclagem e reaproveitamento de materiais.",
  },
  {
    titulo: "Eficiência na utilização de recursos",
    texto:
      "Cuidados com consumo de energia, ar comprimido e fluidos industriais, sempre que possível priorizando soluções mais eficientes.",
  },
  {
    titulo: "Segurança e saúde ocupacional",
    texto:
      "Programas internos, treinamentos e procedimentos voltados à integridade física e bem-estar dos colaboradores.",
  },
  {
    titulo: "Melhoria contínua e indicadores",
    texto:
      "Monitoramento de indicadores de processo e qualidade para reduzir retrabalho, desperdícios e impactos desnecessários.",
  },
];

export default function SustentabilidadePage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(circle_at_top,_#1e293b,_#020617)]">
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="h-full w-full bg-[radial-gradient(circle_at_10%_0%,rgba(250,250,250,0.12),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(250,250,250,0.08),transparent_55%)]" />
        </div>


        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-xs font-medium tracking-wide text-yellow-300">
              Responsabilidade na produção · Compromisso com o futuro
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Sustentabilidade na Primuss
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              A Primuss entende sustentabilidade como a combinação entre cuidado
              com o meio ambiente, responsabilidade com as pessoas e gestão
              responsável do negócio. Nossas decisões de produção consideram
              impacto, eficiência e continuidade.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <TagChip>Uso responsável de recursos</TagChip>
              <TagChip>Segurança &amp; desenvolvimento das pessoas</TagChip>
              <TagChip>Melhoria contínua e conformidade</TagChip>
            </div>

            <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <MetricPill label="Foco" value="Eficiência e redução de perdas" />
              <MetricPill
                label="Pessoas"
                value="Ambiente seguro e colaborativo"
              />
              <MetricPill
                label="Gestão"
                value="Processos monitorados e auditáveis"
              />
            </div>
          </div>

          {/* Card lateral – resumo de compromissos, no mesmo mood das outras páginas */}
          <div className="flex-1">
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>Compromissos</span>
                <span>Ambiente · Pessoas · Processos</span>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="grid gap-4 sm:grid-cols-2">
                  <SummaryCard
                    titulo="Meio ambiente"
                    texto="Reduzir desperdícios e sucata, cuidar do consumo de recursos e priorizar soluções mais eficientes sempre que possível."
                  />
                  <SummaryCard
                    titulo="Pessoas"
                    texto="Garantir um ambiente de trabalho seguro, organizado e que permita desenvolvimento profissional."
                  />
                  <SummaryCard
                    titulo="Processos"
                    texto="Padronização, indicadores e análises constantes para reduzir retrabalhos e impactos desnecessários."
                    colSpan
                  />
                </div>

                <p className="mt-2 text-[11px] text-slate-400">
                  A sustentabilidade é um caminho contínuo: a Primuss busca
                  aprimorar práticas, projetos e indicadores ao longo do tempo,
                  alinhada às necessidades de clientes, colaboradores e
                  comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES DE ATUAÇÃO */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
              Pilares da nossa atuação em sustentabilidade
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              A atuação da Primuss em sustentabilidade está estruturada em
              pilares que orientam decisões diárias no ambiente de produção e na
              gestão do negócio.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PILARES.map((pilar) => (
            <article
              key={pilar.nome}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(148,163,184,0.18),transparent_55%)]" />
              </div>

              <div className="relative space-y-4">
                <div className="flex items-center gap-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/70 text-lime-300 group-hover:border-yellow-400/80 group-hover:bg-yellow-400/10 group-hover:text-yellow-100">
                    {pilar.icon === "ambiental" && <LeafIcon />}
                    {pilar.icon === "social" && <PeopleIcon />}
                    {pilar.icon === "governanca" && <ShieldIcon />}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {pilar.nome}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-200">
                  {pilar.descricao}
                </p>

                <ul className="mt-2 space-y-1.5 text-[13px] text-slate-200">
                  {pilar.destaques.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-yellow-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NA PRÁTICA – EXEMPLOS DE AÇÕES */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Sustentabilidade aplicada ao dia a dia
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                A Primuss incorpora sustentabilidade em decisões de processo,
                investimento e rotina, sempre que possível buscando reduzir
                impactos e tornar a operação mais eficiente.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {ACOES.map((acao) => (
              <div
                key={acao.titulo}
                className="rounded-3xl border border-slate-800 bg-slate-950/60 p-5 shadow-[0_0_30px_rgba(15,23,42,0.75)]"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {acao.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {acao.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Quer entender melhor como a Primuss trabalha sustentabilidade?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Nossa equipe está à disposição para explicar práticas adotadas,
              requisitos atendidos e como unimos desempenho produtivo com
              responsabilidade ambiental e social.
            </p>
          </div>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-md transition hover:border-yellow-300 hover:bg-yellow-300"
          >
            Falar com a equipe Primuss
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ========= COMPONENTES AUXILIARES ========= */

function TagChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-700 px-3 py-1">
      {children}
    </span>
  );
}

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

function SummaryCard({
  titulo,
  texto,
  colSpan,
}: {
  titulo: string;
  texto: string;
  colSpan?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-800 bg-slate-900/80 p-4 ${colSpan ? "sm:col-span-2" : ""
        }`}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {titulo}
      </p>
      <p className="mt-2 text-[13px] text-slate-200">{texto}</p>
    </div>
  );
}

/* ========= ÍCONES ========= */

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M5 19c4.5 0 9-3.5 11-7.5C17.8 9.4 18 7.8 18 6c-1.8 0-3.4.2-5.5 2C8.5 10 5 14.5 5 19Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 19c1.5-1.8 3.5-3.6 6-5" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="9" cy="9" r="3" />
      <path d="M4.5 19a4.5 4.5 0 0 1 9 0" strokeLinecap="round" />
      <path d="M16 11.5a2.5 2.5 0 1 0-1.5-4.5" />
      <path d="M14.5 19a4 4 0 0 1 4-4" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M12 4 6.5 6v5.5C6.5 15.6 8.7 18.3 12 20c3.3-1.7 5.5-4.4 5.5-8.5V6L12 4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 11.5 11.5 13 14 9.5" strokeLinecap="round" />
    </svg>
  );
}
