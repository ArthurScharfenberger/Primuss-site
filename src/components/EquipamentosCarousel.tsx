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
    <div>
      <div className="text-center">
        <h2 className="text-lg sm:text-xl font-semibold italic text-slate-800">
          Principais equipamentos disponíveis para manufatura
        </h2>
        <div className="mt-2 h-[2px] w-64 mx-auto bg-slate-800" />
      </div>

      <div className="mt-8 relative">
        {/* fades laterais */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

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
                <figure className="flex flex-col items-center text-center text-[11px] text-slate-700 max-w-sm mx-auto">
                  <div className="relative h-28 w-full sm:h-32">
                    <Image
                      src={m.img}
                      alt={m.nome}
                      fill
                      className="object-contain"
                      sizes="(min-width: 1024px) 320px, 90vw"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <span className="block font-semibold text-slate-800">
                      {m.nome}
                    </span>
                    <span className="block text-[10px] text-slate-500 mt-1">
                      {m.descricao}
                    </span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* controles */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="h-7 w-7 rounded-full border border-slate-300 bg-white shadow-sm text-slate-700 text-sm flex items-center justify-center hover:bg-slate-50"
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
                    ? "w-6 bg-slate-800"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Ir para equipamento ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="h-7 w-7 rounded-full border border-slate-300 bg-white shadow-sm text-slate-700 text-sm flex items-center justify-center hover:bg-slate-50"
            aria-label="Próximo"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
