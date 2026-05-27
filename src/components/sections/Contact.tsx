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
    toast.success("Thanks — our team will reply within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-background-elevated/40">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <Reveal className="lg:col-span-2">
            <p className="text-eyebrow mb-4">Project inquiry</p>
            <h2 className="text-h1 font-display mb-5">
              Tell us what you're <span className="gradient-text">building</span>.
            </h2>
            <p className="text-foreground-muted text-lg leading-relaxed mb-8">
              Share your project details and our team will reply within 24 hours with next steps and a quote.
            </p>

            <div className="space-y-3">
              {[
                { icon: Mail, label: "hello@kush.studio", href: "mailto:hello@kush.studio" },
                { icon: MessageCircle, label: "Telegram — @kushstudio", href: "https://t.me/" },
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

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="p-7 lg:p-8 rounded-2xl glass-strong gradient-border space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Full name" name="name" placeholder="Jane Cooper" required />
                <Field label="Company" name="company" placeholder="Acme Inc." />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
                <Select label="Project type" name="projectType" options={[
                  "Website Development", "Mobile App", "AI System", "n8n Automation",
                  "Dashboard / SaaS", "Telegram Bot", "API Integration", "UI / UX Design",
                ]} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select label="Preferred technology" name="tech" options={[
                  "Not sure — recommend one", "Next.js / React", "Vue.js", "Node.js / Express",
                  "Python / FastAPI", "Laravel / PHP", "React Native / Flutter", "Supabase / Postgres",
                  "n8n / OpenAI",
                ]} />
                <Select label="Budget" name="budget" options={[
                  "Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000",
                  "$15,000 – $50,000", "$50,000+",
                ]} />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-2 block">
                  Project description
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your goals, timeline, and any constraints…"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:outline-none focus:border-primary-glow focus:ring-2 focus:ring-primary-glow/20 transition-all text-sm resize-none"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending…" : (<>Send inquiry <ArrowRight /></>)}
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
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-2 block">{label}</label>
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

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-widest text-foreground-muted mb-2 block">{label}</label>
      <select
        name={name}
        className="w-full h-12 px-4 rounded-lg bg-input border border-border focus:outline-none focus:border-primary-glow focus:ring-2 focus:ring-primary-glow/20 transition-all text-sm"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
