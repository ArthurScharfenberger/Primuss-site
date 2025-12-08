// src/app/quem-somos/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import img1989 from "../../../public/1989.png";
import img1994 from "../../../public/1994.png";
import img2000 from "../../../public/2000.png";
import img2006 from "../../../public/2006.jpg";
import img2020 from "../../../public/2020.jpg";

export const metadata: Metadata = {
  title: "Quem somos | Primuss",
};

/* ========= TIPAGENS ========= */

type HistoryItem = {
  year: string;
  area: string;
  people: string;
  description: string;
  image: any;
};

/* ========= DADOS ========= */

const historyItems: HistoryItem[] = [
  {
    year: "1989",
    area: "30 m²",
    people: "1 colaborador",
    description:
      "Início das operações em estrutura compacta, com foco em usinagem de pequeno porte e atendimento regional.",
    image: img1989,
  },
  {
    year: "1994",
    area: "200 m²",
    people: "6 colaboradores",
    description:
      "Ampliação do espaço físico e do quadro de colaboradores, acompanhando o crescimento da base de clientes.",
    image: img1994,
  },
  {
    year: "2000",
    area: "500 m²",
    people: "15 colaboradores",
    description:
      "Entrada de novos equipamentos e consolidação da Primuss como fornecedora de componentes usinados seriados.",
    image: img2000,
  },
  {
    year: "2006",
    area: "2.000 m²",
    people: "30 colaboradores",
    description:
      "Parque fabril ampliado, com estrutura voltada a programas de maior volume e complexidade.",
    image: img2006,
  },
  {
    year: "2020",
    area: "5.000 m²",
    people: "120 colaboradores",
    description:
      "Instalações atuais, laboratório dimensional e capacidade para atender programas de alto volume e alta exigência técnica.",
    image: img2020,
  },
];

/* ========= PAGE ========= */

