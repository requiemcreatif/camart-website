"use client";

import Link from "next/link";
import { Instagram, Youtube, Music2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Artistas", href: "#artists" },
  { label: "Noticias", href: "#news" },
  { label: "Contacto", href: "#contact" },
];

const legalLinks = [
  { label: "Política de Privacidad", href: "#" },
  { label: "Términos de Uso", href: "#" },
  { label: "Cookies", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pb-10 pt-16">
      <div className="mx-auto container w-full px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[2.2fr_1fr_1fr_1fr]">
          <div>
            <p className="text-[44px] font-extrabold tracking-[-0.02em] text-[#F2F2F2] md:text-[30px]">
              CamART
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#777777] md:text-normal">
              Booking &amp; Management de artistas de Hip-hop y Reggae.
              Impulsando la cultura desde el escenario.
            </p>
            <div className="mt-6 flex items-center gap-4 text-[#777777]">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#F2F2F2]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#F2F2F2]">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Music" className="hover:text-[#F2F2F2]">
                <Music2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-[12px] font-semibold tracking-[0.14em] text-[#E2E2E2] md:text-[14px]">
              Navegación
            </p>
            <ul className="space-y-3 text-[13px] text-[#7A7A7A] md:text-normal">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#F2F2F2]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[12px] font-semibold tracking-[0.14em] text-[#E2E2E2] md:text-[14px]">
              Legal
            </p>
            <ul className="space-y-3 text-[13px] text-[#7A7A7A] md:text-normal">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F2F2F2]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[12px] font-semibold tracking-[0.14em] text-[#E2E2E2] md:text-[14px]">
              Contacto
            </p>
            <div className="space-y-3 text-normal text-[#7A7A7A] md:text-normal">
              <p className="text-sm">info@camart.es</p>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px bg-[#1A1A1A]" />

        <div className="mt-8 flex flex-col justify-between gap-4 text-sm text-[#5F5F5F] md:flex-row ">
          <p>© 2024 CamART. Todos los derechos reservados.</p>
          <Link href="#" className="hover:text-[#F2F2F2]">
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
