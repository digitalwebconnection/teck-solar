import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import About from './pages/about';
import ResidentialSolar from './pages/services/residential-solar';
import CommercialSolar from './pages/services/commercial-solar';
import BatteryStorage from './pages/services/battery-storage';
import EVCharger from './pages/services/ev-charger';
import ProductDatasheets from './pages/resources/product-datasheets';
import WiFiMonitoring from './pages/resources/wifi-monitoring';
import CECConsumerGuide from './pages/resources/cec-consumer-guide';
import Contact from './pages/contact';
import PrivacyPolicy from './pages/privacy';
import Terms from './pages/terms';
import { QuoteModalProvider } from './context/QuoteModalContext';
import QuoteModal from './components/QuoteModal';
function App() {
    return (<QuoteModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/services" element={<Navigate to="/services/residential-solar" replace/>}/>
              <Route path="/services/residential-solar" element={<ResidentialSolar />}/>
              <Route path="/services/commercial-solar" element={<CommercialSolar />}/>
              <Route path="/services/battery-storage" element={<BatteryStorage />}/>
              <Route path="/services/ev-charger" element={<EVCharger />}/>
              <Route path="/resources" element={<Navigate to="/resources/product-datasheets" replace/>}/>
              <Route path="/resources/product-datasheets" element={<ProductDatasheets />}/>
              <Route path="/resources/wifi-monitoring" element={<WiFiMonitoring />}/>
              <Route path="/resources/cec-consumer-guide" element={<CECConsumerGuide />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/privacy" element={<PrivacyPolicy />}/>
              <Route path="/terms" element={<Terms />}/>
              <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
          </main>
          <Footer />
        </div>
        <QuoteModal />
      </BrowserRouter>
    </QuoteModalProvider>);
}
export default App;
