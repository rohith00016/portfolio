import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";
import { GraduationCap, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/animations/SectionHeader";
import { RevealItem } from "@/components/animations/AnimatedSection";

interface HighlightItem {
  title: string;
  description: string;
}

const highlights: HighlightItem[] = [
  {
    title: "Autonomous GenAI & PRD Evaluation Workflows",
    description:
      "Engineered automated pipelines with Gemini AI, Puppeteer, and AWS SES to analyze GitHub repositories against PRD requirements, flag architectural & security flaws, and slash manual review effort by ~95%.",
  },
  {
    title: "SQLKATA — Production Query Assessment Engine",
    description:
      "Architected the SQLKATA MERN prototype featuring real-time SQL execution and automated test validation, directly adopted by the engineering team as the foundation for the production platform.",
  },
  {
    title: "Enterprise Billing Platform & Async Queues",
    description:
      "Developed an internal invoice management system with GUVI API SSO, RBAC, TanStack Query, Redis caching, and BullMQ workers for automated session synchronization and audit tracking.",
  },
  {
    title: "AI PRD & Code Architecture Analysis",
    description:
      "Built an automated evaluation platform that analyzes GitHub repositories against PRD specifications using Gemini AI and custom rubrics, generating structured scores, identifying vulnerabilities, and proposing code-level fixes.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <SectionHeader
        number="01"
        title="About"
        subtitle="Full Stack Developer at HCL GUVI — building autonomous GenAI workflows, scalable backends, and production MERN platforms."
      />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <RevealItem className="md:col-span-4">
          <GlowCard innerClassName="p-6 sm:p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/15 text-primary">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl">Engineering Highlights</h3>
                <p className="text-sm text-muted-foreground mt-0.5">High-impact platforms & systems built at HCL GUVI</p>
              </div>
            </div>
            <div className="space-y-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 sm:p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <h4 className="font-display font-semibold text-base sm:text-[17px] text-foreground">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-[15px] text-muted-foreground/95 leading-relaxed pl-4.5">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </GlowCard>
        </RevealItem>

        <RevealItem delay={0.08} className="md:col-span-2">
          <GlowCard innerClassName="p-6 sm:p-8 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-white/[0.06] text-foreground">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg">Education</h3>
              </div>
              <p className="font-display font-semibold text-xl">MCA</p>
              <p className="text-muted-foreground mt-1 text-sm">Kongu Engineering College</p>
              <p className="text-xs text-muted-foreground mt-0.5">2022 – 2024</p>

              <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Degree Score</span>
                  <Badge className="bg-primary/15 text-primary border-0 text-xs">CGPA 8.4</Badge>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-muted-foreground leading-snug">
                  <span className="text-foreground font-medium">🥈 2nd Prize</span> — Web Design Contest, Karpagam Engineering College
                </div>
              </div>
            </div>
          </GlowCard>
        </RevealItem>

      </div>
    </section>
  );
}
