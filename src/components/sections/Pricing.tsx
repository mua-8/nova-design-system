import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$1,500",
    sub: "Starting at — one-time",
    desc: "For founders validating a product or launching a brand site.",
    ideal: "Solo founders & early-stage startups",
    timeline: "1–2 weeks delivery",
    support: "30 days included support",
    stack: "React · Next.js · Tailwind",
    features: [
      "Landing page or up to 5 pages",
      "Custom design system",
      "On-page SEO + analytics",
      "Contact form & lead capture",
      "Deployed on edge infrastructure",
    ],
    cta: "Start your project",
    highlight: false,
  },
  {
    name: "Business",
    price: "$5,900",
    sub: "Starting at — most popular",
    desc: "Full product builds with automation, dashboards, and customer auth.",
    ideal: "Growing businesses & funded startups",
    timeline: "4–6 weeks delivery",
    support: "60 days included support",
    stack: "Next.js · Supabase · n8n · OpenAI",
    features: [
      "Web or mobile app (up to 12 screens)",
      "Authentication & customer accounts",
      "Admin dashboard with real-time data",
      "AI or n8n automation included",
      "Telegram / WhatsApp lead routing",
      "CI/CD + monitoring",
    ],
    cta: "Start your project",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    sub: "Retainer or fixed-bid",
    desc: "Long-running engagements with a dedicated senior squad.",
    ideal: "Established companies & scale-ups",
    timeline: "Ongoing engagement",
    support: "Priority SLA support",
    stack: "Full-stack · AI agents · Custom infra",
    features: [
      "Dedicated senior product team",
      "AI agents & RAG systems",
      "Unlimited integrations",
      "Quarterly roadmap reviews",
      "Compliance & security audits",
      "24/7 incident response",
    ],
    cta: "Talk to our team",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
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
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={cn(
                  "relative h-full rounded-2xl p-7 transition-all duration-300 flex flex-col",
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

                <div className="grid grid-cols-1 gap-2 mb-6 text-xs">
                  <Meta label="Ideal customer" value={t.ideal} />
                  <Meta label="Timeline" value={t.timeline} />
                  <Meta label="Support" value={t.support} />
                  <Meta label="Stack" value={t.stack} />
                </div>

                <Button variant={t.highlight ? "hero" : "glass"} className="w-full mb-6" asChild>
                  <a href="#contact">{t.cta}</a>
                </Button>

                <ul className="space-y-2.5 mt-auto">
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

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 py-2 border-b border-border last:border-0">
      <span className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle pt-0.5">{label}</span>
      <span className="text-xs text-foreground text-right">{value}</span>
    </div>
  );
}
