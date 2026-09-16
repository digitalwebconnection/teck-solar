import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; path?: string }[];
  backgroundImage?: string;
}

export default function PageBanner({ title, breadcrumbs, backgroundImage }: PageBannerProps) {
  return (
    <section className="relative min-h-[260px] md:min-h-[300px] flex items-center overflow-hidden py-12 md:py-16">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-navy-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <nav className="flex items-center gap-2 text-sm mb-4">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && (
                <svg className="w-4 h-4 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              )}
              {crumb.path ? (
                <Link to={crumb.path} className="text-navy-400 hover:text-primary-400 transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-primary-400">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white animate-fade-in">
          {title}
        </h1>
        <div className="w-20 h-1 bg-primary-500 rounded-full mt-4 animate-slide-in-left" />
      </div>
    </section>
  );
}
