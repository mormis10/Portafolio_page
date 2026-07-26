import { ArrowRight, ArrowDown } from "lucide-react";

export function ArchitectureDiagram({ nodes }: { nodes: string[] }) {
  return (
    <div className="rounded-lg border border-border bg-background p-5">
      <p className="mb-4 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Architecture overview
      </p>
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
        {nodes.map((node, index) => (
          <div key={node} className="flex flex-col items-center gap-2 sm:flex-row">
            <div className="w-full rounded-md border border-border bg-card px-3 py-2.5 text-center text-xs font-medium text-foreground sm:w-auto">
              {node}
            </div>
            {index < nodes.length - 1 && (
              <span className="text-muted-foreground/60">
                <ArrowDown className="size-4 sm:hidden" />
                <ArrowRight className="hidden size-4 sm:block" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
