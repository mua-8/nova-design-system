import { Globe, Smartphone, Bot, Workflow, Brain, LayoutDashboard, Plug, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const services = [
  { icon: Globe, title: "Website Development", desc: "High-converting marketing sites and bespoke web apps with motion, SEO, and edge performance.", tag: "Next.js · TanStack" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-feeling iOS & Android apps built once with React Native, shipped to both stores.", tag: "React Native · Expo" },
  { icon: Brain, title: "AI Automation", desc: "RAG, agents, and copilots wired into your stack — from lead triage to internal knowledge tools.", tag: "OpenAI · Anthropic" },
  { icon: Workflow, title: "n8n Workflows", desc: "Self-hosted automations that orchestrate your CRM, billing, email, and Slack without glue code.", tag: "n8n · Webhooks" },
  { icon: Bot, title: "Telegram Bots", desc: "Conversational commerce, support, and operations bots that ship in days, not months.", tag: "Bot API · LLM" },
  { icon: LayoutDashboard, title: "Dashboards", desc: "Admin panels and client portals with real-time data, roles, and beautiful charts.", tag: "Supabase · RLS" },
  { icon: Plug, title: "API Integrations", desc: "Stripe, Twilio, HubSpot, Notion, anything with a webhook — wired to do exactly what you need.", tag: "REST · GraphQL" },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-eyebrow mb-4">What we build</p>
          <h2 className="text-h1 font-display mb-4">
            One team. <span className="gradient-text">Every layer</span> of the stack.
          </h2>
          <p className="text-foreground-muted text-lg leading-relaxed">
            From the first pixel to the last cron job — we design, build, and automate the systems your business runs on.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc, tag }) => (
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
                <span className="text-xs font-mono text-foreground-subtle">{tag}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
