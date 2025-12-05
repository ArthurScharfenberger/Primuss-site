// src/app/clientes/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clientes | Primuss",
};

type Cliente = {
  id: string;
  nome: string;
  logoSrc: string;
  url?: string; // site da empresa (opcional)
};

const CLIENTES: Cliente[] = [
  // ===== PARCEIROS GLOBAIS / MULTINACIONAIS =====
  {
    id: "johndeere",
    nome: "John Deere",
    logoSrc: "/johndeere.avif",
    url: "https://www.deere.com.br/pt/index.html",
  },
  {
    id: "stihl",
    nome: "Stihl",
    logoSrc: "/stihl.avif",
    url: "https://www.stihl.com.br",
  },
  {
    id: "parker",
    nome: "Parker",
    logoSrc: "/parker.avif",
    url: "https://www.parker.com",
  },
  {
    id: "agco",
    nome: "AGCO",
    logoSrc: "/agco.avif",
    url: "https://www.agcocorp.com",
  },
  {
    id: "dana",
    nome: "Dana",
    logoSrc: "/dana.avif",
    url: "https://www.dana.com",
  },
  {
    id: "gkn",
    nome: "GKN",
    logoSrc: "/gkn.png",
    url: "https://www.gknautomotive.com",
  },
  {
    id: "gerdau",
    nome: "Gerdau",
    logoSrc: "/gerdau.avif",
    url: "https://www2.gerdau.com",
  },
  {
    id: "nexteer",
    nome: "Nexteer",
    logoSrc: "/nexteer.avif",
    url: "https://www.nexteer.com",
  },
  {
    id: "springer",
    nome: "Springer Carrier",
    logoSrc: "/springer.avif",
    url: "https://www.mideacarrier.com.br",
  },

  // ===== MARCAS NACIONAIS / SETOR AUTOMOTIVO / DEFESA =====
  {
    id: "suspensys",
    nome: "Suspensys",
    logoSrc: "/suspensys.avif",
    url: "https://www.suspensys.com",
  },
  {
    id: "sulmaq",
    nome: "Sulmaq",
    logoSrc: "/sulmaq.avif",
    url: "https://sulmaq.com", // ajuste se vocês usarem outro domínio
  },
  {
    id: "farina",
    nome: "Farina",
    logoSrc: "/farina.avif",
    url: "https://www.farina.com.br",
  },
  {
    id: "ael",
    nome: "AEL Sistemas",
    logoSrc: "/ael.avif",
    url: "https://www.ael.com.br",
  },
  {
    id: "imbel",
    nome: "Imbel",
    logoSrc: "/imbel.avif",
    url: "https://www.imbel.gov.br",
  },
  {
    id: "maxiforja",
    nome: "Maxiforja",
    logoSrc: "/maxiforja.avif",
    url: "https://www.maxiforja.com.br",
  },
  {
    id: "milbra",
    nome: "Milbra",
    logoSrc: "/milbra.avif",
    url: "https://www.milbra.com.br",
  },
  {
    id: "fallgatter",
    nome: "Fallgatter",
    logoSrc: "/fallgatter.avif",
    url: "https://www.fallgatter.com.br",
  },
  {
    id: "laarmeria",
    nome: "La Armeria",
    logoSrc: "/laarmeria.avif",

  },
  {
    id: "beb",
    nome: "B&B Agroparts",
    logoSrc: "/beb.avif",
    url: "https://www.bebagroparts.com.br",
  },

  // ===== DEMAIS CLIENTES =====
  {
    id: "gedore",
    nome: "Gedore",
    logoSrc: "/gedore.avif",
    url: "https://www.gedore.com.br",
  },
  {
    id: "fireeagle",
    nome: "Fire Eagle Armory",
    logoSrc: "/fireeagle.png",
    url: "https://www.fireeagle-armory.com",
  },
];

