import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualidade | Primuss",
};

export default function QualidadePage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            Qualidade
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">
            Gestão da qualidade e metrologia a serviço da precisão.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            A Primuss mantém um sistema de gestão da qualidade estruturado,
            com certificação, procedimentos definidos e laboratório dimensional
            dedicado à garantia de resultados.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-[1.2fr,1fr]">
          <div className="space-y-4 text-sm text-slate-600">
            <h2 className="text-sm font-semibold text-slate-900">
              Política de qualidade
            </h2>
            <p className="text-xs">
              Fornecer peças técnicas e serviços de usinagem com qualidade
              assegurada, atendendo requisitos aplicáveis, promovendo a
              melhoria contínua dos processos e buscando a satisfação plena
              dos clientes.
            </p>

            <h2 className="mt-6 text-sm font-semibold text-slate-900">
              Controles de processo
            </h2>
            <ul className="mt-2 space-y-1 text-xs">
              <li>• Inspeção de recebimento de matéria-prima</li>
              <li>• Controle em processo com planos de medição definidos</li>
              <li>• Inspeção final antes da expedição</li>
              <li>• Rastreabilidade por lote e documentação de medição</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-card-soft text-xs text-slate-600">
            <h2 className="text-sm font-semibold text-slate-900">
              Laboratório dimensional
            </h2>
            <p>
              Ambiente climatizado e equipado para medições de alta precisão,
              apoiando o controle de qualidade em todas as etapas.
            </p>
            <ul className="mt-2 space-y-1">
              <li>• Máquinas de medição tridimensional (CMM)</li>
              <li>• Instrumentos para medição de diâmetro, comprimento e rugosidade</li>
              <li>• Equipamentos de medição de dureza e geometria</li>
              <li>• Relatórios de medição para validação de peças e processos</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
