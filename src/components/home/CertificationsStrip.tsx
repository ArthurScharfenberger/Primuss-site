// src/components/home/CertificationsStrip.tsx
import Link from "next/link";
import Image from "next/image";

export function CertificationsStrip() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-[1.1fr,1fr,1fr] md:items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            Credibilidade & sustentabilidade
          </p>
          <p className="mt-2 max-w-xs text-xs text-slate-500">
            Certificações que reforçam a solidez financeira e o compromisso da
            Primuss com energia renovável.
          </p>
        </div>

        <Link
          href="/duns.pdf"
          target="_blank"
          className="group rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <Image
              src="/drsimage.avif"
              alt="D-U-N-S Registered"
              width={120}
              height={80}
              className="transition-transform duration-200 group-hover:scale-105"
            />
            <p className="text-[11px] font-semibold text-slate-700">
              D-U-N-S® Registered
            </p>
            <p className="text-[11px] text-slate-500">
              Cadastro global Dun &amp; Bradstreet.
            </p>
          </div>
        </Link>

        <Link
          href="/energia.pdf"
          target="_blank"
          className="group rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <Image
              src="/renovavel.avif"
              alt="Energia incentivada"
              width={140}
              height={80}
              className="transition-transform duration-200 group-hover:scale-105"
            />
            <p className="text-[11px] font-semibold text-slate-700">
              Empresa Renovável
            </p>
            <p className="text-[11px] text-slate-500">
              Energia proveniente de fontes renováveis.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
