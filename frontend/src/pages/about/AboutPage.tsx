import AboutHeroSection from './sections/AboutHeroSection';
import StorySection from './sections/StorySection';
import ValuesSection from './sections/ValuesSection';
import AccreditationsSection from './sections/AccreditationsSection';
import AboutCtaSection from './sections/AboutCtaSection';
import AboutStatsSection from './sections/AboutStatsSection';

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <ValuesSection />
      <StorySection />
      <AboutStatsSection />
      <AccreditationsSection />
      <AboutCtaSection />
    </>
  );
}
