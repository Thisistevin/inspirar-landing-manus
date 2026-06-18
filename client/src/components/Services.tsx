import { useEffect, useRef } from "react";
import { FileText, CreditCard, BookOpen, Layers, BookMarked, Newspaper } from "lucide-react";

/*
  DESIGN: Editorial Craft — Services
  Grid of services offered: panfletos, folders, flyers, cartões, catálogos, manuais.
*/

const STATIONERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/inspirar-stationery-LfbTbHhGnXXX3K5RTSa2p7.webp";

const services = [
  {
    icon: Newspaper,
    title: "Panfletos",
    description: "Impressos de alto impacto para divulgação direta e promoções.",
  },
  {
    icon: Layers,
    title: "Folders",
    description: "Materiais dobráveis com design profissional para apresentar sua empresa.",
  },
  {
    icon: FileText,
    title: "Flyers",
    description: "Peças visuais atrativas para eventos, lançamentos e campanhas.",
  },
  {
    icon: CreditCard,
    title: "Cartões de Visita",
    description: "Cartões premium que transmitem credibilidade e profissionalismo.",
  },
  {
    icon: BookOpen,
    title: "Catálogos",
    description: "Apresentação completa dos seus produtos e serviços em formato impresso.",
  },
  {
    icon: BookMarked,
    title: "Manuais",
    description: "Manuais técnicos e institucionais com acabamento de qualidade.",
  },
];

export default function Services() {
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
      id="servicos"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream transition-opacity duration-700 opacity-0"
    >
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-orange text-sm font-semibold tracking-widest uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4 leading-tight">
            Materiais que vendem por você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Produzimos materiais impressos de marketing e divulgação com qualidade gráfica superior para destacar sua marca no mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src={STATIONERY_IMG}
                alt="Materiais impressos de marketing - panfletos, folders, cartões de visita, catálogos"
                className="w-full rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-navy/10 rounded-sm -z-10" />
            </div>
          </div>

          {/* Right — Services grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="group p-6 bg-white rounded-sm border border-border/50 hover:border-orange/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-navy/8 flex items-center justify-center mb-4 transform skew-x-[-3deg] group-hover:bg-orange/10 transition-colors duration-300">
                      <Icon size={22} className="text-navy group-hover:text-orange transition-colors duration-300" />
                    </div>
                    <h3 className="text-navy font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
