import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "SQLKATA",
    description:
      "A comprehensive MERN application for practicing SQL queries with real-time execution capabilities.",
    image: "/api/placeholder/400/300",
    category: "Full Stack Apps",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SQL"],
    links: {
      demo: "#",
      github: "#",
    },
    status: "Completed",
    restricted: true,
    restrictedReason:
      "The application is developed for a company's internal use",
  },
  {
    title: "ZEN CHAT",
    description:
      "Real-time chat application supporting multiple media types including images, videos, text, and audio messages.",
    image: "/api/placeholder/400/300",
    category: "Full Stack Apps",
    technologies: ["React", "Node.js", "Socket.io", "Tailwind CSS", "MongoDB"],
    links: {
      demo: "https://zenchat-final.netlify.app",
      github: "https://github.com/rohith00016/zen-chat.git",
    },
    status: "Completed",
    restricted: false,
  },
  // SQLKATA Admin Application
  {
    title: "SQLKATA Admin",
    description:
      "A application to manage the SQLKATA application like add, edit, delete the questions and categories",
    image: "/api/placeholder/400/300",
    category: "Admin Tools",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SQL", "AI"],
    links: {
      demo: "#",
      github: "#",
    },
    status: "Completed",
    restricted: true,
    restrictedReason:
      "The application is developed for a company's internal use",
  },
  {
    title: "AI Resume & Portfolio Evaluator",
    description:
      "An AI-powered tool that evaluates resumes and portfolios to provide personalized feedback and recommendations.",
    image: "/api/placeholder/400/300",
    category: "AI/ML Projects",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SQL", "AI"],
    links: {
      demo: "#",
      github: "#",
    },
    status: "Completed",
    restricted: false,
    restrictedReason:
      "The application is developed for a company's internal use",
  },

  // mail templator app
  {
    title: "Mail Templator App",
    description:
      "A application to send welcome emails for guvi students with customized template",
    image: "/api/placeholder/400/300",
    category: "Admin Tools",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SQL", "AI"],
    links: {
      demo: "#",
      github: "https://github.com/rohith00016/mail-templator.git",
    },
    status: "Completed",
    restricted: true,
    restrictedReason:
      "The application is developed for a company's internal use",
  },
  // chatbot with qwen AI and DeepSeek AI
  {
    title: "Chatbot with qwen AI and DeepSeek AI",
    description:
      "A chatbot with qwen AI and DeepSeek AI to answer questions and help with tasks",
    image: "/api/placeholder/400/300",
    category: "AI/ML Projects",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SQL", "AI"],
    links: {
      demo: "https://relaxed-llama-d4d715.netlify.app",
      github:
        "https://github.com/rohith00016/chatbot-using-deepseekAI-and-gwenAI.git",
    },
    status: "Completed",
    restricted: false,
  },
  // RAG application
  {
    title: "RAG application",
    description: "A application to answer questions and help with tasks",
    image: "/api/placeholder/400/300",
    category: "AI/ML Projects",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SQL", "AI"],
    links: {
      demo: "#",
      github: "https://github.com/rohith00016/RAG-app.git",
    },
    status: "Completed",
    restricted: true,
    restrictedReason:
      "The application uses openai api which is not free for usage",
  },
  // Movie DB application with redux
  {
    title: "Movie DB application with redux",
    description:
      "A application to search for movies and get details about them",
    image: "/api/placeholder/400/300",
    category: "Full Stack Apps",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SQL", "AI"],
    links: {
      demo: "#",
      github: "https://github.com/rohith00016/imdb-task.git",
    },
    status: "Completed",
    restricted: false,
  },
  // Social Media Application with Intentional Bugs for MERNATHON 2025
  {
    title: "Social Media Application with Intentional Bugs for MERNATHON 2025",
    description:
      "A social media platform with intentional bugs for MERNATHON 2025 where the participants can test their skills and solve the bugs",
    image: "/api/placeholder/400/300",
    category: "Open Source",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SQL", "AI"],
    links: {
      demo: "#",
      github: "https://github.com/rohith00016/bug-media.git",
    },
    status: "Completed",
    restricted: false,
    restrictedReason:
      "The application is developed with errors from a student's task for MERNATHON 2025",
  },
];

const filterCategories = [
  "Show All",
  "AI/ML Projects",
  "Full Stack Apps",
  "Admin Tools",
  "Open Source",
  "Restricted",
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("Show All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "Show All") return true;
    if (activeFilter === "Restricted") return project.restricted === true;
    return project.category === activeFilter;
  });

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <TooltipProvider>
      <section id="projects" className="py-24 lg:py-32" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              My Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A showcase of my technical expertise through real-world
              applications and innovative solutions.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filterCategories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => {
                  setActiveFilter(category);
                  setVisibleProjects(6);
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
                    : "bg-background border-border hover:bg-muted hover:border-primary/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 bg-background flex flex-col group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <div className="text-5xl font-bold text-muted-foreground/60 group-hover:text-muted-foreground/80 transition-colors duration-300">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={
                          project.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                        className="px-3 py-1.5 text-xs font-semibold shadow-md"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 lg:p-8 flex flex-col flex-1">
                    <div className="space-y-6 flex flex-col flex-1">
                      <div className="flex-1">
                        <CardTitle className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed min-h-[4rem] text-sm lg:text-base">
                          {project.description}
                        </CardDescription>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs px-3 py-1.5 font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs px-3 py-1.5 font-medium"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2 mt-auto">
                        {project.restricted ? (
                          <>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex-1">
                                  <Button
                                    variant="default"
                                    size="sm"
                                    className="w-full opacity-50 cursor-not-allowed text-sm font-medium"
                                    disabled
                                  >
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    Demo
                                  </Button>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-sm max-w-xs">
                                  {project.restrictedReason ||
                                    "Access restricted"}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex-1">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full opacity-50 cursor-not-allowed text-sm font-medium"
                                    disabled
                                  >
                                    <Github className="h-4 w-4 mr-2" />
                                    Code
                                  </Button>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-sm max-w-xs">
                                  {project.restrictedReason ||
                                    "Access restricted"}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </>
                        ) : (
                          <>
                            <Button
                              variant="default"
                              size="sm"
                              className="flex-1 transition-all duration-300 hover:scale-105 text-sm font-medium"
                              asChild
                            >
                              <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 transition-all duration-300 hover:scale-105 text-sm font-medium"
                              asChild
                            >
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <Github className="h-4 w-4" />
                                Code
                              </a>
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8"
            >
              <Button
                onClick={loadMore}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base"
              >
                Load More Projects
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </TooltipProvider>
  );
}
