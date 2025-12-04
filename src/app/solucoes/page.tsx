// src/app/solucoes/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { EquipamentosCarousel } from "@/components/EquipamentosCarousel";

export const metadata: Metadata = {
  title: "Soluções & Produção | Primuss",
};

// 12 máquinas – conforme você enviou
const MAQUINAS = [
  {
    nome: "Centro de torneamento 2600Y",
    descricao: "Torneamento CNC com eixo Y para operações combinadas.",
    img: "/CentroDeTorneamento2600y.png",
  },
  {
    nome: "Centro de usinagem vertical",
    descricao: "Usinagem seriada com alta remoção de cavaco.",
    img: "/CentroDeUsinagemVertical.png",
  },
  {
    nome: "Centro de usinagem horizontal",
    descricao: "Produtividade em peças com múltiplas faces.",
    img: "/CentroUsinagemHorizontal.png",
  },
  {
    nome: "Centro de usinagem vertical (linha 2)",
    descricao: "Configuração dedicada para programas específicos.",
    img: "/CentroUsinagemVertical.png",
  },
  {
    nome: "Torno CNC cabeçote móvel",
    descricao: "Alta precisão em peças de pequeno diâmetro.",
    img: "/TornoCnCcomCabecoteMovel.png",
  },
  {
    nome: "Torno CNC cabeçote móvel 2",
    descricao: "Versão expandida para maior capacidade produtiva.",
    img: "/TornoCnccomcabecotemovel2.png",
  },
  {
    nome: "Torno CNC Doosan Lynx 2100",
    descricao: "Compacto, rápido e ideal para produção contínua.",
    img: "/TornoCNCDoosanLynx2100.png",
  },
  {
    nome: "Centro de torneamento CNC",
    descricao: "Linha seriada de torneamento de precisão.",
    img: "/CentrodeTorneamento.png",
  },
  {
    nome: "Eletroerosão a fio",
    descricao: "Ferramentaria de alta precisão para geometrias finas.",
    img: "/EletroerosaoAFio.png",
  },
  {
    nome: "Eletroerosão por penetração",
    descricao: "Ferramentas especiais e cavidades complexas.",
    img: "/EletroerosaoPenetracao.png",
  },
  {
    nome: "Centro de usinagem Fanuc",
    descricao: "Estabilidade dimensional em ciclos contínuos.",
    img: "/Fanuc.png",
  },
  {
    nome: "Centro LG1000",
    descricao: "Estrutura robusta para peças de maior porte.",
    img: "/LG1000.png",
  },
];

