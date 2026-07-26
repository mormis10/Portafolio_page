import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { techStack } from "@/content/tech-stack";

export function TechStack() {
  return (
    <section id="stack" className="border-b border-border py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Tech Stack" title="Tools I build with" />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.05}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-muted text-foreground">
                    <group.icon className="size-4" />
                  </span>
                  <p className="text-sm font-medium text-foreground">
                    {group.label}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
