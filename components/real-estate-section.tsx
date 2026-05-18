import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, DollarSign, FileText, Layers, ArrowRight } from "lucide-react"

const features = [
  {
    icon: DollarSign,
    title: "Suivis financiers",
    description: "Revenus, dépenses, factures, fournisseurs et informations à transmettre au comptable.",
  },
  {
    icon: FileText,
    title: "Suivis administratifs",
    description: "Documents locataires, communications, dossiers d'immeubles et tâches récurrentes.",
  },
  {
    icon: Layers,
    title: "Organisation par immeuble",
    description: "Une structure plus claire pour suivre ce qui concerne chaque immeuble ou activité.",
  },
]

export function RealEstateSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground" id="immobilier">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-foreground/10 rounded-full">
              <Building className="h-4 w-4" />
              <span className="text-sm font-medium">Propriétaires immobiliers</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-balance">
              Un soutien adapté aux propriétaires immobiliers
            </h2>
            
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Gérer un immeuble ou un parc immobilier demande de suivre les loyers, les dépenses, les fournisseurs, les documents et les communications. NovaPros vous aide à mieux organiser ces suivis pour garder une vue plus claire sur votre gestion.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-primary-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contact">
                Discuter de ma gestion immobilière
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right - Example Card */}
          <div className="relative">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <span className="text-sm font-medium text-primary-foreground">Exemple de mandat</span>
                </div>
                
                <h3 className="text-lg font-semibold text-primary-foreground mb-4">
                  Organisation des dépenses, fournisseurs et documents par immeuble
                </h3>
                
                <p className="text-primary-foreground/70 leading-relaxed mb-6">
                  Organisation des dépenses, fournisseurs et documents par immeuble pour simplifier les suivis administratifs et comptables.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b border-primary-foreground/10">
                    <span className="text-sm text-primary-foreground/70">Immeuble A - Centre-ville</span>
                    <span className="text-sm font-medium text-primary-foreground">12 unités</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-primary-foreground/10">
                    <span className="text-sm text-primary-foreground/70">Immeuble B - Plateau</span>
                    <span className="text-sm font-medium text-primary-foreground">8 unités</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm text-primary-foreground/70">Immeuble C - Rosemont</span>
                    <span className="text-sm font-medium text-primary-foreground">6 unités</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
