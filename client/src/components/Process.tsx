import { useEffect, useRef } from "react";
import { MessageCircle, PenTool, Printer, Truck } from "lucide-react";

/*
  DESIGN: Editorial Craft — Process
  How it works: 4 steps to get personalized educational materials.
  Dark navy background for contrast.
*/

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Briefing",
    description: "Entendemos as necessidades da sua instituição: quantidade de alunos, tipo de material, identidade visual e prazos.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Criação e Aprovação",
    description: "Nossa equipe desenvolve o design e diagramação. Você aprova cada detalhe antes da produção.",
  },
  {
    icon: Printer,
    number: "03",
    title: "Produção",
    description: "Imprimimos seus materiais com equipamentos de última geração, garantindo qualidade e fidelidade de cores.",
  },
  {
    icon: Truck,
    number: "04",
    title: "Entrega",
    description: "Entregamos no prazo combinado, diretamente na sua instituição, prontos para uso pelos alunos.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".process-step").forEach((step, i) => {
            setTimeout(() => {
              step.classList.add("opacity-100", "translate-y-0");
              step.classList.remove("opacity-0", "translate-y-8");
            }, i * 150);
          });
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="processo" ref={sectionRef} className="py-24 md:py-32" style={{ backgroundColor: "#1a2744" }}>
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-orange text-sm font-semibold tracking-widest uppercase">
            Simples e Rápido
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mt-3 mb-4">
            Como funciona
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Do briefing à entrega, cuidamos de cada etapa para que sua instituição tenha materiais didáticos de excelência sem complicação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-orange/20 via-orange/40 to-orange/20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="process-step opacity-0 translate-y-8 transition-all duration-500 text-center relative"
              >
                {/* Number circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white/5 border-2 border-white/20 rounded-full mb-6 shadow-md z-10">
                  <span className="text-orange font-serif text-2xl">{step.number}</span>
                </div>

                <div className="w-12 h-12 bg-white/5 flex items-center justify-center mx-auto mb-4 transform skew-x-[-3deg]">
                  <Icon size={22} className="text-white/70" />
                </div>

                <h3 className="text-xl text-white mb-2 font-serif">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
