import { Sparkles, Github, Twitter, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-display font-semibold text-lg">Nexus</span>
            </div>
            <p className="text-sm text-foreground-muted max-w-xs leading-relaxed">
              Building intelligent software for startups, founders, and creators who refuse to ship average.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Github, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-md glass flex items-center justify-center text-foreground-muted hover:text-foreground hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Services", items: ["Web Development", "Mobile Apps", "AI Automation", "Telegram Bots", "n8n Workflows"] },
            { title: "Company", items: ["About", "Portfolio", "Pricing", "Contact"] },
            { title: "Resources", items: ["Blog", "Process", "FAQ", "Terms", "Privacy"] },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-eyebrow mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground-subtle">© {new Date().getFullYear()} Nexus Agency. Crafted with intent.</p>
          <p className="text-xs text-foreground-subtle font-mono">Built on intelligence · Shipped with care</p>
        </div>
      </div>
    </footer>
  );
}
