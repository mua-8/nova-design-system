import { cn } from "@/lib/utils";
import mark from "@/assets/kush-mark.png";
import full from "@/assets/kush-logo.png";

type LogoProps = {
  variant?: "mark" | "full" | "lockup";
  className?: string;
  glow?: boolean;
};

export function Logo({ variant = "lockup", className, glow = true }: LogoProps) {
  if (variant === "mark") {
    return (
      <img
        src={mark}
        alt="Kush"
        className={cn(
          "select-none",
          glow && "drop-shadow-[0_0_22px_oklch(0.65_0.22_265/0.6)]",
          className,
        )}
        draggable={false}
      />
    );
  }
  // full and lockup both use the official lockup PNG
  return (
    <img
      src={full}
      alt="Kush — AI & Software Studio"
      className={cn(
        "select-none",
        variant === "lockup" ? "h-9 w-auto" : "h-auto w-auto",
        glow && "drop-shadow-[0_0_18px_oklch(0.65_0.22_265/0.45)]",
        className,
      )}
      draggable={false}
    />
  );
}
