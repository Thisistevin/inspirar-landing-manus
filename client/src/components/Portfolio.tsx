import { useEffect, useRef } from "react";
import { Instagram } from "lucide-react";

/*
  DESIGN: Editorial Craft — Portfolio
  Showcase of educational materials produced for schools and courses.
*/

const portfolioItems = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/hero-educacao-RxKc8fRYLppzJY3AboD2S5.webp",
    alt: "Cadernos e apostilas personalizados para escolas",
    label: "Cadernos Personalizados",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/apostilas-showcase-h8G5wtT7TghXYpeMEfjwFv.webp",
    alt: "Apostilas didáticas com diagramação profissional",
    label: "Apostilas Didáticas",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/agendas-cadernos-bMSWgXmehnbWsHzoENZsYt.webp",
    alt: "Agendas escolares com identidade visual personalizada",
    label: "Agendas Escolares",
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange text-sm font-semibold uppercase tracking-widest">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl text-navy-dark mt-3 leading-tight">
            Materiais que já transformaram instituições de ensino
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Conheça alguns dos materiais didáticos que produzimos para escolas, cursinhos e faculdades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-sm overflow-hidden shadow-lg aspect-[4/3]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">{item.label}</span>
              </div>
            </div>
          ))}
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
