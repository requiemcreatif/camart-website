"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "camart_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const handleChoice = (value: "rejected" | "accepted" | "customized") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] w-[calc(100%-32px)] max-w-[1280px] -translate-x-1/2 border border-[#2A2A2A] bg-[#121212] px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] md:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-6">
        <div className="flex min-w-0 items-start gap-4">
          <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#3A3A3A] bg-[#1A1A1A] text-[#F2F2F2]">
            <Cookie className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-md font-semibold leading-none text-[#F2F2F2]">
              Tu privacidad importa
            </p>
            <p className="mt-2 text-sm text-[#A5A5A5]">
              Utilizamos cookies para personalizar tu experiencia y analizar el
              tráfico.
            </p>
            <Link
              href="#"
              className="mt-2 inline-block text-sm font-md text-[#F2F2F2] md:text-normal"
            >
              Política de privacidad
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-wrap items-center gap-3 md:ml-auto md:w-auto md:justify-end">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="h-11 min-w-[120px] border border-[#3A3A3A] px-5 text-sm font-md text-[#E3E3E3] transition hover:bg-[#1E1E1E]"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => handleChoice("customized")}
            className="h-11 min-w-[126px] border border-[#3A3A3A] px-5 text-sm font-md text-[#E3E3E3] transition hover:bg-[#1E1E1E]"
          >
            Personalizar
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="h-11 min-w-[140px] bg-[#F2F2F2] px-5 text-sm font-md text-[#101010] transition hover:bg-white"
          >
            Aceptar todo
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Cerrar banner de cookies"
            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2F2F2F] text-[#737373] transition hover:border-[#3A3A3A] hover:text-[#B4B4B4]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
