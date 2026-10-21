import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { QuoteModalProvider } from '@/features/quote';
import { ReactLenis } from 'lenis/react';

export interface ProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: ProvidersProps) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <QuoteModalProvider>
      {isAdmin ? (
        children
      ) : (
        <ReactLenis
          root
          options={{
            lerp: 0.05,
            wheelMultiplier: 0.8,
            smoothWheel: true,
          }}
        >
          {children}
        </ReactLenis>
      )}
    </QuoteModalProvider>
  );
}

