import { GlowCard } from "@/components/ui/glow-card";
import { SectionHeader } from "@/components/animations/SectionHeader";
import { RevealItem } from "@/components/animations/AnimatedSection";

const DEVICON =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons";

const techIcons = [
  { src: `${DEVICON}/react/react-original.svg`, label: "React" },
  { src: `${DEVICON}/typescript/typescript-original.svg`, label: "TypeScript" },
  { src: `${DEVICON}/redux/redux-original.svg`, label: "Redux" },
  { src: `${DEVICON}/nodejs/nodejs-original.svg`, label: "Node.js" },
  { src: `${DEVICON}/express/express-original.svg`, label: "Express" },
  { src: `${DEVICON}/mongodb/mongodb-original.svg`, label: "MongoDB" },
  { src: `${DEVICON}/mysql/mysql-original.svg`, label: "MySQL" },
  { src: `${DEVICON}/redis/redis-original.svg`, label: "Redis" },
  { src: `${DEVICON}/docker/docker-original.svg`, label: "Docker" },
  { src: `${DEVICON}/nginx/nginx-original.svg`, label: "NGINX" },
  { src: `${DEVICON}/git/git-original.svg`, label: "Git" },
  { src: `${DEVICON}/github/github-original.svg`, label: "GitHub" },
  { src: `${DEVICON}/html5/html5-original.svg`, label: "HTML5" },
  { src: `${DEVICON}/css3/css3-original.svg`, label: "CSS3" },
  { src: `${DEVICON}/tailwindcss/tailwindcss-original.svg`, label: "Tailwind" },
  {
    src: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,
    label: "AWS",
  },
  { src: `${DEVICON}/socketio/socketio-original.svg`, label: "Socket.io" },
  { src: `${DEVICON}/google/google-original.svg`, label: "Gemini AI" },
];

const softSkills = [
  "React Query",
  "Puppeteer",
  "Razorpay",
  "JWT & RBAC",
  "RAG",
  "Mentoring",
  "System Design",
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <SectionHeader
        number="04"
        title="Skills"
        subtitle="The MERN + AI stack I use daily — from frontend to deployment."
      />

      <RevealItem>
        <GlowCard innerClassName="p-6 sm:p-8">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-x-3 gap-y-8">
            {techIcons.map(({ src, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2.5 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center transition-colors duration-200 group-hover:border-white/15 group-hover:bg-white/[0.06]">
                  <img
                    src={src}
                    alt={label}
                    className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/[0.06]">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-3">
              Also
            </p>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="chip text-[11px]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </GlowCard>
      </RevealItem>
    </section>
  );
}
