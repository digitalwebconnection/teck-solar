import PageBanner from '../../../components/layout/PageBanner';
import DatasheetsGridSection from './sections/DatasheetsGridSection';

export default function ProductDatasheets() {
  return (
    <>
      <PageBanner
        title="Product Datasheets"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Resources' }, { label: 'Product Datasheets' }]}
        backgroundImage="/images/hero-installation.jpg"
      />
      <DatasheetsGridSection />
    </>
  );
}
