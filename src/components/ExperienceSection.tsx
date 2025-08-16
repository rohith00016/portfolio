import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  Calendar,
  MapPin,
  Users,
  Code,
  ChevronDown,
  Lightbulb,
} from "lucide-react";

// Experience data type
type ExperienceCardProps = {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  responsibilities: string[];
  skills: string[];
  index: number;
};

// Individual Experience Card Component
function ExperienceCard({
  title,
  company,
  location,
  duration,
  type,
  responsibilities,
  skills,
  index,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden bg-card border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
        {/* Header Section */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="p-2.5 bg-muted rounded-lg group-hover:bg-muted/80 transition-colors">
                <Building2 className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground mb-1 truncate group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-muted-foreground font-medium truncate">
                  {company}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 h-auto hover:bg-muted"
            >
              <ChevronDown
                className={`h-4 w-4 text-muted-foreground transform transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </Button>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/50">
              <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{duration}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/50">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{location}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {type}
            </Badge>
          </div>

          {/* Preview Skills */}
          {!isExpanded && (
            <div className="flex flex-wrap gap-1.5">
              {skills.slice(0, 4).map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-xs px-2 py-0.5 border-border/50"
                >
                  {skill}
                </Badge>
              ))}
              {skills.length > 4 && (
                <Badge
                  variant="outline"
                  className="text-xs px-2 py-0.5 border-border/50"
                >
                  +{skills.length - 4} more
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
              className="overflow-hidden"
            >
              <Separator className="mx-6" />
              <div className="p-6 pt-4">
                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-foreground font-medium mb-3 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    KEY RESPONSIBILITIES
                  </h4>
                  <div className="space-y-2">
                    {responsibilities.map((responsibility, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {responsibility}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="flex items-center gap-2 text-foreground font-medium mb-3 text-sm">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: idx * 0.03 }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs px-2 py-0.5 border-border/50 hover:bg-muted/50 transition-colors"
                        >
                          {skill}
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

// Experience Grid Component
function ExperienceGrid({
  experiences,
}: {
  experiences: ExperienceCardProps[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} index={index} />
      ))}
    </div>
  );
}

// Sample experience data
const experiences: ExperienceCardProps[] = [
  {
    title: "Skill Development Engineer",
    company: "GUVI Geeks Network Pvt. Ltd.",
    location: "Chennai",
    duration: "2024 – Present",
    type: "Full-time",
    responsibilities: [
      "Mentored students in React, Node.js, MongoDB, Context API & Redux",
      "Created AI-integrated POCs: resume evaluators, chat apps, RAG systems",
      "Reviewed code and promoted best practices",
      "Developed comprehensive learning modules and assessments",
    ],
    skills: [
      "React",
      "Node.js",
      "MongoDB",
      "Redux",
      "AI Integration",
      "Mentoring",
    ],
    index: 0,
  },
  {
    title: "Tech Support Intern",
    company: "GUVI",
    location: "Remote",
    duration: "6 months, 2024",
    type: "Internship",
    responsibilities: [
      "Provided MERN stack support to students and developers",
      "Developed SQLKATA – an SQL learning tool with real-time execution",
      "Assisted in debugging and troubleshooting technical issues",
      "Created technical documentation and tutorials",
    ],
    skills: ["MERN Stack", "SQL", "Technical Support", "Documentation"],
    index: 1,
  },
];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Professional Experience
            </h2>
            <p className="text-muted-foreground mt-2">
              Building innovative solutions and mentoring the next generation of
              developers
            </p>
          </div>
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ExperienceGrid experiences={experiences} />
        </motion.div>

        {/* Call to Action - UNCHANGED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-to-br from-card to-card/80 max-w-2xl mx-auto border border-border/50 hover:border-primary/30">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Passionate about staying current with emerging technologies and
              contributing to meaningful projects that make a difference.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
