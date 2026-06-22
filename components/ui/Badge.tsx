import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-[10px] font-medium tracking-[0.15em] uppercase bg-white/80 text-dark-roast border border-warm-beige font-body backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
