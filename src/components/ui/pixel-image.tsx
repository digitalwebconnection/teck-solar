import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

interface PixelImageProps {
  src?: string;
  srcs?: string[];
  customGrid?: { rows: number; cols: number };
  grayscaleAnimation?: boolean;
  className?: string;
  alt?: string;
}

export function PixelImage({
  src,
  srcs,
  customGrid = { rows: 6, cols: 8 },
  grayscaleAnimation = true,
  className,
  alt = "",
}: PixelImageProps) {
  const { rows, cols } = customGrid;
  const images = srcs && srcs.length > 0 ? srcs : (src ? [src] : []);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activePixels, setActivePixels] = useState<Set<string>>(new Set());

  // Main animation loop
  useEffect(() => {
    if (images.length === 0) return;

    const totalPixels = rows * cols;
    let timeoutId: ReturnType<typeof setTimeout>;

    if (activePixels.size >= totalPixels) {
      // 1. All pixels are revealed (image is fully visible).
      // 2. Wait 3 seconds.
      timeoutId = setTimeout(() => {
        // 3. Reset to black (0 pixels active) and change image.
        setActivePixels(new Set());
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 1000);
      
      return () => clearTimeout(timeoutId);
    }

    // Otherwise, progressively reveal pixels
    const revealInterval = setInterval(() => {
      setActivePixels(prev => {
        const nextSet = new Set(prev);
        
        // Find all unrevealed pixels
        const unrevealed: string[] = [];
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            if (!nextSet.has(`${r}-${c}`)) {
              unrevealed.push(`${r}-${c}`);
            }
          }
        }
        
        if (unrevealed.length > 0) {
          // Reveal a batch of pixels at a time (e.g. 3-4) to make it take ~1.5s total
          const numToReveal = Math.min(4, unrevealed.length);
          for (let i = 0; i < numToReveal; i++) {
            const randomIndex = Math.floor(Math.random() * unrevealed.length);
            nextSet.add(unrevealed[randomIndex]);
            unrevealed.splice(randomIndex, 1);
          }
        }
        
        return nextSet;
      });
    }, 150);

    return () => clearInterval(revealInterval);
  }, [activePixels.size, rows, cols, images.length]);

  const handleMouseEnter = (r: number, c: number) => {
    const id = `${r}-${c}`;
    setActivePixels(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  const currentSrc = images[currentIndex] || "";

  return (
    <div className={cn("relative overflow-hidden group bg-slate-950", className)}>
      {/* Background base image */}
      <img 
        src={currentSrc} 
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms]",
          grayscaleAnimation ? "grayscale group-hover:grayscale-0" : ""
        )} 
        alt={alt} 
      />
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 z-10 grid"
        style={{
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const id = `${r}-${c}`;
            const isActive = activePixels.has(id);
            return (
              <div
                key={id}
                onMouseEnter={() => handleMouseEnter(r, c)}
                className={cn(
                  "w-full h-full transition-opacity duration-1000 ease-out",
                  isActive 
                    ? "opacity-0" // Reveal the image
                    : "opacity-100 bg-slate-950" // Hide the image with solid block
                )}
              ></div>
            );
          })
        )}
      </div>
    </div>
  );
}
