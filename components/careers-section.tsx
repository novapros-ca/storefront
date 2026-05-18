import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, ArrowRight, CheckCircle } from "lucide-react"

const profiles = [
  "Tenue de livres",
  "Administration",
  "Soutien aux opérations",
  "Service client",
  "Coordination",
]

const qualities = [
  "Rigueur",
  "Autonomie",
  "Sens de l'organisation",
  "Communication claire",
  "Esprit de service",
]

export function CareersSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30" id="carrieres">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full">
              <Briefcase className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Carrières</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
              Vous voulez contribuer à mieux structurer la gestion des PME?
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              NovaPros est une entreprise en croissance qui recherche des personnes rigoureuses, humaines et organisées pour soutenir les entreprises dans leur gestion quotidienne.
            </p>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
              <Link href="#contact">
                Soumettre une candidature spontanée
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right - Cards */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Profils recherchés</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {profiles.map((profile, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-muted-foreground">{profile}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Qualités recherchées</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {qualities.map((quality, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{quality}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
