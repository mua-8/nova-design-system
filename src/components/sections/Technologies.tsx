import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type Tech = {
  name: string;
  desc: string;
  useCase: string;
  /** simpleicons.org slug — official brand logos */
  slug: string;
  /** brand hex color (no #) */
  color: string;
};

// Official brand logos via cdn.simpleicons.org — production SVGs, brand-accurate colors.
const categories: { key: string; label: string; eyebrow: string; techs: Tech[] }[] = [
  {
    key: "frontend",
    label: "Frontend",
    eyebrow: "Interfaces customers love",
    techs: [
      { name: "React", desc: "Component-driven UIs with the world's largest ecosystem.", useCase: "Web apps & dashboards", slug: "react", color: "61DAFB" },
      { name: "Next.js", desc: "Scalable React framework for high-performance websites and SaaS.", useCase: "Marketing & SaaS", slug: "nextdotjs", color: "FFFFFF" },
      { name: "TypeScript", desc: "Type-safe code that scales with your team and product.", useCase: "Enterprise codebases", slug: "typescript", color: "3178C6" },
      { name: "Tailwind CSS", desc: "Utility-first styling for rapid, consistent design systems.", useCase: "Design systems", slug: "tailwindcss", color: "06B6D4" },
      { name: "Framer Motion", desc: "Production-grade animation library for delightful UX.", useCase: "Motion & micro-interactions", slug: "framer", color: "FFFFFF" },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    eyebrow: "Robust APIs & services",
    techs: [
      { name: "Node.js", desc: "Event-driven runtime for fast, scalable network apps.", useCase: "Realtime APIs", slug: "nodedotjs", color: "5FA04E" },
      { name: "Express.js", desc: "Minimal, flexible Node framework for REST APIs.", useCase: "Microservices", slug: "express", color: "FFFFFF" },
      { name: "Python", desc: "First-class language for AI, data, and automation backends.", useCase: "AI & data services", slug: "python", color: "3776AB" },
      { name: "FastAPI", desc: "Modern, async Python framework with auto-docs and validation.", useCase: "AI & ML APIs", slug: "fastapi", color: "009688" },
    ],
  },
  {
    key: "database",
    label: "Database",
    eyebrow: "Reliable, scalable storage",
    techs: [
      { name: "PostgreSQL", desc: "Powerful relational database trusted by enterprises worldwide.", useCase: "Transactional systems", slug: "postgresql", color: "4169E1" },
      { name: "MongoDB", desc: "Flexible document database for fast iteration.", useCase: "Content & catalogs", slug: "mongodb", color: "47A248" },
      { name: "Supabase", desc: "Postgres + auth + realtime + storage on an open platform.", useCase: "Full-stack apps", slug: "supabase", color: "3FCF8E" },
      { name: "Firebase", desc: "Google's realtime backend for mobile and web apps.", useCase: "Realtime mobile apps", slug: "firebase", color: "FFCA28" },
    ],
  },
  {
    key: "ai",
    label: "Automation & AI",
    eyebrow: "Run your business on autopilot",
    techs: [
      { name: "n8n", desc: "Self-hosted automation that connects every tool you use.", useCase: "Workflow automation", slug: "n8n", color: "EA4B71" },
      { name: "OpenAI", desc: "GPT, embeddings, and vision models for intelligent products.", useCase: "AI assistants & RAG", slug: "openai", color: "FFFFFF" },
      { name: "Telegram", desc: "Conversational commerce, support, and ops on Telegram.", useCase: "Bot-driven workflows", slug: "telegram", color: "26A5E4" },
      { name: "Webhooks / APIs", desc: "Event-driven integrations across every tool you use.", useCase: "Real-time integrations", slug: "webhooks", color: "FFFFFF" },
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    eyebrow: "Native-feeling apps, faster",
    techs: [
      { name: "React Native", desc: "Cross-platform native apps built with one React codebase.", useCase: "iOS + Android apps", slug: "react", color: "61DAFB" },
      { name: "Flutter", desc: "Beautiful, expressive UIs compiled to native performance.", useCase: "Brand-rich mobile UX", slug: "flutter", color: "02569B" },
      { name: "Expo", desc: "Managed workflow for shipping React Native apps faster.", useCase: "Fast time-to-market", slug: "expo", color: "FFFFFF" },
    ],
  },
];

function TechLogo({ slug, color, name }: { slug: string; color: string; name: string }) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt={`${name} logo`}
      loading="lazy"
      draggable={false}
      className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
      style={{ filter: `drop-shadow(0 0 10px #${color}55)` }}
    />
  );
}

export function Technologies() {
  const [active, setActive] = useState(categories[0].key);
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="technologies" className="relative py-24 lg:py-32 bg-background-elevated/40">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-12">
          <p className="text-eyebrow mb-4">Modern technologies we use</p>
          <h2 className="text-h1 font-display mb-4">
            A stack built for <span className="gradient-text">scale</span>.
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
          {current.techs.map(({ name, desc, useCase, slug, color }) => (
            <StaggerItem key={name}>
              <div className="group relative h-full p-6 rounded-2xl glass gradient-border transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-[0_0_40px_oklch(0.65_0.22_265/0.18)]">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--gradient-primary-soft)", border: "1px solid var(--border-glow)" }}
                  >
                    <TechLogo slug={slug} color={color} name={name} />
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
