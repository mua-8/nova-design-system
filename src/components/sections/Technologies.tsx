import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import {
  Atom, Code2, Palette, Boxes, Sparkles, Layers,
  Server, Cpu, Database, Cloud, Flame,
  Workflow, Bot, MessageCircle, BrainCircuit, Send,
  Smartphone, Tablet, Globe2,
} from "lucide-react";

type Tech = { name: string; desc: string; useCase: string; icon: React.ComponentType<{ className?: string }> };

const categories: { key: string; label: string; eyebrow: string; techs: Tech[] }[] = [
  {
    key: "frontend",
    label: "Frontend",
    eyebrow: "Interfaces customers love",
    techs: [
      { name: "React", desc: "Component-driven UIs with the world's largest ecosystem.", useCase: "Web apps & dashboards", icon: Atom },
      { name: "Next.js", desc: "Scalable React framework for high-performance websites and SaaS.", useCase: "Marketing & SaaS", icon: Layers },
      { name: "TypeScript", desc: "Type-safe code that scales with your team and product.", useCase: "Enterprise codebases", icon: Code2 },
      { name: "Tailwind CSS", desc: "Utility-first styling for rapid, consistent design systems.", useCase: "Design systems", icon: Palette },
      { name: "Framer Motion", desc: "Production-grade animation library for delightful UX.", useCase: "Motion & micro-interactions", icon: Sparkles },
      { name: "Vue.js", desc: "Progressive framework loved for its developer experience.", useCase: "Lightweight web apps", icon: Boxes },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    eyebrow: "Robust APIs & services",
    techs: [
      { name: "Node.js", desc: "Event-driven runtime for fast, scalable network apps.", useCase: "Realtime APIs", icon: Server },
      { name: "Express.js", desc: "Minimal, flexible Node framework for REST APIs.", useCase: "Microservices", icon: Cpu },
      { name: "Python", desc: "First-class language for AI, data, and automation backends.", useCase: "AI & data services", icon: Code2 },
      { name: "FastAPI", desc: "Modern, async Python framework with auto-docs and validation.", useCase: "AI & ML APIs", icon: Layers },
      { name: "PHP", desc: "Battle-tested language powering a large share of the web.", useCase: "CMS & web platforms", icon: Server },
      { name: "Laravel", desc: "Elegant PHP framework for full-featured web applications.", useCase: "Custom web platforms", icon: Boxes },
    ],
  },
  {
    key: "database",
    label: "Database",
    eyebrow: "Reliable, scalable storage",
    techs: [
      { name: "PostgreSQL", desc: "Powerful relational database trusted by enterprises worldwide.", useCase: "Transactional systems", icon: Database },
      { name: "MySQL", desc: "Widely-adopted relational DB with mature tooling.", useCase: "Web apps & CMS", icon: Database },
      { name: "MongoDB", desc: "Flexible document database for fast iteration.", useCase: "Content & catalogs", icon: Database },
      { name: "Supabase", desc: "Postgres + auth + realtime + storage on an open platform.", useCase: "Full-stack apps", icon: Cloud },
      { name: "Firebase", desc: "Google's realtime backend for mobile and web apps.", useCase: "Realtime mobile apps", icon: Flame },
    ],
  },
  {
    key: "ai",
    label: "Automation & AI",
    eyebrow: "Run your business on autopilot",
    techs: [
      { name: "n8n", desc: "Self-hosted automation that connects every tool you use.", useCase: "Workflow automation", icon: Workflow },
      { name: "OpenAI APIs", desc: "GPT, embeddings, and vision models for intelligent products.", useCase: "AI assistants & RAG", icon: BrainCircuit },
      { name: "Telegram Bots", desc: "Conversational commerce, support, and ops on Telegram.", useCase: "Bot-driven workflows", icon: Bot },
      { name: "WhatsApp Automation", desc: "Lead capture, replies, and notifications on WhatsApp Business.", useCase: "Sales & support", icon: MessageCircle },
      { name: "Workflow Automation", desc: "End-to-end automations across CRM, billing, and email.", useCase: "Ops automation", icon: Send },
      { name: "AI Chat Systems", desc: "Custom AI chat for sites, products, and internal knowledge.", useCase: "Customer assistants", icon: BrainCircuit },
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    eyebrow: "Native-feeling apps, faster",
    techs: [
      { name: "React Native", desc: "Cross-platform native apps built with one React codebase.", useCase: "iOS + Android apps", icon: Smartphone },
      { name: "Flutter", desc: "Beautiful, expressive UIs compiled to native performance.", useCase: "Brand-rich mobile UX", icon: Tablet },
      { name: "Expo", desc: "Managed workflow for shipping React Native apps faster.", useCase: "Fast time-to-market", icon: Globe2 },
    ],
  },
];

export function Technologies() {
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="technologies" className="relative py-24 lg:py-32 bg-background-elevated/40">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-12">
          <p className="text-eyebrow mb-4">Technology stack</p>
          <h2 className="text-h1 font-display mb-4">
            Choose the <span className="gradient-text">stack</span> for your project.
          </h2>
          <p className="text-foreground-muted text-lg leading-relaxed">
            Every technology we ship with is production-proven. Pick a category to see the tools we use and what they're best for.
          </p>
        </Reveal>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-2xl glass w-fit">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                active === c.key
                  ? "text-white shadow-[0_0_24px_oklch(0.65_0.22_265/0.5)]"
                  : "text-foreground-muted hover:text-foreground",
              )}
              style={active === c.key ? { background: "var(--gradient-primary)" } : undefined}
            >
              {c.label}
            </button>
          ))}
        </div>

        <Reveal className="mb-8">
          <p className="text-eyebrow mb-2">{current.eyebrow}</p>
          <h3 className="text-h2 font-display">{current.label} Technologies</h3>
        </Reveal>

        <Stagger key={current.key} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.techs.map(({ name, desc, useCase, icon: Icon }) => (
            <StaggerItem key={name}>
              <div className="group relative h-full p-6 rounded-2xl glass gradient-border transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="h-11 w-11 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--gradient-primary-soft)", border: "1px solid var(--border-glow)" }}
                  >
                    <Icon className="h-5 w-5 text-primary-glow" />
                  </div>
                  <h4 className="text-lg font-display font-semibold">{name}</h4>
                </div>
                <p className="text-sm text-foreground-muted leading-relaxed mb-4">{desc}</p>
                <div className="pt-3 border-t border-border">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle mb-1">Best for</p>
                  <p className="text-sm text-foreground">{useCase}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
