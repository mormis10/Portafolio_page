import Link from "next/link";
import { Mail, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { siteConfig } from "@/content/site";

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "diegocerdas",
    href: siteConfig.links.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "mormis10",
    href: siteConfig.links.github,
    icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-brand">Contact</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Let&apos;s talk about your next system
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Open to opportunities in backend engineering, enterprise
              software, and systems that need to be built right the first
              time.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            {channels.map((channel) => (
              <Link
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-foreground/20"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <channel.icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {channel.label}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {channel.value}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Link
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              <FileDown className="size-4" />
              Download Resume
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
