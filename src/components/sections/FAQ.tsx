import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How fast can you start?", a: "Most projects kick off within a week of our strategy call. Smaller landing pages can start within 48 hours." },
  { q: "Do you work with non-technical founders?", a: "Absolutely — that's our bread and butter. We translate ideas into shipped products and explain every decision in plain language." },
  { q: "What if I just need an automation, not a full app?", a: "Perfect — many of our engagements are pure n8n or AI automation builds. We scope them as fixed-bid mini-projects starting at $900." },
  { q: "Who owns the code?", a: "You do. Everything is delivered to your GitHub on day one and stays yours forever — no platform lock-in, no recurring license fees." },
  { q: "Do you offer ongoing support?", a: "Yes. Every project includes 30–60 days of post-launch support, and we offer monthly retainers for teams that want a dedicated squad." },
  { q: "Can you work with our existing team?", a: "We collaborate seamlessly with in-house developers, designers, and PMs via Slack, Notion, and weekly syncs." },
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
