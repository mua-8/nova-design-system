import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Which technologies do you use?", a: "We work across modern stacks: Next.js, React, Vue, Node.js, Python, Laravel, PostgreSQL, Supabase, React Native, Flutter, n8n, and OpenAI. Customers can choose a preferred stack or we recommend the best fit." },
  { q: "How is pricing structured?", a: "Transparent fixed-scope quotes. Starter from $1,500, Business from $5,900, Enterprise custom. 50% upfront, 50% on delivery — no hidden fees." },
  { q: "Can you automate my business workflows?", a: "Yes — we build n8n, OpenAI, Telegram, and WhatsApp automations that connect your CRM, billing, and ops. Many customers see ROI in the first month." },
  { q: "Do you handle hosting and infrastructure?", a: "We deploy on edge infrastructure (Vercel, Cloudflare, Supabase) with monitoring built in. We can also deploy to your existing cloud (AWS, GCP, Azure)." },
  { q: "What support do you offer after launch?", a: "Every project includes 30–60 days of post-launch support. Enterprise customers get priority SLA and 24/7 incident response." },
  { q: "What's a typical timeline?", a: "Starter projects ship in 1–2 weeks, Business in 4–6 weeks. Enterprise engagements are ongoing with weekly milestones and demos." },
  { q: "Who owns the code?", a: "You do. Everything is delivered to your GitHub on day one and stays yours forever — no platform lock-in, no recurring license fees." },
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
