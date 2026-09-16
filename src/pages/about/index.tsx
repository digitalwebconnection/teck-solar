import PageBanner from '../../components/layout/PageBanner';
import StorySection from './sections/StorySection';
import ValuesSection from './sections/ValuesSection';
import AccreditationsSection from './sections/AccreditationsSection';
import AboutCtaSection from './sections/AboutCtaSection';

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
        backgroundImage="/images/about-team.jpg"
      />
      <StorySection />
      <ValuesSection />
      <AccreditationsSection />
      <AboutCtaSection />
    </>
  );
}
