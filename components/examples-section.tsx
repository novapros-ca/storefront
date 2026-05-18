import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Settings, Building, ArrowRight } from "lucide-react"

const examples = [
  {
    icon: BookOpen,
    title: "Tenue de livres",
    description: "Organisation des transactions, suivi des fournisseurs et préparation des informations financières pour faciliter le travail comptable.",
  },
  {
    icon: Users,
    title: "Administration RH",
    description: "Structuration de dossiers employés, suivi de documents internes et appui administratif à l'intégration.",
  },
  {
    icon: Settings,
    title: "Soutien opérationnel",
    description: "Mise en place de suivis récurrents, organisation de fichiers et clarification des responsabilités administratives.",
  },
  {
    icon: Building,
    title: "Propriétaires immobiliers",
    description: "Organisation des revenus, dépenses, fournisseurs et documents par immeuble pour simplifier les suivis.",
  },
]

export function ExamplesSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Des exemples concrets de soutien
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chaque mandat est adapté à la réalité du client. Voici des exemples de situations où NovaPros peut intervenir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {examples.map((example, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <example.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{example.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{example.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#contact">
              Discuter d&apos;un besoin similaire
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
