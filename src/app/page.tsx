// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CertificationsStrip />
      <SolutionsSection />
      <SectorsSection />
      <QualitySustainabilitySection />
      <ClientsTeaser />
      <FinalCta />
    </>
  );
}

/* ===================== HERO ===================== */

function HeroSection() {
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
              Soluções de usinagem CNC e montagem de conjuntos para setores que exigem
              confiabilidade, repetibilidade e controle dimensional.
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

/* ===================== FAIXA CERTIFICAÇÕES ===================== */

function CertificationsStrip() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-[1.1fr,1fr,1fr] md:items-center">

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            Credibilidade & sustentabilidade
          </p>
          <p className="mt-2 max-w-xs text-xs text-slate-500">
            Certificações que reforçam a solidez financeira e o compromisso da Primuss com energia renovável.
          </p>
        </div>

        <Link
          href="/duns.pdf"
          target="_blank"
          className="group rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <Image
              src="/drsimage.avif"
              alt="D-U-N-S Registered"
              width={120}
              height={80}
              className="transition-transform duration-200 group-hover:scale-105"
            />
            <p className="text-[11px] font-semibold text-slate-700">D-U-N-S® Registered</p>
            <p className="text-[11px] text-slate-500">Cadastro global Dun & Bradstreet.</p>
          </div>
        </Link>

        <Link
          href="/energia.pdf"
          target="_blank"
          className="group rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <Image
              src="/renovavel.avif"
              alt="Energia incentivada"
              width={140}
              height={80}
              className="transition-transform duration-200 group-hover:scale-105"
            />
            <p className="text-[11px] font-semibold text-slate-700">Empresa Renovável</p>
            <p className="text-[11px] text-slate-500">Energia proveniente de fontes renováveis.</p>
          </div>
        </Link>

      </div>
    </section>
  );
}

/* ===================== SOLUÇÕES ===================== */

