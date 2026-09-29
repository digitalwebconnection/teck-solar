import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react';
import { useLocation, type Location } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

interface PageTransitionContextType {
  displayLocation: Location;
  isTransitioning: boolean;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(null);

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return ctx;
}

type TransitionStage = 'idle' | 'covering' | 'revealing';

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const isFirstRender = useRef(true);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState<TransitionStage>('idle');
  const targetLocationRef = useRef<Location>(location);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Ignore hash-only changes or identical pathname
    if (
      location.pathname === displayLocation.pathname &&
      location.search === displayLocation.search
    ) {
      return;
    }

    targetLocationRef.current = location;

    if (shouldReduceMotion) {
      setDisplayLocation(location);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    // Phase 1: Curtain slides up from bottom to cover the old page
    setStage('covering');
  }, [location.pathname, location.search, shouldReduceMotion, displayLocation]);

  const handleAnimationComplete = () => {
    if (stage === 'covering') {
      // 1. Page is 100% covered in black. Swap DOM to new route.
      setDisplayLocation(targetLocationRef.current);
      // 2. Silently reset scroll to top while fully covered
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      // 3. Phase 2: Curtain slides up off screen to reveal new page
      setStage('revealing');
    } else if (stage === 'revealing') {
      // Transition finished, reset to idle
      setStage('idle');
    }
  };

  return (
    <PageTransitionContext.Provider value={{ displayLocation, isTransitioning: stage !== 'idle' }}>
      {children}
      <AnimatePresence>
        {stage !== 'idle' && (
          <motion.div
            key="black-curtain-layer"
            initial={{ y: '100%' }}
            animate={{
              y: stage === 'covering' ? '0%' : '-100%',
            }}
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1], // exact dontmatter.eu cinematic cubic-bezier curve
            }}
            onAnimationComplete={handleAnimationComplete}
            className="fixed inset-0 z-[99999] bg-[#161616] pointer-events-auto cursor-wait will-change-transform transform-gpu select-none"
          />
        )}
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}

export default function BlackCurtainTransition() {
  return null;
}
