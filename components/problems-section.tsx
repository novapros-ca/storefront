import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, FolderOpen, Users, Settings, HelpCircle, ArrowRight } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Livres et suivis financiers en retard",
    description: "Transactions, factures, dépenses et fournisseurs ne sont pas toujours suivis avec la rigueur souhaitée.",
  },
  {
    icon: FolderOpen,
    title: "Administration dispersée",
    description: "Courriels, documents, fichiers et suivis sont répartis à plusieurs endroits, ce qui complique la gestion.",
  },
  {
    icon: Users,
    title: "Dossiers employés à structurer",
    description: "Les informations administratives liées aux employés demandent du temps, de la méthode et de la constance.",
  },
  {
    icon: Settings,
    title: "Opérations difficiles à suivre",
    description: "Certaines tâches récurrentes reposent trop sur le propriétaire ou la direction.",
  },
  {
    icon: HelpCircle,
    title: "Besoin d'aide sans embaucher à temps plein",
    description: "Vous avez besoin d'un soutien fiable, flexible et structuré, sans ajouter de complexité.",
  },
]

export function ProblemsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background" id="problemes">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Vous manquez de temps pour gérer l&apos;administration, les suivis et les chiffres?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Quand une entreprise grandit, la gestion quotidienne devient vite plus lourde : livres à jour, fournisseurs, dossiers employés, documents, courriels et suivis internes. NovaPros vous aide à remettre de l&apos;ordre dans ces éléments essentiels.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.slice(0, 3).map((problem, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <problem.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          {problems.slice(3).map((problem, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <problem.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#services">
              Voir comment NovaPros peut vous aider
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
