import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { journalPosts } from "@/data/journal";
import { Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | HARRA Journal`,
    description: post.excerpt,
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <section className="pt-28 pb-24 lg:pb-32 bg-light-cream min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs text-warm-brown hover:text-dark-roast transition-colors font-body mb-8 tracking-wider uppercase"
          >
            <ArrowLeft size={14} />
            Back to Journal
          </Link>

          <Badge className="mb-6">{post.category}</Badge>

          <div className="aspect-[16/9] relative mb-8 overflow-hidden border border-warm-beige">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-dark-roast leading-tight mb-6 tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-warm-brown font-body mb-10 pb-8 border-b border-warm-beige tracking-wider uppercase">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-warm-beige">|</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <article className="space-y-6">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-warm-brown font-body leading-[1.8] text-sm md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </article>

          <div className="mt-12 pt-8 border-t border-warm-beige flex items-center gap-4">
            <div className="w-10 h-10 bg-light-cream flex items-center justify-center">
              <span className="text-dark-roast font-heading text-sm">H</span>
            </div>
            <div>
              <p className="font-heading text-dark-roast text-sm tracking-tight">HARRA Team</p>
              <p className="text-xs text-warm-brown font-body">
                Specialty Coffee Roastery
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