function SolutionsSection() {
  const solutions = [
    {
      title: "Usinagem CNC seriada",
      description: "Produção estável, alta repetibilidade e controle dimensional.",
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
    <section className="border-b border-slate-800 bg-slate-950 text-slate-50" id="solucoes">
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
            Desde o desenvolvimento até a produção seriada, entregamos componentes com precisão, repetibilidade e confiabilidade.
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

                <h3 className="text-sm font-semibold text-slate-50">{solution.title}</h3>
                <p className="mt-2 text-xs text-slate-300">{solution.description}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-slate-400">
                <span className="inline-flex items-center gap-1"><Dot /> Processo controlado</span>
                <span className="inline-flex items-center gap-1"><Dot /> Documentação técnica</span>
                <span className="inline-flex items-center gap-1"><Dot /> Foco em prazo</span>
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

/* ===================== SETORES ===================== */

function SectorsSection() {
  const sectors = [
    {
      title: "Automotivo & motopeças",
      description: "Peças com requisitos rigorosos de desempenho e rastreabilidade.",
      icon: <GearIcon />,
    },
    {
      title: "Agronegócio",
      description: "Componentes robustos para máquinas e implementos agrícolas.",
      icon: <TractorIcon />,
    },
    {
      title: "Aeroespacial",
      description: "Tolerâncias apertadas e materiais especiais.",
      icon: <AeroIcon />,
    },
    {
      title: "Segurança & defesa",
      description: "Confiabilidade em componentes para aplicações críticas.",
      icon: <DefenseIcon />,
    },
  ];

  return (
    <section className="border-b border-slate-200 bg-white" id="setores-atendidos">
      <div className="mx-auto max-w-6xl px-4 py-14">

        <div className="mb-8 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Setores atendidos
          </h2>
          <p className="mt-2 text-lg font-medium text-slate-900">
            Presença em diferentes segmentos da indústria.
          </p>
          <p className="mt-2 max-w-xl text-xs text-slate-500 mx-auto">
            A experiência da Primuss permite atender mercados com requisitos técnicos distintos,
            mantendo qualidade, confiabilidade e competitividade.
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
                <h3 className="text-sm font-semibold text-slate-900">{sector.title}</h3>
                <p className="mt-2 text-xs text-slate-500">{sector.description}</p>
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

/* ===================== QUALIDADE & SUSTENTABILIDADE ===================== */

function QualitySustainabilitySection() {
  return (
    <section className="border-b border-slate-200 bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Qualidade & sustentabilidade
          </h2>
          <p className="mt-3 text-2xl font-semibold text-slate-50">
            Qualidade, rastreabilidade e responsabilidade ambiental.
          </p>
          <p className="mt-3 text-xs text-slate-300 leading-relaxed">
            Controle dimensional, processos auditáveis e utilização de energia renovável
            compõem a base das operações da Primuss.
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
              Compromisso com o uso eficiente de recursos e matriz energética limpa.
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

/* ===================== CLIENTES ===================== */

function ClientsTeaser() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Clientes & Parcerias
          </h2>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            Confiança construída ao longo do tempo.
          </p>
          <p className="mt-3 text-xs text-slate-500 leading-relaxed">
            Empresas líderes confiam na Primuss para componentes críticos,
            com estabilidade, engenharia aplicada e precisão.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {[
            "Empresas líderes em seus segmentos industriais.",
            "Projetos com requisitos rigorosos de tolerância.",
            "Parcerias de longo prazo com foco em prazo.",
            "Atendimento técnico próximo e engenharia colaborativa.",
            "Processos auditáveis e documentação completa.",
            "Capacidade produtiva estável para demandas seriadas.",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm hover:shadow-md transition"
            >
              <span className="mt-1 text-[#6344f5]">✔</span>
              <p className="text-[12px] text-slate-700 leading-snug">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/clientes"
            className="text-xs font-semibold text-slate-700 underline-offset-4 hover:underline"
          >
            Ver lista de clientes →
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ===================== CTA FINAL ===================== */

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
              <p className="mt-2 max-w-md text-xs text-slate-300">
                Envie seu desenho ou especificação e nosso time técnico fará a análise
                para apresentar a melhor solução de usinagem ou montagem.
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

/* ===================== ÍCONES ===================== */

function FactoryIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 21V9l5 3V9l5 3V5l3-2v18H3Z" />
      <path d="M7 17h2M11 17h2M7 13h2" />
    </svg>
  );
}

function CncIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="4" width="16" height="8" rx="1" />
      <path d="M8 4v8M16 4v8M5 16h14M9 16v4M15 16v4" />
    </svg>
  );
}

function AssemblyIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="16" r="3" />
      <path d="M10.5 10.5 13.5 13.5" />
      <path d="M5 19h6M3 21h10" />
    </svg>
  );
}

function ProcessIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <path d="M10 7h4M7 10v4M17 10v4M10 17h4" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="3" />
      <path d="M4 12h2M18 12h2M12 4v2M12 18v2" />
      <path d="m7 7 1.5 1.5M15.5 15.5 17 17M7 17l1.5-1.5M15.5 8.5 17 7" />
    </svg>
  );
}

function TractorIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="17" r="2.5" />
      <path d="M3 17h1M10 17h4M5 17v-5h6l1-4h4l1 4h1.5" />
      <path d="M7 9h3" />
    </svg>
  );
}

function AeroIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 11.5 21 4l-7.5 18-2.5-7.5L3 11.5Z" />
      <path d="M12 14 9 11" />
    </svg>
  );
}

function DefenseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3 5 6v6.5c0 3.2 2.2 6.1 7 8.5 4.8-2.4 7-5.3 7-8.5V6l-7-3Z" />
      <path d="M9 10h6M9 13h4" />
    </svg>
  );
}

function LabIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M9 3v5l-4 8a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-4-8V3" />
      <path d="M9 8h6" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 20c8 0 14-6 14-14" />
      <path d="M4 20c0-8 6-14 14-14" />
      <path d="M9 15c1-3 3-5 7-7" />
    </svg>
  );
}

function Dot() {
  return <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />;
}
