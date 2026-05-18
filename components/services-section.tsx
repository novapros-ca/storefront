import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BookOpen, Users, Settings, Check, ArrowRight, Info } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Tenue de livres",
    description: "Gardez vos livres à jour et vos informations financières mieux organisées.",
    items: [
      "Saisie et classement des transactions",
      "Suivi des revenus et dépenses",
      "Suivi des fournisseurs",
      "Conciliations",
      "Préparation des informations pour le comptable",
    ],
    cta: "En savoir plus",
  },
  {
    icon: Users,
    title: "Soutien RH administratif",
    description: "Structurez l'administration liée à vos employés.",
    items: [
      "Dossiers employés",
      "Documents administratifs",
      "Suivis internes",
      "Soutien à l'intégration",
      "Processus administratifs RH",
    ],
    note: "Soutien administratif RH uniquement.",
    cta: "En savoir plus",
  },
  {
    icon: Settings,
    title: "Soutien opérationnel",
    description: "Mettez de l'ordre dans vos suivis et vos opérations.",
    items: [
      "Suivis administratifs",
      "Organisation des fichiers",
      "Documentation interne",
      "Coordination de tâches",
      "Tâches récurrentes",
    ],
    cta: "En savoir plus",
  },
]

export function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Un soutien concret pour structurer votre gestion
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            NovaPros vous accompagne dans les tâches essentielles qui soutiennent la santé administrative, financière et opérationnelle de votre organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border flex flex-col h-full">
              <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-7 text-accent" />
                </div>
                <CardTitle className="text-base sm:text-lg font-semibold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-4 sm:p-6">
                <ul className="space-y-2 sm:space-y-3 flex-1">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 sm:gap-3">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                {service.note && (
                  <div className="flex items-start gap-2 mt-3 sm:mt-4 p-2 sm:p-3 bg-secondary/50 rounded-lg">
                    <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">{service.note}</p>
                  </div>
                )}
                <Button asChild size="sm" className="w-full mt-4 sm:mt-6 bg-primary hover:bg-primary/90 text-primary-foreground h-9 sm:h-10 text-xs sm:text-sm">
                  <Link href="#contact">
                    {service.cta}
                    <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Chaque accompagnement est adapté à votre réalité, à votre volume de tâches et à votre niveau de structure actuel.
        </p>
      </div>
    </section>
  )
}
