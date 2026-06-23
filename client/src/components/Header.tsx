import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

/*
  DESIGN: Editorial Craft — Header
  Logo azul no header (fundo claro quando scrolled), logo branca quando transparente.
  Sticky nav, CTA orange. Education-focused.
*/

const LOGO_DARK = "/manus-storage/2_86db4475.webp";
const LOGO_LIGHT = "/manus-storage/1_e7d4093f.webp";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Como Funciona", href: "#processo" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center shrink-0">
          <img
            src={scrolled ? LOGO_DARK : LOGO_LIGHT}
            alt="Inspirar Soluções Gráficas"
            className="h-8 md:h-10 w-auto transition-opacity duration-200"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 uppercase ${
                scrolled
                  ? "text-navy-dark hover:text-orange"
                  : "text-white/90 hover:text-orange"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.link/35hq8u"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackConversion}
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-6 py-2.5 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Falar com Especialista
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-navy" : "text-white"}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-wide text-navy-dark hover:text-orange transition-colors uppercase py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.link/35hq8u"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackConversion}
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-200 mt-2"
            >
              Falar com Especialista
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
