"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/content/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center border-b border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_70%)]"
      />
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-2xl"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-brand" />
            {siteConfig.role}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-2 text-lg font-medium text-muted-foreground"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
            <Link
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              <FileDown className="size-4" />
              Download Resume
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <GithubIcon className="size-4" />
              GitHub
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </Link>
    </section>
  );
}
