import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Primuss",
};

export default function ContatoPage() {
  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            Contato
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">
            Fale com a Primuss.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Use o formulário ao lado ou os canais abaixo para falar com nossa
            equipe comercial, técnica ou de recursos humanos.
          </p>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          {/* Formulário (front-end apenas) */}
          <form className="space-y-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-card-soft">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Nome
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Empresa
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  E-mail
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-slate-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-slate-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Assunto
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Mensagem
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#FFE500] px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-[#FFF48A]"
            >
              Enviar mensagem
            </button>
            <p className="text-[11px] text-slate-400">
              Este formulário é apenas visual por enquanto. Depois podemos
              integrar com e-mail ou API.
            </p>
          </form>

          {/* Informações de contato */}
          <div className="space-y-4 text-sm text-slate-600">
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-card-soft">
              <h2 className="text-sm font-semibold text-slate-900">
                Comercial
              </h2>
              <p className="mt-2 text-xs text-slate-600">
                Envie seus desenhos, especificações ou dúvidas para nosso time
                comercial.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                E-mail: <span className="font-medium">comercial@primuss.com.br</span>
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-card-soft">
              <h2 className="text-sm font-semibold text-slate-900">RH</h2>
              <p className="mt-2 text-xs text-slate-600">
                Para envio de currículos e dúvidas sobre oportunidades.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                E-mail: <span className="font-medium">curriculorh@primusscorp.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
