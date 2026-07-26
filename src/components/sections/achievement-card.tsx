"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Achievement } from "@/content/experience";

const fieldGroups: { key: keyof Achievement; label: string }[] = [
  { key: "problem", label: "The problem" },
  { key: "solution", label: "The solution" },
];

const listGroups: { key: "implemented" | "learned"; label: string }[] = [
  { key: "implemented", label: "What I implemented" },
  { key: "learned", label: "What I learned" },
];

export function AchievementCard({ achievement }: { achievement: Achievement }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="rounded-xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 rounded-xl px-5 py-4 text-left"
      >
        <span className="text-sm font-medium text-foreground sm:text-base">
          {achievement.title}
        </span>
        <ChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-5 px-5 pb-6 pt-1">
              {fieldGroups.map((group) => (
                <div key={group.key}>
                  <p className="text-xs font-medium tracking-wide text-brand uppercase">
                    {group.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {achievement[group.key] as string}
                  </p>
                </div>
              ))}

              <div>
                <p className="text-xs font-medium tracking-wide text-brand uppercase">
                  Technologies
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {achievement.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {listGroups.map((group) => (
                  <div key={group.key}>
                    <p className="text-xs font-medium tracking-wide text-brand uppercase">
                      {group.label}
                    </p>
                    <ul className="mt-1.5 space-y-1.5">
                      {achievement[group.key].map((entry) => (
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
