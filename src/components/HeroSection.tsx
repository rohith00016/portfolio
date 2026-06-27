import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "2+", label: "Years exp." },
  { value: "600+", label: "Mentored" },
  { value: "10+", label: "Projects" },
];

const stack = ["React", "Node.js", "MongoDB", "TypeScript", "Gemini AI"];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="inline-flex items-center gap-2.5 w-fit chip">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 status-dot" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              Available for opportunities
            </div>

            <div>
              <p className="text-muted-foreground text-lg mb-3 font-medium">
                Hey, I'm
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
                <span className="text-gradient">Rohith M</span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-display font-semibold text-foreground/90">
                Full Stack{" "}
                <span className="text-primary">MERN + AI</span> Engineer
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              I build AI-powered tools, real-time apps, and scalable backends at{" "}
              <span className="text-foreground font-medium">HCL GUVI</span> —
              from learner evaluation platforms to production MERN systems.
            </p>

            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="chip">
                  <Sparkles className="h-3 w-3 text-primary/70" />
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full h-11 px-6 bg-primary hover:bg-primary/90 shadow-glow"
                asChild
              >
                <a href="#projects">
                  See my work
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-11 px-6 border-white/15 bg-white/[0.03] hover:bg-white/[0.06]"
                asChild
              >
                <a href="/rohithM.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary/70" />
                Erode, India
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <div className="flex gap-1">
                {[
                  { Icon: Github, href: "https://github.com/rohith00016" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/rohithM" },
                  { Icon: Mail, href: "mailto:rohithm1482@gmail.com" },
                ].map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-2 rounded-full hover:bg-white/8 hover:text-primary transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <GlowCard className="flex-1" innerClassName="p-0 overflow-hidden relative min-h-[280px] lg:min-h-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <img
                src="/dp.jpg"
                alt="Rohith M"
                className="relative w-full h-full min-h-[280px] object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
                <p className="font-display font-semibold">Rohith M</p>
                <p className="text-sm text-muted-foreground">HCL GUVI · Chennai</p>
              </div>
            </GlowCard>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <GlowCard key={stat.label} innerClassName="p-4 text-center">
                  <p className="font-display text-2xl font-bold text-gradient-subtle">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
