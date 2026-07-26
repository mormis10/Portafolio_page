import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { AchievementCard } from "@/components/sections/achievement-card";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience"
            description="A timeline of the systems I've built and the engineering behind them."
          />
        </Reveal>

        <div className="mt-14 space-y-16">
          {experience.map((entry) => (
            <Reveal key={entry.id}>
              <div className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 size-2.5 rounded-full bg-brand" />
                <span className="absolute left-[4.5px] top-4 bottom-0 w-px bg-border" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {entry.role} · {entry.company}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {entry.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {entry.location}
                </p>

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {entry.summary}
                </p>

                <ul className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {entry.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      {responsibility}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3">
                  <p className="text-sm font-medium text-foreground">
                    Major accomplishments
                  </p>
                  {entry.achievements.map((achievement) => (
                    <AchievementCard
                      key={achievement.id}
                      achievement={achievement}
                    />
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
