import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Typewriter from "typewriter-effect";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadResume = () => {
    // Placeholder for resume download functionality
    window.open("/rohith2025.pdf", "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 " />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 w-full"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-1 flex-shrink-0"
          >
            <div className="relative">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="/dp.jpg"
                  alt="Rohith M - Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/10 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-2 lg:order-2 text-center lg:text-left space-y-6 lg:space-y-8 flex-1 max-w-2xl lg:max-w-none">
            {/* Name and introduction */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Rohith M
                </span>
              </motion.h1>

              {/* Animated typing text */}
              <motion.div
                className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium h-16 flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "Mentor & Educator",
                      "AI Integrator",
                      "Problem Solver",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    deleteSpeed: 50,
                  }}
                />
              </motion.div>
            </div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-muted-foreground text-sm md:text-base"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Erode, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:rohithm1482@gmail.com"
                  className="hover:text-primary transition-all duration-300 ease-in-out"
                >
                  rohithm1482@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 6381800016</span>
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full"
            >
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="ripple-effect transition-all duration-300 ease-in-out hover:scale-105 group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <a
                    href="https://github.com/rohith00016"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="transition-all duration-300 ease-in-out hover:scale-110"
                >
                  <a
                    href="https://linkedin.com/in/rohithM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Objective */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="max-w-2xl mx-auto lg:mx-0 text-muted-foreground text-base sm:text-lg leading-relaxed text-center lg:text-left"
            >
              Seeking a stable, profitable company to leverage my talents, gain
              valuable experience, and contribute to enhancing its reputation in
              the technology industry.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
