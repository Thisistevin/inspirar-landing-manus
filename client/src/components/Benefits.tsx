import { useEffect, useRef } from "react";
import { TrendingUp, Heart, Award, Palette } from "lucide-react";

/*
  DESIGN: Editorial Craft — Benefits
  Off-white background, 4 benefit cards in asymmetric grid.
  Cards with chamfered corners, subtle shadows, orange accent lines.
*/

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumente o LTV",
    description:
      "Materiais exclusivos com a sua marca criam percepção de valor e aumentam a retenção dos seus alunos.",
  },
  {
    icon: Heart,
    title: "Experiência Premium",
    description:
      "Cadernos, agendas e apostilas personalizados que encantam alunos e pais desde o primeiro contato.",
  },
  {
    icon: Award,
    title: "Qualidade Gráfica",
    description:
      "Impressão de alta qualidade com acabamentos profissionais que refletem a excelência da sua instituição.",
  },
  {
    icon: Palette,
    title: "Design Exclusivo",
    description:
      "Criamos materiais com a identidade visual da sua escola, do conceito à entrega final.",
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".benefit-card").forEach((card, i) => {
            setTimeout(() => {
              card.classList.add("opacity-100", "translate-y-0");
              card.classList.remove("opacity-0", "translate-y-8");
            }, i * 120);
          });
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-cream">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-orange text-sm font-semibold tracking-widest uppercase">
            Por que escolher a Inspirar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-navy mt-3">
            Resultados que fazem a diferença
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className="benefit-card opacity-0 translate-y-8 transition-all duration-500 group"
              >
                <div className="bg-white p-8 h-full border border-border/60 hover:border-orange/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
                  style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
                >
                  {/* Orange accent line */}
                  <div className="absolute top-0 left-0 w-12 h-1 bg-orange group-hover:w-full transition-all duration-500" />

                  <div className="w-12 h-12 bg-navy/5 flex items-center justify-center mb-5 transform skew-x-[-3deg]">
                    <Icon size={24} className="text-navy" />
                  </div>

                  <h3 className="text-xl text-navy mb-3 font-serif">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
