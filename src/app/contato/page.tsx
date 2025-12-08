// src/app/contato/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato | Primuss",
};

export default function Page() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(circle_at_top,_#1e293b,_#020617)]">
        {/* glow frio padrão do site */}
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
          <div className="h-full w-full bg-[radial-gradient(circle_at_10%_0%,rgba(250,250,250,0.12),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(250,250,250,0.08),transparent_55%)]" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
          {/* Texto à esquerda */}
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold tracking-[0.24em] text-yellow-300">
              CONTATO · PRIMUSS
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Fale com a equipe Primuss.
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Este é o canal para tratar de novos projetos de usinagem,
              fornecimento seriado, questões de qualidade, cadastro de
              fornecedores e demais assuntos institucionais. As informações
              preenchidas nos ajudam a direcionar o contato para a área
              responsável.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-slate-100">
              <TagChip>Projetos de usinagem &amp; orçamentos</TagChip>
              <TagChip>Qualidade, PPAP &amp; certificações</TagChip>
              <TagChip>Fornecedores &amp; cadeia de suprimentos</TagChip>
              <TagChip>Carreiras &amp; recursos humanos</TagChip>
            </div>

            <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <MetricPill
                label="Atendimento"
                value="Horário comercial (segunda a sexta)"
              />
              <MetricPill
                label="Canal principal"
                value="Formulário e e-mail institucional"
              />
              <MetricPill
                label="Direcionamento"
                value="Contato encaminhado à área responsável"
              />
            </div>
          </div>

          {/* Card lateral – canais rápidos */}
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-40 mix-blend-screen">
                <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(250,250,250,0.10),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(148,163,184,0.16),transparent_55%)]" />
              </div>

              <div className="relative space-y-4 text-xs text-slate-200">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Principais canais</span>
                  <span>Comercial · Qualidade · RH</span>
                </div>

                <div className="grid items-stretch gap-3 sm:grid-cols-2">
                  <ContactChannel
                    titulo="Comercial &amp; novos projetos"
                    descricao="Projetos de usinagem, cotações de peças seriadas e novas parcerias industriais."
                    email="comercial@primuss.com.br"
                  />
                  <ContactChannel
                    titulo="Qualidade &amp; certificações"
                    descricao="Dúvidas sobre especificações, PPAP, laudos, certificados e tratativas de qualidade."
                    email="qualidade@primuss.com.br"
                  />
                  <ContactChannel
                    titulo="Fornecedores &amp; compras"
                    descricao="Apresentação de portfólio, condições comerciais e processos de cadastro de fornecedores."
                    email="compras@primuss.com.br"
                  />
                  <ContactChannel
                    titulo="Carreiras &amp; RH"
                    descricao="Envio de currículo, banco de talentos e esclarecimentos sobre oportunidades."
                    email="rh@primuss.com.br"
                  />
                </div>

                <p className="mt-2 text-[11px] text-slate-400">
                  Os e-mails indicados são uma sugestão de organização dos
                  canais. Ajuste-os de acordo com os endereços oficiais da
                  Primuss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO PRINCIPAL – FORM + INFORMAÇÕES */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          {/* FORMULÁRIO */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_0_40px_rgba(15,23,42,0.9)] sm:p-8">
            <div className="mb-6 space-y-2">
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Envie uma mensagem à Primuss
              </h2>
              <p className="text-sm text-slate-300">
                Preencha o formulário de forma completa e objetiva. Quanto mais
                detalhadas forem as informações, mais assertivo será o retorno
                da nossa equipe.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* INFORMAÇÕES DA UNIDADE / FAQ */}
          <div className="space-y-6">
            {/* Unidade / endereço */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h2 className="text-sm font-semibold text-slate-50">
                Unidade industrial &amp; contato direto
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Atualize os dados abaixo com as informações oficiais utilizadas
                no rodapé do site institucional.
              </p>

              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <InfoRow
                  label="Endereço"
                  value="(Inserir aqui o endereço completo da unidade industrial, exatamente como no rodapé do site.)"
                />
                <InfoRow
                  label="Telefone"
                  value="(Inserir telefone fixo / central telefônica da Primuss.)"
                />
                <InfoRow
                  label="E-mail geral"
                  value="contato@primuss.com.br"
                  isEmail
                />
                <InfoRow
                  label="Horário de atendimento"
                  value="Segunda a sexta-feira, em horário comercial."
                />
              </div>

              <div className="mt-5 rounded-2xl border border-dashed border-slate-700 bg-slate-950/40 px-4 py-3 text-[11px] text-slate-400">
                <p className="font-medium text-slate-200">
                  Área reservada para mapa / localização
                </p>
                <p className="mt-1">
                  Neste espaço você pode incorporar um mapa (Google Maps, Waze
                  ou outro serviço) com o endereço da unidade, facilitando a
                  localização para visitas e recebimento de materiais.
                </p>
              </div>
            </div>

            {/* Dicas para um bom atendimento */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h3 className="text-sm font-semibold text-slate-50">
                Informações que auxiliam na análise
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Sempre que possível, inclua no contato:
              </p>
              <ul className="mt-3 space-y-2 text-[13px] text-slate-200">
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-yellow-300" />
                  <span>
                    Desenho técnico da peça, especificações principais e
                    material de referência.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-yellow-300" />
                  <span>
                    Volumes estimados por período, horizonte de fornecimento e
                    prazos desejados para início de produção.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-yellow-300" />
                  <span>
                    Requisitos específicos de qualidade, certificações,
                    rastreabilidade ou embalagens especiais.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL – WHATSAPP / E-MAIL RÁPIDO */}
      <section className="border-t border-slate-800 bg-slate-900/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Precisa tratar de um assunto com maior urgência?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Utilize o formulário para registrar sua demanda de forma completa
              ou, se preferir, faça o primeiro contato diretamente pelos canais
              abaixo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:contato@primuss.com.br"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-sm transition hover:border-yellow-400/70 hover:bg-slate-800"
            >
              Enviar e-mail institucional
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-400/90 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-md transition hover:border-emerald-300 hover:bg-emerald-300"
            >
              Falar via WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========= COMPONENTES AUXILIARES ========= */

function TagChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-700 px-3 py-1">
      {children}
    </span>
  );
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-3">
      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-[12px] text-slate-100">{value}</p>
    </div>
  );
}

function ContactChannel({
  titulo,
  descricao,
  email,
}: {
  titulo: string;
  descricao: string;
  email: string;
}) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-[11px]">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
          {titulo}
        </p>
        <p className="mt-1 text-[11px] text-slate-300">{descricao}</p>
      </div>
      <Link
        href={`mailto:${email}`}
        className="mt-2 inline-flex text-[11px] font-medium text-yellow-300 underline-offset-2 hover:underline"
      >
        {email}
      </Link>
    </div>
  );
}

function InfoRow({
  label,
  value,
  isEmail,
}: {
  label: string;
  value: string;
  isEmail?: boolean;
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      {isEmail ? (
        <Link
          href={`mailto:${value}`}
          className="text-sm text-slate-200 underline-offset-2 hover:underline"
        >
          {value}
        </Link>
      ) : (
        <p className="text-sm text-slate-200">{value}</p>
      )}
    </div>
  );
}
