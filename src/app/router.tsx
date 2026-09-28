import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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

function PageLoader() {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center p-8">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#144E9A] border-r-[#E56D00] animate-spin" />
      </div>
      <p className="mt-4 text-xs font-heading font-semibold text-slate-400 uppercase tracking-widest animate-pulse">
        Loading...
      </p>
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Services Routes */}
        <Route path="/services" element={<Navigate to="/services/residential-solar" replace />} />
        <Route path="/services/residential-solar" element={<ResidentialSolarPage />} />
        <Route path="/services/commercial-solar" element={<CommercialSolarPage />} />
        <Route path="/services/battery-storage" element={<BatteryStoragePage />} />
        <Route path="/services/ev-charger" element={<EVChargerPage />} />
        
        {/* Resources Routes */}
        <Route path="/resources" element={<Navigate to="/resources/product-datasheets" replace />} />
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
    </Suspense>
  );
}

export default AppRoutes;
