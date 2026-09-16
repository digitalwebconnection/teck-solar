import { type ReactNode } from 'react';
import PageBanner from '../../../components/layout/PageBanner';
import ServiceIntroSection from './sections/ServiceIntroSection';
import ServiceBenefitsSection from './sections/ServiceBenefitsSection';
import ServiceFaqSection from './sections/ServiceFaqSection';
import ServiceCtaSection from './sections/ServiceCtaSection';

export interface ServicePageProps {
  title: string;
  bannerImage: string;
  intro: string;
  introDetail: string;
  benefits: { icon: ReactNode; title: string; description: string }[];
  featureImage: string;
  faqs: { question: string; answer: string }[];
}

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
      <PageBanner
        title={title}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Services' }, { label: title }]}
        backgroundImage={bannerImage}
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
