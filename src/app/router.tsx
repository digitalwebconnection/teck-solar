import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import { usePageTransition } from '@/components/layout/BlackCurtainTransition';

// Lazy-loaded page components for optimal bundle splitting & descriptive imports
const HomePage = lazy(() => import('@/pages/home/HomePage'));
const AboutPage = lazy(() => import('@/pages/about/AboutPage'));
const ResidentialSolarPage = lazy(() => import('@/pages/services/residential-solar/ResidentialSolarPage'));
const CommercialSolarPage = lazy(() => import('@/pages/services/commercial-solar/CommercialSolarPage'));
const BatteryStoragePage = lazy(() => import('@/pages/services/battery-storage/BatteryStoragePage'));
const EVChargerPage = lazy(() => import('@/pages/services/ev-charger/EVChargerPage'));
const ProductDatasheetsPage = lazy(() => import('@/pages/resources/product-datasheets/ProductDatasheetsPage'));
const WiFiMonitoringPage = lazy(() => import('@/pages/resources/wifi-monitoring/WiFiMonitoringPage'));
const CECConsumerGuidePage = lazy(() => import('@/pages/resources/cec-consumer-guide/CECConsumerGuidePage'));
const ContactPage = lazy(() => import('@/pages/contact/ContactPage'));
const PrivacyPage = lazy(() => import('@/pages/legal/PrivacyPage'));
const TermsPage = lazy(() => import('@/pages/legal/TermsPage'));

// Idle background preloading for instant zero-delay route transitions
const preloadPages = () => {
  import('@/pages/home/HomePage');
  import('@/pages/about/AboutPage');
  import('@/pages/services/residential-solar/ResidentialSolarPage');
  import('@/pages/services/commercial-solar/CommercialSolarPage');
  import('@/pages/services/battery-storage/BatteryStoragePage');
  import('@/pages/services/ev-charger/EVChargerPage');
  import('@/pages/resources/product-datasheets/ProductDatasheetsPage');
  import('@/pages/resources/wifi-monitoring/WiFiMonitoringPage');
  import('@/pages/resources/cec-consumer-guide/CECConsumerGuidePage');
  import('@/pages/contact/ContactPage');
  import('@/pages/legal/PrivacyPage');
  import('@/pages/legal/TermsPage');
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(preloadPages);
  } else {
    setTimeout(preloadPages, 250);
  }
}

// Clean, minimal full-height page loader
function PageLoader() {
  return (
    <div className="min-h-[80vh] w-full flex-1 flex flex-col items-center justify-center p-8 select-none bg-white">
      <div className="flex flex-col items-center gap-3.5">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-2 border-slate-200" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#144E9A] border-r-[#E56D00] animate-[spin_0.85s_linear_infinite]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E56D00] animate-pulse" />
          <span className="text-[11px] font-heading font-extrabold tracking-[0.22em] uppercase text-slate-700">
            Teck Solar
          </span>
        </div>
      </div>
    </div>
  );
}

export function AppRoutes() {
  const { displayLocation } = usePageTransition();

  return (
    <Suspense fallback={<PageLoader />}>
      <div className="flex-1 flex flex-col w-full min-h-screen">
        <Routes location={displayLocation}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<ResidentialSolarPage />} />
          <Route path="/services/residential-solar" element={<ResidentialSolarPage />} />
          <Route path="/services/commercial-solar" element={<CommercialSolarPage />} />
          <Route path="/services/battery-storage" element={<BatteryStoragePage />} />
          <Route path="/services/ev-charger" element={<EVChargerPage />} />
          
          {/* Resources Routes */}
          <Route path="/resources" element={<ProductDatasheetsPage />} />
          <Route path="/resources/product-datasheets" element={<ProductDatasheetsPage />} />
          <Route path="/resources/wifi-monitoring" element={<WiFiMonitoringPage />} />
          <Route path="/resources/cec-consumer-guide" element={<CECConsumerGuidePage />} />
          
          {/* Company & Legal Routes */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </Suspense>
  );
}

export default AppRoutes;

