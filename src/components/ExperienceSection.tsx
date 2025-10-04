import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const experiences = [
  {
    title: "Skill Development Engineer",
    company: "GUVI Geeks Network Pvt. Ltd.",
    duration: "2024 – Present",
    type: "Full-time",
    highlights: [
      "Mentored students in React, Node.js, MongoDB & Redux",
      "Created AI-integrated POCs: resume evaluators, chat apps, RAG systems",
      "Developed comprehensive learning modules and assessments",
    ],
    skills: ["React", "Node.js", "MongoDB", "Redux", "AI Integration"],
  },
  {
    title: "Tech Support Intern",
    company: "GUVI",
    duration: "6 months, 2024",
    type: "Internship",
    highlights: [
      "Provided MERN stack support to students and developers",
      "Developed SQLKATA – an SQL learning tool with real-time execution",
      "Created technical documentation and tutorials",
    ],
    skills: ["MERN Stack", "SQL", "Technical Support"],
  },
];

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-16" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <p className="text-muted-foreground">
            Building solutions and mentoring developers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience Timeline */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="border-l-2 border-primary/30 pl-6 pb-6 relative bg-card/30 rounded-r-lg p-4 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full shadow-sm" />

                  <div className="flex flex-col gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{exp.duration}</span>
                      <Badge variant="secondary" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 h-full flex flex-col justify-center bg-card/50 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Always Learning, Always Growing
              </h3>
              <p className="text-muted-foreground text-center">
                Passionate about staying current with emerging technologies and
                contributing to meaningful projects that make a difference.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
