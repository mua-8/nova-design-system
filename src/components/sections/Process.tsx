import { Reveal } from "@/components/motion/Reveal";

const steps = [
  { n: "01", title: "Discover", desc: "Free 30-min strategy call. We map your goals, audience, and the shortest path to value." },
  { n: "02", title: "Design", desc: "Wireframes → high-fidelity prototypes in Figma. You approve before a single line of code." },
  { n: "03", title: "Build", desc: "Weekly demos, transparent Notion roadmap, dedicated Telegram channel. No surprises." },
  { n: "04", title: "Launch & scale", desc: "Deploy, monitor, iterate. 30 days of post-launch support included on every project." },
];

export function Process() {
  return (
    <section className="relative py-24 lg:py-32 bg-background-elevated/40">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-eyebrow mb-4">How we work</p>
          <h2 className="text-h1 font-display">
            A process built for <span className="gradient-text">speed and clarity</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* connector line */}
          <div
            className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.18 270 / 0.5), transparent)" }}
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative p-6 rounded-2xl glass h-full">
                <div
                  className="relative h-14 w-14 rounded-xl flex items-center justify-center mb-5 font-display font-semibold text-lg text-primary-glow"
                  style={{ background: "var(--gradient-primary-soft)", border: "1px solid var(--border-glow)" }}
                >
                  {s.n}
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
