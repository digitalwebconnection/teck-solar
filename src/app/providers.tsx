import type { ReactNode } from 'react';
import { QuoteModalProvider } from '@/features/quote';

export interface ProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: ProvidersProps) {
  return (
    <QuoteModalProvider>
      {children}
    </QuoteModalProvider>
  );
}
