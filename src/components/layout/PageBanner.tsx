import { Link } from "react-router-dom";

interface PageBannerProps {
  title: string;
  breadcrumbs?: { label: string; path?: string }[];
  backgroundImage?: string;
  subtitle?: string;
}

export default function PageBanner({
  title,
  breadcrumbs,
  backgroundImage,
  subtitle,
}: PageBannerProps) {
  return (
    <section 
      className={`relative min-h-[300px] md:min-h-[400px] flex items-center justify-center overflow-hidden py-16 md:py-24 ${!backgroundImage ? 'bg-white border-b border-slate-100' : ''}`}
    >
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <img 
              src={backgroundImage} 
              alt={title} 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-brand-blue-950/75 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/90 via-brand-blue-900/40 to-transparent" />
          </div>
        </>
      ) : (
        <>
          {/* Subtle ambient brand color glow */}
          <div className="absolute top-0 right-10 w-96 h-96 bg-brand-blue-50/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary-50/40 rounded-full blur-3xl pointer-events-none translate-y-1/2" />
        </>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs sm:text-sm mb-5">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && (
                  <svg
                    className={`w-3.5 h-3.5 ${backgroundImage ? 'text-white/50' : 'text-slate-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className={`${backgroundImage ? 'text-white/70 hover:text-white' : 'text-slate-500 hover:text-brand-blue-500'} transition-colors font-medium`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={`${backgroundImage ? 'text-white font-semibold' : 'text-brand-blue-500 font-semibold'}`}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight ${backgroundImage ? 'text-white' : 'text-brand-blue-900'}`}>
          {title}
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-brand-blue-500 to-primary-500 rounded-full mx-auto mt-6" />
        
        {subtitle && (
          <p className={`mt-6 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed ${backgroundImage ? 'text-white/90' : 'text-slate-600'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
