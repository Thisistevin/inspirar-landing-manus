import { useEffect, useRef } from "react";
import { BookOpen, NotebookPen, CalendarDays, FileText, GraduationCap, Bookmark } from "lucide-react";

/*
  DESIGN: Editorial Craft — Education Services
  Navy background section with asymmetric layout.
  Left: text + service list. Right: generated education image.
*/

const EDU_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/education-section-YuS4SWzRNLirvPAd73X2b3.webp";

const services = [
  { icon: BookOpen, label: "Apostilas e Livros Didáticos" },
  { icon: NotebookPen, label: "Cadernos Personalizados" },
  { icon: CalendarDays, label: "Agendas e Planners Escolares" },
  { icon: FileText, label: "Provas e Simulados" },
  { icon: GraduationCap, label: "Material de Vestibular" },
  { icon: Bookmark, label: "Livros e Publicações" },
];

export default function EducationServices() {
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
      id="educacao"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-navy overflow-hidden transition-opacity duration-700 opacity-0"
    >
      {/* Decorative parallelograms */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-orange/5 transform skew-x-12 -skew-y-6 rounded-sm" />
      <div className="absolute bottom-10 left-0 w-40 h-40 bg-orange/5 transform skew-x-12 -skew-y-6 rounded-sm" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-5">
            <span className="text-orange text-sm font-semibold tracking-widest uppercase">
              Para Instituições de Ensino
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mt-3 mb-6 leading-tight">
              Materiais didáticos que fortalecem sua marca
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Produzimos materiais gráficos sob medida para escolas, cursinhos, pré-vestibulares e faculdades. Cada peça é pensada para agregar valor à experiência do aluno e diferenciar sua instituição no mercado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 bg-orange/15 flex items-center justify-center shrink-0 transform skew-x-[-3deg] group-hover:bg-orange/25 transition-colors duration-200">
                      <Icon size={18} className="text-orange" />
                    </div>
                    <span className="text-white/90 text-sm font-medium">
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
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-sm transition-all duration-200 shadow-lg hover:shadow-xl mt-10 text-base"
            >
              Solicitar Orçamento Educacional
            </a>
          </div>

          {/* Right — Image */}
          <div className="lg:col-span-7">
            <div className="relative">
              <img
                src={EDU_IMG}
                alt="Materiais didáticos personalizados - apostilas, cadernos, agendas e provas"
                className="w-full rounded-sm shadow-2xl"
              />
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-orange/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
