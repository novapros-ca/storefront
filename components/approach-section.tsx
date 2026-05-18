import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Comprendre votre réalité",
    description: "Nous discutons de votre organisation, de vos besoins et des suivis qui prennent trop de place.",
  },
  {
    number: "02",
    title: "Identifier les priorités",
    description: "Nous ciblons les tâches, documents, processus ou suivis à structurer en premier.",
  },
  {
    number: "03",
    title: "Organiser la prise en charge",
    description: "Nous clarifions les responsabilités, les outils utilisés et la fréquence des suivis.",
  },
  {
    number: "04",
    title: "Exécuter avec rigueur",
    description: "Nous vous accompagnons dans les tâches convenues avec une communication claire.",
  },
  {
    number: "05",
    title: "Ajuster selon vos besoins",
    description: "L'accompagnement peut évoluer selon votre croissance, votre charge administrative et vos priorités.",
  },
]

export function ApproachSection() {
  return (
    <section className="py-16 lg:py-24 bg-background" id="approche">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Une approche simple, structurée et humaine
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Avant de prendre en charge des tâches, nous cherchons à comprendre votre réalité, vos priorités et votre façon de travailler.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line connector */}
            <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-border hidden sm:block"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 lg:gap-8">
                  {/* Step number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-sm lg:text-base font-bold text-primary-foreground">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
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
