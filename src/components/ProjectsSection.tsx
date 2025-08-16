import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Database,
  MessageSquare,
  Code,
  Calendar,
  Star,
  ChevronDown,
} from "lucide-react";

// Project data type
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: string;
  completionDate: string;
  difficulty: string;
  icon: React.ComponentType<{ className?: string }>;
  index: number;
};

// Individual Project Card Component
function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  status,
  completionDate,
  difficulty,
  icon: Icon,
  index,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
        {/* Header Section */}
        <div className="p-6 flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <Badge variant="secondary" className="text-xs font-medium">
                  {status}
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 h-auto hover:bg-muted ml-2 rounded-lg"
            >
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transform transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/20">
              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-medium">
                {completionDate}
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/20">
              <Star className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-medium">
                {difficulty}
              </span>
            </div>
          </div>

          {/* Preview Technologies */}
          {!isExpanded && (
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs px-3 py-1 border-border/40 hover:bg-muted/50 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
              {technologies.length > 4 && (
                <Badge
                  variant="outline"
                  className="text-xs px-3 py-1 border-border/40 text-primary"
                >
                  +{technologies.length - 4} more
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border/30"
            >
              <div className="p-6 bg-muted/5">
                {/* Full Technologies */}
                <div>
                  <h4 className="flex items-center gap-2 text-foreground font-semibold mb-4 text-sm">
                    <Code className="h-4 w-4 text-primary" />
                    COMPLETE TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: idx * 0.03 }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs px-3 py-1 border-border/40 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}

// Project Grid Component
function ProjectGrid({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  );
}

// Sample project data
const projects: ProjectCardProps[] = [
  {
    title: "SQLKATA",
    description:
      "A comprehensive MERN application for practicing SQL queries with real-time execution capabilities. Features an admin panel for managing content and test case validation system.",
    icon: Database,
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "SQL",
      "Real-time Execution",
    ],
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed",
    completionDate: "2024",
    difficulty: "Advanced",
    index: 0,
  },
  {
    title: "ZEN CHAT",
    description:
      "Real-time chat application supporting multiple media types including images, videos, text, and audio messages. Built with modern web technologies for seamless communication.",
    icon: MessageSquare,
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "Tailwind CSS",
      "MongoDB",
      "Express",
    ],
    demoUrl: "#",
    githubUrl: "#",
    status: "Completed",
    completionDate: "2024",
    difficulty: "Intermediate",
    index: 1,
  },
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ProjectGrid projects={projects} />
        </motion.div>

        {/* Call to Action - UNCHANGED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="p-8 max-w-2xl mx-auto bg-card border border-border/50 hover:border-primary/30">
            <h3 className="text-2xl font-semibold mb-4">Want to See More?</h3>
            <p className="text-muted-foreground mb-6">
              These are just a few highlights. Check out my GitHub for more
              projects and contributions to open-source initiatives.
            </p>
            <Button
              asChild
              className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <a
                href="https://github.com/rohith00016"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                View All Projects
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
