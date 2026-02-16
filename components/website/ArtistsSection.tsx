"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { parseImageUrl } from "@/utils/parseImageUrl";
import { formatText } from "@/utils/formatText";
import { useArtistData } from "@/internal-api/artistData";

function decodeHtmlEntities(input?: string) {
  if (!input) return "";

  // Run twice to handle values like &amp;#8220;
  let text = input;
  for (let i = 0; i < 2; i += 1) {
    text = text
      .replace(/&#(\d+);/g, (_, code) => {
        const value = Number(code);
        return Number.isFinite(value) ? String.fromCodePoint(value) : _;
      })
      .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
        const value = parseInt(hex, 16);
        return Number.isFinite(value) ? String.fromCodePoint(value) : _;
      })
      .replace(/&quot;/g, '"')
      .replace(/&#39;|&apos;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&nbsp;/g, " ");
  }

  return text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export function ArtistsSection() {
  const { data: artists = [] } = useArtistData("custom", "ASC");

  const visibleArtists = artists.slice(0, 9);

  return (
    <section
      id="artists"
      className="scroll-mt-[84px] bg-[#0A0A0A] py-20 animate-reveal-up"
    >
      <div className="mx-auto container w-full px-6 md:px-10">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p
              className="mb-3 text-[11px] tracking-[0.24em] text-[#555555] animate-reveal-up"
              style={{ animationDelay: "40ms" }}
            >
              ROSTER
            </p>
            <h2
              className="text-5xl font-extrabold leading-none tracking-[-0.02em] text-[#F2F2F2] md:text-4xl animate-reveal-up"
              style={{ animationDelay: "90ms" }}
            >
              Nuestros Artistas
            </h2>
          </div>
        </div>

        <div className="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleArtists.map((artist, index) => (
            <article
              key={artist.id}
              className="group overflow-hidden bg-[#1A1A1A] motion-card-hover animate-reveal-up"
              style={{ animationDelay: `${120 + Math.min(index, 8) * 50}ms` }}
            >
              <div className="relative h-[215px] md:h-[240px]">
                <Image
                  src={parseImageUrl(artist.imageUrl) || "/images/cam95.jpg"}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="text-[18px] font-bold leading-tight text-[#F2F2F2] md:text-2xl">
                  {artist.name}
                </h3>
                <p className="mt-3 min-h-[54px] text-[13px] leading-relaxed text-[#8D8D8D]">
                  {formatText(
                    decodeHtmlEntities(artist.shortBio) ||
                      "Artista representado por CamART Booking.",
                    105,
                  )}
                </p>
                <Button
                  asChild
                  className="mt-2 h-8 rounded-none bg-[#F2F2F2] px-3 text-xs font-semibold text-[#0A0A0A] hover:bg-[#FFFFFF] motion-button"
                >
                  <Link href={`/artist/${artist.id}`}>
                    Leer más <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <Button
          variant="outline"
          className="mt-6 h-10 w-full rounded-none border-[#3A3A3A] bg-transparent text-sm text-[#F2F2F2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2] md:hidden motion-button"
        >
          Ver todos <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
