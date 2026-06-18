import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";

/*
  DESIGN: Editorial Craft — Portfolio
  Showcase of marketing materials produced for various businesses.
*/

const PORTFOLIO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/portfolio-spread-h63FLstn2GzJdQJgrZRt3S.webp";

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100");
          el.classList.remove("opacity-0");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-gray transition-opacity duration-700 opacity-0"
    >
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-orange text-sm font-semibold tracking-widest uppercase">
            Nosso Trabalho
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4 leading-tight">
            Portfólio de Projetos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos materiais de marketing e divulgação que produzimos para empresas de diversos segmentos.
          </p>
        </div>

        {/* Portfolio image */}
        <div className="relative max-w-5xl mx-auto">
          <img
            src={PORTFOLIO_IMG}
            alt="Portfólio de materiais impressos - panfletos, folders, cartões de visita, catálogos e manuais para diversos segmentos"
            className="w-full rounded-sm shadow-2xl"
          />
          <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-navy/10 rounded-sm -z-10" />
        </div>

        {/* Instagram link */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/inspirar.sg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy hover:text-orange font-medium transition-colors duration-200"
          >
            <Instagram size={20} />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
