import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

export default function ScrollToTop() {
  const { hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (hash) {
      if (lenis) {
        lenis.scrollTo(hash, { offset: -100, duration: 1.2 });
      } else {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [hash, lenis]);

  return null;
}
