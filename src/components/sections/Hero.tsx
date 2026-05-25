import { ArrowRight, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { AuroraBg } from "@/components/effects/AuroraBg";
import { Logo } from "@/components/brand/Logo";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <AuroraBg />

      <div className="container-page relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Logo variant="mark" className="h-24 lg:h-32 w-auto" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest text-foreground-muted mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Kush — AI & Software Studio · Booking Q3
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="text-display-2xl font-display font-semibold mb-6"
          >
            <span className="gradient-text-hero">Build. </span>
            <span className="gradient-text">Automate.</span>
            <span className="gradient-text-hero"> Scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="text-lg lg:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto mb-10"
          >
            We build websites, apps, AI systems, and automation workflows for modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36, ease }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-14"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Start a Project <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#pricing">View Pricing</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-foreground-muted"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span>4.9 from 60+ founders</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary-glow" />
              <span>20+ products shipped</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <div>Trusted by startups in 14 countries</div>
          </motion.div>
        </div>

        {/* Floating preview card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
          className="relative mt-20 max-w-5xl mx-auto"
        >
          <div className="absolute inset-x-12 -inset-y-6 rounded-3xl glow-soft opacity-80" />
          <div className="relative glass gradient-border rounded-2xl p-2">
            <div className="rounded-xl overflow-hidden bg-background-elevated">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <div className="h-2.5 w-2.5 rounded-full bg-success/70" />
                <div className="ml-3 text-xs font-mono text-foreground-subtle">kush.studio / dashboard</div>
              </div>
              <div className="grid grid-cols-3 gap-3 p-6">
                {["Revenue", "Active users", "Automations"].map((label, i) => (
                  <div key={label} className="rounded-lg p-4 bg-card border border-border">
                    <p className="text-xs text-foreground-subtle">{label}</p>
                    <p className="text-2xl font-display font-semibold mt-1 gradient-text">
                      {["$84.2k", "12,408", "27"][i]}
                    </p>
                    <div className="h-1 mt-3 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${[72, 88, 54][i]}%`,
                          background: "var(--gradient-primary)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
