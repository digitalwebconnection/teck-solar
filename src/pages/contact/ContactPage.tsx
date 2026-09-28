import ContactHeroSection from "./sections/ContactHeroSection";
import ContactFormSection from "./sections/ContactFormSection";
import OfficeLocationsSection from "./sections/OfficeLocationsSection";

export default function ContactPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen selection:bg-amber-500 selection:text-white font-sans">
      <ContactHeroSection />
      <ContactFormSection />
      <OfficeLocationsSection />
    </div>
  );
}
