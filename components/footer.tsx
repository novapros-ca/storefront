import Link from "next/link"
import { Phone, MapPin, Clock3 } from "lucide-react"
import { navItems, siteConfig } from "@/content/site-content"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-2 lg:col-span-1 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-white.svg"
                alt="NovaPros Logo"
                className="h-7 sm:h-8 w-auto"
              />
              <span className="font-semibold text-base sm:text-lg text-primary-foreground">{siteConfig.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed">
              Soutien en tenue de livres, administration RH et opérations pour PME et propriétaires immobiliers au Québec.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-primary-foreground text-sm sm:text-base mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2 sm:space-y-3">
              {navItems.map((link) => (
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
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/70">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/70">
                <Clock3 className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="block">
                  {siteConfig.hoursWeekday}
                  <br />
                  {siteConfig.hoursWeekend}
                </span>
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
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-primary-foreground/60 text-center sm:text-left">
              © {new Date().getFullYear()} NovaPros. Tous droits réservés.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-primary-foreground/60">
              <Link
                href="/politique-confidentialite"
                className="hover:text-primary-foreground transition-colors underline underline-offset-2"
              >
                Politique de confidentialité
              </Link>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
