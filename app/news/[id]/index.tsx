"use client";

import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import HTMLReactParser from "html-react-parser";
import { usePosts } from "@/internal-api/postData";
import { Navbar } from "@/components/website/Navbar";
import { Footer } from "@/components/website/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { parseImageUrl } from "@/utils/parseImageUrl";
import { formatText } from "@/utils/formatText";

type Post = {
  id: number;
  title: string;
  excerpt?: string;
  postContent?: string;
  date?: string;
  image?: string;
  link?: string;
};

function stripHtml(input?: string) {
  if (!input) return "";
  return input.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

export default function NewsArticleDetail({ id }: { id: string }) {
  const { data: posts = [], isLoading, isError } = usePosts();
  const postId = Number(id);
  const currentPost = posts.find((post: Post) => post.id === postId) as Post | undefined;
  const relatedPosts = (posts as Post[]).filter((post) => post.id !== postId).slice(0, 3);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">
        <Navbar />
        <main className="mx-auto flex min-h-[70vh] w-full max-w-[1280px] items-center justify-center px-6 md:px-10">
          <p className="text-sm text-[#9B9B9B]">Cargando artículo...</p>
        </main>
      </div>
    );
  }

  if (isError || !currentPost) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">
        <Navbar />
        <main className="mx-auto flex min-h-[70vh] w-full max-w-[1280px] flex-col items-center justify-center gap-4 px-6 md:px-10">
          <p className="text-sm text-[#9B9B9B]">
            No pudimos cargar el artículo.
          </p>
          <Button
            variant="outline"
            asChild
            className="rounded-none border-[#3A3A3A] bg-transparent text-[#F2F2F2]"
          >
            <Link href="/#news">Volver a Noticias</Link>
          </Button>
        </main>
      </div>
    );
  }

  const heroImage = parseImageUrl(currentPost.image) || "/images/cam204.jpg";
  const contentHtml = currentPost.postContent || currentPost.excerpt || "";

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F2]">
      <Navbar />

      <main>
        <section className="relative">
          <div className="absolute left-0 right-0 top-5 z-10 mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <Button
              variant="outline"
              asChild
              className="h-8 rounded-none border-[#3A3A3A] bg-[#0A0A0A]/60 px-3 text-xs text-[#D2D2D2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2]"
            >
              <Link href="/#news" className="inline-flex items-center gap-2">
                <ArrowLeft className="h-3.5 w-3.5" />
                Volver a Noticias
              </Link>
            </Button>
          </div>

          <div className="relative h-[360px] md:h-[420px]">
            <Image
              src={heroImage}
              alt={currentPost.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-[#0A0A0A]/30" />
            <div className="absolute bottom-8 left-0 right-0 mx-auto w-full max-w-[1280px] px-6 md:px-10">
              <p className="mb-2 text-[11px] tracking-[0.24em] text-[#8B8B8B]">
                {currentPost.date ? dayjs(currentPost.date).format("MMM DD, YYYY") : ""}
              </p>
              <h1 className="max-w-[900px] text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-[#F2F2F2] md:text-6xl">
                {currentPost.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto w-full max-w-[980px] px-6 md:px-10">
            <article className="text-[#A6A6A6] [&_p]:mb-6 [&_p]:text-[16px] [&_p]:font-light [&_p]:leading-8 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-[#F2F2F2] [&_h3]:mb-4 [&_h3]:mt-10 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-[#F2F2F2] [&_blockquote]:my-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[#404040] [&_blockquote]:pl-5 [&_blockquote]:text-[#D7D7D7] [&_blockquote]:italic [&_img]:my-8 [&_img]:w-full [&_img]:border [&_img]:border-[#232323]">
              {HTMLReactParser(contentHtml)}
            </article>
          </div>
        </section>

        <section className="border-t border-[#1B1B1B] bg-[#090909] py-14">
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-[11px] tracking-[0.24em] text-[#555555]">MÁS NOTICIAS</p>
                <h2 className="text-4xl font-extrabold leading-none tracking-[-0.02em] text-[#F2F2F2] md:text-5xl">
                  Artículos Relacionados
                </h2>
              </div>
              <Button
                variant="outline"
                asChild
                className="hidden h-9 rounded-none border-[#3A3A3A] bg-transparent px-4 text-xs text-[#F2F2F2] hover:bg-[#1A1A1A] hover:text-[#F2F2F2] md:inline-flex"
              >
                <Link href="/#news">
                  Ver todos <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/news/${post.id}`}
                  className="block overflow-hidden border border-[#202020] bg-[#151515] transition-colors hover:bg-[#1C1C1C]"
                >
                  <div className="relative h-[170px]">
                    <Image
                      src={parseImageUrl(post.image) || "/images/cam459.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-4 py-4">
                    <h3 className="text-[20px] font-semibold leading-tight text-[#F2F2F2]">
                      {formatText(post.title, 42)}
                    </h3>
                    <p className="mt-3 text-sm text-[#8D8D8D]">Leer artículo</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
