import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { Mail, Phone, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/animations/SectionHeader";
import { RevealItem } from "@/components/animations/AnimatedSection";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "rohithm1482@gmail.com",
    href: "mailto:rohithm1482@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6381800016",
    href: "tel:+916381800016",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@rohith00016",
    href: "https://github.com/rohith00016",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/rohithM",
    href: "https://linkedin.com/in/rohithM",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 pb-32">
      <SectionHeader
        number="05"
        title="Let's build something"
        subtitle="Open to full-time roles, freelance projects, and collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <RevealItem className="lg:col-span-3">
          <GlowCard innerClassName="p-8 sm:p-10 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 chip mb-6 border-success/30">
                <span className="h-2 w-2 rounded-full bg-success status-dot" />
                <span className="text-success text-xs">Available now</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                Have a project in mind?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                Whether it's a full-time role, a freelance build, or just a tech
                conversation — I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-7 bg-primary hover:bg-primary/90 shadow-glow"
                  asChild
                >
                  <a href="mailto:rohithm1482@gmail.com?subject=Let's work together">
                    <Mail className="h-4 w-4" />
                    Send an email
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 border-white/15 bg-white/[0.03]"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/rohithM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </GlowCard>
        </RevealItem>

        <RevealItem delay={0.08} className="lg:col-span-2">
          <GlowCard innerClassName="p-6 h-full flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{link.label}</p>
                  <p className="text-sm font-medium truncate">{link.value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
              </a>
            ))}

            <div className="mt-auto pt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary/70" />
              Erode-638453, Tamil Nadu
            </div>
          </GlowCard>
        </RevealItem>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-16 font-mono">
        © 2026 Rohith M — Built with React & TypeScript
      </p>
    </section>
  );
}
