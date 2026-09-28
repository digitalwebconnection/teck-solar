import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function RouteProgressBar() {
  const { pathname } = useLocation();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 550);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {animating && (
        <motion.div
          key={`bar-${pathname}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed top-0 left-0 right-0 z-[99999] h-[3px] pointer-events-none overflow-hidden"
        >
          <motion.div
            initial={{ scaleX: 0, transformOrigin: '0% 50%' }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full h-full bg-gradient-to-r from-[#144E9A] via-[#E56D00] to-amber-400 shadow-[0_0_14px_rgba(229,109,0,0.9)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
