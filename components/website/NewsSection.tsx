"use client";

import Image from "next/image";
import dayjs from "dayjs";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePosts } from "@/internal-api/postData";
import { formatText } from "@/utils/formatText";

type Post = {
  id: number;
  title: string;
  excerpt?: string;
  date?: string;
  image?: string;
  link?: string;
};

function stripHtml(input?: string) {
  if (!input) return "";
  return input.replace(/<[^>]*>/g, "").trim();
}

export function NewsSection() {
  const { data: posts = [] } = usePosts();
  const featured = (posts[0] || null) as Post | null;
  const secondarySource = (posts[1] || featured || null) as Post | null;
  const secondary = secondarySource
    ? [secondarySource, secondarySource]
    : ([] as Post[]);

  return (
    <section id="news" className="bg-[#0A0A0A] py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] tracking-[0.24em] text-[#555555]">BLOG</p>
            <h2 className="text-5xl font-extrabold leading-none tracking-[-0.02em] text-[#F2F2F2] md:text-6xl">
              Últimas Noticias
            </h2>
          </div>
          <Button
            variant="outline"
            className="hidden h-10 rounded-none border-[#3A3A3A] bg-transparent px-5 text-sm text-[#F2F2F2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2] md:inline-flex"
          >
            Todas las noticias <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[2.1fr_1fr]">
          <article className="overflow-hidden bg-[#161616]">
            <div className="relative h-[360px] md:h-[430px]">
              <Image
                src={featured?.image || "/images/cam204.jpg"}
                alt={featured?.title || "Noticia destacada"}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-6 py-6">
              <p className="text-sm text-[#6F6F6F]">
                {featured?.date ? dayjs(featured.date).format("MMM DD, YYYY") : ""}
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-[#F2F2F2] md:text-[38px]">
                {featured?.title || "CamART Prods: El Sello que Impulsa el Talento"}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-[#9B9B9B]">
                {formatText(
                  stripHtml(featured?.excerpt) ||
                    "En Cam Art Booking, tenemos actualmente a varios artistas del mundo del Hip-hop/Reggae.",
                  150
                )}
              </p>
              <Button
                variant="link"
                className="mt-4 h-auto p-0 text-base font-semibold text-[#F2F2F2]"
              >
                Leer artículo <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </article>

          <div className="grid gap-5">
            {secondary.map((post, index) => (
              <a
                key={`${post.id}-${index}`}
                href={post.link || "#"}
                className="block overflow-hidden bg-[#161616] transition-colors hover:bg-[#1C1C1C]"
              >
                <div className="relative h-[210px]">
                  <Image
                    src={post.image || "/images/cam459.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-5 py-5">
                  <p className="text-sm text-[#6F6F6F]">
                    {post.date ? dayjs(post.date).format("MMM DD, YYYY") : ""}
                  </p>
                  <h4 className="mt-2 text-2xl font-bold leading-tight text-[#F2F2F2] md:text-[32px]">
                    {formatText(post.title, 42)}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="mt-6 h-10 w-full rounded-none border-[#3A3A3A] bg-transparent text-sm text-[#F2F2F2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2] md:hidden"
        >
          Todas las noticias <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
