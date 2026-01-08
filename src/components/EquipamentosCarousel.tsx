// src/components/EquipamentosCarousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type Maquina = {
  nome: string;
  descricao: string;
  img: string;
};

type Props = {
  maquinas: readonly Maquina[];
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);

    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function clampIndex(next: number, total: number): number {
  if (total <= 0) return 0;
  const mod = next % total;
  return mod < 0 ? mod + total : mod;
}

export function EquipamentosCarousel({ maquinas }: Props) {
  const safeMaquinas = useMemo(() => maquinas.filter(Boolean), [maquinas]);
  const total = safeMaquinas.length;

  const [index, setIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  const reducedMotion = usePrefersReducedMotion();

  const rootRef = useRef<HTMLDivElement | null>(null);
  const isVisibleRef = useRef(false);

  // Autoplay somente quando o componente estiver visível.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisibleRef.current = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Mantém index dentro do range se a lista mudar.
  useEffect(() => {
    if (total <= 0) return;
    setIndex((prev) => clampIndex(prev, total));
  }, [total]);

  useEffect(() => {
    if (!isAuto) return;
    if (reducedMotion) return;
    if (total <= 1) return;

    const id = window.setInterval(() => {
      if (!isVisibleRef.current) return;
      setIndex((prev) => clampIndex(prev + 1, total));
    }, 4200);

    return () => window.clearInterval(id);
  }, [isAuto, reducedMotion, total]);

  const current = safeMaquinas[index];

  const goTo = (next: number) => setIndex(clampIndex(next, total));
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  if (!current) return null;

  return (
    <div ref={rootRef} className="relative mx-auto mt-10 max-w-4xl">
      <div
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 sm:p-8"
        onMouseEnter={() => setIsAuto(false)}
        onMouseLeave={() => setIsAuto(true)}
      >
        {/* brilho sutil (não cria “retângulo escuro”) */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-yellow-200/40 via-yellow-100/20 to-transparent blur-2xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-gradient-to-tr from-slate-200/60 via-slate-100/30 to-transparent blur-2xl" />

        <div className="relative grid items-center gap-8 sm:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 sm:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" aria-hidden="true" />
              <span>
                Equipamento {index + 1} de {total}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              {current.nome}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {current.descricao}
            </p>

            <div className="mt-6 flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="h-9 w-9 rounded-full border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
                aria-label="Anterior"
              >
                ‹
              </button>

              <div className="flex items-center gap-1.5" aria-label="Navegação do carrossel">
                {safeMaquinas.map((_, i) => (
                  <button
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className={[
                      "h-1.5 rounded-full transition-all",
                      i === index
                        ? "w-7 bg-yellow-400"
                        : "w-2 bg-slate-300 hover:bg-slate-400",
                    ].join(" ")}
                    aria-label={`Ir para equipamento ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                className="h-9 w-9 rounded-full border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
                aria-label="Próximo"
              >
                ›
              </button>

              <button
                type="button"
                onClick={() => setIsAuto((v) => !v)}
                className="ml-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-[11px] font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70"
                aria-label={isAuto ? "Pausar rotação automática" : "Ativar rotação automática"}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" aria-hidden="true" />
                <span>{isAuto ? "Rodando" : "Pausado"}</span>
              </button>
            </div>
          </div>

          <div className="order-1 sm:order-2">
            <div className="relative flex items-center justify-center rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm">
              <div
                className={reducedMotion ? "" : "animate-[fade_500ms_ease-out]"}
                key={index}
              >
                <div className="relative h-44 w-72 sm:h-56 sm:w-96">
                  <Image
                    src={current.img}
                    alt={current.nome}
                    fill
                    className="object-contain drop-shadow-[0_12px_26px_rgba(0,0,0,0.18)]"
                    sizes="(min-width: 1024px) 420px, 90vw"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-slate-500">
              Arraste (mobile/trackpad) ou use os controles para navegar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
