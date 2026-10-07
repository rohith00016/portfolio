import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/animations/SectionHeader";
import { RevealItem } from "@/components/animations/AnimatedSection";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  progression?: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Associate Full Stack Developer L&D",
    company: "HCL GUVI",
    location: "Chennai",
    duration: "Jan 2024 – Present",
    type: "Full-time",
    progression: "Tech Support Intern → Associate Full Stack Developer L&D",
    highlights: [
      "Engineered an AI-powered resume and portfolio evaluation platform using Node.js, Puppeteer, Gemini AI, MongoDB, and AWS SES, reducing manual evaluation effort by ~95% through automated analysis, scoring, feedback generation, and email delivery.",
      "Developed the SQLKATA MERN prototype, implementing real-time SQL execution, automated test validation, and admin workflows; the POC was subsequently adopted by the development team as the foundation for the production product.",
      "Developed an internal invoice management platform using React, Node.js, Express, MongoDB, JWT, RBAC, and TanStack Query, integrating internal APIs for automated session synchronization, approval workflows, audit tracking, and manual worklog management.",
      "Engineered an AI-based project evaluation platform that analyzes GitHub repositories against PRD requirements using Gemini AI and custom evaluation rubrics, generating structured scores, identifying security and architectural issues, and suggesting code-level fixes.",
      "Conducted comprehensive technical code reviews and root-cause analyses across production MERN services, resolving complex application, API, database, authentication, and deployment issues.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI",
      "Puppeteer",
      "AWS SES",
      "TanStack Query",
      "JWT & RBAC",
      "REST APIs",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <SectionHeader
        number="02"
        title="Experience"
        subtitle="Full stack engineering at HCL GUVI — building autonomous GenAI workflows, assessment engines, and scalable internal platforms."
      />

      <div className="relative space-y-5 pl-6 sm:pl-8">
        <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

        {experiences.map((exp, index) => (
          <RevealItem key={exp.title} delay={index * 0.06}>
            <div className="relative">
              <div className="absolute -left-6 sm:-left-8 top-7 h-[9px] w-[9px] rounded-full bg-primary ring-4 ring-background shadow-glow-sm" />
              <GlowCard innerClassName="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-display font-semibold text-xl">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {exp.company} · {exp.location}
                    </p>
                    {exp.progression && (
                      <p className="text-xs text-primary/90 font-mono mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <span className="text-muted-foreground font-sans">Progression:</span>
                        <span>{exp.progression}</span>
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.duration}
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0 text-xs"
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm sm:text-base text-muted-foreground/90 flex gap-3 leading-relaxed"
                    >
                      <span className="text-primary shrink-0 mt-0.5">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="chip text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </div>
          </RevealItem>
        ))}
      </div>
    </section>
  );
}
