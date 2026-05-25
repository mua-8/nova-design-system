import { cn } from "@/lib/utils";
import mark from "@/assets/kush-mark.png";
import full from "@/assets/kush-logo.png";

type LogoProps = {
  variant?: "mark" | "full" | "lockup";
  className?: string;
  glow?: boolean;
};

export function Logo({ variant = "lockup", className, glow = true }: LogoProps) {
  if (variant === "full") {
    return (
      <img
        src={full}
        alt="Kush — AI & Software Studio"
        className={cn("select-none", glow && "drop-shadow-[0_0_24px_oklch(0.65_0.22_265/0.55)]", className)}
        draggable={false}
      />
    );
  }
  if (variant === "mark") {
    return (
      <img
        src={mark}
        alt="Kush"
        className={cn("select-none", glow && "drop-shadow-[0_0_18px_oklch(0.65_0.22_265/0.6)]", className)}
        draggable={false}
      />
    );
  }
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={mark}
        alt=""
        aria-hidden
        className={cn("h-7 w-auto select-none", glow && "drop-shadow-[0_0_14px_oklch(0.65_0.22_265/0.65)]")}
        draggable={false}
      />
      <span className="font-display font-semibold text-lg tracking-tight">
        Kus<span className="gradient-text">h</span>
      </span>
    </span>
  );
}
