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

  if (isAdmin) {
    return (
      <main className="w-full min-h-screen bg-[#F8FAFC]">
        <AppRoutes />
      </main>
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
    <AppProviders>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
