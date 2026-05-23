import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const projects = [
  { title: "Lumen Finance", tag: "Fintech · Dashboard", year: "2025", hue: "265" },
  { title: "Atlas Logistics", tag: "n8n · AI Routing", year: "2025", hue: "295" },
  { title: "Verse Studio", tag: "Mobile · iOS / Android", year: "2024", hue: "200" },
  { title: "Synthia Bot", tag: "Telegram · LLM", year: "2024", hue: "265" },
  { title: "Northwind CMS", tag: "Web · Headless", year: "2024", hue: "295" },
  { title: "Pulse Analytics", tag: "SaaS · Realtime", year: "2025", hue: "200" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-eyebrow mb-4">Selected work</p>
          <h2 className="text-h1 font-display">
            Shipped, scaled, and <span className="gradient-text">measurably better</span>.
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <a
                href="#"
                className="group block relative aspect-[4/5] rounded-2xl overflow-hidden glass gradient-border transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, oklch(0.65 0.22 ${p.hue} / 0.6), transparent 60%), radial-gradient(circle at 80% 80%, oklch(0.62 0.25 ${Number(p.hue) + 30} / 0.5), transparent 70%), oklch(0.17 0.025 265)`,
                  }}
                />
                <div className="absolute inset-0 grid-pattern opacity-40" />
                {/* faux UI */}
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
