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
      "Início das operações em uma estrutura compacta, com foco em usinagem de pequeno porte e atendimento regional.",
    image: img1989,
  },
  {
    year: "1994",
    area: "200 m²",
    people: "6 colaboradores",
    description:
      "Ampliação do espaço físico e do quadro de funcionários, acompanhando o crescimento da base de clientes.",
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
      "Parque fabril significativamente ampliado, com estrutura voltada a programas de maior volume e complexidade.",
    image: img2006,
  },
  {
    year: "2020",
    area: "5.000 m²",
    people: "120 colaboradores",
    description:
      "Instalações atuais, laboratório dimensional e capacidade para atender programas de alto volume com alta exigência técnica.",
    image: img2020,
  },
];

/* ========= PAGE ========= */

export default function QuemSomosPage() {
  return (
    <div className="bg-slate-50">
      {/* HERO INSTITUCIONAL */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] md:items-center">
            {/* Texto principal */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FFE500]">
                <span className="h-1 w-1 rounded-full bg-[#FFE500]" />
                Quem somos
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-[32px]">
                Indústria metal técnica focada em componentes críticos.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                Fundada em 04 de dezembro de 1989, a Primuss Indústria Metal
                Técnica Ltda carrega desde o início a essência de uma empresa
                familiar comprometida com a qualidade de seus produtos, a
                integridade das pessoas e a satisfação de seus clientes. Hoje,
                atua em usinagem seriada e montagem de peças técnicas para
                setores como automotivo, agronegócio, aeroespacial, segurança e
                defesa.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-slate-700">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  Usinagem de precisão em série
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  Montagem de conjuntos e subconjuntos
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1">
                  ISO 9001:2015 · Laboratório dimensional
                </span>
              </div>
            </div>

            {/* Card – em números / diferenciais */}
            <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-5 text-slate-50 shadow-lg shadow-slate-900/30">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Em perspectiva
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-xs text-slate-400">Experiência</p>
                  <p className="text-base font-semibold text-white">
                    35 anos de atuação
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-xs text-slate-400">Setores atendidos</p>
                  <p className="text-base font-semibold text-white">
                    Auto · Agro · Aero · Defesa
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-xs text-slate-400">Capacidade instalada</p>
                  <p className="text-base font-semibold text-white">
                    5.000 m² · 120+ colaboradores
                  </p>
                </div>
              </div>

              <p className="mt-4 border-t border-slate-700 pt-3 text-[11px] text-slate-300">
                Estrutura própria, processos padronizados e sistema de gestão da
                qualidade certificado asseguram estabilidade de fornecimento e
                parcerias de longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa escura – para quem trabalhamos */}
      <section className="border-b border-slate-900 bg-slate-950 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                Presença na cadeia produtiva
              </p>
              <p className="mt-1 text-sm font-medium text-slate-50">
                Componentes que integram veículos, máquinas, sistemas e
                equipamentos de alta responsabilidade.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px]">
              {[
                "Sistemas de freio e direção",
                "Implementos e equipamentos agrícolas",
                "Aplicações aeroespaciais e de defesa",
                "Produtos táticos e de segurança",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missão, visão, valores */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Direcionadores
              </h2>
              <p className="mt-2 text-lg font-medium text-slate-900">
                O que sustenta a forma como trabalhamos.
              </p>
            </div>
            <p className="max-w-md text-xs text-slate-600">
              A Primuss cresce mantendo o equilíbrio entre tecnologia,
              relacionamento e responsabilidade, com decisões pautadas em
              qualidade, segurança e respeito às pessoas.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard
              title="Missão"
              accent="bg-emerald-500"
              text="Entregar soluções de usinagem e montagem que gerem valor aos clientes, por meio de processos robustos, melhoria contínua e valorização das pessoas."
            />

            <InfoCard
              title="Visão"
              accent="bg-sky-500"
              text="Ser referência em manufatura de precisão, reconhecida pela qualidade, competitividade, inovação e responsabilidade socioambiental."
            />

            <div className="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                <h3 className="text-sm font-semibold text-slate-900">
                  Valores
                </h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                <li>• Qualidade, segurança e confiabilidade.</li>
                <li>• Ética, transparência e responsabilidade.</li>
                <li>• Valorização, desenvolvimento e respeito às pessoas.</li>
                <li>• Disciplina, inovação e melhoria contínua.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Como nos posicionamos – 3 pilares */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
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
              Combinamos conhecimento técnico, gestão da qualidade e capacidade
              produtiva para apoiar projetos que exigem confiabilidade e
              repetibilidade em usinagem seriada.
            </p>
          </div>

          <div className="grid gap-5 text-xs text-slate-600 md:grid-cols-3">
            <PillarCard
              label="Parceria de longo prazo"
              description="Atuação próxima às equipes de engenharia, compras e planejamento dos clientes, entendendo requisitos, curvas de demanda e expectativas de desempenho."
            />
            <PillarCard
              label="Engenharia de processo"
              description="Desenvolvimento de rota, dispositivos, ferramentas e parâmetros de corte orientados à produtividade, repetibilidade e custo competitivo."
            />
            <PillarCard
              label="Qualidade & rastreabilidade"
              description="Sistema de gestão estruturado, registros de processo e controles dimensionais asseguram confiança em programas de médio e longo prazo."
            />
          </div>

          <div className="mt-6 text-xs text-slate-600">
            <Link
              href="/qualidade"
              className="font-semibold text-slate-800 underline-offset-4 hover:underline"
            >
              Conheça em detalhes nosso sistema de qualidade →{" "}
            </Link>
          </div>
        </div>
      </section>

      {/* Nossa trajetória – slider de anos + imagens */}
      <HistorySection />
    </div>
  );
}

/* ========= COMPONENTES DE APOIO ========= */

function InfoCard({
  title,
  text,
  accent,
}: {
  title: string;
  text: string;
  accent: string;
}) {
  return (
    <div className="group rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${accent}`} />
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-600">{text}</p>
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

/* ========= SEÇÃO DE HISTÓRIA / SLIDER ========= */

function HistorySection() {
  return (
    <section id="historia" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
          Nossa trajetória
        </h2>
        <p className="mt-2 text-lg font-medium text-slate-900">
          Crescimento sustentado, com foco em estrutura e pessoas.
        </p>
        <p className="mt-2 max-w-xl text-xs text-slate-600">
          A evolução da Primuss acompanha o aumento de complexidade das
          aplicações atendidas. Em cada fase, novas áreas construídas,
          tecnologia embarcada e equipes dedicadas à operação industrial.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-center justify-between gap-4 pb-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Linha do tempo
            </p>
            <p className="text-[11px] text-slate-500">
              Arraste para o lado para navegar pelos anos
            </p>
          </div>

          <div
            className="flex gap-4 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
            aria-label="Linha do tempo da Primuss"
          >
            {historyItems.map((item) => (
              <div
                key={item.year}
                className="snap-center min-w-[260px] max-w-xs flex-1 rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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

                <div className="p-4 text-xs text-slate-600">
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-right text-[11px]">
          </div>
        </div>
      </div>
    </section>
  );
}
