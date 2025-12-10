// src/components/home/FinalCta.tsx
import Link from "next/link";

export function FinalCta() {
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
                Envie seu desenho ou especificação e nosso time técnico fará a
                análise para apresentar a melhor solução de usinagem ou
                montagem.
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
