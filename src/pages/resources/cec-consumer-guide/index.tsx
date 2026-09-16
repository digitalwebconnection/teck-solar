import PageBanner from '../../../components/layout/PageBanner';
import GuideOverviewSection from './sections/GuideOverviewSection';
import GuideTopicsSection from './sections/GuideTopicsSection';
import GuideCtaSection from './sections/GuideCtaSection';

export default function CECConsumerGuide() {
  return (
    <>
      <PageBanner
        title="CEC Consumer Guide"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Resources' }, { label: 'CEC Consumer Guide' }]}
        backgroundImage="/images/hero-commercial.jpg"
      />
      <GuideOverviewSection />
      <GuideTopicsSection />
      <GuideCtaSection />
    </>
  );
}