export default function QuemSomosPage() {
  return (
    <>
      {/* HERO – padrão visual da Home */}
      <section className="border-b border-slate-200 bg-slate-950 text-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 lg:flex-row lg:items-center">
          {/* LADO ESQUERDO – TEXTO */}
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center rounded-full bg-[#FFE500] px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-[#111111] shadow">
              QUEM SOMOS · PRIMUSS
            </p>

            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Indústria metal técnica focada em
                <span className="block text-slate-200">
                  componentes usinados críticos.
                </span>
              </h1>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                Fundada em 1989, a Primuss evoluiu para um parque fabril de
                5.000 m², atuando em usinagem seriada e montagem de peças
                técnicas para aplicações onde desempenho e confiabilidade são
                essenciais.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-300">
              <span className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1">
                Usinagem de precisão em série
              </span>
              <span className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1">
                Montagem de conjuntos e subconjuntos
              </span>
              <span className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1">
                ISO 9001:2015 · Laboratório dimensional
              </span>
            </div>
          </div>

          {/* LADO DIREITO – CARD EM NÚMEROS (padrão card dark da Home) */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 px-5 py-6 text-slate-50 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Em perspectiva
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-xs text-slate-400">Tempo de atuação</p>
                  <p className="text-base font-semibold">35+ anos</p>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-xs text-slate-400">Capacidade instalada</p>
                  <p className="text-base font-semibold">
                    5.000 m² · 120+ colaboradores
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-xs text-slate-400">Segmentos atendidos</p>
                  <p className="text-base font-semibold">
                    Automotivo · Agro · Aero · Defesa
                  </p>
                </div>
              </div>

              <p className="mt-4 border-t border-slate-800 pt-3 text-[11px] text-slate-300">
                Estrutura própria, processos padronizados e sistema de gestão da
                qualidade certificado asseguram estabilidade de fornecimento e
                parcerias de longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO BRANCO – RESUMO INSTITUCIONAL (padrão leve da Home) */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] md:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
                Atuação industrial
              </p>
              <p className="mt-2 text-lg font-medium text-slate-900">
                Componentes que integram sistemas de alta responsabilidade.
              </p>
              <p className="mt-3 max-w-xl text-xs leading-relaxed text-slate-600">
                A Primuss participa da cadeia produtiva de veículos, máquinas,
                equipamentos agrícolas, aplicações aeroespaciais e de defesa. Em
                comum entre essas frentes está a necessidade de peças técnicas
                com confiabilidade, repetibilidade e suporte de engenharia.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-700">
                {[
                  "Sistemas de freio e direção",
                  "Implementos e equipamentos agrícolas",
                  "Componentes para segurança e defesa",
                  "Aplicações com tolerâncias críticas",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Perfil da empresa
                </p>
                <p className="mt-2 leading-relaxed">
                  Empresa de capital familiar, com gestão profissionalizada,
                  voltada à manufatura seriada de componentes e subconjuntos
                  para clientes industriais.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Foco em relacionamento
                </p>
                <p className="mt-2 leading-relaxed">
                  Atuação como parceiro estratégico, com entendimento de curvas
                  de demanda, requisitos técnicos e expectativas de desempenho
                  ao longo do tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECIONADORES – MISSÃO / VISÃO / VALORES (cards claros enxutos) */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Direcionadores
              </h2>
              <p className="mt-2 text-lg font-medium text-slate-900">
                O que orienta nossas decisões.
              </p>
            </div>
            <p className="max-w-md text-xs text-slate-600">
              Crescimento sustentado pela combinação de tecnologia, disciplina
              de processo e respeito às pessoas, sempre com foco em qualidade e
              segurança.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Missão"
              accent="bg-emerald-500"
              text="Entregar soluções de usinagem e montagem que gerem valor aos clientes, por meio de processos robustos e melhoria contínua."
            />

            <InfoCard
              title="Visão"
              accent="bg-sky-500"
              text="Ser referência em manufatura de precisão, reconhecida pela qualidade, competitividade, inovação e responsabilidade socioambiental."
            />

            <InfoCard
              title="Valores"
              accent="bg-amber-500"
              text="Qualidade e segurança; ética e transparência; valorização das pessoas; disciplina, inovação e melhoria contínua."
              asList={[
                "Qualidade, segurança e confiabilidade.",
                "Ética, transparência e responsabilidade.",
                "Valorização e desenvolvimento das pessoas.",
                "Disciplina, inovação e melhoria contínua.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* COMO NOS POSICIONAMOS – 3 PILARES (padrão Sectors/Quality) */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Como nos posicionamos
              </h2>
              <p className="mt-2 text-lg font-medium text-slate-900">
                Engenharia aplicada, parceria e estabilidade de fornecimento.
              </p>
            </div>
            <p className="max-w-md text-xs text-slate-600">
              A Primuss combina conhecimento técnico, gestão da qualidade e
              capacidade produtiva para apoiar programas de médio e longo prazo
              em usinagem seriada.
            </p>
          </div>

          <div className="grid gap-5 text-xs text-slate-600 md:grid-cols-3">
            <PillarCard
              label="Parceria de longo prazo"
              description="Atuação próxima às equipes de engenharia, compras e planejamento, entendendo requisitos, volumes e expectativas de desempenho."
            />
            <PillarCard
              label="Engenharia de processo"
              description="Desenvolvimento de rota, dispositivos, ferramentas e parâmetros de corte alinhados a produtividade, repetibilidade e custo competitivo."
            />
            <PillarCard
              label="Qualidade & rastreabilidade"
              description="Sistema de gestão estruturado, registros de processo e controles dimensionais que sustentam programas críticos ao longo do tempo."
            />
          </div>

          <div className="mt-6 text-xs text-slate-600">
            <Link
              href="/qualidade"
              className="font-semibold text-slate-800 underline-offset-4 hover:underline"
            >
              Ver detalhes do sistema de qualidade →
            </Link>
          </div>
        </div>
      </section>

      {/* NOSSA TRAJETÓRIA – TIMELINE (dark no mesmo peso dos blocos escuros da Home) */}
      <section id="historia" className="border-b border-slate-800 bg-slate-950 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Nossa trajetória
          </h2>
          <p className="mt-2 text-lg font-medium text-slate-50">
            Crescimento sustentado em estrutura e pessoas.
          </p>
          <p className="mt-2 max-w-xl text-xs text-slate-300">
            A evolução da Primuss acompanha o aumento de complexidade das
            aplicações atendidas. Em cada fase, novas áreas construídas,
            tecnologia embarcada e equipes dedicadas à operação industrial.
          </p>

          <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between gap-4 pb-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Linha do tempo
              </p>
              <p className="text-[11px] text-slate-500">
                Arraste para o lado para navegar pelos anos
              </p>
            </div>

            <div
              className="flex gap-4 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory"
              aria-label="Linha do tempo da Primuss"
            >
              {historyItems.map((item) => (
                <div
                  key={item.year}
                  className="min-w-[260px] max-w-xs flex-1 snap-center rounded-2xl border border-slate-800 bg-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_0_26px_rgba(250,204,21,0.16)]"
                >
                  <div className="relative overflow-hidden rounded-t-2xl bg-slate-900">
                    <Image
                      src={item.image}
                      alt={`Instalações da Primuss em ${item.year}`}
                      className="h-40 w-full object-cover"
                      sizes="(max-width: 768px) 280px, 360px"
                      priority={item.year === "1989"}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent px-4 pb-3 pt-8 text-xs text-slate-50">
                      <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-200">
                        {item.year}
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {item.area} · {item.people}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 text-xs text-slate-300">
                    <p className="leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ========= COMPONENTES DE APOIO ========= */

function InfoCard({
  title,
  text,
  accent,
  asList,
}: {
  title: string;
  text: string;
  accent: string;
  asList?: string[];
}) {
  return (
    <div className="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${accent}`} />
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>
      {asList ? (
        <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
          {asList.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-xs leading-relaxed text-slate-600">{text}</p>
      )}
    </div>
  );
}

function PillarCard({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
