import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealItem({
  children,
  className = "",
  delay = 0,
}: RevealItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
