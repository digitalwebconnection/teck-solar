import PageBanner from '../../../components/layout/PageBanner';
import WiFiStepsSection from './sections/WiFiStepsSection';
import WiFiHelpSection from './sections/WiFiHelpSection';

export default function WiFiMonitoring() {
  return (
    <>
      <PageBanner
        title="WiFi Monitoring Setup"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Resources' }, { label: 'WiFi Monitoring Setup' }]}
        backgroundImage="/images/hero-residential.jpg"
      />
      <WiFiStepsSection />
      <WiFiHelpSection />
    </>
  );
}
