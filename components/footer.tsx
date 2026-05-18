import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Propriétaires immobiliers", href: "#immobilier" },
  { label: "Approche", href: "#approche" },
  { label: "Carrières", href: "#carrieres" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-2 lg:col-span-1 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-base sm:text-lg">N</span>
              </div>
              <span className="font-semibold text-base sm:text-lg text-primary-foreground">NovaPros</span>
            </div>
            <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed">
              Soutien en tenue de livres, administration RH et opérations pour PME et propriétaires immobiliers au Québec.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-primary-foreground text-sm sm:text-base mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="mailto:info@novapros.ca"
                  className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="truncate">info@novapros.ca</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+14185551234"
                  className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  (418) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/70">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                Québec, Canada
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground text-sm sm:text-base mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-xs sm:text-sm text-primary-foreground/70">Tenue de livres</li>
              <li className="text-xs sm:text-sm text-primary-foreground/70">Soutien RH administratif</li>
              <li className="text-xs sm:text-sm text-primary-foreground/70">Soutien opérationnel</li>
              <li className="text-xs sm:text-sm text-primary-foreground/70">Gestion immobilière</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-primary-foreground/60 text-center sm:text-left">
              © {new Date().getFullYear()} NovaPros. Tous droits réservés.
            </p>
            <p className="text-xs sm:text-sm text-primary-foreground/60">
              Services offerts au Québec
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
