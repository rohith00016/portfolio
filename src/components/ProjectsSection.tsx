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
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "SQLKATA",
    description:
      "A comprehensive MERN application for practicing SQL queries with real-time execution capabilities.",
    image: "/api/placeholder/400/300",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SQL"],
    links: {
      demo: "#",
      github: "#",
    },
    status: "Completed",
  },
  {
    title: "ZEN CHAT",
    description:
      "Real-time chat application supporting multiple media types including images, videos, text, and audio messages.",
    image: "/api/placeholder/400/300",
    category: "Web Development",
    technologies: ["React", "Node.js", "Socket.io", "Tailwind CSS", "MongoDB"],
    links: {
      demo: "#",
      github: "#",
    },
    status: "Completed",
  },
  {
    title: "AI Resume & Portfolio Evaluator",
    description:
      "An AI-powered tool that evaluates resumes and portfolios to provide personalized feedback and recommendations.",
    image: "/api/placeholder/400/300",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Express", "SQL", "AI"],
    links: {
      demo: "#",
      github: "#",
    },
    status: "Completed",
  },
  
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio website with dark mode, animations, and responsive design.",
    image: "/api/placeholder/400/300",
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    links: {
      demo: "#",
      github: "#",
    },
    status: "Completed",
  },
];

const filterCategories = [
  "Show All",
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Backend",
  "Full Stack",
];

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("Show All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "Show All" || project.category === activeFilter
  );

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-20 " ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise through real-world applications
            and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => {
                setActiveFilter(category);
                setVisibleProjects(6);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background border-border hover:bg-muted"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 bg-background">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-4xl text-muted-foreground/50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        project.status === "Completed" ? "default" : "secondary"
                      }
                      className="px-3 py-1 text-xs font-medium shadow-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 transition-all duration-300 hover:scale-105"
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
                        className="flex-1 transition-all duration-300 hover:scale-105"
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
            className="text-center"
          >
            <Button
              onClick={loadMore}
              className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Load More
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
