"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { camartData } from "@/data/camartData";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[760px] scroll-mt-[84px] overflow-hidden"
    >
      <Image
        src="/images/cam204.jpg"
        alt="Cam Art hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/40" />

      <div className="relative mx-auto flex min-h-[760px] w-full max-w-[1280px] items-center justify-center px-6 py-14 md:px-10">
        <div className="w-full bg-[#0A0A0A]/50 px-6 py-12 text-center md:px-16 md:py-16">
          <div className="mx-auto mb-10 inline-block border border-[#3A3A3A] px-5 py-2">
            <p className="text-[11px] tracking-[0.28em] text-[#D6D6D6]">
              BOOKING &amp; MANAGEMENT
            </p>
          </div>

          {/* <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-[-0.02em] text-[#F2F2F2] md:text-6xl">
            Donde la Música
            <br />
            Encuentra su Escenario
          </h1> */}

          <p className="mx-auto mt-10 max-w-4xl text-base font-thin leading-relaxed text-[#B3B3B3] md:text-xl md:leading-relaxed">
            {camartData.introText}
          </p>

          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="h-12 min-w-[190px] rounded-none bg-[#F2F2F2] px-7 text-base font-semibold text-[#0A0A0A] hover:bg-[#FFFFFF]"
            >
              <a href="#artists">
                Ver Artistas
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 min-w-[170px] rounded-none border-[#8A8A8A] bg-transparent px-7 text-base text-[#F2F2F2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2]"
            >
              <a href="#contact">Contáctanos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
