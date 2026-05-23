import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/#services", label: "Services" },
  { to: "/#portfolio", label: "Work" },
  { to: "/#pricing", label: "Pricing" },
  { to: "/#faq", label: "FAQ" },
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
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center glow-primary"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </div>
            <span className="font-display font-semibold text-lg tracking-tight">Nexus</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                className="px-3.5 py-2 text-sm text-foreground-muted hover:text-foreground transition-colors rounded-md"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="/#contact">Contact</a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="/#contact">Book a call</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2">
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
              <a href="/#contact" onClick={() => setOpen(false)}>Book a call</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
