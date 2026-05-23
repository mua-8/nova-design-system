import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 shadow-md",
        hero: "rounded-lg text-primary-foreground shadow-[0_0_30px_oklch(0.65_0.22_265/0.5)] hover:shadow-[0_0_50px_oklch(0.65_0.22_265/0.7)] hover:-translate-y-0.5 [background:var(--gradient-primary)]",
        glass: "rounded-lg glass text-foreground hover:bg-white/10 hover:-translate-y-0.5",
        outline: "rounded-lg border border-border bg-transparent text-foreground hover:bg-white/5 hover:border-primary-glow/40",
        ghost: "rounded-lg text-foreground hover:bg-white/5",
        link: "text-primary underline-offset-4 hover:underline",
        destructive: "rounded-lg bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary: "rounded-lg bg-muted text-foreground hover:bg-muted/80",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-3.5 text-sm rounded-md",
        lg: "h-13 px-7 text-base",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
