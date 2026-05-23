import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Launch",
    price: "$1,500",
    sub: "Starting at — one-time",
    desc: "For founders validating an idea fast.",
    features: ["Landing page or 5-page site", "Custom design system", "Basic SEO + analytics", "1 week delivery", "30 days support"],
    cta: "Start a project",
    highlight: false,
  },
  {
    name: "Scale",
    price: "$5,900",
    sub: "Starting at — most popular",
    desc: "Full product builds with motion, automation, and a CMS.",
    features: ["Web or mobile app", "Up to 12 screens / pages", "AI or n8n automation included", "Dashboard + auth", "Telegram lead routing", "60 days support"],
    cta: "Book a strategy call",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "Retainer or fixed-bid",
    desc: "Long-running engagements with a dedicated squad.",
    features: ["Dedicated senior team", "AI agents & RAG systems", "Unlimited integrations", "SLA + priority support", "Quarterly roadmap reviews"],
    cta: "Talk to us",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-background-elevated/40">
      <div className="container-page">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-eyebrow mb-4">Transparent pricing</p>
          <h2 className="text-h1 font-display mb-4">
            Clear pricing. <span className="gradient-text">No surprises.</span>
          </h2>
          <p className="text-foreground-muted text-lg">
            Fixed-scope projects with weekly demos. Pay 50% upfront, 50% on delivery.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative h-full rounded-2xl p-7 transition-all duration-300",
                  t.highlight
                    ? "glass-strong gradient-border lg:-translate-y-3 glow-soft"
                    : "glass hover:-translate-y-1",
                )}
              >
                {t.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-white"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-display font-semibold mb-1">{t.name}</h3>
                <p className="text-sm text-foreground-muted mb-6">{t.desc}</p>
                <div className="mb-1">
                  <span className={cn("text-4xl font-display font-semibold", t.highlight && "gradient-text")}>
                    {t.price}
                  </span>
                </div>
                <p className="text-xs font-mono text-foreground-subtle mb-6">{t.sub}</p>

                <Button variant={t.highlight ? "hero" : "glass"} className="w-full mb-7" asChild>
                  <a href="#contact">{t.cta}</a>
                </Button>

                <ul className="space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-foreground-muted">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
