import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";
import { GraduationCap, Trophy, Heart } from "lucide-react";
import { SectionHeader } from "@/components/animations/SectionHeader";
import { RevealItem } from "@/components/animations/AnimatedSection";

const highlights = [
  "Mentored 600+ learners in MERN stack development",
  "AI resume evaluator — 90% reduction in manual review",
  "Delivered system design & production MERN training",
  "2nd Prize — Web Design Contest, Karpagam Engineering College",
];

const hobbies = ["Upskilling", "Meditation", "Running", "Music", "Audio Books"];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <SectionHeader
        number="01"
        title="About"
        subtitle="Engineer at HCL GUVI — building AI tools, shipping real products, and growing the next wave of developers."
      />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <RevealItem className="md:col-span-4">
          <GlowCard innerClassName="p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/15 text-primary">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg">Highlights</h3>
            </div>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </RevealItem>

        <RevealItem delay={0.08} className="md:col-span-2">
          <GlowCard innerClassName="p-6 sm:p-8 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-white/[0.06] text-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg">Education</h3>
            </div>
            <p className="font-display font-semibold text-xl">MCA</p>
            <p className="text-muted-foreground mt-1">Kongu Engineering College</p>
            <p className="text-sm text-muted-foreground mt-0.5">2022 – 2024</p>
            <Badge className="mt-auto w-fit bg-primary/15 text-primary border-0 hover:bg-primary/20">
              CGPA 8.4
            </Badge>
          </GlowCard>
        </RevealItem>

        <RevealItem delay={0.12} className="md:col-span-6">
          <GlowCard innerClassName="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-white/[0.06] text-muted-foreground">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg">Beyond code</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby) => (
                <span key={hobby} className="chip hover:border-primary/30 hover:text-foreground transition-colors">
                  {hobby}
                </span>
              ))}
            </div>
          </GlowCard>
        </RevealItem>
      </div>
    </section>
  );
}
