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
    <section className="py-4 sm:py-6 lg:py-8 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 sm:py-2.5 bg-primary-foreground/10 rounded-lg sm:rounded-full"
            >
              <badge.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary-foreground flex-shrink-0" />
              <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-primary-foreground text-center leading-tight">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
