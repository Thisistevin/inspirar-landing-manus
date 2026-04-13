import { useEffect, useRef } from "react";

/*
  DESIGN: Editorial Craft — Portfolio
  Off-white background, masonry-style grid of client work.
  Uses the actual product images provided by the client.
*/

const BANNER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/banner_df46a6fc.png";
const ABBA_KIDS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/abbakidsg5_b4fa0064.png";
const PRANCHETA1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/Prancheta1_810bb075.png";
const PRANCHETA3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/Prancheta3_9b4c7bd9.png";
const PRANCHETA4 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/Prancheta4_0852f99f.png";
const PRANCHETA5 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/Prancheta5_e16fde54.png";
const PRANCHETA7 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/Prancheta7_17273144.png";

const portfolioItems = [
  {
    src: BANNER,
    alt: "Coleção de apostilas Abba Português - Edição Fundamental",
    label: "Apostilas Didáticas",
    span: "col-span-2 row-span-1",
  },
  {
    src: ABBA_KIDS,
    alt: "Apostila Abba Kids Linguagens - Educação Infantil",
    label: "Material Infantil",
    span: "col-span-1 row-span-2",
  },
  {
    src: PRANCHETA1,
    alt: "Livro personalizado - O Barco de Antônio",
    label: "Livro Personalizado",
    span: "col-span-1 row-span-1",
  },
  {
    src: PRANCHETA3,
    alt: "Livro personalizado - O Reino dos Gatos",
    label: "Livro Personalizado",
    span: "col-span-1 row-span-1",
  },
  {
    src: PRANCHETA4,
    alt: "Livro personalizado - Oi Jesus",
    label: "Livro Personalizado",
    span: "col-span-1 row-span-1",
  },
  {
    src: PRANCHETA5,
    alt: "Livro personalizado - As Aventuras de Tobby Pilkey",
    label: "Livro Personalizado",
    span: "col-span-1 row-span-1",
  },
  {
    src: PRANCHETA7,
    alt: "Livro personalizado - A Jornada",
    label: "Livro Personalizado",
    span: "col-span-1 row-span-1",
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
          el.querySelectorAll(".portfolio-item").forEach((item, i) => {
            setTimeout(() => {
              item.classList.add("opacity-100", "translate-y-0");
              item.classList.remove("opacity-0", "translate-y-6");
            }, i * 100);
          });
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 md:py-32 bg-cream">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-orange text-sm font-semibold tracking-widest uppercase">
            Nosso Trabalho
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
            Portfólio de Projetos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos materiais que produzimos para instituições de ensino em todo o Brasil.
          </p>
        </div>

        {/* Top row: banner wide + abba kids tall */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          {/* Banner - wide */}
          <div className="portfolio-item opacity-0 translate-y-6 transition-all duration-500 md:col-span-2 group relative overflow-hidden bg-white shadow-md hover:shadow-xl">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={BANNER}
                alt="Coleção de apostilas Abba Português - Edição Fundamental"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
              <span className="text-white font-serif text-lg">Apostilas Didáticas</span>
              <p className="text-white/70 text-sm mt-1">Coleção Abba Português — Edição Fundamental</p>
            </div>
          </div>

          {/* Abba Kids - tall */}
          <div className="portfolio-item opacity-0 translate-y-6 transition-all duration-500 group relative overflow-hidden bg-white shadow-md hover:shadow-xl">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={ABBA_KIDS}
                alt="Apostila Abba Kids Linguagens - Educação Infantil"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
              <span className="text-white font-serif text-lg">Material Infantil</span>
              <p className="text-white/70 text-sm mt-1">Abba Kids Linguagens — Educação Infantil</p>
            </div>
          </div>
        </div>

        {/* Bottom row: 5 personalized books */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {[
            { src: PRANCHETA1, alt: "O Barco de Antônio", name: "O Barco de Antônio" },
            { src: PRANCHETA3, alt: "O Reino dos Gatos", name: "O Reino dos Gatos" },
            { src: PRANCHETA4, alt: "Oi Jesus", name: "Oi Jesus" },
            { src: PRANCHETA5, alt: "As Aventuras de Tobby Pilkey", name: "As Aventuras de Tobby" },
            { src: PRANCHETA7, alt: "A Jornada", name: "A Jornada" },
          ].map((item, i) => (
            <div
              key={i}
              className="portfolio-item opacity-0 translate-y-6 transition-all duration-500 group relative overflow-hidden bg-white shadow-md hover:shadow-xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.src}
                  alt={`Livro personalizado - ${item.alt}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4">
                <span className="text-white font-serif text-sm">{item.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/inspirar.sg/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-navy hover:text-orange font-medium transition-colors duration-200 text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
