"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { parseImageUrl } from "@/utils/parseImageUrl";
import { formatText } from "@/utils/formatText";
import { useArtistData } from "@/internal-api/artistData";

export function ArtistsSection() {
  const { data: artists = [] } = useArtistData("custom", "ASC");

  const visibleArtists = artists.slice(0, 9);

  return (
    <section id="artists" className="bg-[#111111] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] tracking-[0.24em] text-[#555555]">ROSTER</p>
            <h2 className="text-5xl font-extrabold leading-none tracking-[-0.02em] text-[#F2F2F2] md:text-6xl">
              Nuestros Artistas
            </h2>
          </div>
          <Button
            variant="outline"
            className="hidden h-10 rounded-none border-[#3A3A3A] bg-transparent px-5 text-sm text-[#F2F2F2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2] md:inline-flex"
          >
            Ver todos <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleArtists.map((artist) => (
            <article key={artist.id} className="overflow-hidden bg-[#1A1A1A]">
              <div className="relative h-[215px] md:h-[230px]">
                <Image
                  src={parseImageUrl(artist.imageUrl) || "/images/cam95.jpg"}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-5">
                <h3 className="text-[34px] font-bold leading-tight text-[#F2F2F2] md:text-3xl">
                  {artist.name}
                </h3>
                <p className="mt-3 min-h-[54px] text-[13px] leading-relaxed text-[#8D8D8D]">
                  {formatText(
                    artist.shortBio || "Artista representado por CamART Booking.",
                    105
                  )}
                </p>
                <Button
                  asChild
                  className="mt-4 h-8 rounded-none bg-[#F2F2F2] px-3 text-xs font-semibold text-[#0A0A0A] hover:bg-[#FFFFFF]"
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
          className="mt-6 h-10 w-full rounded-none border-[#3A3A3A] bg-transparent text-sm text-[#F2F2F2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2] md:hidden"
        >
          Ver todos <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
