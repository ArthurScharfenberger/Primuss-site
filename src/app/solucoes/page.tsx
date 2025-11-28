import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluções em usinagem | Primuss",
};

const solutions = [
  {
    title: "Usinagem CNC seriada",
    desc: "Processos estáveis para produção em alto volume, com foco em repetibilidade, precisão dimensional e produtividade.",
  },
  {
    title: "Montagem de conjuntos e subconjuntos",
    desc: "Montagem de peças e componentes com controle de torque, testes funcionais e rastreabilidade por lote.",
  },
  {
    title: "Desenvolvimento de processo",
    desc: "Análise de desenho, definição de rota, ferramentas, dispositivos e parâmetros para a melhor relação custo-benefício.",
  },
  {
    title: "Prototipagem e pré-séries",
    desc: "Suporte técnico desde os primeiros lotes, permitindo ajustes de projeto e validação de processo.",
  },
];

export default function SolucoesPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            Soluções
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">
            Capacidades em usinagem e montagem de peças técnicas.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            A Primuss atua em toda a cadeia de usinagem seriada, desde o
            desenvolvimento de processo até a produção e montagem de conjuntos,
            oferecendo suporte técnico e confiabilidade industrial.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-5 md:grid-cols-2">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="rounded-3xl border border-slate-100 bg-white p-5 shadow-card-soft"
              >
                <h2 className="text-sm font-semibold text-slate-900">
                  {s.title}
                </h2>
                <p className="mt-2 text-xs text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
