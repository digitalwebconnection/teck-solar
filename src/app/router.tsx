import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import { usePageTransition } from '@/components/layout/BlackCurtainTransition';

// Standard static imports for instant zero-delay route transitions
import HomePage from '@/pages/home/HomePage';
import AboutPage from '@/pages/about/AboutPage';
import ResidentialSolarPage from '@/pages/services/residential-solar/ResidentialSolarPage';
import CommercialSolarPage from '@/pages/services/commercial-solar/CommercialSolarPage';
import BatteryStoragePage from '@/pages/services/battery-storage/BatteryStoragePage';
import EVChargerPage from '@/pages/services/ev-charger/EVChargerPage';
import ProductDatasheetsPage from '@/pages/resources/product-datasheets/ProductDatasheetsPage';
import WiFiMonitoringPage from '@/pages/resources/wifi-monitoring/WiFiMonitoringPage';
import CECConsumerGuidePage from '@/pages/resources/cec-consumer-guide/CECConsumerGuidePage';
import ContactPage from '@/pages/contact/ContactPage';
import PrivacyPage from '@/pages/legal/PrivacyPage';
import TermsPage from '@/pages/legal/TermsPage';

export function AppRoutes() {
  const { displayLocation } = usePageTransition();

  return (
    <>
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
    </>
  );
}

export default AppRoutes;

