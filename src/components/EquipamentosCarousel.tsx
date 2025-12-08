// src/components/EquipamentosCarousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type Maquina = {
  nome: string;
  descricao: string;
  img: string;
};

export function EquipamentosCarousel({ maquinas }: { maquinas: Maquina[] }) {
  const [index, setIndex] = useState(0);
  const total = maquinas.length;

  // autoplay
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(id);
  }, [total]);

  const goTo = (i: number) => {
    setIndex(((i % total) + total) % total);
  };

  return (
    <div className="mt-10 rounded-3xl border border-slate-800/60 bg-slate-950/70 px-4 py-10 sm:px-10 shadow-[0_0_80px_rgba(0,0,0,0.7)]">
      <div className="text-center">
        <h2 className="text-base sm:text-lg font-semibold italic text-slate-50">
          Principais equipamentos disponíveis para manufatura
        </h2>
        <div className="mt-3 h-[2px] w-40 sm:w-56 mx-auto bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500" />
      </div>

      <div className="mt-8 relative">
        {/* fades laterais (agora escuros e bem suaves) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent" />

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {maquinas.map((m, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] px-4 flex items-center justify-center"
              >
                <figure className="flex flex-col items-center text-center max-w-sm mx-auto">
                  <div className="relative h-36 w-full sm:h-40">
                    <Image
                      src={m.img}
                      alt={m.nome}
                      fill
                      className="object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
                      sizes="(min-width: 1024px) 320px, 90vw"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <span className="block text-sm font-semibold text-slate-50">
                      {m.nome}
                    </span>
                    <span className="block mt-1 text-[11px] text-slate-300">
                      {m.descricao}
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* controles */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="h-8 w-8 rounded-full border border-slate-700 bg-slate-900/90 text-slate-100 text-sm flex items-center justify-center hover:bg-slate-800 transition-colors"
            aria-label="Anterior"
          >
            ‹
          </button>
          <div className="flex items-center gap-1.5">
            {maquinas.map((_m, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-yellow-400"
                    : "w-2 bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`Ir para equipamento ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="h-8 w-8 rounded-full border border-slate-700 bg-slate-900/90 text-slate-100 text-sm flex items-center justify-center hover:bg-slate-800 transition-colors"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
