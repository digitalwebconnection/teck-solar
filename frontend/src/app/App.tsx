import { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { PageTransitionProvider } from '@/components/layout/BlackCurtainTransition';
import { QuoteModal } from '@/components/shared';
import { AppProviders } from './providers';
import { AppRoutes } from './router';

function AppLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  useEffect(() => {
    if (isAdmin) {
      document.documentElement.classList.add('admin-mode');
      document.body.classList.add('admin-mode');
    } else {
      document.documentElement.classList.remove('admin-mode');
      document.body.classList.remove('admin-mode');
    }
    return () => {
      document.documentElement.classList.remove('admin-mode');
      document.body.classList.remove('admin-mode');
    };
  }, [isAdmin]);

  if (isAdmin) {
    return (
      <div className="w-full h-dvh h-full overflow-hidden bg-[#F8FAFC]" data-lenis-prevent>
        <AppRoutes />
      </div>
    );
  }

  return (
    <PageTransitionProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col overflow-x-clip">
          <AppRoutes />
        </main>
      </div>
      <QuoteModal />
    </PageTransitionProvider>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <AppLayout />
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
