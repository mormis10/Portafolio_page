import Image from "next/image";
import { ImageIcon } from "lucide-react";

export function ProjectVisual({
  label,
  src,
}: {
  label: string;
  src?: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-background">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-2 rounded-full bg-muted" />
        <span className="size-2 rounded-full bg-muted" />
        <span className="size-2 rounded-full bg-muted" />
      </div>
      {src ? (
        <div className="relative aspect-video">
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center gap-2 text-muted-foreground/70 [background-image:linear-gradient(135deg,var(--color-muted)_25%,transparent_25%,transparent_50%,var(--color-muted)_50%,var(--color-muted)_75%,transparent_75%,transparent)] [background-size:16px_16px]">
          <ImageIcon className="size-6" strokeWidth={1.5} />
          <span className="text-xs font-medium">{label}</span>
        </div>
      )}
    </div>
  );
}
