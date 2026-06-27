import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink, Github, ArrowUpRight, Lock } from "lucide-react";
import { SectionHeader } from "@/components/animations/SectionHeader";
import { RevealItem } from "@/components/animations/AnimatedSection";

const projects = [
  {
    title: "InstaShare",
    description:
      "Instagram-like social platform — posts, stories, reels, real-time chat, Razorpay subscriptions.",
    category: "Full Stack",
    technologies: ["React", "Socket.io", "Razorpay", "JWT"],
    links: {
      demo: "https://nsta-share.netlify.app",
      github: "https://github.com/rohith00016/InstaShare.git",
    },
    status: "Live",
    restricted: false,
    featured: true,
  },
  {
    title: "AI Resume Evaluator",
    description:
      "Gemini-powered platform analyzing resumes & portfolios — 95% less manual review.",
    category: "AI/ML",
    technologies: ["Gemini AI", "Puppeteer", "AWS SES", "MongoDB"],
    links: { demo: "#", github: "#" },
    status: "Shipped",
    restricted: true,
    restrictedReason: "Internal at HCL GUVI",
    featured: true,
  },
  {
    title: "SQLKATA POC",
    description:
      "Real-time SQL assessment platform — adopted as the production foundation.",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "REST"],
    links: { demo: "#", github: "#" },
    status: "Shipped",
    restricted: true,
    restrictedReason: "Internal at HCL GUVI",
    featured: true,
  },
  {
    title: "Invoice Platform",
    description:
      "Mentor billing tracker with GUVI API sync & audit approval workflows.",
    category: "Internal",
    technologies: ["React", "Node.js", "GUVI API", "RBAC"],
    links: { demo: "#", github: "#" },
    status: "Building",
    restricted: true,
    restrictedReason: "Internal at HCL GUVI",
    featured: true,
  },
  {
    title: "ZEN CHAT",
    description: "Real-time chat with images, video, text & audio messages.",
    category: "Full Stack",
    technologies: ["React", "Socket.io", "MongoDB"],
    links: {
      demo: "https://zenchat-final.netlify.app",
      github: "https://github.com/rohith00016/zen-chat.git",
    },
    status: "Live",
    restricted: false,
  },
  {
    title: "AI Chatbot",
    description: "Multi-model chatbot using Qwen & DeepSeek AI.",
    category: "AI/ML",
    technologies: ["React", "Node.js", "AI"],
    links: {
      demo: "https://relaxed-llama-d4d715.netlify.app",
      github:
        "https://github.com/rohith00016/chatbot-using-deepseekAI-and-gwenAI.git",
    },
    status: "Live",
    restricted: false,
  },
  {
    title: "RAG Application",
    description: "Retrieval-augmented generation for contextual Q&A.",
    category: "AI/ML",
    technologies: ["React", "Node.js", "RAG"],
    links: {
      demo: "#",
      github: "https://github.com/rohith00016/RAG-app.git",
    },
    status: "Shipped",
    restricted: true,
    restrictedReason: "Uses paid OpenAI API",
  },
  {
    title: "Movie DB",
    description: "Movie search app with Redux state management.",
    category: "Full Stack",
    technologies: ["React", "Redux", "REST APIs"],
    links: {
      demo: "#",
      github: "https://github.com/rohith00016/imdb-task.git",
    },
    status: "Live",
    restricted: false,
  },
];

const filters = ["Featured", "All", "Full Stack", "AI/ML"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("Featured");

  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    return p.category === activeFilter;
  });

  return (
    <TooltipProvider>
      <section id="projects" className="py-24 sm:py-32">
        <SectionHeader
          number="03"
          title="Projects"
          subtitle="From AI automation to full-stack platforms — things I've designed, built, and shipped."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                activeFilter === f
                  ? "border-white/25 bg-white/[0.08] text-foreground font-medium"
                  : "border-white/10 bg-white/[0.03] text-muted-foreground hover:text-foreground hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((project, index) => (
            <RevealItem
              key={project.title}
              delay={index * 0.05}
              className={
                project.featured && activeFilter === "Featured"
                  ? "md:first:col-span-2"
                  : ""
              }
            >
              <GlowCard
                className="h-full group"
                innerClassName="p-6 sm:p-7 h-full flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {project.status}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="font-display font-semibold text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="chip text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto pt-4 border-t border-white/[0.06]">
                  {project.restricted ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled
                          className="rounded-full border-white/10 text-muted-foreground"
                        >
                          <Lock className="h-3.5 w-3.5 mr-1.5" />
                          Private repo
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">{project.restrictedReason}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    <>
                      {project.links.demo !== "#" && (
                        <Button size="sm" className="rounded-full" asChild>
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                            Live demo
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-white/10"
                        asChild
                      >
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-3.5 w-3.5 mr-1.5" />
                          Code
                        </a>
                      </Button>
                    </>
                  )}
                </div>
              </GlowCard>
            </RevealItem>
          ))}
        </div>
      </section>
    </TooltipProvider>
  );
}
