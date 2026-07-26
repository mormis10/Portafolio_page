import { ArrowRight, ArrowDown } from "lucide-react";

export function ArchitectureDiagram({ nodes }: { nodes: string[] }) {
  return (
    <div className="@container flex h-full flex-col rounded-lg border border-border bg-background p-5">
      <p className="mb-4 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        Architecture overview
      </p>
      <div className="flex flex-1 flex-col items-stretch justify-center gap-2 @xl:flex-row @xl:items-center @xl:gap-3">
        {nodes.map((node, index) => (
          <div
            key={node}
            className="flex flex-col items-center gap-2 @xl:flex-row"
          >
            <div className="w-full rounded-md border border-border bg-card px-3 py-2.5 text-center text-xs font-medium text-foreground @xl:w-auto">
              {node}
            </div>
            {index < nodes.length - 1 && (
              <span className="text-muted-foreground/60">
                <ArrowDown className="size-4 @xl:hidden" />
                <ArrowRight className="hidden size-4 @xl:block" />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