export default function SolucoesPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* HERO – PRODUÇÃO / EQUIPAMENTOS */}
      <section className="border-b border-slate-900 bg-[radial-gradient(circle_at_top,_#020617,_#020617)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center">
          {/* BLOCO DE TEXTO */}
          <div className="max-w-xl">
            {/* etiqueta topo – mesmo mood da Qualidade */}
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-300 ring-1 ring-slate-700/80">
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[9px] tracking-[0.2em] text-[#FFE500]">
                35 anos
              </span>
              <span className="hidden sm:inline">
                Parque de produção & soluções
              </span>
              <span className="sm:hidden">Parque de produção</span>
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-50 sm:text-[32px]">
              Usinagem CNC, montagem e ferramentaria para peças técnicas.
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Estrutura preparada para programas de fornecimento contínuo:
              centros de usinagem, tornos CNC, células dedicadas e
              ferramentaria própria para dispositivos de fixação e controle
              dimensional.
            </p>

            {/* métricas */}
            <div className="mt-6 grid gap-3 text-[11px] text-slate-300 sm:grid-cols-3">
              <MetricPill label="Estrutura" value="> 5.000 m² área construída" />
              <MetricPill label="Equipe" value="+160 profissionais" />
              <MetricPill
                label="Segmentos"
                value="Automotivo · agrícola · aeronáutico · petroquímico"
              />
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3 text-xs">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-[#FFE500] px-4 py-2 font-semibold text-slate-900 shadow-lg shadow-yellow-500/30 transition hover:-translate-y-0.5 hover:shadow-yellow-400/40"
              >
                Solicitar estudo de viabilidade →
              </Link>
              <Link
                href="/clientes"
                className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 font-semibold text-slate-100 underline-offset-4 transition hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-900"
              >
                Ver clientes & aplicações
              </Link>
            </div>
          </div>

          {/* PAINEL – VISTA DA PRODUÇÃO */}
          <div className="relative flex-1">
            {/* brilho de fundo */}
            <div className="pointer-events-none absolute -inset-10 -z-10 blur-3xl">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(250,250,210,0.08),transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.22),transparent_60%)]" />
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/85 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur-sm">
              {/* header compacto */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">
                    <SparkIcon />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                      Vista da produção
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-200">
                      Células CNC · montagem · logística interna
                    </p>
                  </div>
                </div>
                <div className="hidden gap-2 text-[9px] text-slate-300 sm:flex">
                  <LedDot label="CNC" />
                  <LedDot label="Montagem" />
                  <LedDot label="Ferramentaria" />
                </div>
              </div>

              {/* display principal – versão mais espaçada */}
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/95 p-[1px]">
                <div className="relative w-full overflow-hidden rounded-[14px] bg-slate-950 px-4 py-5 space-y-5">
                  {/* textura de fundo bem suave */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[length:18px_32px] opacity-25" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(251,191,36,0.12),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(56,189,248,0.18),transparent_60%)]" />

                  <div className="relative space-y-5 text-[10px]">
                    {/* título interno */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-semibold text-slate-100">
                        Principais equipamentos disponíveis para manufatura
                      </p>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1 text-[9px] font-semibold text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        Produção ativa
                      </span>
                    </div>

                    {/* três blocos com mais respiro */}
                    <div className="grid gap-4 text-[10px] text-slate-200 sm:grid-cols-3">
                      <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 px-3 py-3 space-y-1">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                          Centros de usinagem
                        </p>
                        <p className="font-medium leading-relaxed">
                          Verticais e horizontais · CNC 3 eixos para programas
                          seriados.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 px-3 py-3 space-y-1">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                          Tornos CNC
                        </p>
                        <p className="font-medium leading-relaxed">
                          Cabeçote fixo e móvel · linha seriada com set-up
                          padronizado.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 px-3 py-3 space-y-1">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                          Eletroerosão
                        </p>
                        <p className="font-medium leading-relaxed">
                          Fio e penetração · ferramentaria própria para
                          dispositivos e ferramentas especiais.
                        </p>
                      </div>
                    </div>

                    {/* célula destacada, separada com linha */}
                    <div className="space-y-2 border-t border-slate-800/70 pt-3">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                        Célula destacada
                      </p>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full w-[82%] bg-sky-400"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-[9px] text-slate-300">
                        Centro de torneamento 2600Y · célula dedicada para peças
                        críticas com controle dimensional reforçado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* rodapé do painel – três bullets simples */}
              <div className="mt-6 grid gap-4 text-[10px] text-slate-300 sm:grid-cols-3">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                    Programas
                  </p>
                  <p className="mt-1 leading-relaxed">
                    Médio e alto volume, contratos de longo prazo, ramp-up
                    faseado.
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                    Materiais
                  </p>
                  <p className="mt-1 leading-relaxed">
                    Aços carbono e ligados, inox, alumínio e ligas especiais
                    conforme normas e especificações do cliente.
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                    Engenharia
                  </p>
                  <p className="mt-1 leading-relaxed">
                    Projeto de dispositivos, definição de rota de processo e
                    apoio ao plano de controle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARROSSEL ANIMADO – 12 EQUIPAMENTOS (DARK, ESTILO QUALIDADE) */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                Parque de máquinas
              </p>
              <p className="mt-2 text-lg font-medium text-slate-50">
                Principais equipamentos disponíveis para produção seriada.
              </p>
            </div>
            <p className="max-w-md text-xs text-slate-400">
              Centros de usinagem, tornos CNC, células dedicadas e recursos de
              ferramentaria que suportam programas contínuos de fornecimento.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-6 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
            <EquipamentosCarousel maquinas={MAQUINAS} />
          </div>
        </div>
      </section>

      {/* SOLUÇÕES INTEGRADAS – MESMO MOOD DARK */}
      <section className="border-b border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                Soluções integradas
              </p>
              <p className="mt-2 text-lg font-medium text-slate-50">
                Do equipamento à solução final para o cliente.
              </p>
            </div>
            <p className="max-w-md text-xs text-slate-400">
              Componentes usinados, conjuntos montados e desenvolvimento
              conjunto de rota de processo com a engenharia do cliente.
            </p>
          </div>

          <div className="grid gap-5 text-xs text-slate-200 md:grid-cols-3">
            <SolutionCard
              title="Componentes usinados em série"
              icon="part"
              bullets={[
                "Peças em aço, inox, alumínio e ligas especiais.",
                "Rotas CNC ajustadas para volume e estabilidade.",
                "Tolerâncias compatíveis com aplicações críticas.",
              ]}
            />
            <SolutionCard
              title="Conjuntos & subconjuntos montados"
              icon="assembly"
              bullets={[
                "Montagem de conjuntos mecânicos e roscados.",
                "Torques controlados e dispositivos dedicados.",
                "Identificação e embalagem técnica por programa.",
              ]}
            />
            <SolutionCard
              title="Engenharia & desenvolvimento conjunto"
              icon="engineering"
              bullets={[
                "Definição de rota de processo com o cliente.",
                "Análise de fabricabilidade e custo.",
                "Prototipagem e pré-série já alinhadas à produção.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL – alinhado com estilo da Qualidade */}
      <section className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 px-6 py-8 shadow-2xl shadow-slate-950/80 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                Próximo passo
              </p>
              <p className="mt-2 text-lg font-medium text-slate-50">
                Conecte a sua demanda ao nosso parque de produção.
              </p>
              <p className="mt-2 max-w-xl text-xs text-slate-300">
                Envie desenhos, volumes, materiais e cronograma desejado. A
                equipe técnica da Primuss avalia a melhor configuração de
                processo e modelo de fornecimento.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-3 text-xs md:mt-0 md:text-right">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-[#FFE500] px-4 py-2 font-semibold text-slate-900 shadow-lg shadow-yellow-500/30 transition hover:-translate-y-0.5 hover:shadow-yellow-400/50"
              >
                Falar com a engenharia →
              </Link>
              <Link
                href="/clientes"
                className="text-[11px] font-semibold text-slate-200 underline-offset-4 hover:underline"
              >
                Ver clientes atendidos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========= COMPONENTES AUXILIARES ========= */

function LedDot({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1 text-[9px] text-slate-300">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
      <span>{label}</span>
    </div>
  );
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-900/80 px-3 py-2 ring-1 ring-slate-800/80">
      <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-[11px] text-slate-100">{value}</p>
    </div>
  );
}

function SolutionCard({
  title,
  bullets,
  icon,
}: {
  title: string;
  bullets: string[];
  icon: "part" | "assembly" | "engineering";
}) {
  return (
    <div className="group flex flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/60 transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-sky-500/30">
      <div className="flex items-center gap-2">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-800 text-sky-400 group-hover:bg-sky-500/10 group-hover:text-sky-300">
          {icon === "part" && <PartIcon />}
          {icon === "assembly" && <AssemblyIcon />}
          {icon === "engineering" && <EngineeringIcon />}
        </div>
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      </div>
      <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 h-1 w-1 rounded-full bg-sky-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ========= ICONES ========= */

function SparkIcon() {
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
        d="M12 2.5 13.4 8l4.6-1.4L14.5 11l3.5 3.4L13 13l-1 4.8-1-4.8-5 1.4L9 11 6 6.6 10.6 8 12 2.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="2"
        ry="2"
        strokeLinecap="round"
      />
      <path d="M9 9h6M9 13h3" strokeLinecap="round" />
    </svg>
  );
}

function AssemblyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="8" cy="8" r="3.2" />
      <circle cx="16" cy="16" r="3.2" />
      <path d="M10.3 10.3 13.7 13.7" strokeLinecap="round" />
    </svg>
  );
}

function EngineeringIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="3.2" />
      <path
        d="M4 12h1.9M18.1 12H20M12 4v1.9M12 18.1V20M6.4 6.4l1.3 1.3M16.3 16.3l1.3 1.3M17.6 6.4l-1.3 1.3M7.7 16.3 6.4 17.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
