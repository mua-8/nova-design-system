import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { WhyKush } from "@/components/sections/WhyKush";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";

import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kush — AI & Software Studio | Build. Automate. Scale." },
      {
        name: "description",
        content:
          "Kush is an AI & Software Studio building websites, mobile apps, AI systems, and automation workflows for modern businesses. Choose your stack — we ship it.",
      },
      { property: "og:title", content: "Kush — AI & Software Studio" },
      {
        property: "og:description",
        content:
          "Build. Automate. Scale. — Premium websites, apps, AI, and n8n automations by Kush.",
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
      <Technologies />
      <WhyKush />
      <Process />
      <Portfolio />
      <Pricing />
      
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
