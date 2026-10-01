import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/layout/Header';
import ScrollToTop from '@/components/layout/ScrollToTop';
import { PageTransitionProvider } from '@/components/layout/BlackCurtainTransition';
import { QuoteModal } from '@/components/shared';
import { AppProviders } from './providers';
import { AppRoutes } from './router';
import * as Sentry from '@sentry/react';

// Add this button component to your app to test Sentry's error tracking
function ErrorButton() {
  return (
    <button
      onClick={() => {
        // Send a log before throwing the error
        Sentry.logger?.info('User triggered test error', {
          action: 'test_error_button_click',
        });
        // Send a test metric before throwing the error
        Sentry.metrics?.count('test_counter', 1);
        throw new Error('This is your first error!');
      }}
      className="fixed bottom-4 right-4 z-50 bg-red-600 text-white px-4 py-2 rounded shadow-lg font-bold hover:bg-red-700"
    >
      Break the world
    </button>
  );
}

export function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <PageTransitionProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 flex flex-col overflow-x-clip">
              <AppRoutes />
            </main>
          </div>
          <QuoteModal />
          <ErrorButton />
        </PageTransitionProvider>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
