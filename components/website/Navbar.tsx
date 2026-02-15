"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Artistas", href: "#artists" },
  { label: "Noticias", href: "#news" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1A1A1A] bg-[#0A0A0A]/95 backdrop-blur">
      <div className="mx-auto flex h-[84px] w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="text-[28px] font-extrabold leading-none tracking-[-0.02em] text-[#F2F2F2]"
        >
          CamART
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <nav className="flex items-center gap-10">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm tracking-[0.22em] ${
                  index === 0
                    ? "text-[#F2F2F2]"
                    : "text-[#9B9B9B] transition-colors hover:text-[#F2F2F2]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="h-8 w-px bg-[#2B2B2B]" />

          <Button className="h-9 rounded-none bg-[#F2F2F2] px-5 text-sm font-semibold text-[#0A0A0A] hover:bg-[#FFFFFF]">
            Contáctanos
          </Button>
        </div>
      </div>
    </header>
  );
}
