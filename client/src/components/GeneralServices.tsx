import { useEffect, useRef } from "react";
import { Printer, CreditCard, FileImage, Package, Stamp } from "lucide-react";

/*
  DESIGN: Editorial Craft — General Services
  Separate section for general printing services (non-education).
  Warm-gray background, service cards, different CTA.
*/

const GRAFICA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/inspirar-stationery-LfbTbHhGnXXX3K5RTSa2p7.webp";

const generalServices = [
  { icon: CreditCard, label: "Cartões de Visita" },
  { icon: FileImage, label: "Flyers e Panfletos" },
  { icon: Package, label: "Embalagens Personalizadas" },
  { icon: Stamp, label: "Papelaria Corporativa" },
  { icon: Printer, label: "Impressão Digital e Offset" },
];

export default function GeneralServices() {
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
      id="empresas"
      ref={sectionRef}
      className="py-24 md:py-32 bg-warm-gray transition-opacity duration-700 opacity-0"
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Image */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative">
              <img
                src={GRAFICA_IMG}
                alt="Serviços gráficos para empresas - cartões, folders, papelaria corporativa"
                className="w-full rounded-sm shadow-2xl"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-navy/10 rounded-sm -z-10" />
            </div>
          </div>

          {/* Right — Text */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="inline-block bg-navy/10 border border-navy/15 px-4 py-1.5 rounded-sm mb-6">
              <span className="text-navy text-xs font-semibold tracking-widest uppercase">
                Nossos Serviços
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy mb-6 leading-tight">
              Soluções gráficas completas para o seu negócio
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Atendemos empresas de todos os setores com serviços gráficos de alta qualidade. Cartões de visita, folders, embalagens e muito mais para fortalecer a presença da sua marca no mercado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {generalServices.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 bg-navy/8 flex items-center justify-center shrink-0 transform skew-x-[-3deg] group-hover:bg-navy/15 transition-colors duration-200">
                      <Icon size={18} className="text-navy" />
                    </div>
                    <span className="text-foreground text-sm font-medium">
                      {service.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <a
              href="https://wa.link/35hq8u"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-semibold px-8 py-4 rounded-sm transition-all duration-200 shadow-lg hover:shadow-xl text-base"
            >
              Solicitar Orçamento Empresarial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
