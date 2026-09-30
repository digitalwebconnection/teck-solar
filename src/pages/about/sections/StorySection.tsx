import { useReveal } from "../../../hooks/useReveal";
import { BlurFade } from "../../../components/ui/blur-fade";
import { AnimatedShinyText } from "../../../components/ui/animated-shiny-text";
import { SparklesText } from "../../../components/ui/sparkles-text";
import { DotPattern } from "../../../components/ui/dot-pattern";
import { cn } from "../../../lib/utils";

export default function StorySection() {
  const { ref, visible } = useReveal();

  return (
    <section 
      id="our-story" 
      className="relative bg-[#FCFBF8] py-12 lg:py-16 overflow-hidden scroll-mt-12"
      ref={ref}
    >
      {/* Premium Background Animation */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-0 h-full w-full fill-neutral-300 opacity-60 absolute"
        )}
      />

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-12 lg:mb-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <BlurFade delay={0.1} inView>
              <div className="max-w-lg">
                <div className="mb-4 inline-flex items-center justify-center lg:justify-start">
                  <div className="group rounded-full border border-black/5 bg-neutral-100 text-sm text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                      <span>✨ Our Story</span>
                    </AnimatedShinyText>
                  </div>
                </div>
                
                <div className="mt-2">
                  <SparklesText 
                    className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1C1C1C] leading-[1.15] tracking-tight"
                    sparklesCount={4}
                    colors={{ first: "#E56D00", second: "#144E9A" }}
                  >
                    Powering Australia's Renewable Future Since 2015.
                  </SparklesText>
                </div>
              </div>
            </BlurFade>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <BlurFade delay={0.3} inView className="w-full">
              <div className="relative group overflow-hidden rounded-[1.5rem] shadow-xl w-full max-w-lg ml-auto h-[200px] lg:h-[280px]">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="/images/solar-installation.jpg" 
                  alt="Residential Solar Installation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
            <BlurFade delay={0.4} inView className="relative w-full max-w-lg">
              <div className="relative group overflow-hidden rounded-[1.5rem] shadow-xl w-full h-[260px] lg:h-[360px]">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src="/images/solar-installer.jpg" 
                  alt="Teck Solar Installer" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Animated Circular Badge */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/4 lg:translate-x-1/2 w-24 h-24 lg:w-28 lg:h-28 bg-[#1C1C1C] text-white rounded-full flex flex-col items-center justify-center border-[6px] border-[#FCFBF8] shadow-2xl z-20 hover:scale-110 transition-transform duration-500 hover:shadow-brand-blue-500/20">
                <span className="text-2xl md:text-3xl font-serif mb-0.5">10+</span>
                <span className="text-[7px] md:text-[8px] text-center px-2 leading-tight font-medium tracking-[0.15em] opacity-90 uppercase">
                  Years of<br/>Excellence
                </span>
              </div>
            </BlurFade>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <BlurFade delay={0.6} inView className="max-w-md lg:pl-12">
              <div className="space-y-4 text-[#555555] text-sm md:text-base leading-relaxed font-light relative">
                <p>
                  Founded in 2015, Teck Solar began with a simple vision: to make clean, renewable energy accessible to every Australian. Starting as a small team of passionate engineers and electricians in Sydney, we've grown into one of Australia's most trusted solar energy providers.
                </p>
                <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-blue-500 to-transparent opacity-50 hidden lg:block"></div>
              </div>
              
              {/* Quick Stats Grid */}
              <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-left group cursor-default">
                  <div className="font-serif text-xl lg:text-2xl text-[#1C1C1C] group-hover:text-[#144E9A] transition-colors duration-300">2015</div>
                  <div className="text-[8px] lg:text-[9px] text-gray-500 mt-1 uppercase tracking-[0.1em] font-semibold">Founded in<br/>Sydney</div>
                </div>
                <div className="text-left group cursor-default">
                  <div className="font-serif text-xl lg:text-2xl text-[#1C1C1C] group-hover:text-[#E56D00] transition-colors duration-300">2,500+</div>
                  <div className="text-[8px] lg:text-[9px] text-gray-500 mt-1 uppercase tracking-[0.1em] font-semibold">Solar<br/>Installs</div>
                </div>
                <div className="text-left group cursor-default">
                  <div className="font-serif text-xl lg:text-2xl text-[#1C1C1C] group-hover:text-[#144E9A] transition-colors duration-300">3</div>
                  <div className="text-[8px] lg:text-[9px] text-gray-500 mt-1 uppercase tracking-[0.1em] font-semibold">States<br/>NSW/VIC/QLD</div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

      </div>
    </section>
  );
}
