import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const terminalButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-mono uppercase tracking-widest text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "terminal-border text-secondary hover:text-primary hover:border-primary hover:bg-primary/10 hover:terminal-glow",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 terminal-glow animate-pulse-glow",
        secondary: "border border-secondary text-secondary hover:bg-secondary/10 hover:terminal-glow",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 terminal-glow",
        outline: "border border-muted-foreground text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5",
        ghost: "text-muted-foreground hover:text-primary hover:bg-primary/5",
        access: "terminal-border text-accent font-bold hover:text-accent hover:border-accent hover:bg-accent/10 hover:terminal-glow animate-pulse-glow",
        acquire: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-bold terminal-glow animate-pulse-glow hover:from-primary-glow hover:to-primary",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface TerminalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof terminalButtonVariants> {
  asChild?: boolean;
}

const TerminalButton = React.forwardRef<HTMLButtonElement, TerminalButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(terminalButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
TerminalButton.displayName = "TerminalButton";

export { TerminalButton, terminalButtonVariants };