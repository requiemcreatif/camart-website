"use client";

import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { Instagram, Facebook, Twitter, Music2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { parseImageUrl } from "@/utils/parseImageUrl";
import { camartData } from "@/data/camartData";
import { Navbar } from "@/components/website/Navbar";
import { Hero } from "@/components/website/Hero";

type Artist = {
  id: number;
  name: string;
  shortBio?: string;
  imageUrl?: string | null;
  social?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    spotify?: string;
  };
};

type Post = {
  id: number;
  title: string;
  excerpt?: string;
  date?: string;
  image?: string;
};

type ContactState = "idle" | "sending" | "success" | "error";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { name: "X", href: "https://x.com/", icon: Twitter },
];

export default function Home() {
  const [formState, setFormState] = useState<ContactState>("idle");

  const { data: artists = [] } = useQuery<Artist[]>({
    queryKey: ["artists-home"],
    queryFn: async () => {
      const response = await axios.get("/api/artists");
      return Array.isArray(response.data) ? response.data : [];
    },
  });

  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ["posts-home"],
    queryFn: async () => {
      const response = await axios.get("/api/posts");
      return Array.isArray(response.data) ? response.data : [];
    },
  });

  const featuredArtists = useMemo(() => artists.slice(0, 6), [artists]);
  const latestPosts = useMemo(() => posts.slice(0, 3), [posts]);

  const onContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("sending");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      lastname: String(formData.get("lastname") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      newsletter: Boolean(formData.get("newsletter")),
    };

    try {
      await axios.post("/api/contact", payload);
      setFormState("success");
      event.currentTarget.reset();
    } catch (error) {
      console.error("Contact request failed", error);
      setFormState("error");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/60 text-foreground">
      <Navbar />
      <Hero />

      <section id="artists" className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl">Artistas CAMART</h2>
          <span className="text-sm text-muted-foreground">
            {featuredArtists.length} destacados
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArtists.map((artist) => (
            <Card key={artist.id} className="overflow-hidden border-border/70">
              <div className="relative h-56">
                <Image
                  src={parseImageUrl(artist.imageUrl) || "/images/cam95.jpg"}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{artist.name}</CardTitle>
                <CardDescription>
                  {artist.shortBio || "Artista representado por Cam Art"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <Button variant="outline" asChild>
                  <Link href={`/artist/${artist.id}`}>Ver perfil</Link>
                </Button>
                <div className="flex gap-1">
                  {artist.social?.instagram && (
                    <a
                      href={artist.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md p-2 transition hover:bg-muted"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  )}
                  {artist.social?.facebook && (
                    <a
                      href={artist.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md p-2 transition hover:bg-muted"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  )}
                  {artist.social?.twitter && (
                    <a
                      href={artist.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md p-2 transition hover:bg-muted"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {artist.social?.spotify && (
                    <a
                      href={artist.social.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md p-2 transition hover:bg-muted"
                    >
                      <Music2 className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="news" className="border-y border-border/60 bg-muted/30 py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="mb-8 text-2xl font-semibold md:text-3xl">
            Ultimas noticias
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-border/70">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/images/cam204.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardDescription>
                    {post.date ? dayjs(post.date).format("DD MMM YYYY") : ""}
                  </CardDescription>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt || "Nuevas novedades del movimiento Cam Art."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-8 rounded-2xl border border-border/70 bg-card p-6 md:grid-cols-2 md:p-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold md:text-3xl">Contacto</h2>
            <p className="text-sm text-muted-foreground">
              {camartData.contactIformation}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border p-2 transition hover:bg-muted"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
          <form className="space-y-4" onSubmit={onContactSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                placeholder="Nombre"
                required
                className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
              <input
                name="lastname"
                placeholder="Apellido"
                required
                className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              required
              className="min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            />
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" name="newsletter" className="h-4 w-4" />
              Quiero recibir novedades por correo
            </label>
            <Button type="submit" disabled={formState === "sending"}>
              {formState === "sending" ? "Enviando..." : "Enviar mensaje"}
            </Button>
            {formState === "success" && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Mensaje enviado correctamente.
              </p>
            )}
            {formState === "error" && (
              <p className="text-sm text-red-600 dark:text-red-400">
                No se pudo enviar el mensaje. Intentalo de nuevo.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
