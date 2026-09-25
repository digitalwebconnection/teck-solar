import { useMemo } from "react";
import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

export interface Text3DFlipProps {
  children: string;
  className?: string;
  textClassName?: string;
  flipTextClassName?: string;
  rotateDirection?: "top" | "bottom";
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center";
  transition?: Transition;
}

export default function Text3DFlip({
  children,
  className,
  textClassName,
  flipTextClassName,
  rotateDirection = "top",
  staggerDuration = 0.03,
  staggerFrom = "first",
  transition = { type: "spring", damping: 25, stiffness: 160 },
}: Text3DFlipProps) {
  // Split by spaces but preserve newlines as separate tokens
  const words = useMemo(() => {
    return children.split(/(\n|\s+)/).filter((word) => word.length > 0 && word !== " " && word !== "");
  }, [children]);

  const getDelay = (index: number, total: number) => {
    if (staggerFrom === "first") return index * staggerDuration;
    if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
    if (staggerFrom === "center") return Math.abs(total / 2 - index) * staggerDuration;
    return index * staggerDuration;
  };

  let charCount = 0;
  const totalChars = words.reduce((acc, w) => acc + (w === "\n" ? 0 : w.length), 0);

  return (
    <motion.div 
      className={`flex flex-wrap gap-x-[0.3em] ${className || ""}`}
      initial="initial"
      animate="animate"
    >
      {words.map((word, wordIndex) => {
        if (word === "\n") {
          return <div key={wordIndex} className="w-full h-0" />;
        }
        
        return (
          <div key={wordIndex} className="inline-flex flex-nowrap">
            {word.split("").map((char, charIndex) => {
              const absoluteIndex = charCount++;
              
              return (
                <motion.span
                  key={charIndex}
                  className="relative inline-block overflow-hidden pb-1"
                >
                  <motion.span
                    className={`block ${textClassName || ""}`}
                    variants={{
                      initial: { y: "0%" },
                      animate: { y: rotateDirection === "top" ? "-100%" : "100%" },
                    }}
                    transition={{ ...transition, delay: getDelay(absoluteIndex, totalChars) }}
                  >
                    {char}
                  </motion.span>
                  <motion.span
                    className={`absolute left-0 top-0 block w-full h-full ${flipTextClassName || ""}`}
                    variants={{
                      initial: { y: rotateDirection === "top" ? "100%" : "-100%" },
                      animate: { y: "0%" },
                    }}
                    transition={{ ...transition, delay: getDelay(absoluteIndex, totalChars) }}
                  >
                    {char}
                  </motion.span>
                </motion.span>
              );
            })}
          </div>
        );
      })}
    </motion.div>
  );
}
