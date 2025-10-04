import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Cpu, Monitor, Palette } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    color: "text-blue-500",
    skills: [
      { name: "ReactJS", level: 90 },
      { name: "Redux / Context API", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript/TypeScript", level: 87 },
      { name: "HTML5 & CSS3", level: 92 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-green-500",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 83 },
      { name: "MySQL", level: 80 },
      { name: "Socket.io", level: 82 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Cpu,
    color: "text-purple-500",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Responsive Design", level: 90 },
      { name: "Performance Optimization", level: 75 },
      { name: "Testing & Debugging", level: 80 },
    ],
  },
  {
    title: "AI & Innovation",
    icon: Cloud,
    color: "text-orange-500",
    skills: [
      { name: "AI Integration", level: 78 },
      { name: "RAG Systems", level: 75 },
      { name: "Chat Applications", level: 85 },
      { name: "Resume Evaluators", level: 80 },
      { name: "Problem Solving", level: 92 },
    ],
  },
];

const additionalSkills = [
  "Mentoring & Training",
  "Technical Documentation",
  "Code Review",
  "Agile Methodology",
  "Team Collaboration",
  "Project Management",
  "System Architecture",
  "Database Design",
];

const techStackIcons = [
  { icon: "/public/React.svg", name: "React" },
  { icon: "/public/Redux.svg", name: "Redux" },
  { icon: "/public/Tailwind.svg", name: "Tailwind" },
  { icon: "/public/JavaScript.svg", name: "JavaScript" },
  { icon: "/public/HTML5.svg", name: "HTML5" },
  { icon: "/public/CSS3.svg", name: "CSS3" },
  { icon: "/public/Node.js.svg", name: "Node.js" },
  { icon: "/public/MongoDB.svg", name: "MongoDB" },
  { icon: "/public/MySQL.svg", name: "MySQL" },
  { icon: "/public/Socket.io.svg", name: "Socket.io" },
  { icon: "/public/Git.svg", name: "Git" },
  { icon: "/public/GitHub.svg", name: "GitHub" },
];

//grayscale icons
// const techStackIcons = [
//   "react",
//   "redux",
//   "tailwindcss",
//   "javascript",
//   "html5",
//   "css3",
//   "nodejs",
//   "mongodb",
//   "mysql",
//   "git",
//   "github",
// ];

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [animatedValues, setAnimatedValues] = useState<{
    [key: string]: number;
  }>({});
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const values: { [key: string]: number } = {};
        skillCategories.forEach((category) => {
          category.skills.forEach((skill) => {
            values[skill.name] = skill.level;
          });
        });
        setAnimatedValues(values);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on experience and
            continuous learning
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 lg:grid-cols-12 gap-8 mb-12">
          {techStackIcons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="flex flex-col justify-center items-center"
            >
              <Card className="w-20 h-20 rounded-full flex items-center justify-center mb-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src={icon.icon} alt={icon.name} className="w-10 h-10" />
              </Card>
              <p className="text-sm text-muted-foreground text-center font-medium">
                {icon.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"></div>
        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="p-6 bg-card/50 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Additional Expertise
              </h3>
              <p className="text-muted-foreground">
                Professional skills that complement my technical abilities
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.8 + index * 0.05,
                  }}
                >
                  <Badge
                    variant="outline"
                    className="transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground text-sm py-2 px-4"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
        {/* Skill Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Card className="p-8 max-w-3xl mx-auto bg-card/50 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <Palette className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Continuous Growth Mindset
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and so do I. My commitment to lifelong
              learning ensures that I stay current with emerging trends and best
              practices. Every project is an opportunity to refine existing
              skills and acquire new ones.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
