import { GraduationCap, Building2, Layers } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const facts = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Final-year CS student, University of Costa Rica",
  },
  {
    icon: Building2,
    label: "Current role",
    value: "Software Developer, Kingstown Consulting",
  },
  {
    icon: Layers,
    label: "Focus",
    value: "Backend systems, databases, and ERP integrations",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="About" title="Engineering for real businesses" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I&apos;m a final-year Computer Science student at the University
                of Costa Rica, currently working as a Software Developer at{" "}
                <span className="text-foreground">Kingstown Consulting</span>,
                where I build software for the management of large commercial
                properties.
              </p>
              <p>
                My work sits closer to enterprise software than to marketing
                sites — accounting systems, ERP integrations, and the backend
                services that keep a business&apos;s financial and operational
                data correct. I care about understanding how a business
                actually operates before writing a line of code, because the
                schema and the workflow are what make software reliable, not
                the interface.
              </p>
              <p>
                I&apos;m particularly drawn to backend development, database
                design, and system architecture — the parts of software that
                don&apos;t show up in a screenshot but determine whether a
                system holds up in production.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-border bg-card p-6">
              <ul className="space-y-6">
                {facts.map((fact) => (
                  <li key={fact.label} className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                      <fact.icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {fact.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">
                        {fact.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
