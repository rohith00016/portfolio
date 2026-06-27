import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    const sections = ["hero", ...navItems.map((item) => item.href.substring(1))];
    const current = sections.find((section) => {
      const el = document.getElementById(section);
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= 140 && rect.bottom >= 140;
    });
    if (current) setActiveSection(current);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "h-14 px-5 rounded-2xl border border-white/10 bg-background/70 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
            : "h-14"
        }`}
      >
        <button
          onClick={() => scrollToSection("#hero")}
          className="font-display font-bold text-lg tracking-tight hover:text-primary transition-colors"
        >
          Rohith<span className="text-primary">.</span>
        </button>

        <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/8 bg-white/[0.03]">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-1.5 text-sm rounded-full transition-all duration-200 ${
                  activeSection === id
                    ? "bg-primary text-primary-foreground font-medium shadow-glow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden sm:inline-flex rounded-full h-9 px-4 bg-primary hover:bg-primary/90 shadow-glow-sm"
            asChild
          >
            <a href="/rohithM.pdf" target="_blank" rel="noopener noreferrer">
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 mx-5 p-3 rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 text-sm rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
