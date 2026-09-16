import PageBanner from '../../components/layout/PageBanner';
import ContactFormSection from './sections/ContactFormSection';
import OfficeLocationsSection from './sections/OfficeLocationsSection';
import MapSection from './sections/MapSection';

export default function Contact() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]}
        backgroundImage="/images/hero-installation.jpg"
      />
      <ContactFormSection />
      <OfficeLocationsSection />
      <MapSection />
    </>
  );
}
