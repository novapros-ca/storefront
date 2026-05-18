import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Users, Settings, CheckCircle, BarChart3, Calendar } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Simplifiez votre gestion avec un soutien fiable pour vos finances, vos RH et vos opérations.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                NovaPros accompagne les PME et les propriétaires immobiliers au Québec avec des services de tenue de livres, de soutien RH administratif et de soutien opérationnel, adaptés aux réalités des petites équipes et de la gestion immobilière.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#contact">
                  Planifier une discussion
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                <Link href="#services">
                  Voir nos services
                </Link>
              </Button>
            </div>

            {/* Reassurance line */}
            <p className="text-sm text-muted-foreground border-l-2 border-accent pl-4">
              Services offerts aux PME et propriétaires immobiliers du Québec.
            </p>
          </div>

          {/* Right Visual - Mobile: Simple grid, Desktop: Absolute positioned */}
          <div className="relative mt-8 lg:mt-0">
            {/* Mobile Layout - Simple 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              <div className="bg-card rounded-xl shadow-sm border border-border p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">Suivi financier</span>
                  <BarChart3 className="h-4 w-4 text-accent" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground">Transactions</span>
                  <span className="text-xs font-semibold text-foreground">147</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-1.5">
                  <div className="bg-accent h-1.5 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-sm border border-border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs font-medium text-foreground">Documents</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Organisés</span>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-sm border border-border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-accent" />
                  </div>
                  <p className="text-xs font-medium text-foreground">Tâches</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-3 w-3 text-accent" />
                  <span className="text-xs text-muted-foreground">3/4 complétées</span>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-sm border border-border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-xs font-medium text-foreground">Équipe</p>
                </div>
                <p className="text-xs text-muted-foreground">Dossiers structurés</p>
              </div>
            </div>

            {/* Desktop Layout - Absolute positioned cards */}
            <div className="hidden lg:block relative w-full h-[500px]">
              {/* Main Card */}
              <div className="absolute top-0 left-8 w-72 bg-card rounded-xl shadow-lg border border-border p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Suivi financier</span>
                  <BarChart3 className="h-5 w-5 text-accent" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Transactions traitées</span>
                    <span className="text-sm font-semibold text-foreground">147</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">Conciliations à jour</span>
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                </div>
              </div>

              {/* Secondary Card - Documents */}
              <div className="absolute top-32 right-0 w-64 bg-card rounded-xl shadow-lg border border-border p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Documents</p>
                    <p className="text-xs text-muted-foreground">Organisés et accessibles</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Factures fournisseurs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Dossiers employés</span>
                  </div>
                </div>
              </div>

              {/* Third Card - Tasks */}
              <div className="absolute bottom-12 left-0 w-64 bg-card rounded-xl shadow-lg border border-border p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Tâches récurrentes</p>
                    <p className="text-xs text-muted-foreground">Cette semaine</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground line-through">Paiements fournisseurs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground line-through">Suivi des loyers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full border-2 border-muted-foreground"></div>
                    <span className="text-sm text-foreground">Rapport mensuel</span>
                  </div>
                </div>
              </div>

              {/* Fourth Card - RH */}
              <div className="absolute bottom-0 right-8 w-56 bg-card rounded-xl shadow-lg border border-border p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Équipe</p>
                    <p className="text-xs text-muted-foreground">Dossiers structurés</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 right-24 w-20 h-20 bg-accent/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-24 left-32 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
