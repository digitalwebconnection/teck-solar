import PageBanner from '../../../components/layout/PageBanner';
import ServiceIntroSection from './sections/ServiceIntroSection';
import ServiceBenefitsSection from './sections/ServiceBenefitsSection';
import ServiceFaqSection from './sections/ServiceFaqSection';
import ServiceCtaSection from './sections/ServiceCtaSection';
export default function ServicePageTemplate({ title, bannerImage, subtitle, intro, introDetail, benefits, featureImage, faqs, }) {
    return (<>
      <PageBanner title={title} backgroundImage={bannerImage} subtitle={subtitle}/>
      <ServiceIntroSection title={title} intro={intro} introDetail={introDetail} featureImage={featureImage}/>
      <ServiceBenefitsSection title={title} benefits={benefits}/>
      <ServiceFaqSection faqs={faqs}/>
      <ServiceCtaSection />
    </>);
}
