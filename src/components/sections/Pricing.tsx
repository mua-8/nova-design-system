import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Basic Website",
    badge: "Best for Small Businesses",
    price: "2,899 ETB",
    sub: "One-time · Starter package",
    desc: "A modern professional online presence for businesses and personal brands.",
    bestFor: "Small businesses · Portfolios · Personal brands · Startup landing pages",
    timeline: "3–7 days delivery",
    stack: "Next.js · React · Tailwind",
    features: [
      "Modern responsive website",
      "3–5 fully designed pages",
      "Custom UI design",
      "Mobile-friendly layout",
      "SEO-friendly structure",
      "Contact form integration",
      "Social media integration",
      "Fast optimized performance",
      "Basic animations",
      "Full source code ownership",
      "Deployment assistance",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Business Website System",
    badge: "Most Popular",
    price: "5,890 ETB",
    sub: "One-time · Growth package",
    desc: "For businesses that need more functionality, integrations, and scalable systems.",
    bestFor: "Growing businesses · Startups · Agencies · Restaurants · Professional services",
    timeline: "2–4 weeks delivery",
    stack: "Next.js · Supabase · n8n · APIs",
    features: [
      "Everything in Basic package",
      "Larger website structure",
      "Dashboard integration",
      "Blog or CMS integration",
      "Database integration",
      "Telegram & API integrations",
      "Enhanced UI/UX",
      "Business automation setup",
      "Priority support",
    ],
    flexible: [
      "Website + Dashboard",
      "Website + Automation",
      "Website + CMS",
      "Landing Page + Admin Panel",
      "Portfolio + Booking Form",
    ],
    cta: "Start Business Project",
    highlight: true,
  },
  {
    name: "Custom Digital System",
    badge: "Built for scale",
    price: "Custom",
    sub: "Tailored engagement",
    desc: "Advanced scalable digital systems with custom architecture, AI, automation, and enterprise functionality.",
    bestFor: "SaaS platforms · CRMs · Ecommerce · AI products · Enterprise dashboards",
    timeline: "Ongoing engagement",
    stack: "Full-stack · AI · Custom infra",
    features: [
      "Full custom architecture",
      "AI integrations",
      "Automation workflows",
      "Advanced dashboards",
      "Database & auth systems",
      "API development",
      "Ecommerce & booking systems",
      "Mobile app integrations",
      "Scalable backend",
      "Analytics & monitoring",
      "Technical consultation",
    ],
    cta: "Plan Custom System",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-eyebrow mb-4">Unbeatable pricing</p>
          <h2 className="text-h1 font-display mb-4">
            Flexible solutions, <span className="gradient-text">honest pricing</span>.
          </h2>
          <p className="text-foreground-muted text-lg">
            Pick a package that fits your stage. Every project includes design, development, and deployment support.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
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
                <div
                  className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider",
                    t.highlight ? "text-white" : "text-foreground-muted glass",
                  )}
                  style={t.highlight ? { background: "var(--gradient-primary)" } : undefined}
                >
                  {t.badge}
                </div>

                <h3 className="text-lg font-display font-semibold mb-1 mt-2">{t.name}</h3>
                <p className="text-sm text-foreground-muted mb-6 min-h-[2.5rem]">{t.desc}</p>

                <div className="mb-1">
                  <span className={cn("text-4xl font-display font-semibold", t.highlight && "gradient-text")}>
                    {t.price}
                  </span>
                </div>
                <p className="text-xs font-mono text-foreground-subtle mb-6">{t.sub}</p>

                <div className="space-y-2 mb-6 text-xs">
                  <Meta label="Best for" value={t.bestFor} />
                  <Meta label="Timeline" value={t.timeline} />
                  <Meta label="Stack" value={t.stack} />
                </div>

                <Button variant={t.highlight ? "hero" : "glass"} className="w-full mb-6" asChild>
                  <a href="#contact">{t.cta}</a>
                </Button>

                <div className="mb-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle mb-2">
                    Included features
                  </p>
                  <ul className="space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-foreground-muted">
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary-glow" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {t.flexible && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle mb-2">
                      Flexible solutions
                    </p>
                    <ul className="space-y-1.5">
                      {t.flexible.map((f) => (
                        <li key={f} className="text-xs text-foreground-muted">· {f}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-xs text-foreground-subtle mt-10 font-mono">
          Prices in Ethiopian Birr · USD available on request · 50% upfront, 50% on delivery
        </p>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 py-2 border-b border-border last:border-0">
      <span className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle pt-0.5 shrink-0">{label}</span>
      <span className="text-xs text-foreground text-right">{value}</span>
    </div>
  );
}
