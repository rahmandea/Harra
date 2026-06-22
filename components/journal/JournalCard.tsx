"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import type { JournalPost } from "@/data/journal";
import { Clock, ArrowRight } from "lucide-react";

interface JournalCardProps {
  post: JournalPost;
  index: number;
}

export default function JournalCard({ post, index }: JournalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/journal/${post.slug}`}
        className="group block bg-white border border-warm-beige overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="aspect-[16/10] bg-light-cream relative overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4">
            <Badge>{post.category}</Badge>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3 text-[10px] text-warm-brown font-body mb-3 tracking-wider uppercase">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-warm-beige">|</span>
            <span className="flex items-center gap-1">
              <Clock size={10} />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-heading text-base text-dark-roast group-hover:text-forest-green transition-colors mb-2 tracking-tight">
            {post.title}
          </h3>
          <p className="text-xs text-warm-brown font-body leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <span className="inline-flex items-center gap-1 text-xs text-forest-green font-body font-medium group-hover:gap-2 transition-all">
            Read More
            <ArrowRight size={12} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
