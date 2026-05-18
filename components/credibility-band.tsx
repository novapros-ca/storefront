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
    <section className="py-8 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full"
            >
              <badge.icon className="h-4 w-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground whitespace-nowrap">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
