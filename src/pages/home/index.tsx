import HeroSlider from './sections/HeroSlider';
import StatsSection from './sections/StatsSection';
import MissionSection from './sections/MissionSection';
import ServicesGrid from './sections/ServicesGrid';
import WhyChooseUs from './sections/WhyChooseUs';
import ProcessSection from './sections/ProcessSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FaqSection from './sections/FaqSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <MissionSection />      
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
