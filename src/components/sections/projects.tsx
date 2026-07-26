import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Systems built for production"
            description="Three initiatives that go beyond a demo — real accounting, integration, and commerce systems running in production."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
