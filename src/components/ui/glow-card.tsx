import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function GlowCard({
  children,
  className,
  innerClassName,
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl p-px bg-gradient-to-b from-white/10 to-white/[0.02] hover:from-primary/25 hover:to-white/5 transition-all duration-500",
        className
      )}
    >
      <div
        className={cn(
          "h-full rounded-[15px] bg-card/60 backdrop-blur-sm border border-white/[0.04]",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
