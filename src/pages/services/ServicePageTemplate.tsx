import ServiceHeroBanner from './sections/ServiceHeroBanner';
import ServiceIntroSection from './sections/ServiceIntroSection';
import ServiceBenefitsSection from './sections/ServiceBenefitsSection';
import ServiceFaqSection from './sections/ServiceFaqSection';
import ServiceCtaSection from './sections/ServiceCtaSection';
import type { ServicePageProps } from '@/types';

export default function ServicePageTemplate({
  title,
  bannerImage,
  intro,
  introDetail,
  benefits,
  featureImage,
  faqs,
}: ServicePageProps) {
  return (
    <>
      <ServiceHeroBanner
        title={title}
        bannerImage={bannerImage}
      />
      <ServiceIntroSection
        title={title}
        intro={intro}
        introDetail={introDetail}
        featureImage={featureImage}
      />
      <ServiceBenefitsSection
        title={title}
        benefits={benefits}
      />
      <ServiceFaqSection
        faqs={faqs}
      />
      <ServiceCtaSection />
    </>
  );
}
