import { Globe, Smartphone, Bot, Workflow, BrainCircuit, LayoutDashboard, Plug, Palette, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-converting marketing sites and bespoke web platforms built for speed, SEO, and scale.",
    stack: "Next.js · React · Tailwind",
    benefit: "More qualified leads from every visit.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native-feeling iOS & Android apps shipped from a single codebase to both stores.",
    stack: "React Native · Flutter · Expo",
    benefit: "Reach customers on every device.",
  },
  {
    icon: BrainCircuit,
    title: "AI Systems",
    desc: "Custom AI assistants, RAG search, and intelligent agents wired into your existing stack.",
    stack: "OpenAI · LangChain · Python",
    benefit: "Automate decisions, not just tasks.",
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    desc: "Self-hosted workflows that connect CRM, billing, email, and ops — without glue code.",
    stack: "n8n · Webhooks · APIs",
    benefit: "Replace manual work with reliable flows.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Systems",
    desc: "Admin panels and customer portals with real-time data, roles, and beautiful charts.",
    stack: "React · Supabase · PostgreSQL",
    benefit: "Give every team a single source of truth.",
  },
  {
    icon: Plug,
    title: "SaaS Development",
    desc: "Multi-tenant SaaS products with billing, auth, and analytics from day one.",
    stack: "Next.js · Stripe · Postgres",
    benefit: "Launch and monetise faster.",
  },
  {
    icon: Bot,
    title: "API Integrations",
    desc: "Stripe, Twilio, HubSpot, Notion — anything with a webhook, wired exactly how you need.",
    stack: "REST · GraphQL · Webhooks",
    benefit: "Make your tools work as one system.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Research-led product design and design systems crafted for conversion and clarity.",
    stack: "Figma · Design Systems",
    benefit: "Interfaces customers instantly trust.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-eyebrow mb-4">What we build for customers</p>
          <h2 className="text-h1 font-display mb-4">
            One studio. <span className="gradient-text">Every layer</span> of your product.
          </h2>
          <p className="text-foreground-muted text-lg leading-relaxed">
            From the first pixel to the last cron job — we design, build, and automate the systems your business runs on.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, desc, stack, benefit }) => (
            <StaggerItem key={title}>
              <div className="group relative h-full p-6 rounded-2xl glass gradient-border transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                <div
                  className="h-11 w-11 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "var(--gradient-primary-soft)", border: "1px solid var(--border-glow)" }}
                >
                  <Icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-display font-semibold">{title}</h3>
                  <ArrowUpRight className="h-4 w-4 text-foreground-subtle group-hover:text-primary-glow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">{desc}</p>
                <div className="space-y-2 pt-4 border-t border-border">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle">Stack</p>
                    <p className="text-xs text-foreground">{stack}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle">Customer benefit</p>
                    <p className="text-xs text-foreground">{benefit}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
