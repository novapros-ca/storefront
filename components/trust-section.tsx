import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Users, Eye, MapPin, Heart, ArrowRight } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Approche professionnelle",
    description: "Un accompagnement sérieux, structuré et adapté aux réalités des PME.",
  },
  {
    icon: Users,
    title: "Compréhension des petites équipes",
    description: "NovaPros comprend les entreprises où les dirigeants portent plusieurs chapeaux.",
  },
  {
    icon: Eye,
    title: "Vision complète de la gestion",
    description: "Tenue de livres, administration RH et opérations sont abordées de façon complémentaire.",
  },
  {
    icon: MapPin,
    title: "Présence au Québec",
    description: "Un soutien adapté aux réalités des organisations québécoises.",
  },
  {
    icon: Heart,
    title: "Relation humaine",
    description: "Une communication claire, accessible et orientée collaboration.",
  },
]

export function TrustSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Pourquoi faire confiance à NovaPros?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Parce qu&apos;une bonne gestion repose sur la rigueur, la clarté et une collaboration humaine.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12">
          {reasons.slice(0, 3).map((reason, index) => (
            <div key={index} className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <reason.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mb-8 sm:mb-12">
          {reasons.slice(3).map((reason, index) => (
            <div key={index} className="text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <reason.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 rounded-2xl border border-border/70 bg-card p-4 sm:p-6 lg:p-8 shadow-sm">
          <p className="text-sm sm:text-base font-semibold text-foreground text-center">
            Certifications et affiliations
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="flex flex-col items-center justify-center rounded-xl border border-border/70 bg-background p-4 min-h-36">
              <Image
                src="/certifications/frederik-lavoie.jpg"
                alt="Portrait de Frédérik Lavoie"
                width={104}
                height={104}
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover"
              />
              <p className="mt-3 text-xs sm:text-sm font-medium text-foreground text-center">
                Frédérik Lavoie, Adm.A
              </p>
              <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground text-center">
                Président
              </p>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-border/70 bg-background p-4 min-h-36">
              <Image
                src="/certifications/adma-membre.png"
                alt="Logo membre Adm.A"
                width={220}
                height={110}
                className="h-auto max-h-16 sm:max-h-20 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-xl border border-border/70 bg-background p-4 min-h-36">
              <Image
                src="/certifications/quickbooks-elite-badge.png"
                alt="Badge QuickBooks ConseillerPro Elite"
                width={220}
                height={220}
                className="h-auto max-h-20 sm:max-h-24 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center rounded-xl border border-border/70 bg-background p-4 min-h-36">
              <Image
                src="/certifications/apchq-membre.svg"
                alt="Logo APCHQ membre"
                width={220}
                height={110}
                className="h-auto max-h-16 sm:max-h-20 w-auto object-contain"
              />
            </div>
          </div>
          <p className="mt-4 text-[11px] sm:text-xs text-muted-foreground text-center leading-relaxed">
            Membre APCHQ | Partenaire certifié QuickBooks (niveau Elite) | Licence RBQ : 5876-2568-01. Les marques appartiennent à leurs propriétaires respectifs.
          </p>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">
              Planifier une discussion
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
