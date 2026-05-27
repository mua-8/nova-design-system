import { Github, Twitter, Linkedin, Send } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="container-page py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="mb-4">
              <Logo variant="lockup" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-foreground-muted max-w-xs leading-relaxed">
              Kush is an AI & Software Studio. We help customers build websites, apps, AI systems, and automation workflows with modern scalable technologies.
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
            { title: "Services", items: ["Website Development", "Mobile Apps", "AI Systems", "n8n Automation", "Dashboards", "SaaS Development"] },
            { title: "Technologies", items: ["Next.js & React", "Node.js & Python", "PostgreSQL & Supabase", "n8n & OpenAI", "React Native & Flutter"] },
            { title: "Company", items: ["About", "Portfolio", "Pricing", "Process", "Contact"] },
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
          <p className="text-xs text-foreground-subtle">© {new Date().getFullYear()} Kush — AI & Software Studio. Build. Automate. Scale.</p>
          <p className="text-xs text-foreground-subtle font-mono">Crafted with intent · hello@kush.studio</p>
        </div>
      </div>
    </footer>
  );
}
