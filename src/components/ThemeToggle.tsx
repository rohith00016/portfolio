import { useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

// Simple dropdown components (you can replace these with your shadcn/ui components)
const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative inline-block text-left">{children}</div>;
};

const DropdownMenuTrigger = ({ 
  children, 
  asChild = false 
}: { 
  children: React.ReactNode; 
  asChild?: boolean; 
}) => {
  return <>{children}</>;
};

const DropdownMenuContent = ({ 
  children, 
  align = "center",
  className = ""
}: { 
  children: React.ReactNode; 
  align?: string;
  className?: string;
}) => {
  return (
    <div className={`absolute right-0 mt-2 w-56 origin-top-right bg-popover text-popover-foreground rounded-md border shadow-lg z-50 ${className}`}>
      <div className="py-1">{children}</div>
    </div>
  );
};

const DropdownMenuItem = ({ 
  children, 
  onClick,
  className = ""
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground ${className}`}
    >
      {children}
    </button>
  );
};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="transition-all duration-300 ease-in-out hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </motion.div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      {isOpen && (
        <DropdownMenuContent align="end" className="portfolio-shadow">
          <DropdownMenuItem
            onClick={() => {
              setTheme("light");
              setIsOpen(false);
            }}
            className="transition-all duration-300 ease-in-out"
          >
            <Sun className="mr-2 h-4 w-4" />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setTheme("dark");
              setIsOpen(false);
            }}
            className="transition-all duration-300 ease-in-out"
          >
            <Moon className="mr-2 h-4 w-4" />
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setTheme("system");
              setIsOpen(false);
            }}
            className="transition-all duration-300 ease-in-out"
          >
            <Monitor className="mr-2 h-4 w-4" />
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}