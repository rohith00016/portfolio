import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/animations/SectionHeader";
import { RevealItem } from "@/components/animations/AnimatedSection";

const experiences = [
  {
    title: "Associate - MERN Tech Support",
    company: "HCL GUVI",
    location: "Chennai",
    duration: "Jul 2025 – Present",
    type: "Full-time",
    highlights: [
      "Invoice management platform with GUVI API SSO & role-based workflows",
      "Internal MERN apps and AI-powered automation tools",
      "Audit-based billing approval for external mentors",
    ],
    skills: ["React", "Node.js", "MongoDB", "JWT", "RBAC"],
  },
  {
    title: "Skill Development Engineer",
    company: "HCL GUVI",
    location: "Chennai",
    duration: "Jul 2024 – Jul 2025",
    type: "Full-time",
    highlights: [
      "AI resume evaluator with Gemini AI — 90% less manual review",
      "Mentored 600+ learners in React, Node, MongoDB, Redux",
      "Training on scalable system design & production MERN",
    ],
    skills: ["Gemini AI", "React", "Node.js", "Redux"],
  },
  {
    title: "Tech Support Intern",
    company: "HCL GUVI",
    location: "Chennai",
    duration: "Jan 2024 – Jul 2024",
    type: "Internship",
    highlights: [
      "SQLKATA POC — real-time SQL assessment platform",
      "MERN stack support for learners & developers",
      "POC adopted as production foundation",
    ],
    skills: ["MERN", "SQL", "REST APIs"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <SectionHeader
        number="02"
        title="Experience"
        subtitle="2+ years at HCL GUVI — from intern to building AI-powered production tools."
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

                <ul className="space-y-2.5 mb-5">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-muted-foreground flex gap-2.5"
                    >
                      <span className="text-primary shrink-0">→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="chip text-[11px]">
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
