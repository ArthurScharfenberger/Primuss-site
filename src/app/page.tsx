// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <SectorsSection />
      <QualitySustainabilitySection />
      <ClientsTeaser />
      <FinalCta />
    </>
  );
}

function HeroSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 lg:flex-row lg:items-center">
        {/* LADO ESQUERDO – TEXTO */}
        <div className="flex-1 space-y-6">
          {/* Badge com amarelo Primuss */}
          <p className="inline-flex items-center rounded-full bg-[#FFE500] px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-[#111111] shadow">
            USINAGEM · PRECISÃO · QUALIDADE
          </p>

          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Usinagem de alta performance
              <span className="block text-slate-200">
                para indústrias que não podem parar.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              A Primuss atua na usinagem seriada e montagem de peças técnicas,
              atendendo setores como automotivo, agronegócio, aeroespacial,
              segurança e defesa, com estrutura própria e foco em qualidade
              certificada.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Botão principal amarelo */}
            <Link
              href="/contato"
              className="rounded-full bg-[#FFE500] px-5 py-2.5 text-sm font-semibold text-[#111111] shadow-md transition hover:bg-[#FFF48A]"
            >
              Falar com o time comercial
            </Link>

            {/* Botão secundário escuro */}
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
              <span>Mais de 30 anos de experiência em usinagem</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>
                Certificação ISO 9001 e laboratório dimensional próprio
              </span>
            </div>
          </div>
        </div>

        {/* LADO DIREITO – CARD VISUAL */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            {/* CARD PRINCIPAL COM IMAGEM */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl">
              <Image
                src="/banner.png"
                alt="Vista do parque fabril da Primuss"
                fill
                // Zoom + posicionamento levemente pra direita e mais pra cima
                className="object-cover scale-[2.8] object-[60%_160%]"
                priority
              />

              {/* overlay leve */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/5 to-transparent" />
            </div>

            {/* CARD FLUTUANTE INFERIOR */}
            <div className="pointer-events-none absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-slate-900/95 px-4 py-3 text-xs text-slate-100 shadow-xl backdrop-blur">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFE500] text-slate-900 shadow-sm">
                <FactoryIcon />
              </div>
              <div>
                <p className="font-semibold">Parque fabril estruturado</p>
                <p className="text-[11px] text-slate-400">
                  Capacidade para usinagem seriada e montagem de conjuntos.
                </p>
              </div>
            </div>


            {/* Badge flutuante com amarelo Primuss */}
            <div className="pointer-events-none absolute -top-6 right-4 rounded-full bg-[#FFE500] px-3 py-2 text-[11px] font-semibold text-[#111111] shadow-xl">
              Foco em qualidade e prazo de entrega
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    {
      label: "Anos de atuação em usinagem",
      value: "30+",
      icon: <FactoryIcon />,
    },
    {
      label: "Estrutura fabril",
      value: "5.000 m²",
      icon: <BuildingIcon />,
    },
    {
      label: "Áreas de atuação",
      value: "Auto, Agro, Aero, Defesa",
      icon: <TargetIcon />,
    },
    {
      label: "Foco",
      value: "Qualidade & Prazo",
      icon: <ShieldIcon />,
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              A Primuss em números
            </h2>
            <p className="text-lg font-medium text-slate-900">
              Estrutura industrial preparada para grandes desafios.
            </p>
          </div>
          <p className="max-w-md text-xs text-slate-500">
            Nossos números refletem a evolução contínua da empresa, combinando
            experiência, capacidade produtiva e compromisso com os clientes.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-100 bg-white px-5 py-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#FFE500]/70 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-50 text-slate-700">
                  {stat.icon}
                </div>
                <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Primuss
                </span>
              </div>
              <p className="text-2xl font-semibold text-slate-900">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  const solutions = [
    {
      title: "Usinagem CNC seriada",
      description:
        "Processos estáveis e repetíveis para produção em alto volume, com foco em precisão dimensional e produtividade.",
      icon: <CncIcon />,
    },
    {
      title: "Montagem de conjuntos e subconjuntos",
      description:
        "Montagem de peças e componentes, com rastreabilidade, controle de torque e testes de funcionalidade.",
      icon: <AssemblyIcon />,
    },
    {
      title: "Desenvolvimento de processo",
      description:
        "Apoio técnico desde a análise de desenho até a definição de rota, ferramentas, dispositivos e parâmetros.",
      icon: <ProcessIcon />,
    },
  ];

  return (
    <section
      className="border-b border-slate-800 bg-slate-950 text-slate-50"
      id="solucoes"
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Soluções em usinagem
            </h2>
            <div className="mt-2 h-0.5 w-10 rounded-full bg-[#FFE500]" />
            <p className="mt-2 text-lg font-medium text-slate-50">
              Do desenvolvimento à produção seriada, em um único parceiro.
            </p>
          </div>
          <p className="max-w-md text-xs text-slate-300">
            Atuamos em toda a cadeia de usinagem seriada, oferecendo suporte
            técnico, engenharia de processo, usinagem CNC e montagem de
            conjuntos. Sempre com foco em estabilidade de fornecimento e
            qualidade dimensional.
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
            Ver detalhes das capacidades de usinagem →
          </Link>
        </div>
      </div>
    </section>
  );
}


function SectorsSection() {
  const sectors = [
    {
      title: "Automotivo & motopeças",
      description:
        "Componentes críticos com exigência de alto desempenho, segurança e rastreabilidade.",
      icon: <GearIcon />,
    },
    {
      title: "Agronegócio",
      description:
        "Peças para máquinas e implementos agrícolas, focando em robustez e durabilidade.",
      icon: <TractorIcon />,
    },
    {
      title: "Aeroespacial",
      description:
        "Usinagem de peças com tolerâncias apertadas e rigoroso controle dimensional.",
      icon: <AeroIcon />,
    },
    {
      title: "Segurança & defesa",
      description:
        "Componentes para aplicações táticas e de defesa, com foco em confiabilidade.",
      icon: <DefenseIcon />,
    },
  ];

  return (
    <section
      className="border-b border-slate-200 bg-white"
      id="setores-atendidos"
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Setores atendidos
          </h2>
          <p className="mt-2 text-lg font-medium text-slate-900">
            Presença em diferentes segmentos da indústria.
          </p>
          <p className="mt-2 text-xs text-slate-500 max-w-xl mx-auto">
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
            Ver mais detalhes dos segmentos →
          </Link>
        </div>
      </div>
    </section>
  );
}

function QualitySustainabilitySection() {
  return (
    <section className="border-b border-slate-200 bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Qualidade & sustentabilidade
          </h2>
          <p className="mt-2 text-lg font-medium text-slate-50">
            Certificação, laboratório próprio e energia de fonte renovável.
          </p>
          <p className="mt-3 text-xs text-slate-300 max-w-xl">
            A Primuss mantém um sistema de gestão da qualidade robusto, com
            certificação ISO, laboratório dimensional e cultura voltada à
            melhoria contínua. Além disso, parte da energia consumida na
            operação industrial é proveniente de fontes renováveis, reduzindo o
            impacto ambiental.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-800 text-emerald-400">
                  <LabIcon />
                </div>
                <p className="text-xs font-semibold text-emerald-400">
                  Gestão da qualidade
                </p>
              </div>
              <p className="text-sm font-medium text-slate-50">
                ISO 9001 & laboratório dimensional
              </p>
              <p className="mt-2 text-[11px] text-slate-400">
                Processos mapeados, inspeção em todas as etapas e uso de
                equipamentos de medição de alto desempenho.
              </p>
              <Link
                href="/qualidade"
                className="mt-3 inline-block text-[11px] font-semibold text-slate-100 underline-offset-4 hover:underline"
              >
                Ver detalhes da qualidade →
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-800 text-sky-400">
                  <LeafIcon />
                </div>
                <p className="text-xs font-semibold text-sky-400">
                  Responsabilidade ambiental
                </p>
              </div>
              <p className="text-sm font-medium text-slate-50">
                Energia incentivada & redução de CO₂
              </p>
              <p className="mt-2 text-[11px] text-slate-400">
                Adoção de energia de fontes renováveis e iniciativas para
                otimizar o uso de recursos naturais.
              </p>
              <Link
                href="/sustentabilidade"
                className="mt-3 inline-block text-[11px] font-semibold text-slate-100 underline-offset-4 hover:underline"
              >
                Ver panorama sustentável →
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-200 shadow-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            COMO TRABALHAMOS
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 text-emerald-400">
                <Dot />
              </span>
              <p>
                Engenheiros e equipe técnica atuando junto ao cliente desde o
                desenvolvimento, garantindo o melhor custo-benefício.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 text-sky-400">
                <Dot />
              </span>
              <p>
                Processos padronizados, indicadores de performance e foco em
                estabilidade de produção.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-800 text-amber-400">
                <Dot />
              </span>
              <p>
                Cultura de segurança, organização e melhoria contínua no chão de
                fábrica.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ClientsTeaser() {
  const tags = ["Automotivo", "Agronegócio", "Aeroespacial", "Defesa"];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Clientes & parcerias
            </h2>
            <p className="mt-2 text-lg font-medium text-slate-900">
              Confiança construída ao longo do tempo.
            </p>
            <p className="mt-2 text-xs text-slate-500 max-w-md">
              A Primuss atende empresas de referência em seus segmentos, com
              relacionamento de longo prazo baseado em qualidade, prazo e
              suporte técnico.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1"
              >
                <Dot />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Link
            href="/clientes"
            className="text-xs font-semibold text-slate-700 underline-offset-4 hover:underline"
          >
            Ver lista de clientes e cases →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-slate-900 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Próximo passo
              </p>
              <p className="mt-2 text-lg font-medium text-slate-50">
                Vamos falar sobre o seu projeto?
              </p>
              <p className="mt-2 text-xs text-slate-300 max-w-md">
                Envie seu desenho, especificação ou demanda de produção e nosso
                time técnico vai avaliar a melhor solução em usinagem seriada ou
                montagem de conjuntos para a sua aplicação.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Falar com o time comercial
              </Link>
              <span className="text-[11px] text-slate-400">
                Resposta em horário comercial · Atendimento técnico especializado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   ÍCONES SVG – usados ao longo da página
-------------------------------------------------- */

function FactoryIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M3 21V9l5 3V9l5 3V5l3-2v18H3Z" />
      <path d="M7 17h2M11 17h2M7 13h2" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="5" y="3" width="10" height="18" rx="1" />
      <path d="M15 7h4v14H9" />
      <path d="M9 7h2M9 11h2M9 15h2" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5V3M19 12h2M12 21v-2M3 12h2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M12 3 5 6v6c0 3.5 2.4 6.7 7 9 4.6-2.3 7-5.5 7-9V6l-7-3Z" />
      <path d="M9 12.5 11 14l4-4" />
    </svg>
  );
}

function CncIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="4" y="4" width="16" height="8" rx="1" />
      <path d="M8 4v8M16 4v8M5 16h14M9 16v4M15 16v4" />
    </svg>
  );
}

function AssemblyIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="16" r="3" />
      <path d="M10.5 10.5 13.5 13.5" />
      <path d="M5 19h6M3 21h10" />
    </svg>
  );
}

function ProcessIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <path d="M10 7h4M7 10v4M17 10v4M10 17h4" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M4 12h2M18 12h2M12 4v2M12 18v2" />
      <path d="m7 7 1.5 1.5M15.5 15.5 17 17M7 17l1.5-1.5M15.5 8.5 17 7" />
    </svg>
  );
}

function TractorIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="17" r="2.5" />
      <path d="M3 17h1M10 17h4M5 17v-5h6l1-4h4l1 4h1.5" />
      <path d="M7 9h3" />
    </svg>
  );
}

function AeroIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M3 11.5 21 4l-7.5 18-2.5-7.5L3 11.5Z" />
      <path d="M12 14 9 11" />
    </svg>
  );
}

function DefenseIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M12 3 5 6v6.5c0 3.2 2.2 6.1 7 8.5 4.8-2.4 7-5.3 7-8.5V6l-7-3Z" />
      <path d="M9 10h6M9 13h4" />
    </svg>
  );
}

function LabIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M9 3v5l-4 8a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-4-8V3" />
      <path d="M9 8h6" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 20c8 0 14-6 14-14" />
      <path d="M4 20c0-8 6-14 14-14" />
      <path d="M9 15c1-3 3-5 7-7" />
    </svg>
  );
}

function Dot() {
  return (
    <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
  );
}
