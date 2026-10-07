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
    title: "AI Resume & Portfolio Evaluator",
    description:
      "Automated evaluation platform built with Node.js, Puppeteer, Gemini AI, MongoDB, and AWS SES. Automatically scrapes and parses live portfolio websites and uploaded resumes, generates structured evaluation scores and actionable rubric-based feedback using Gemini AI, and delivers detailed diagnostic reports via automated email workflows — reducing manual evaluation effort by ~95%.",
    category: "AI/ML",
    technologies: [
      "React.js",
      "Node.js",
      "Gemini AI",
      "Puppeteer",
      "AWS SES",
      "MongoDB",
      "Cloudinary",
    ],
    links: { demo: "#", github: "#" },
    status: "Shipped",
    restricted: true,
    restrictedReason: "Internal at HCL GUVI",
    featured: true,
  },
  {
    title: "SQLKATA Assessment Engine",
    description:
      "Full-stack MERN proof-of-concept for real-time SQL technical assessments. Features a secure browser-based SQL query execution sandbox, automated test case validation against live database instances, role-based admin controls, and candidate performance analytics. Directly adopted by the core engineering team as the architectural foundation for the production assessment product.",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "SQL Sandbox",
    ],
    links: { demo: "#", github: "#" },
    status: "Shipped",
    restricted: true,
    restrictedReason: "Internal at HCL GUVI",
    featured: true,
  },
  {
    title: "Invoice & Billing Management Platform",
    description:
      "Enterprise internal billing and invoice management platform for mentor operations. Integrates seamlessly with GUVI API for automated technical session synchronization, enforces role-based access control (RBAC), provides audit-trail tracking, manual worklog verification, TanStack Query for optimistic client caching, and Redis with BullMQ background queue workers for asynchronous billing processing.",
    category: "Internal",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TanStack Query",
      "Redis",
      "BullMQ",
      "GUVI API",
      "RBAC",
    ],
    links: { demo: "#", github: "#" },
    status: "Building",
    restricted: true,
    restrictedReason: "Internal at HCL GUVI",
    featured: true,
  },
  {
    title: "InstaShare",
    description:
      "Full-scale social media platform featuring dynamic feeds, Instagram-style stories, short-form reels, real-time bi-directional direct messaging powered by Socket.io, JWT authentication, and automated payment processing integrated via Razorpay for premium subscription tiers.",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Razorpay",
      "JWT",
      "Tailwind CSS",
    ],
    links: {
      demo: "https://nsta-share.netlify.app",
      github: "https://github.com/rohith00016/InstaShare.git",
    },
    status: "Live",
    restricted: false,
    featured: true,
  },
  {
    title: "ZEN CHAT",
    description:
      "High-concurrency real-time messaging application engineered with Socket.io and MERN stack. Supports instant multi-format communication including text, rich image galleries, video media streaming, and audio voice messages, paired with online presence indicators, delivery receipts, and room-based channels.",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Cloudinary",
    ],
    links: {
      demo: "https://zenchat-final.netlify.app",
      github: "https://github.com/rohith00016/zen-chat.git",
    },
    status: "Live",
    restricted: false,
  },
  {
    title: "Multi-Model AI Chatbot",
    description:
      "Advanced conversational AI application orchestrating multiple frontier open-weight and reasoning LLMs (Qwen and DeepSeek AI). Built with streaming API token generation, persistent session histories, dynamic model switching, Markdown syntax formatting, and high-performance client response caching.",
    category: "AI/ML",
    technologies: [
      "React.js",
      "Node.js",
      "DeepSeek AI",
      "Qwen AI",
      "Streaming APIs",
      "Tailwind CSS",
    ],
    links: {
      demo: "https://relaxed-llama-d4d715.netlify.app",
      github:
        "https://github.com/rohith00016/chatbot-using-deepseekAI-and-gwenAI.git",
    },
    status: "Live",
    restricted: false,
  },
  {
    title: "RAG Document Intelligence App",
    description:
      "Retrieval-Augmented Generation system designed for contextual Q&A across private documents. Ingests raw PDFs and text data, generates semantic vector embeddings, performs nearest-neighbor vector similarity retrieval, and synthesizes accurate, hallucination-resistant answers with grounded citations.",
    category: "AI/ML",
    technologies: [
      "React.js",
      "Node.js",
      "LangChain / RAG",
      "Vector Embeddings",
      "Semantic Search",
      "REST APIs",
    ],
    links: {
      demo: "#",
      github: "https://github.com/rohith00016/RAG-app.git",
    },
    status: "Shipped",
    restricted: true,
    restrictedReason: "Uses private API key endpoints",
  },
  {
    title: "Movie DB Explorer",
    description:
      "Modern cinematic exploration application consuming external movie databases. Implements centralized global state management with Redux Toolkit, debounced live search queries, genre-based filtering, detailed modal dialogs, and responsive layout across mobile and desktop screens.",
    category: "Full Stack",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "REST APIs",
      "Tailwind CSS",
      "Vite",
    ],
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
