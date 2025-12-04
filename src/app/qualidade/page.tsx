import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qualidade | Primuss",
};

export default function QualidadePage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(circle_at_top,_#1e293b,_#020617)]">
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="h-full w-full bg-[radial-gradient(circle_at_10%_0%,rgba(250,250,250,0.12),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(250,250,250,0.08),transparent_55%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Qualidade &amp; Metrologia
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Gestão da qualidade a serviço da precisão.
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              A Primuss mantém um sistema de gestão da qualidade estruturado, com
              certificação, procedimentos definidos e laboratório dimensional
              dedicado à garantia de resultados em usinagem seriada.
            </p>

            <div className="flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Sistema de gestão estruturado
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Laboratório dimensional próprio
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Foco em melhoria contínua
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>Indicadores de qualidade</span>
                <span>Visão geral</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs text-slate-400">
                    Foco em conformidade de produto
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-slate-50">
                    &gt; 99%
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Compromisso com peças dentro de especificação.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-xs text-slate-400">
                    Inspeções em processos-chave
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-50">
                    Recebimento, processo e expedição
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Controles planejados para cada etapa crítica.
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-yellow-400/30 bg-yellow-400/5 p-4 text-xs text-slate-100">
                  <p className="font-medium text-yellow-300">
                    Qualidade como parte do processo, não só da inspeção.
                  </p>
                  <p className="mt-1 text-slate-200">
                    Do desenvolvimento ao fornecimento seriado, a Primuss
                    utiliza procedimentos documentados, análise de riscos e
                    ferramentas de medição adequadas para garantir a
                    repetibilidade dos resultados.
                  </p>
                  <Link
                    href="/contato"
                    className="mt-3 inline-flex items-center text-xs font-medium text-yellow-300 underline-offset-2 hover:underline"
                  >
                    Falar com a equipe de qualidade
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO – CERTIFICAÇÃO ISO */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="mb-12 space-y-3 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-yellow-300">
            Certificação ISO 9001:2015
          </p>

          <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            Excelência comprovada em gestão da qualidade
          </h2>

          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            A Primuss possui certificação ISO 9001:2015, reforçando seu compromisso
            com processos padronizados, rastreabilidade, melhoria contínua e a
            entrega de peças usinadas com máxima confiabilidade.
          </p>
        </div>

        {/* GRID FINAL COM AS DUAS CAIXAS */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* --- CAIXA DA EQUIPE --- */}
          <div className="relative rounded-3xl border border-yellow-400/40 bg-slate-900/40 p-6 shadow-[0_0_40px_rgba(250,204,21,0.08)] backdrop-blur flex flex-col">
            <h3 className="mb-4 text-lg font-semibold text-yellow-300">
              Nossa equipe de qualidade
            </h3>

            <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-3 flex items-center justify-center">
              <img
                src="/equipe.iso.jpg"
                alt="Equipe Primuss responsável pela gestão da qualidade"
                className="w-full h-auto object-contain rounded-xl max-h-[360px]"
              />
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
              A equipe de qualidade da Primuss atua diariamente garantindo que cada
              peça produzida atenda rigorosamente aos padrões técnicos exigidos por
              nossos clientes — da inspeção inicial ao controle final.
            </p>
          </div>

          {/* --- CAIXA DO CERTIFICADO --- */}
          <div className="relative rounded-3xl border border-yellow-400/40 bg-slate-900/40 p-6 shadow-[0_0_40px_rgba(250,204,21,0.08)] backdrop-blur flex flex-col">
            <h3 className="mb-4 text-lg font-semibold text-yellow-300">
              Certificado ISO 9001:2015
            </h3>

            <div className="rounded-xl border border-slate-700 bg-slate-950 p-4 flex items-center justify-center overflow-hidden">
              <img
                src="/iso-9001-primuss.jpg"
                alt="Certificado ISO 9001:2015 – Primuss"
                className="h-auto max-h-[380px] object-contain rounded-lg scale-[1.02]"
              />
            </div>



            <a
              href="/iso-9001-primuss.pdf"
              download
              className="mt-5 inline-flex items-center rounded-full border border-yellow-400/70 bg-yellow-400 px-6 py-2 text-sm font-medium text-slate-950 shadow-md transition hover:bg-yellow-300"
            >
              Baixar certificado em PDF
            </a>

            <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
              Este certificado confirma que a Primuss segue rigorosamente os requisitos
              da norma ISO 9001:2015, garantindo segurança, padronização, rastreabilidade
              e confiabilidade em todos os processos de produção.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
