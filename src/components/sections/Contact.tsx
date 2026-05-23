import { useState } from "react";
import { Send, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { toast } from "sonner";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast.success("Thanks — we'll be in touch within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-background-elevated/40">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          <Reveal>
            <p className="text-eyebrow mb-4">Let's build</p>
            <h2 className="text-h1 font-display mb-5">
              Tell us what you're <span className="gradient-text">building</span>.
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
              Drop a few lines about your project. We'll reply within 24 hours with next steps and a calendar link.
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, label: "hello@nexus.agency", href: "mailto:hello@nexus.agency" },
                { icon: MessageCircle, label: "Telegram — @nexusagency", href: "https://t.me/" },
                { icon: Send, label: "WhatsApp — Quick reply", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 p-4 rounded-xl glass hover:bg-white/[0.07] transition-colors group"
                >
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--gradient-primary-soft)", border: "1px solid var(--border-glow)" }}
                  >
                    <Icon className="h-4 w-4 text-primary-glow" />
                  </div>
                  <span className="text-sm font-medium flex-1">{label}</span>
                  <ArrowRight className="h-4 w-4 text-foreground-subtle group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="p-7 lg:p-8 rounded-2xl glass-strong gradient-border space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Name" name="name" placeholder="Jane Cooper" required />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-2 block">
                  What do you need
                </label>
                <select
                  name="service"
                  className="w-full h-12 px-4 rounded-lg bg-input border border-border focus:outline-none focus:border-primary-glow focus:ring-2 focus:ring-primary-glow/20 transition-all text-sm"
                >
                  <option>Website Development</option>
                  <option>Mobile App</option>
                  <option>AI Automation</option>
                  <option>n8n Workflows</option>
                  <option>Telegram Bot</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-2 block">
                  Tell us about it
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="A short paragraph about your goals, timeline, and budget…"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:border-primary-glow focus:ring-2 focus:ring-primary-glow/20 transition-all text-sm resize-none"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending…" : (<>Send message <ArrowRight /></>)}
              </Button>
              <p className="text-xs text-foreground-subtle text-center">
                We reply within 24 hours. No spam, ever.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-2 block">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full h-12 px-4 rounded-lg bg-input border border-border focus:outline-none focus:border-primary-glow focus:ring-2 focus:ring-primary-glow/20 transition-all text-sm"
      />
    </div>
  );
}
