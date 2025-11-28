// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Primuss – Precisão em peças técnicas",
  description: "Usinagem seriada e montagem de peças técnicas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-900 antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

/* ============================
   HEADER
============================ */

function SiteHeader() {
  const navItems = [
    { href: "/", label: "Início" },
    { href: "/quem-somos", label: "Quem somos" },
    { href: "/solucoes", label: "Soluções" },
    { href: "/setores-atendidos", label: "Setores atendidos" },
    { href: "/qualidade", label: "Qualidade" },
    { href: "/sustentabilidade", label: "Sustentabilidade" },
    { href: "/clientes", label: "Clientes" },
    { href: "/carreiras", label: "Carreiras" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo MAIOR */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-52 sm:h-14 sm:w-64">
            <Image
              src="/primuss-logo.png"
              alt="Primuss - Precisão em peças técnicas"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Navegação */}
        <nav className="hidden items-center gap-5 text-[13px] font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative px-1 py-1 transition-colors hover:text-slate-900"
            >
              <span>{item.label}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 mx-auto h-0.5 w-0 rounded-full bg-[#FFE500] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ============================
   FOOTER – versão mais limpa
============================ */

function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* BLOCO PRINCIPAL */}
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-[1.3fr,1.1fr,1fr]">
        {/* SOBRE A PRIMUSS */}
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-40">
              <Image
                src="/primuss-logo.png"
                alt="Primuss"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Precisão em peças técnicas
            </p>
          </div>

          <p className="mt-4 max-w-xs text-xs text-slate-400">
            Usinagem seriada e montagem de peças técnicas para setores como
            automotivo, agronegócio, aeroespacial, segurança e defesa, com foco
            em qualidade e estabilidade de fornecimento.
          </p>
        </div>

        {/* SETORES ATENDIDOS – TÉCNICO */}
        <div className="text-xs space-y-3">
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Setores atendidos
          </h3>

          <div className="space-y-2">
            <FooterSectorItem
              icon={<FooterAutoIcon />}
              label="Automotivo & motopeças"
              description="Componentes críticos com requisitos de desempenho, segurança e rastreabilidade."
            />
            <FooterSectorItem
              icon={<FooterAgroIcon />}
              label="Agronegócio"
              description="Peças para máquinas e implementos agrícolas, com foco em robustez."
            />
            <FooterSectorItem
              icon={<FooterAeroIcon />}
              label="Aeroespacial"
              description="Usinagem de alta precisão e controle dimensional rigoroso."
            />
            <FooterSectorItem
              icon={<FooterDefenseIcon />}
              label="Segurança & defesa"
              description="Componentes para aplicações táticas e de defesa, com alta confiabilidade."
            />
          </div>
        </div>

        {/* CONTATO + ACESSO RÁPIDO */}
        <div className="space-y-4 text-xs">
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contato
            </h3>
            <p className="mt-2 text-slate-300">
              Rua Exemplo, 123 – Canoas/RS
            </p>
            <p className="mt-1 text-slate-300">+55 (51) 0000-0000</p>
            <p className="mt-1 text-slate-300">contato@primuss.com.br</p>
          </div>

          <div>
            <h3 className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Acesso rápido
            </h3>
            <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
              <FooterChip href="/quem-somos">Quem somos</FooterChip>
              <FooterChip href="/solucoes">Soluções</FooterChip>
              <FooterChip href="/setores-atendidos">
                Setores atendidos
              </FooterChip>
              <FooterChip href="/qualidade">Qualidade</FooterChip>
              <FooterChip href="/clientes">Clientes</FooterChip>
              <FooterChip href="/contato">Contato</FooterChip>
            </div>
          </div>
        </div>
      </div>

      {/* FAIXA TÉCNICA COM ISO + WHATSAPP + COPYRIGHT */}
      <div className="border-t border-slate-800/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
          {/* ISO + WHATSAPP */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Selo ISO */}
            <div className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-3 py-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/iso-9001.png"
                  alt="Certificação ISO 9001"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-[11px] leading-snug">
                <p className="font-semibold text-slate-100">ISO 9001</p>
                <p className="text-slate-400">Gestão da qualidade certificada</p>
              </div>
            </div>

            {/* QR Code WhatsApp */}
            <div className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-2 py-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/qr-whatsapp.png"
                  alt="WhatsApp comercial"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[10px] text-slate-400">
                Escaneie para falar com o time comercial
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-start gap-1 text-[11px] text-slate-500 md:items-end">
            <span>
              © {new Date().getFullYear()} Primuss. Todos os direitos reservados.
            </span>
            <span className="text-slate-600">
              Desenvolvido por Ayeeezx
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================
   COMPONENTES DE APOIO DO FOOTER
============================ */

function FooterSectorItem({
  icon,
  label,
  description,
}: {
  icon: React.ReactNode;
  label: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-slate-100">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-semibold text-slate-100">{label}</p>
        <p className="text-[11px] text-slate-400">{description}</p>
      </div>
    </div>
  );
}

function FooterChip({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] text-slate-300 transition hover:border-[#FFE500] hover:text-slate-50"
    >
      <span className="inline-block h-1 w-1 rounded-full bg-[#FFE500]" />
      {children}
    </Link>
  );
}

/* Ícones */

function FooterAutoIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M3 16h1l2-5h10l2 5h1" />
      <path d="M6 11h4" />
    </svg>
  );
}

function FooterAgroIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 20c5 0 9-4 9-9" />
      <path d="M4 20c0-5 4-9 9-9" />
      <path d="M13 5c2 0 4 2 4 4" />
      <path d="M13 5c0 2 2 4 4 4" />
    </svg>
  );
}

function FooterAeroIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M3 11.5 21 4l-7.5 17-2.5-7.5L3 11.5Z" />
    </svg>
  );
}

function FooterDefenseIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M12 3 5 6v6.5c0 3.2 2.2 6.1 7 8.5 4.8-2.4 7-5.3 7-8.5V6l-7-3Z" />
      <path d="M9 10h6" />
    </svg>
  );
}
