import { MapPin, Phone } from "lucide-react";

/*
  DESIGN: Editorial Craft — Footer
  Navy background, logo, contact info, social links, copyright.
*/

const LOGO_BLUE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663053606742/8TFqqCwDJQL62RC4A65WNH/logo-blue-bg_4063adec.png";

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo + tagline */}
          <div>
            <img
              src={LOGO_BLUE}
              alt="Inspirar Soluções Gráficas"
              className="h-12 w-auto mb-4 rounded-sm"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Soluções gráficas que inspiram. Materiais de qualidade para empresas e educação.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Navegação</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Serviços", href: "#empresas" },
                { label: "Portfólio", href: "#portfolio" },
                { label: "Educação", href: "#educacao" },
                { label: "Como Funciona", href: "#processo" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-orange text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-4">Contato</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Rua Buritirama, Recreio Ipitanga, 11<br />
                  Lauro de Freitas/BA
                </span>
              </div>
              <a
                href="https://wa.link/35hq8u"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-orange text-sm transition-colors duration-200"
              >
                <Phone size={18} className="text-orange shrink-0" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/inspirar.sg/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-orange text-sm transition-colors duration-200"
              >
                <svg className="w-[18px] h-[18px] text-orange shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @inspirar.sg
              </a>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Inspirar Soluções Gráficas. Todos os direitos reservados.
            </p>
            <p className="text-white/30 text-xs">
              Lauro de Freitas, Bahia — Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
