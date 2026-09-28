import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import { QuoteModal } from './components/shared';
import { AppProviders } from './app/providers';
import { AppRoutes } from './app/router';

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <AppRoutes />
          </main>
          <Footer />
        </div>
        <QuoteModal />
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
