import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/#services", label: "Services" },
  { to: "/#technologies", label: "Technologies" },
  { to: "/#pricing", label: "Pricing" },
  { to: "/#portfolio", label: "Portfolio" },
  { to: "/#about", label: "About" },
  { to: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 lg:px-6 py-2.5 transition-all duration-300",
            scrolled ? "glass" : "bg-transparent border border-transparent",
          )}
        >
          <Link to="/" className="group">
            <Logo variant="lockup" className="h-9 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                className="px-3 py-2 text-sm text-foreground-muted hover:text-foreground transition-colors rounded-md"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button variant="hero" size="sm" asChild>
              <a href="/#contact">Start Your Project <ArrowRight className="ml-1" /></a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-foreground-muted hover:text-foreground rounded-md hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" className="mt-2" asChild>
              <a href="/#contact" onClick={() => setOpen(false)}>Start Your Project</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
