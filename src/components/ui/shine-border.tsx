import { cn } from "../../lib/utils";

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
  className?: string;
}

export function ShineBorder({
  borderRadius = 12,
  borderWidth = 1.5,
  duration = 8,
  shineColor = "#000000",
  className,
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor) ? shineColor.join(",") : shineColor;

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 rounded-[var(--border-radius)] overflow-hidden", className)}
      style={{
        "--border-radius": `${borderRadius}px`,
        "--border-width": `${borderWidth}px`,
      } as React.CSSProperties}
    >
      <div 
        className="absolute inset-0 rounded-[var(--border-radius)]"
        style={{
          padding: "var(--border-width)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      >
        <div
          className="absolute inset-[-100%] animate-spin"
          style={{
            background: `conic-gradient(from 0deg, transparent 20%, ${colors} 50%, transparent 80%)`,
            animationDuration: `${duration}s`,
            animationTimingFunction: "linear",
          }}
        />
      </div>
    </div>
  );
}
