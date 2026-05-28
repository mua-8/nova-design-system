import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const projects = [
  { title: "Restaurant Dashboard", tag: "Concept Project · Admin", year: "2025", hue: "265", kind: "dashboard" },
  { title: "AI Assistant Interface", tag: "Demo System · GPT + RAG", year: "2025", hue: "295", kind: "chat" },
  { title: "Ecommerce Platform", tag: "Concept Project · Next.js", year: "2025", hue: "200", kind: "ecommerce" },
  { title: "Automation Workflow Hub", tag: "Demo System · n8n", year: "2025", hue: "265", kind: "workflow" },
  { title: "SaaS Analytics Dashboard", tag: "Internal Project · Realtime", year: "2025", hue: "295", kind: "analytics" },
  { title: "Telegram Booking Bot", tag: "Demo System · Bot", year: "2025", hue: "200", kind: "bot" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-eyebrow mb-4">Selected work</p>
          <h2 className="text-h1 font-display mb-4">
            Concept projects & <span className="gradient-text">demo systems</span>.
          </h2>
          <p className="text-foreground-muted text-lg">
            A preview of the kinds of systems we design and build for customers — from dashboards and AI tools to automation workflows.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <a
                href="#contact"
                className="group block relative aspect-[4/5] rounded-2xl overflow-hidden glass gradient-border transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, oklch(0.65 0.22 ${p.hue} / 0.6), transparent 60%), radial-gradient(circle at 80% 80%, oklch(0.62 0.25 ${Number(p.hue) + 30} / 0.5), transparent 70%), oklch(0.17 0.025 265)`,
                  }}
                />
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2">
                  <div className="rounded-lg glass-strong p-3 mb-2">
                    <div className="h-1.5 w-12 rounded-full bg-white/30 mb-2" />
                    <div className="h-3 w-20 rounded-full bg-white/60" />
                  </div>
                  <div className="rounded-lg glass-strong p-3">
                    <div className="flex gap-2 mb-2">
                      <div className="h-8 w-8 rounded-md" style={{ background: "var(--gradient-primary)" }} />
                      <div className="flex-1 space-y-1.5 pt-1">
                        <div className="h-1.5 rounded-full bg-white/40" />
                        <div className="h-1.5 w-2/3 rounded-full bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-wider text-foreground-muted">
                  {p.kind}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs font-mono text-foreground-muted mb-1">{p.tag} · {p.year}</p>
                      <h3 className="text-xl font-display font-semibold">{p.title}</h3>
                    </div>
                    <div className="h-10 w-10 rounded-full glass flex items-center justify-center group-hover:bg-white/15 transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
