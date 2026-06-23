import { useEffect, useRef } from "react";
import { TrendingUp, Heart, Award, Users } from "lucide-react";

/*
  DESIGN: Editorial Craft — Benefits
  Section showing the value proposition for education companies.
  Why personalized materials increase LTV and improve student experience.
*/

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumente o LTV dos seus alunos",
    description: "Materiais exclusivos criam percepção de valor e justificam mensalidades premium, reduzindo cancelamentos.",
  },
  {
    icon: Heart,
    title: "Melhore a experiência do aluno",
    description: "Apostilas e cadernos personalizados com a identidade da sua escola geram orgulho e pertencimento.",
  },
  {
    icon: Award,
    title: "Diferencie-se da concorrência",
    description: "Materiais didáticos próprios posicionam sua instituição como referência em qualidade de ensino.",
  },
  {
    icon: Users,
    title: "Fortaleça sua marca",
    description: "Cada material impresso é uma extensão da sua marca nas mãos dos alunos e famílias, todos os dias.",
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
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="beneficios" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange text-sm font-semibold uppercase tracking-widest">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl text-navy-dark mt-3 leading-tight">
            Materiais impressos que geram resultado para sua instituição
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Ajudamos escolas, cursinhos, pré-vestibulares e faculdades a transformar materiais didáticos em ferramentas de retenção e valorização.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group p-6 rounded-sm border border-border hover:border-orange/30 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 rounded-sm bg-orange/10 flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors">
                <benefit.icon size={24} className="text-orange" />
              </div>
              <h3 className="text-lg font-semibold text-navy-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
