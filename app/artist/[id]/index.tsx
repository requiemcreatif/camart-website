"use client";

import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  ArrowLeft,
  Facebook,
  Instagram,
  MapPin,
  Music2,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { parseImageUrl } from "@/utils/parseImageUrl";
import { Navbar } from "@/components/website/Navbar";
import { Footer } from "@/components/website/Footer";
import SpotifyPlayer from "@/components/SpotifyPlayer";

type Artist = {
  id: number;
  name: string;
  shortBio?: string;
  fullBio: string;
  imageUrl: string | null;
  spotifyList?: Record<string, string>;
  youtubeList?: Record<string, string>;
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    spotify?: string;
  };
};

const fetchArtist = async (id: string): Promise<Artist> => {
  const response = await axios.get(`/api/artists/${id}`);
  return response.data;
};

function extractIframeSrc(iframeString?: string) {
  if (!iframeString) return null;
  const match = iframeString.match(/src="([^"]+)"/);
  return match?.[1] || null;
}

function formatBioHtml(rawBio?: string) {
  const source = (rawBio || "").trim();
  if (!source) return [];

  // Normalize mixed backend HTML/text into plain paragraphs we can style consistently.
  // Two-pass decode handles cases like &amp;#8220; coming from some WP responses.
  let text = source
    .replace(/<\/p\s*>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/li\s*>/gi, "\n")
    .replace(/<li[^>]*>/gi, "• ")
    .replace(/<\/h[1-6]\s*>/gi, "\n\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ");

  for (let i = 0; i < 2; i += 1) {
    text = text
      .replace(/&#(\d+);/g, (match, code) => {
        const value = Number(code);
        return Number.isFinite(value) ? String.fromCodePoint(value) : match;
      })
      .replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => {
        const value = parseInt(hex, 16);
        return Number.isFinite(value) ? String.fromCodePoint(value) : match;
      })
      .replace(/&quot;/gi, '"')
      .replace(/&#39;|&apos;/gi, "'")
      .replace(/&amp;/gi, "&")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">");
  }

  return text
    .split(/\n{2,}/)
    .map((paragraph) =>
      paragraph
        .replace(/\s*\n\s*/g, " ")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .filter(Boolean);
}

const socialMap = [
  { key: "instagram", icon: Instagram, label: "Instagram" },
  { key: "facebook", icon: Facebook, label: "Facebook" },
  { key: "twitter", icon: Twitter, label: "X" },
  { key: "spotify", icon: Music2, label: "Spotify" },
] as const;

