"use client";

import Image from "next/image";
import Link from "next/link";
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
    <section id="news" className="scroll-mt-[84px] bg-[#0A0A0A] py-20">
      <div className="mx-auto container w-full px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] tracking-[0.24em] text-[#555555]">
              BLOG
            </p>
            <h2 className="text-5xl font-extrabold leading-none tracking-[-0.02em] text-[#F2F2F2] md:text-4xl">
              Últimas Noticias
            </h2>
          </div>
          {/* <Button
            variant="outline"
            className="hidden h-10 rounded-none border-[#3A3A3A] bg-transparent px-5 text-sm text-[#F2F2F2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2] md:inline-flex"
          >
            Todas las noticias <ArrowRight className="ml-1 h-4 w-4" />
          </Button> */}
        </div>

        <div className="grid gap-5 lg:grid-cols-[2.1fr_1fr]">
          <article className="overflow-hidden bg-[#161616]">
            <div className="relative h-[300px] md:h-[300px]">
              <Image
                src={featured?.image || "/images/cam204.jpg"}
                alt={featured?.title || "Noticia destacada"}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-6 py-6">
              <p className="text-sm text-[#6F6F6F]">
                {featured?.date
                  ? dayjs(featured.date).format("MMM DD, YYYY")
                  : ""}
              </p>
              <Link href={featured?.id ? `/news/${featured.id}` : "#"}>
                <h3 className="mt-2 text-2xl font-bold leading-tight text-[#F2F2F2] transition-colors hover:text-white md:text-2xl">
                  {featured?.title}
                </h3>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-[#9B9B9B]">
                {formatText(stripHtml(featured?.excerpt), 150)}
              </p>
              <Button
                variant="link"
                asChild
                className="mt-4 h-auto p-0 text-base font-md text-[#F2F2F2]"
              >
                <Link href={featured?.id ? `/news/${featured.id}` : "#"}>
                  Leer artículo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </article>

          <div className="grid gap-5">
            {secondary.map((post, index) => (
              <Link
                key={`${post.id}-${index}`}
                href={post.id ? `/news/${post.id}` : "#"}
                className="block overflow-hidden bg-[#161616] transition-colors hover:bg-[#1C1C1C]"
              >
                <div className="relative h-[180px]">
                  <Image
                    src={post.image || "/images/cam459.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-5 py-2">
                  <p className="text-sm text-[#6F6F6F]">
                    {post.date ? dayjs(post.date).format("MMM DD, YYYY") : ""}
                  </p>
                  <h4 className="mt-1 text-normal font-bold leading-tight text-[#F2F2F2] md:text-xl mb-2">
                    {formatText(post.title, 42)}
                  </h4>
                </div>
              </Link>
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
