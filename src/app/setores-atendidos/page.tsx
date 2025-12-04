import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Setores atendidos | Primuss",
};

const SETORES = [
  {
    nome: "Automotivo",
    descricao:
      "Componentes usinados para sistemas de freio, eixos, transmissões e subconjuntos de alta confiabilidade.",
    destaques: [
      "Lotes médios e grandes",
      "Rastreabilidade por lote",
      "Parcerias de longo prazo",
    ],
  },
  {
    nome: "Agrícola",
    descricao:
      "Peças técnicas para máquinas e implementos agrícolas que operam em condições severas de trabalho.",
    destaques: [
      "Materiais de alta resistência",
      "Tratamentos térmicos e superficiais",
      "Controle dimensional rigoroso",
    ],
  },
  {
    nome: "Energia & Geração",
    descricao:
      "Componentes usinados para equipamentos de geração de energia e sistemas auxiliares industriais.",
    destaques: [
      "Peças críticas com baixa tolerância",
      "Documentação técnica completa",
      "Atendimento a normas específicas",
    ],
  },
  {
    nome: "Máquinas & Equipamentos",
    descricao:
      "Conjuntos e subconjuntos para máquinas industriais, linhas de montagem e células automatizadas.",
    destaques: [
      "Montagem de conjuntos",
      "Validação dimensional",
      "Engenharia colaborativa",
    ],
  },
  {
    nome: "Linha Branca & Bens de Consumo",
    descricao:
      "Peças seriadas com foco em repetibilidade, estética e acabamento para grandes volumes.",
    destaques: [
      "Processos estáveis",
      "Otimização de ciclo",
      "Controle estatístico",
    ],
  },
  {
    nome: "Projetos Especiais",
    descricao:
      "Soluções sob medida para necessidades específicas de clientes em diferentes segmentos.",
    destaques: [
      "Desenvolvimento conjunto",
      "Prototipagem e pré-séries",
      "Flexibilidade de produção",
    ],
  },
];

export default function SetoresAtendidosPage() {
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
              Precisão em peças técnicas · Usinagem seriada
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Setores atendidos
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              A Primuss atende diferentes segmentos da indústria com foco em
              usinagem seriada, confiabilidade de fornecimento e suporte técnico
              próximo. Conheça alguns dos principais setores onde nossas
              soluções estão presentes.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Fornecimento seriado
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Engenharia de produto &amp; processo
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Parcerias de longo prazo
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>Visão geral</span>
                <span>Capacidade &amp; setores</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs text-slate-400">Setores ativos</p>
                  <p className="text-2xl font-semibold text-slate-50">6+</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Diversos segmentos industriais.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs text-slate-400">Modelo de atuação</p>
                  <p className="text-sm font-medium text-slate-50">
                    Fornecedor estratégico
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Foco em longo prazo, estabilidade e qualidade.
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-4 text-xs text-slate-100">
                  <p className="font-medium text-yellow-300">
                    Precisa de um parceiro para um novo projeto?
                  </p>
                  <p className="mt-1 text-slate-200">
                    Nossa equipe técnica pode avaliar o seu componente, apoiar
                    na definição de processo e estruturar um plano de
                    fornecimento.
                  </p>
                  <Link
                    href="/contato"
                    className="mt-3 inline-flex items-center text-xs font-medium text-yellow-300 underline-offset-2 hover:underline"
                  >
                    Falar com a Primuss
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE SETORES */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
              Onde nossas peças estão presentes
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Cada setor possui demandas específicas em termos de materiais,
              tolerâncias e volumes. A Primuss estrutura processos para atender
              esses requisitos com repetibilidade e segurança.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SETORES.map((setor) => (
            <article
              key={setor.nome}
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(248,250,252,0.12),transparent_55%)]" />
              </div>

              <div className="relative space-y-4">
                <h3 className="text-lg font-semibold text-slate-50">
                  {setor.nome}
                </h3>
                <p className="text-sm leading-relaxed text-slate-200">
                  {setor.descricao}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {setor.destaques.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200 group-hover:border-yellow-400/70 group-hover:text-yellow-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-slate-800 bg-slate-900/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Tem um componente ou projeto em mente?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Envie o desenho técnico, volume estimado e requisitos principais.
              Nossa equipe avalia a viabilidade e sugere o melhor caminho de
              produção.
            </p>
          </div>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400 text-sm font-medium text-slate-950 px-6 py-2.5 shadow-md transition hover:bg-yellow-300 hover:border-yellow-300"
          >
            Falar com a equipe Primuss
          </Link>
        </div>
      </section>
    </div>
  );
}
