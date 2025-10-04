import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    "Assistant School People Leader (HSC)",
    "2nd Prize – Web Design Contest, Karpagam Engineering College",
  ];

  const hobbies = [
    "Upskilling",
    "Meditation",
    "Running",
    "Music",
    "Audio Books",
  ];

  return (
    <section id="about" className="py-20  " ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate full-stack developer dedicated to creating innovative
            solutions and mentoring the next generation of developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-6 bg-card/50 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 mr-3 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-lg">
                    Master of Computer Applications (MCA)
                  </h4>
                  <p className="text-muted-foreground">
                    Kongu Engineering College
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      2022 - 2024
                    </span>
                  </div>
                  <div className="mt-2">
                    <Badge variant="secondary" className="font-mono">
                      CGPA: 8.4
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Achievements & Hobbies Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Achievements */}
            <Card className="p-6 bg-card/50 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 mr-3 text-primary" />
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>

            {/* Hobbies */}
            <Card className="p-6 bg-card/50 border-2 border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Hobbies & Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <Badge
                      variant="outline"
                      className="transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground"
                    >
                      {hobby}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
