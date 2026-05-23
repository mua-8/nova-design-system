import { Star } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const testimonials = [
  { quote: "Nexus rebuilt our checkout in two weeks. Conversion went up 41% and we finally stopped fighting our own stack.", name: "Maya Patel", role: "Founder, Lumen Finance", initials: "MP" },
  { quote: "The n8n flows they wired up replaced two full-time roles. ROI in the first month, no joke.", name: "Daniel Okafor", role: "COO, Atlas Logistics", initials: "DO" },
  { quote: "Their Telegram bot is doing 70% of our customer support. The team is sharper than any agency we've worked with.", name: "Sara Lindqvist", role: "Head of Ops, Verse", initials: "SL" },
];

const logos = ["LUMEN", "ATLAS", "VERSE", "NORTHWIND", "PULSE", "SYNTHIA", "ORBIT", "HALCYON"];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-eyebrow mb-4">What founders say</p>
          <h2 className="text-h1 font-display">
            Outcomes that <span className="gradient-text">speak louder</span> than decks.
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="h-full p-7 rounded-2xl glass gradient-border">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center font-display font-semibold text-sm text-white"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-foreground-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Logo marquee */}
        <div
          className="relative overflow-hidden py-6"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <div className="flex gap-16 animate-marquee w-max">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display font-semibold text-2xl tracking-widest text-foreground-subtle whitespace-nowrap">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
