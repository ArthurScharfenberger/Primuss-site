// src/components/home/ClientsTeaser.tsx
import Link from "next/link";

export function ClientsTeaser() {
  const items = [
    "Empresas líderes em seus segmentos industriais.",
    "Projetos com requisitos rigorosos de tolerância.",
    "Parcerias de longo prazo com foco em prazo.",
    "Atendimento técnico próximo e engenharia colaborativa.",
    "Processos auditáveis e documentação completa.",
    "Capacidade produtiva estável para demandas seriadas.",
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Clientes & Parcerias
          </h2>
          <p className="mt-3 text-2xl font-semibold text-slate-900">
            Confiança construída ao longo do tempo.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Empresas líderes confiam na Primuss para componentes críticos, com
            estabilidade, engenharia aplicada e precisão.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm transition hover:shadow-md"
            >
              <span className="mt-1 text-[#6344f5]">✔</span>
              <p className="text-[12px] leading-snug text-slate-700">{item}</p>
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
