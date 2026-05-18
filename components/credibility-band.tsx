import { Building2, BookOpen, Users, Settings, Heart, CheckSquare } from "lucide-react"

const badges = [
  { icon: Building2, label: "PME du Québec" },
  { icon: Building2, label: "Propriétaires immobiliers" },
  { icon: BookOpen, label: "Tenue de livres" },
  { icon: Users, label: "Soutien RH administratif" },
  { icon: Settings, label: "Soutien opérationnel" },
  { icon: Heart, label: "Approche humaine et structurée" },
]

export function CredibilityBand() {
  return (
    <section className="py-6 sm:py-8 bg-primary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex overflow-x-auto sm:overflow-visible sm:flex-wrap justify-start sm:justify-center gap-3 sm:gap-4 lg:gap-6 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-foreground/10 rounded-full flex-shrink-0"
            >
              <badge.icon className="h-4 w-4 text-primary-foreground flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-primary-foreground whitespace-nowrap">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
