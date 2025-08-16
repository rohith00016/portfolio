import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  MessageCircle,
  Calendar,
  Coffee,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "rohithm1482@gmail.com",
    href: "mailto:rohithm1482@gmail.com",
    description: "Best for detailed discussions",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6381800016",
    href: "tel:+916381800016",
    description: "Quick calls and urgent matters",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "rohith00016",
    href: "https://github.com/rohith00016",
    description: "Check out my code and projects",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "rohithM",
    href: "https://linkedin.com/in/rohithM",
    description: "Professional networking",
  },
];

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just
            have a tech chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Get In Touch</h3>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="block p-4 rounded-lg border border-border transition-all duration-300 ease-in-out hover:border-primary/50 hover:bg-primary/5 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 ease-in-out">
                        <method.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{method.label}</span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-all duration-300 ease-in-out" />
                        </div>
                        <p className="text-primary font-mono text-sm">
                          {method.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground mb-2">
                Based in{" "}
                <span className="font-medium text-foreground">
                  Erode, Tamil Nadu, India
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                Open to remote opportunities and willing to relocate for the
                right position.
              </p>
            </Card>
          </motion.div>

          {/* Call to Action & Availability */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Availability */}
            <Card className="p-6 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Current Status</h3>
                  <Badge
                    variant="secondary"
                    className="bg-success/10 text-success border-success/20 mt-1 p-2"
                  >
                    Available for Opportunities
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">What I'm Looking For:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Full-time development positions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Freelance and consulting projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Collaboration opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>Mentoring and training roles</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> Usually within 24 hours
                  </p>
                </div>
              </div>
            </Card>

            {/* Coffee Chat CTA */}
            <Card className="p-6 bg-card text-center">
              <div className="flex items-center justify-center mb-4">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Let's Have a Coffee Chat!
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you're looking to hire, collaborate, or just want to
                discuss the latest in web development, I'm always excited to
                connect with fellow tech enthusiasts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="flex-1 transition-all duration-300 ease-in-out hover:scale-105 h-12"
                  asChild
                >
                  <a href="mailto:rohithm1482@gmail.com?subject=Let's Connect!">
                    <Mail className="h-4 w-4 mr-2 " />
                    Send Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 transition-all duration-300 ease-in-out hover:scale-105 h-12"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/rohithM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn Message
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            Built using React, TypeScript, Tailwind CSS and Shadcn
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Rohith M. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
