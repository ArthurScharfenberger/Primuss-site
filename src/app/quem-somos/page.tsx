import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quem somos | Primuss",
};

export default function QuemSomosPage() {
  return (
    <div className="bg-slate-50">
      {/* Intro */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            Quem somos
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">
            Indústria metal técnica com foco em usinagem seriada.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            A Primuss é uma indústria brasileira especializada em usinagem
            seriada e montagem de peças técnicas. Atuamos há mais de três
            décadas fornecendo componentes para setores como automotivo,
            agronegócio, aeroespacial, segurança e defesa, com foco em
            qualidade, prazo e parceria de longo prazo com nossos clientes.
          </p>
        </div>
      </section>

      {/* Missão, visão, valores */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-card-soft">
              <h2 className="text-sm font-semibold text-slate-900">Missão</h2>
              <p className="mt-2 text-xs text-slate-600">
                Entregar soluções de usinagem e montagem que garantam a
                satisfação dos clientes, por meio de processos confiáveis,
                melhoria contínua e valorização das pessoas.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-card-soft">
              <h2 className="text-sm font-semibold text-slate-900">Visão</h2>
              <p className="mt-2 text-xs text-slate-600">
                Ser referência em usinagem seriada e manufatura de precisão,
                reconhecida pela qualidade, inovação, competitividade e
                responsabilidade socioambiental.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-card-soft">
              <h2 className="text-sm font-semibold text-slate-900">Valores</h2>
              <ul className="mt-2 space-y-1 text-xs text-slate-600">
                <li>• Foco em qualidade e segurança</li>
                <li>• Ética e transparência nos relacionamentos</li>
                <li>• Valorização e desenvolvimento das pessoas</li>
                <li>• Inovação e melhoria contínua</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do tempo simplificada */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Nossa trajetória
          </h2>
          <p className="mt-2 text-lg font-medium text-slate-900">
            Crescimento sustentado na indústria metal mecânica.
          </p>

          <div className="mt-6 space-y-4 border-l border-slate-200 pl-4 text-sm">
            <div>
              <p className="text-xs font-semibold text-slate-500">1989</p>
              <p className="text-slate-800">
                Fundação da empresa, com estrutura inicial focada em usinagem de
                pequeno porte.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">Anos 2000</p>
              <p className="text-slate-800">
                Ampliação do parque fabril, investimento em máquinas CNC e
                atendimento a novos segmentos industriais.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500">Hoje</p>
              <p className="text-slate-800">
                Estrutura própria com milhares de metros quadrados, laboratório
                dimensional e capacidade para atender demandas de alto volume e
                alta complexidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
