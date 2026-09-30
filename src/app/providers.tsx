import type { ReactNode } from 'react';
import { QuoteModalProvider } from '@/features/quote';
import { ReactLenis } from 'lenis/react';

export interface ProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: ProvidersProps) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.05,
      wheelMultiplier: 0.8,
      smoothWheel: true
    }}>
      <QuoteModalProvider>
        {children}
      </QuoteModalProvider>
    </ReactLenis>
  );
}
