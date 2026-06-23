import { useEffect, useRef } from "react";
import { BookOpen, Calendar, NotebookPen, FileText, Printer, Palette } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

/*
  DESIGN: Editorial Craft — Services
  Education-focused services: apostilas, agendas, cadernos, provas, etc.
*/

const APOSTILAS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/apostilas-showcase-h8G5wtT7TghXYpeMEfjwFv.webp";
const AGENDAS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/agendas-cadernos-bMSWgXmehnbWsHzoENZsYt.webp";

const services = [
  {
    icon: BookOpen,
    title: "Apostilas e Materiais Didáticos",
    description: "Apostilas personalizadas com a identidade visual da sua instituição, diagramação profissional e impressão de alta qualidade.",
  },
  {
    icon: Calendar,
    title: "Agendas Escolares",
    description: "Agendas anuais com calendário acadêmico, espaço para comunicados e capa personalizada com a marca da escola.",
  },
  {
    icon: NotebookPen,
    title: "Cadernos Personalizados",
    description: "Cadernos com capa exclusiva, pautados ou quadriculados, com a identidade visual que reforça o pertencimento do aluno.",
  },
  {
    icon: FileText,
    title: "Provas e Avaliações",
    description: "Impressão de provas, simulados e avaliações com qualidade, sigilo e entrega no prazo que sua instituição precisa.",
  },
  {
    icon: Printer,
    title: "Materiais Complementares",
    description: "Fichas de exercícios, mapas mentais, resumos e qualquer material de apoio pedagógico impresso sob demanda.",
  },
  {
    icon: Palette,
    title: "Design e Diagramação",
    description: "Criação visual completa dos seus materiais: capas, layouts internos, infográficos e identidade visual educacional.",
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
    <section id="solucoes" ref={sectionRef} className="py-20 md:py-28" style={{ backgroundColor: "#f8f7f4" }}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange text-sm font-semibold uppercase tracking-widest">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl text-navy-dark mt-3 leading-tight">
            Tudo que sua instituição de ensino precisa em materiais impressos
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            De apostilas a agendas, produzimos materiais didáticos completos para escolas, cursinhos, pré-vestibulares, faculdades e cursos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-sm border border-border hover:border-orange/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-sm bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-orange/10 transition-colors">
                <service.icon size={22} className="text-navy group-hover:text-orange transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-navy-dark mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-sm overflow-hidden shadow-lg">
            <img
              src={APOSTILAS_IMG}
              alt="Apostilas e materiais didáticos personalizados"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-sm overflow-hidden shadow-lg">
            <img
              src={AGENDAS_IMG}
              alt="Agendas e cadernos personalizados para escolas"
              className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.link/35hq8u"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackConversion}
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-sm transition-all duration-200 shadow-lg hover:shadow-xl text-base"
          >
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
