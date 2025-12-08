// src/app/carreiras/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Carreiras | Primuss",
};

export default function Page() {
    return (
        <div className="bg-slate-950 text-slate-50">
            {/* HERO */}
            <section className="relative overflow-hidden border-b border-slate-800 bg-[radial-gradient(circle_at_top,_#1e293b,_#020617)]">
                {/* glow frio, mesmo padrão das outras páginas */}
                <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_10%_0%,rgba(250,250,250,0.12),transparent_55%),radial-gradient(circle_at_90%_0%,rgba(250,250,250,0.08),transparent_55%)]" />
                </div>

                <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
                    {/* Texto esquerdo */}
                    <div className="flex-1 space-y-6">
                        <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold tracking-[0.24em] text-yellow-300">
                            CARREIRAS · PRIMUSS
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                            Carreiras &amp; oportunidades na Primuss.
                        </h1>

                        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                            A Primuss é uma indústria de usinagem seriada que cresce com base
                            em processos, tecnologia e pessoas. Buscamos profissionais
                            comprometidos com segurança, qualidade e melhoria contínua para
                            compor nosso time.
                        </p>

                        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                            <TagChip>Ambiente industrial organizado</TagChip>
                            <TagChip>Desenvolvimento profissional</TagChip>
                            <TagChip>Segurança e responsabilidade</TagChip>
                        </div>

                        <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
                            <MetricPill
                                label="Atuação"
                                value="Usinagem seriada & montagem"
                            />
                            <MetricPill
                                label="Pessoas"
                                value="Time colaborativo e próximo"
                            />
                            <MetricPill
                                label="Cultura"
                                value="Melhoria contínua e resultados"
                            />
                        </div>
                    </div>

                    {/* Card lateral – contexto de carreiras */}
                    <div className="flex-1">
                        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-6 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] backdrop-blur">
                            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-40 mix-blend-screen">
                                <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(250,250,250,0.10),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(148,163,184,0.16),transparent_55%)]" />
                            </div>


                            <div className="relative space-y-4 text-xs text-slate-200">
                                <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                                    <span>Trabalhar na Primuss</span>
                                    <span>Produção · Qualidade · Administração</span>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <SummaryCard
                                        titulo="Dia a dia de fábrica"
                                        texto="Rotinas organizadas, foco em segurança, 5S e cumprimento de padrões de processo."
                                    />
                                    <SummaryCard
                                        titulo="Desenvolvimento"
                                        texto="Treinamentos internos, acompanhamento de líderes e possibilidade de crescimento."
                                    />
                                    <SummaryCard
                                        titulo="Cultura"
                                        texto="Respeito, transparência e responsabilidade com clientes e colegas."
                                        colSpan
                                    />
                                </div>

                                <p className="mt-2 text-[11px] text-slate-400">
                                    A Primuss valoriza profissionais que cuidam do detalhe,
                                    cumprem procedimentos e buscam melhorar o jeito de fazer as
                                    atividades todos os dias.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PERFIL DE PROFISSIONAIS */}
            <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                            Perfil de profissionais que buscamos
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-slate-300">
                            Nosso time é formado por pessoas com foco em resultado, atenção ao
                            detalhe e disposição para aprender. Conheça alguns perfis comuns
                            nas áreas da Primuss.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <PerfilCard
                        icon={<BriefcaseIcon />}
                        titulo="Produção &amp; Usinagem"
                        texto="Operadores de máquinas CNC, auxiliares de produção e montadores com atenção à qualidade e segurança."
                        pontos={[
                            "Responsabilidade com procedimentos",
                            "Compromisso com metas de produção",
                            "Cuidado com organização do posto de trabalho",
                        ]}
                    />
                    <PerfilCard
                        icon={<TargetIcon />}
                        titulo="Qualidade &amp; Processos"
                        texto="Profissionais focados em inspeção, controle dimensional, documentação de processo e indicadores."
                        pontos={[
                            "Olhar crítico para detalhes",
                            "Facilidade com registros e normas",
                            "Busca por melhoria contínua",
                        ]}
                    />
                    <PerfilCard
                        icon={<UsersIcon />}
                        titulo="Áreas de apoio &amp; administrativas"
                        texto="Pessoas atuando em PCP, logística, compras, engenharia e funções administrativas."
                        pontos={[
                            "Boa comunicação e organização",
                            "Visão de cadeia produtiva",
                            "Trabalho colaborativo com produção",
                        ]}
                    />
                </div>
            </section>

            {/* PROCESSO SELETIVO */}
            <section className="border-t border-slate-800 bg-slate-900/40">
                <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
                    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                                Como funciona o processo seletivo
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm text-slate-300">
                                Nosso processo é simples e objetivo, com foco em entender seu
                                perfil, experiência e alinhamento com a cultura da Primuss.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-4">
                        <EtapaCard
                            numero="1"
                            titulo="Envio de currículo"
                            texto="Você compartilha suas informações profissionais, área de interesse e contatos para retorno."
                        />
                        <EtapaCard
                            numero="2"
                            titulo="Análise"
                            texto="O RH e a liderança da área avaliam o perfil em relação às vagas em aberto ou futuras demandas."
                        />
                        <EtapaCard
                            numero="3"
                            titulo="Entrevista"
                            texto="Conversas presenciais ou online para entender experiência, expectativas e alinhamento de valores."
                        />
                        <EtapaCard
                            numero="4"
                            titulo="Retorno"
                            texto="Combinamos próximos passos, integração e treinamento inicial em caso de aprovação."
                        />
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="border-t border-slate-800 bg-slate-900/60">
                <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                            Quer fazer parte do time Primuss?
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-slate-300">
                            Envie seu currículo e informe a área de interesse. Você também
                            pode utilizar o canal de contato para tirar dúvidas sobre
                            oportunidades em aberto.
                        </p>
                        <p className="mt-2 text-xs text-slate-400">
                            Dica: ao enviar sua mensagem, selecione o assunto relacionado a
                            carreiras ou identifique no texto que se trata de{" "}
                            <span className="font-semibold text-slate-200">
                                candidatura à vaga / banco de talentos
                            </span>
                            .
                        </p>
                    </div>
                    <Link
                        href="/contato"
                        className="inline-flex items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-md transition hover:border-yellow-300 hover:bg-yellow-300"
                    >
                        Enviar currículo para a Primuss
                    </Link>
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

