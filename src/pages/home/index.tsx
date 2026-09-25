import HeroSlider from './sections/HeroSlider';
import StatsSection from './sections/StatsSection';
import MissionSection from './sections/MissionSection';
import ShowcaseSection from './sections/ShowcaseSection';
import ServicesGrid from './sections/ServicesGrid';
import ProcessSection from './sections/ProcessSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FaqSection from './sections/FaqSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <MissionSection />
      <ShowcaseSection />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
