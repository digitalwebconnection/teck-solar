import { useReveal } from '../../../hooks/useReveal';

export default function StorySection() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-primary-500 font-heading font-semibold text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mt-3 leading-tight">
              Powering Australia's Renewable Future Since 2015
            </h2>
            <p className="mt-5 text-navy-500 leading-relaxed">
              Founded in 2015, Teck Solar began with a simple vision: to make clean, renewable energy accessible to every Australian. Starting as a small team of passionate engineers and electricians in Sydney, we've grown into one of Australia's most trusted solar energy providers.
            </p>
            <p className="mt-4 text-navy-500 leading-relaxed">
              Today, with over 2,500 successful installations across New South Wales, Victoria, and Queensland, we continue to deliver exceptional solar solutions that combine cutting-edge technology with personalised service.
            </p>
            <p className="mt-4 text-navy-500 leading-relaxed">
              Our mission is to empower homeowners and businesses to take control of their energy future while contributing to a cleaner planet. Every panel we install is a step towards a more sustainable Australia.
            </p>
          </div>
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/about-team.jpg" alt="Teck Solar Team" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <span className="text-3xl font-heading font-bold text-white">8+</span>
                    <p className="text-white/70 text-xs mt-1">Years</p>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div className="text-center">
                    <span className="text-3xl font-heading font-bold text-white">2,500+</span>
                    <p className="text-white/70 text-xs mt-1">Installations</p>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div className="text-center">
                    <span className="text-3xl font-heading font-bold text-white">50+</span>
                    <p className="text-white/70 text-xs mt-1">Team Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
