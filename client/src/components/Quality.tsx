import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

/*
  DESIGN: Editorial Craft — Quality
  Section highlighting print quality, premium finishes, and attention to detail.
*/

const QUALITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/quality-detail-CXxswYAocU2vw4T5PPNL7s.webp";

const qualityPoints = [
  "Impressão em alta definição com cores vibrantes",
  "Papéis premium de diversas gramaturas",
  "Acabamentos especiais: laminação, verniz UV, hot stamping",
  "Corte e vinco com precisão milimétrica",
  "Controle de qualidade em cada etapa",
  "Prazos cumpridos com pontualidade",
];

export default function Quality() {
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
      id="qualidade"
      ref={sectionRef}
      className="py-24 md:py-32 overflow-hidden transition-opacity duration-700 opacity-0 relative"
      style={{ backgroundColor: '#0f2b5b' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-orange/5 transform skew-x-12 -skew-y-6 rounded-sm" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-6">
            <span className="text-orange text-sm font-semibold tracking-widest uppercase">
              Qualidade Premium
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mt-3 mb-6 leading-tight">
              Cada detalhe faz a diferença
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Utilizamos equipamentos de última geração e materiais selecionados para garantir que cada peça impressa transmita a qualidade e o profissionalismo que sua marca merece.
            </p>

            <div className="space-y-4">
              {qualityPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-orange shrink-0" />
                  <span className="text-white/85 text-base">{point}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.link/35hq8u"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackConversion}
              className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-sm transition-all duration-200 shadow-lg hover:shadow-xl mt-10 text-base"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Right — Image */}
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src={QUALITY_IMG}
                alt="Detalhe da qualidade de impressão - acabamento premium em cartão de visita"
                className="w-full rounded-sm shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-orange/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