export default function ArtistDetail({ id }: { id: string }) {
  const {
    data: artist,
    isLoading,
    isError,
  } = useQuery<Artist, Error>({
    queryKey: ["artist", id],
    queryFn: () => fetchArtist(id),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">
        <Navbar />
        <main className="mx-auto flex min-h-[70vh] w-full max-w-[1280px] items-center justify-center px-6 md:px-10">
          <p className="text-sm text-[#9B9B9B]">Cargando artista...</p>
        </main>
      </div>
    );
  }

  if (isError || !artist) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">
        <Navbar />
        <main className="mx-auto flex min-h-[70vh] w-full max-w-[1280px] flex-col items-center justify-center gap-4 px-6 md:px-10">
          <p className="text-sm text-[#9B9B9B]">
            No pudimos cargar la informacion del artista.
          </p>
          <Button
            variant="outline"
            asChild
            className="rounded-none border-[#3A3A3A] bg-transparent text-[#F2F2F2]"
          >
            <Link href="/">Volver al inicio</Link>
          </Button>
        </main>
      </div>
    );
  }

  const heroImage = parseImageUrl(artist.imageUrl) || "/images/cam415.jpg";
  const firstVideo = Object.values(artist.youtubeList || {})[0];
  const embedVideoUrl = extractIframeSrc(firstVideo);
  const formattedBio = formatBioHtml(artist.fullBio);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">
      <Navbar />

      <main>
        <section className="relative">
          <div className="mx-auto w-full max-w-[1280px] px-6 pb-6 pt-5 md:px-10">
            <Button
              variant="outline"
              asChild
              className="h-8 rounded-none border-[#3A3A3A] bg-transparent px-3 text-xs text-[#D2D2D2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2]"
            >
              <Link href="/#artists" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-3.5 w-3.5" />
                Volver a Artistas
              </Link>
            </Button>
          </div>
          <div className="relative h-[380px] md:h-[420px]">
            <Image
              src={heroImage}
              alt={artist.name}
              fill
              className="object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            <div className="absolute bottom-8 left-0 right-0 mx-auto w-full max-w-[1280px] px-6 md:px-10">
              <p className="mb-2 text-[11px] tracking-[0.24em] text-[#8B8B8B]">
                ARTISTA
              </p>
              <h1 className="text-5xl font-extrabold tracking-[-0.02em] text-[#F2F2F2] md:text-6xl">
                {artist.name}
              </h1>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-6 md:grid-cols-[1fr_280px] md:px-10">
            <div>
              <p className="mb-3 text-[11px] tracking-[0.24em] text-[#6F6F6F]">
                BIOGRAFÍA
              </p>
              <h2 className="mb-6 text-3xl font-bold text-[#F2F2F2] md:text-3xl">
                Sobre el Artista
              </h2>
              <article className="max-w-none space-y-5 text-[17px] font-light leading-[1.95] tracking-[0.005em] text-[#A7A7A7]">
                {formattedBio.map((paragraph, index) => (
                  <p key={`${artist.id}-bio-${index}`}>{paragraph}</p>
                ))}
              </article>
            </div>

            <aside className="space-y-4">
              <div className="border border-[#232323] bg-[#151515] p-4">
                <p className="mb-2 text-[10px] tracking-[0.22em] text-[#6F6F6F]">
                  INFO
                </p>
                <p className="flex items-center gap-2 text-[14px] text-[#D7D7D7]">
                  <MapPin className="h-4 w-4" />
                  Sevilla, España
                </p>
              </div>
              <div className="border border-[#232323] bg-[#151515] p-4">
                <p className="mb-2 text-[10px] tracking-[0.22em] text-[#6F6F6F]">
                  GÉNERO
                </p>
                <p className="text-[14px] text-[#D7D7D7]">
                  Hip-Hop / Rap Andaluz
                </p>
              </div>

              <div className="border border-[#232323] bg-[#151515] p-4">
                <p className="mb-2 text-[10px] tracking-[0.22em] text-[#6F6F6F]">
                  REDES
                </p>
                <div className="flex gap-2">
                  {socialMap.map((item) => {
                    const href = artist.social?.[item.key];
                    if (!href) return null;
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-none border border-[#303030] p-2 text-[#D7D7D7] transition hover:bg-[#222222]"
                        aria-label={item.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {artist.spotifyList && Object.keys(artist.spotifyList).length > 0 && (
          <section className="pb-14">
            <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
              <p className="mb-3 text-[11px] tracking-[0.24em] text-[#6F6F6F]">
                SPOTIFY
              </p>
              <div className="overflow-hidden border border-[#1F1F1F] bg-[#111111] p-4 md:p-5">
                <SpotifyPlayer spotifyList={artist.spotifyList} mode="desktop" />
              </div>
            </div>
          </section>
        )}

        <section className="pb-14">
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <p className="mb-3 text-[11px] tracking-[0.24em] text-[#6F6F6F]">
              VIDEO
            </p>
            {/* <h3 className="mb-6 text-3xl font-bold text-[#F2F2F2] md:text-4xl">
              En Directo
            </h3> */}
            <div className="relative h-[260px] overflow-hidden border border-[#1F1F1F] bg-[#111111] md:h-[420px]">
              {embedVideoUrl ? (
                <iframe
                  src={embedVideoUrl}
                  title={`Video en directo de ${artist.name}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[#8F8F8F]">
                  No hay video disponible para este artista.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="border-y border-[#1B1B1B] bg-[#090909] py-14">
          <div className="mx-auto w-full max-w-[1280px] px-6 text-center md:px-10">
            <h3 className="text-3xl font-bold text-[#F2F2F2] md:text-4xl">
              ¿Quieres contratar a {artist.name}?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] text-[#949494]">
              Conectamos para conocer tu propuesta, condiciones y todo lo
              necesario para llevar el evento a otro nivel.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="h-10 rounded-none bg-[#F2F2F2] px-6 text-[#0A0A0A]"
              >
                <a href="#contact">Solicitar Booking</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-10 rounded-none border-[#3A3A3A] bg-transparent px-6 text-[#F2F2F2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2]"
              >
                <a
                  href={`mailto:info@camart.es?subject=${encodeURIComponent(
                    `Booking ${artist.name}`,
                  )}`}
                >
                  Enviar Mensaje
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
