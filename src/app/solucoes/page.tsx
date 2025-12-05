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
      {/* HERO – alinhado com o estilo de Setores */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(circle_at_top,_#1e293b,_#020617)]">
        {/* textura/luzezinhas de fundo, igual vibe dos Setores */}
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="h-full w-full bg-[radial-gradient(circle_at_10%_0%,rgba(250,250,250,0.12),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(250,250,250,0.08),transparent_55%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
          {/* BLOCO DE TEXTO – tipografia e espaçamentos no padrão Setores */}
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-xs font-medium tracking-wide text-yellow-300">
              Usinagem seriada · Montagem · Ferramentaria
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Soluções em produção &amp; usinagem CNC
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Estrutura preparada para programas de fornecimento contínuo:
              centros de usinagem, tornos CNC, células dedicadas e
              ferramentaria própria para dispositivos de fixação e controle
              dimensional.
            </p>

            {/* chips igual mood dos Setores */}
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Produção seriada &amp; contratos de longo prazo
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Montagem de conjuntos &amp; subconjuntos
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Ferramentaria &amp; engenharia de processo
              </span>
            </div>

            {/* métricas – adaptadas ao visual da outra página */}
            <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <MetricPill label="Estrutura" value="> 5.000 m² área construída" />
              <MetricPill label="Equipe" value="+160 profissionais" />
              <MetricPill
                label="Segmentos"
                value="Automotivo · agrícola · aeronáutico · petroquímico"
              />
            </div>

            {/* CTAs – mesma linha visual dos botões de Setores */}
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-md transition hover:border-yellow-300 hover:bg-yellow-300"
              >
                Solicitar estudo de viabilidade
              </Link>
              <Link
                href="/clientes"
                className="inline-flex items-center text-sm font-medium text-yellow-300 underline-offset-2 hover:underline"
              >
                Ver clientes &amp; aplicações
              </Link>
            </div>
          </div>

          {/* PAINEL – “dashboard” espelhando o card da direita dos Setores */}
          <div className="flex-1">
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>Visão da produção</span>
                <span>Parque de máquinas &amp; células</span>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                {/* mini “linha de status” */}
                <div className="flex flex-wrap items-center gap-2">
                  <StatusDot label="Centros de usinagem" />
                  <StatusDot label="Tornos CNC" />
                  <StatusDot label="Eletroerosão &amp; ferramentaria" />
                </div>

                {/* bloco 1 – equipamentos */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Equipamentos
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-50">
                      12 principais máquinas CNC
                    </p>
                    <p className="mt-1 text-[11px] text-slate-300">
                      Centros verticais e horizontais, tornos CNC cabeçote
                      móvel/fixo e eletroerosão.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      Programas
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-50">
                      Médio e alto volume
                    </p>
                    <p className="mt-1 text-[11px] text-slate-300">
                      Foco em contratos de longo prazo, ramp-up faseado e
                      estabilidade de fornecimento.
                    </p>
                  </div>

                  {/* bloco de destaque – semelhante ao card amarelo dos Setores */}
                  <div className="col-span-2 rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-4 text-[11px] text-slate-100">
                    <p className="font-medium text-yellow-300">
                      Células dedicadas e controle dimensional reforçado
                    </p>
                    <p className="mt-1 text-slate-200">
                      A Primuss estrutura células específicas para peças
                      críticas, combinando usinagem CNC, montagem e
                      ferramentaria própria para garantir repetibilidade e
                      rastreabilidade.
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
        </div>
      </section>

      {/* CARROSSEL – mesmo tipo de container dos cards de Setores */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20 border-b border-slate-800">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
              Parque de máquinas &amp; capacidade instalada
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Centros de usinagem, tornos CNC, células dedicadas e recursos de
              ferramentaria que suportam programas contínuos de fornecimento.
            </p>
          </div>
          <p className="max-w-sm text-xs text-slate-400">
            Abaixo, alguns dos principais equipamentos disponíveis para produção
            seriada. Imagens ilustrativas do parque instalado.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-4 shadow-[0_0_40px_rgba(15,23,42,0.6)]">
          <EquipamentosCarousel maquinas={MAQUINAS} />
        </div>
      </section>

      {/* SOLUÇÕES INTEGRADAS – adaptado pro mesmo mood da grid de Setores */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20 border-b border-slate-800">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
              Da peça usinada ao conjunto final
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              A Primuss combina usinagem CNC, montagem e engenharia para
              entregar componentes, subconjuntos e soluções completas em linha
              com os requisitos do cliente.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 text-xs text-slate-200">
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
      </section>

      {/* CTA FINAL – mesmo estilo visual do CTA da página de Setores */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Tem um componente ou célula em mente?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Envie o desenho técnico, volume estimado, materiais e requisitos
              principais. Nossa equipe avalia a viabilidade, estrutura a rota
              de processo e sugere o melhor modelo de fornecimento.
            </p>
          </div>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-md transition hover:border-yellow-300 hover:bg-yellow-300"
          >
            Falar com a engenharia Primuss
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ========= COMPONENTES AUXILIARES ========= */

function StatusDot({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      <span>{label}</span>
    </div>
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
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(248,250,252,0.12),transparent_55%)]" />
      </div>

      <div className="relative space-y-3">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/70 text-yellow-300 group-hover:border-yellow-400/80 group-hover:bg-yellow-400/10">
            {icon === "part" && <PartIcon />}
            {icon === "assembly" && <AssemblyIcon />}
            {icon === "engineering" && <EngineeringIcon />}
          </div>
          <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
        </div>

        <ul className="space-y-1.5 text-[13px] text-slate-200">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 h-1 w-1 rounded-full bg-yellow-300" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ========= ÍCONES ========= */

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
