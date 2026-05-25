import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexoraX — Building Intelligent Digital Systems" },
      {
        name: "description",
        content:
          "NexoraX builds websites, apps, AI systems, and automation workflows for modern businesses.",
      },
      { property: "og:title", content: "NexoraX — Intelligent Digital Systems" },
      {
        property: "og:description",
        content:
          "Websites, mobile apps, AI automations and n8n workflows — engineered by NexoraX.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
