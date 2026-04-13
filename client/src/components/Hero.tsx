import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

/*
  DESIGN: Editorial Craft — Hero
  Full-width hero with dark background image, white text, asymmetric layout.
  Left: headline + CTA. Right: overlapping product images.
*/

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/hero-bg-JjwyRG9uZ3QETLiyFcKEmq.webp";
const BANNER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/banner_df46a6fc.png";
const ABBA_KIDS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/abbakidsg5_b4fa0064.png";

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3d]/95 via-[#0a1a3d]/80 to-[#0a1a3d]/40" />
      </div>

      <div className="container relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="inline-block bg-orange/20 border border-orange/30 px-4 py-1.5 rounded-sm mb-6">
              <span className="text-orange-light text-xs font-semibold tracking-widest uppercase">
                Soluções Gráficas para Educação
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Materiais que{" "}
              <span className="text-orange">transformam</span>{" "}
              a experiência educacional
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg font-light">
              Apostilas, cadernos e agendas personalizados que agregam valor à sua marca e aumentam a fidelização dos seus alunos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.link/35hq8u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base"
              >
                Fale Conosco
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

          {/* Right — Product Images */}
          <div className="lg:col-span-6 xl:col-span-7 hidden lg:block">
            <div className="relative">
              {/* Banner image — apostilas collection */}
              <div className="relative z-10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src={BANNER_IMG}
                  alt="Coleção de apostilas personalizadas"
                  className="w-full rounded-sm shadow-2xl"
                />
              </div>
              {/* Floating smaller image */}
              <div className="absolute -bottom-12 -left-8 z-20 w-48 transform rotate-[3deg] hover:rotate-0 transition-transform duration-500">
                <img
                  src={ABBA_KIDS}
                  alt="Apostila infantil personalizada"
                  className="w-full rounded-sm shadow-2xl border-4 border-white/20"
                />
              </div>
              {/* Decorative parallelogram */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange/20 transform skew-x-12 -skew-y-3 rounded-sm" />
              <div className="absolute -bottom-4 right-12 w-16 h-16 bg-orange/10 transform skew-x-12 -skew-y-3 rounded-sm" />
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
