import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: "20+", label: "Products shipped" },
  { value: "3.2×", label: "Avg conversion lift" },
  { value: "14", label: "Countries served" },
  { value: "98%", label: "Client retention" },
];

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="container-page">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl glass overflow-hidden">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="bg-background/40 p-8 text-center">
                <p className="text-4xl lg:text-5xl font-display font-semibold gradient-text">{s.value}</p>
                <p className="mt-2 text-sm text-foreground-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
