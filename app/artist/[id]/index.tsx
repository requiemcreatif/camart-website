"use client";

import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import HTMLReactParser from "html-react-parser";
import { ArrowLeft, Facebook, Instagram, Music2, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { parseImageUrl } from "@/utils/parseImageUrl";

type Artist = {
  id: number;
  name: string;
  fullBio: string;
  imageUrl: string | null;
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
      <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-16">
        <p className="text-sm text-muted-foreground">Cargando artista...</p>
      </main>
    );
  }

  if (isError || !artist) {
    return (
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-4 px-4 py-16">
        <p className="text-sm text-muted-foreground">
          No pudimos cargar la informacion del artista.
        </p>
        <Button variant="outline" asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Volver
        </Link>
      </Button>

      <Card className="overflow-hidden border-border/70">
        <div className="grid gap-8 p-6 md:grid-cols-[320px_1fr] md:p-8">
          <div className="relative h-[320px] overflow-hidden rounded-xl">
            <Image
              src={parseImageUrl(artist.imageUrl) || "/images/cam415.jpg"}
              alt={artist.name}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-0">
            <h1 className="mb-4 text-3xl font-bold">{artist.name}</h1>
            <div className="mb-5 flex items-center gap-2">
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
                    className="rounded-md border border-border p-2 transition hover:bg-muted"
                    aria-label={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <article className="prose prose-sm max-w-none dark:prose-invert">
              {HTMLReactParser(artist.fullBio || "")}
            </article>
          </CardContent>
        </div>
      </Card>
    </main>
  );
}
