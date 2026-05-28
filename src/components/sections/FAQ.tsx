import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does development take?",
    a: "Basic websites ship in 3–7 days. Business systems take 2–4 weeks. Custom digital systems are scoped per engagement with weekly milestones and demos.",
  },
  {
    q: "Can I request custom features?",
    a: "Yes. Every project is built from scratch, so we can add custom modules, integrations, automations, and AI features tailored to your business.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Absolutely. We can rebuild outdated sites on a modern stack (Next.js, Tailwind, Supabase) while preserving SEO, content, and brand identity.",
  },
  {
    q: "Do you provide hosting setup assistance?",
    a: "Yes. We deploy on Vercel, Cloudflare, or Supabase by default, and can also configure custom domains, email, and DNS — included in every package.",
  },
  {
    q: "Can I combine multiple services?",
    a: "Definitely. Most customers combine website + dashboard, or website + automation. The Business package and Custom System are built exactly for this.",
  },
  {
    q: "Do you build mobile apps?",
    a: "Yes — we build cross-platform apps in React Native, Flutter, and Expo. One codebase ships to both iOS and Android stores.",
  },
  {
    q: "Can you automate business workflows?",
    a: "Yes. We build n8n, OpenAI, Telegram, and WhatsApp automations that connect your CRM, billing, notifications, and internal ops.",
  },
  {
    q: "Who owns the code after delivery?",
    a: "You do. Source code is delivered to your GitHub on day one — no platform lock-in, no recurring license fees.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="container-page max-w-3xl">
        <Reveal className="text-center mb-14">
          <p className="text-eyebrow mb-4">FAQ</p>
          <h2 className="text-h1 font-display">
            Questions, <span className="gradient-text">answered</span>.
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl glass px-5 border-0"
              >
                <AccordionTrigger className="text-left font-display font-medium text-base hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground-muted leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
