import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

/*
  DESIGN: Editorial Craft — Hero
  Full-width hero with dark background, white text, asymmetric layout.
  Focus: materiais impressos de marketing e divulgação.
*/

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/hero-marketing-THjVZayzhrYCks5bVfMNHo.webp";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-6");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden transition-all duration-700 opacity-0 translate-y-6"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3d]/92 via-[#0a1a3d]/75 to-[#0a1a3d]/30" />
      </div>

      <div className="container relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="inline-block bg-orange/20 border border-orange/30 px-4 py-1.5 rounded-sm mb-6">
              <span className="text-orange-light text-xs font-semibold tracking-widest uppercase">
                Materiais Impressos de Marketing
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Seus materiais de{" "}
              <span className="text-orange">divulgação</span>{" "}
              com qualidade profissional
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-light">
              Panfletos, folders, flyers, cartões de visita, catálogos e manuais que destacam sua marca e geram resultados reais para o seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.link/35hq8u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base"
              >
                Solicitar Orçamento
                <ArrowRight size={18} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-medium px-8 py-4 rounded-sm transition-all duration-200 text-base"
              >
                Ver Portfólio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom diagonal divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40L0 80Z" fill="#faf8f5" />
        </svg>
      </div>
    </section>
  );
}
