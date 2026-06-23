import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

/*
  DESIGN: Editorial Craft — Hero
  Full-width hero with education imagery, white text, asymmetric layout.
  Focus: materiais didáticos personalizados para empresas de educação.
*/

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/hero-educacao-RxKc8fRYLppzJY3AboD2S5.webp";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Materiais didáticos personalizados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32 md:py-40" ref={heroRef}>
        <div className="max-w-3xl">
          <span className="inline-block bg-orange/20 border border-orange/40 text-orange text-xs md:text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-sm mb-6">
            Materiais Didáticos Personalizados
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Transforme a experiência dos seus alunos com{" "}
            <em className="text-orange not-italic">materiais exclusivos</em>
          </h1>

          <p className="text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Apostilas, agendas, cadernos personalizados e provas impressas que agregam valor à sua instituição de ensino e aumentam a fidelização dos alunos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.link/35hq8u"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackConversion}
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-base"
            >
              Solicitar Orçamento
              <ArrowRight size={18} />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-medium px-8 py-4 rounded-sm transition-all duration-200 text-base"
            >
              Conhecer Soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
