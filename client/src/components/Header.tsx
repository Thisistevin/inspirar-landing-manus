import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

/*
  DESIGN: Editorial Craft — Header
  Sticky nav, logo left, nav links right, CTA button accent orange.
  On scroll: subtle backdrop blur + shadow.
*/

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/logo-white-bg_99a45c1d.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#empresas" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Educação", href: "#educacao" },
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
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <img
            src={LOGO_URL}
            alt="Inspirar Soluções Gráficas"
            className="h-9 md:h-11 w-auto"
          />
        </a>

        {/* Desktop Nav */}
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
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-6 py-2.5 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Solicitar Orçamento
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-navy"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
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
              className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-6 py-3 rounded-sm transition-all duration-200 mt-2"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
