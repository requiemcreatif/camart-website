"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Instagram, Menu, Music2, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Artistas", href: "#artists" },
  { label: "Noticias", href: "#news" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#1A1A1A] bg-[#0A0A0A] backdrop-blur">
      <div className="mx-auto flex h-[84px] w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="text-[28px] font-extrabold leading-none tracking-[-0.02em] text-[#F2F2F2]"
        >
          CamART
        </Link>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Abrir menú"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2E2E2E] text-[#DCDCDC] transition hover:bg-[#171717] md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden items-center gap-9 md:flex">
          <nav className="flex items-center gap-10">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.href.replace("#", ""))}
                className={`text-sm tracking-[0.22em] ${
                  index === 0
                    ? "text-[#F2F2F2]"
                    : "text-[#9B9B9B] transition-colors hover:text-[#F2F2F2]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="h-8 w-px bg-[#2B2B2B]" />

          <Button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="h-9 rounded-none bg-[#F2F2F2] px-5 text-sm font-semibold text-[#0A0A0A] hover:bg-[#FFFFFF]"
          >
            Contáctanos
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[120] bg-[#080808] animate-mobile-menu-fade md:hidden">
          <div className="flex min-h-dvh flex-col bg-[#080808] animate-mobile-menu-panel">
            <div className="flex h-[84px] items-center justify-between border-b border-[#1A1A1A] bg-[#080808] px-6">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[44px] font-extrabold leading-none tracking-[-0.02em] text-[#F2F2F2]"
              >
                CamART
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Cerrar menú"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2E2E2E] text-[#A6A6A6] transition hover:bg-[#171717] hover:text-[#E5E5E5]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 border-t border-[#1A1A1A] bg-[#080808]">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => scrollToSection(item.href.replace("#", ""))}
                  className="flex w-full items-center justify-between border-b border-[#171717] bg-[#080808] px-6 py-8 text-left opacity-0 animate-mobile-menu-item"
                  style={{ animationDelay: `${120 + index * 70}ms` }}
                >
                  <span className="mr-4 text-sm tracking-[0.1em] text-[#3F3F3F]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 whitespace-nowrap text-[36px] font-bold leading-none tracking-[-0.02em] text-[#F2F2F2]">
                    {item.label}
                  </span>
                  <ArrowRight className="h-6 w-6 text-[#5F5F5F]" />
                </button>
              ))}
            </nav>

            <div className="mt-auto border-t border-[#171717] bg-[#080808] px-6 pb-8 pt-6 opacity-0 animate-mobile-menu-item [animation-delay:420ms]">
              <Button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="h-14 w-full rounded-none bg-[#F2F2F2] text-lg font-semibold text-[#0A0A0A] hover:bg-white"
              >
                Contáctanos <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div className="space-y-1 text-[14px] text-[#5F5F5F]">
                  <p>info@camart.es</p>
                  <p>+34 600 000 000</p>
                </div>
                <div className="flex items-center gap-4 text-[#676767]">
                  <Instagram className="h-5 w-5" />
                  <Youtube className="h-5 w-5" />
                  <Music2 className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
