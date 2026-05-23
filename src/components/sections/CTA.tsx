import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong gradient-border p-10 lg:p-16 text-center">
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 h-[28rem] w-[60rem] opacity-50 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse, oklch(0.65 0.22 265 / 0.5), oklch(0.62 0.25 295 / 0.3) 40%, transparent 70%)" }}
            />
            <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest text-foreground-muted mb-6">
                <Sparkles className="h-3 w-3 text-primary-glow" />
                Ready when you are
              </div>
              <h2 className="text-h1 lg:text-display-xl font-display mb-5 max-w-3xl mx-auto">
                <span className="gradient-text-hero">Let's ship the </span>
                <span className="gradient-text">thing</span>
                <span className="gradient-text-hero"> you've been putting off.</span>
              </h2>
              <p className="text-foreground-muted text-lg max-w-xl mx-auto mb-9">
                Book a free 30-minute strategy call. We'll map your project and quote it within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <a href="#contact">Book a strategy call <ArrowRight /></a>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <a href="#pricing">View pricing</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
