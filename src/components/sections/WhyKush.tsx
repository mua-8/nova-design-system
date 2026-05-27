import { Layers3, Rocket, BrainCircuit, Palette, Gauge, HeartHandshake } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const reasons = [
  { icon: Layers3, title: "Modern Architecture", desc: "Edge-deployed, type-safe systems designed to grow with your business." },
  { icon: Rocket, title: "Scalable Systems", desc: "Built on cloud-native foundations that handle 10× your traffic without rewrites." },
  { icon: BrainCircuit, title: "AI-Powered Automation", desc: "Intelligent agents and workflows that reduce manual work and unlock leverage." },
  { icon: Palette, title: "Premium UI/UX", desc: "Interfaces customers trust on first glance — refined, accessible, and on-brand." },
  { icon: Gauge, title: "Fast Development", desc: "Weekly demos, transparent roadmaps, and shipped milestones — no surprises." },
  { icon: HeartHandshake, title: "Customer-Focused", desc: "We optimise for your outcomes: conversion, retention, and operational ROI." },
];

export function WhyKush() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-eyebrow mb-4">Why Kush</p>
          <h2 className="text-h1 font-display">
            Engineered for <span className="gradient-text">enterprise outcomes</span>.
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="h-full p-6 rounded-2xl glass gradient-border hover:-translate-y-1 transition-all duration-300">
                <div
                  className="h-11 w-11 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "var(--gradient-primary-soft)", border: "1px solid var(--border-glow)" }}
                >
                  <Icon className="h-5 w-5 text-primary-glow" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