function SummaryCard({
    titulo,
    texto,
    colSpan,
}: {
    titulo: string;
    texto: string;
    colSpan?: boolean;
}) {
    return (
        <div
            className={`flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-4 ${colSpan ? "sm:col-span-2" : ""
                }`}
        >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {titulo}
            </p>
            <p className="mt-2 text-[13px] text-slate-200">{texto}</p>
        </div>
    );
}


function PerfilCard({
    icon,
    titulo,
    texto,
    pontos,
}: {
    icon: ReactNode;
    titulo: string;
    texto: string;
    pontos: string[];
}) {
    return (
        <article className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]">
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(250,204,21,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(148,163,184,0.18),transparent_55%)]" />
            </div>

            <div className="relative space-y-4">
                <div className="flex items-center gap-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/70 text-yellow-200 group-hover:border-yellow-400/80 group-hover:bg-yellow-400/10 group-hover:text-yellow-100">
                        {icon}
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">{titulo}</h3>
                </div>

                <p className="text-sm leading-relaxed text-slate-200 min-h-[65px]">
                    {texto}
                </p>


                <ul className="mt-2 space-y-1.5 text-[13px] text-slate-200">

                    {pontos.map((item) => (
                        <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1 w-1 rounded-full bg-yellow-300" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

function EtapaCard({
    numero,
    titulo,
    texto,
}: {
    numero: string;
    titulo: string;
    texto: string;
}) {
    return (
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_0_30px_rgba(15,23,42,0.75)]">
            <div className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-yellow-400/60 bg-yellow-400/10 text-xs font-semibold text-yellow-300">
                {numero}
            </div>
            <h3 className="text-sm font-semibold text-slate-50">{titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{texto}</p>
        </div>
    );
}

/* ========= ÍCONES ========= */

function BriefcaseIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
        >
            <rect
                x="4"
                y="8"
                width="16"
                height="10"
                rx="2"
                ry="2"
                strokeLinecap="round"
            />
            <path d="M9 8V6.5A1.5 1.5 0 0 1 10.5 5h3A1.5 1.5 0 0 1 15 6.5V8" />
            <path d="M4 12h5m6 0h5" strokeLinecap="round" />
        </svg>
    );
}

function UsersIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
        >
            <circle cx="9" cy="9" r="3" />
            <path d="M4.5 19a4.5 4.5 0 0 1 9 0" strokeLinecap="round" />
            <circle cx="17" cy="9" r="2.5" />
            <path d="M14.5 19a4 4 0 0 1 4-4" strokeLinecap="round" />
        </svg>
    );
}

function TargetIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
        >
            <circle cx="12" cy="12" r="7" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 5V3m7 9h2M5 12H3m9 7v2" strokeLinecap="round" />
        </svg>
    );
}