export default function ClientesPage() {
  return (
    <div className="bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="border-b border-slate-900 bg-[radial-gradient(circle_at_top,_#020617,_#020617)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
          {/* Texto à esquerda */}
          <div className="max-w-xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[11px] font-semibold tracking-[0.24em] text-yellow-300">
              CLIENTES · PRIMUSS
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Marcas que conectam suas operações à Primuss.
            </h1>

            <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">
              A Primuss atende empresas de diferentes portes e segmentos
              industriais em programas de fornecimento contínuo. Abaixo, você
              encontra algumas das marcas que já confiam na nossa capacidade de
              usinagem, montagem e suporte técnico.
            </p>

            <div className="grid gap-3 text-xs text-slate-200 sm:grid-cols-3">
              <ResumoPill
                title="Relação com o cliente"
                text="Parcerias industriais de médio e longo prazo."
              />
              <ResumoPill
                title="Segmentos atendidos"
                text="Automotivo, agrícola, defesa, máquinas e outros."
              />
              <ResumoPill
                title="Forma de atuação"
                text="Engenharia conjunta, repetibilidade e confiabilidade."
              />
            </div>
          </div>

          {/* Bloco de contexto à direita (sem logos dentro) */}
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 px-5 py-6 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur">
              <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
                <div className="h-full w-full bg-[radial-gradient(circle_at_10%_0%,rgba(250,250,250,0.12),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(250,250,250,0.08),transparent_55%)]" />
              </div>

              <div className="relative space-y-4 text-xs text-slate-200">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Relações de longo prazo
                </p>
                <p className="text-sm text-slate-100">
                  Programas seriados, projetos especiais e suporte de
                  engenharia, sempre focados em estabilidade de fornecimento e
                  qualidade dimensional.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  <MiniMetric
                    label="Tempo de atuação"
                    value="35+ anos"
                    detail="Presença contínua em usinagem seriada."
                  />
                  <MiniMetric
                    label="Modelo"
                    value="Fornecedor estratégico"
                    detail="Integração com a cadeia de suprimentos do cliente."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUADRO PRINCIPAL DE LOGOS */}
      <section className="border-t border-slate-900 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-6 space-y-2">
            <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
              Esses são alguns dos clientes que confiam na Primuss.
            </h2>
            <p className="text-sm text-slate-300">
              Layout simples e direto: apenas as marcas dos clientes, com
              tamanhos padronizados e espaçamento uniforme, sobre um fundo claro
              para valorizar a identidade visual de cada empresa.
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-800 bg-slate-50 px-6 py-10 shadow-[0_0_60px_rgba(15,23,42,0.85)]">
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {CLIENTES.map((cliente) => (
                <LogoItem key={cliente.id} cliente={cliente} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ========= COMPONENTES AUXILIARES ========= */

function ResumoPill({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-slate-900/70 px-3 py-3 ring-1 ring-slate-800/80">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {title}
      </p>
      <p className="mt-1 text-[11px] leading-relaxed text-slate-200">{text}</p>
    </div>
  );
}

function MiniMetric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold text-slate-50">{value}</p>
      <p className="mt-0.5 text-[11px] text-slate-300">{detail}</p>
    </div>
  );
}

function LogoItem({ cliente }: { cliente: Cliente }) {
  const content = (
    <div className="group flex h-full w-full items-center justify-center">
      <div className="relative flex h-[70px] w-[150px] items-center justify-center sm:h-[80px] sm:w-[170px]">
        {/* Glow bem suave no hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-yellow-200/0 blur-xl transition group-hover:bg-yellow-200/25" />
        <Image
          src={cliente.logoSrc}
          alt={cliente.nome}
          fill
          sizes="(max-width: 768px) 150px, 170px"
          className="relative object-contain transition-transform duration-200 group-hover:scale-105"
        />
      </div>
    </div>
  );

  // Se tiver URL, vira link clicável abrindo em nova aba
  if (cliente.url) {
    return (
      <Link
        href={cliente.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={cliente.nome}
        className="flex items-center justify-center cursor-pointer"
      >
        {content}
      </Link>
    );
  }

  // Se não tiver URL definida, só exibe a logo com o mesmo hover
  return (
    <div className="flex items-center justify-center" aria-label={cliente.nome}>
      {content}
    </div>
  );
}
