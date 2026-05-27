import { Reveal } from "@/components/motion/Reveal";

const steps = [
  { n: "01", title: "Discovery", desc: "Free strategy call. We map your goals, customers, and the shortest path to value." },
  { n: "02", title: "Strategy", desc: "Architecture, stack choice, and a transparent roadmap with weekly milestones." },
  { n: "03", title: "UI / UX Design", desc: "Wireframes to high-fidelity prototypes. You approve before any code is written." },
  { n: "04", title: "Development", desc: "Production-grade code with weekly demos and a dedicated communication channel." },
  { n: "05", title: "Testing", desc: "Automated tests, accessibility, and performance audits before every release." },
  { n: "06", title: "Deployment", desc: "Zero-downtime launches on edge infrastructure with monitoring built in." },
  { n: "07", title: "Support & Scaling", desc: "Post-launch support, iteration cycles, and infrastructure scaling as you grow." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-background-elevated/40">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-eyebrow mb-4">Development process</p>
          <h2 className="text-h1 font-display">
            A process built for <span className="gradient-text">speed and clarity</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
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
