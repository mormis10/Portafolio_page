import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ProjectVisual } from "@/components/sections/project-visual";
import { ArchitectureDiagram } from "@/components/sections/architecture-diagram";
import type { ProjectEntry } from "@/content/projects";

const lists: { key: "challenges" | "solutions" | "lessons"; label: string }[] = [
  { key: "challenges", label: "Challenges" },
  { key: "solutions", label: "Solutions" },
  { key: "lessons", label: "Lessons learned" },
];

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-brand">{project.category}</p>
          <h3 className="mt-1 text-xl font-semibold text-foreground">
            {project.name}
          </h3>
        </div>
        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-muted"
          >
            Visit live site
            <ExternalLink className="size-3.5" />
          </Link>
        ) : null}
      </div>

      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-normal">
            {tech}
          </Badge>
        ))}
      </div>

      <div
        className={cn(
          "mt-8 grid gap-4",
          project.image && "lg:grid-cols-2"
        )}
      >
        {project.image ? (
          <ProjectVisual label="Interface preview" src={project.image} />
        ) : null}
        <ArchitectureDiagram nodes={project.architecture} />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {lists.map((list) => (
          <div key={list.key}>
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {list.label}
            </p>
            <ul className="mt-2 space-y-2">
              {project[list.key].map((entry) => (
                <li
                  key={entry}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
