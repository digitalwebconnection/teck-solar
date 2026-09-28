import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/layout/Header';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { PageTransitionProvider } from '@/components/layout/BlackCurtainTransition';
import { QuoteModal } from '@/components/shared';
import { AppProviders } from './providers';
import { AppRoutes } from './router';

export function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <PageTransitionProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex flex-col overflow-x-hidden">
              <AppRoutes />
            </main>
          </div>
          <QuoteModal />
        </PageTransitionProvider>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
