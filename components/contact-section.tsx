"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

const needTypes = [
  "Tenue de livres",
  "Soutien RH administratif",
  "Soutien opérationnel",
  "Propriétaire immobilier",
  "Candidature",
  "Autre",
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section className="py-16 lg:py-24 bg-background" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Parlons de vos besoins
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vous souhaitez structurer votre gestion, déléguer certaines tâches ou clarifier vos suivis? Écrivez-nous et nous vous répondrons pour voir comment NovaPros peut vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Courriel</p>
                    <a href="mailto:info@novapros.ca" className="text-foreground hover:text-accent transition-colors">
                      info@novapros.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Téléphone</p>
                    <a href="tel:+14185551234" className="text-foreground hover:text-accent transition-colors">
                      (418) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Région</p>
                    <p className="text-foreground">Québec</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-secondary/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Services offerts au Québec</strong>
                <br />
                Accompagnement à distance et en personne selon vos besoins.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardContent className="p-6 lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Merci pour votre message!</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Votre demande sera analysée afin de vous orienter vers le bon type d&apos;accompagnement. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Votre nom"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Entreprise</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nom de votre entreprise"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Courriel *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="votre@courriel.com"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(XXX) XXX-XXXX"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="need-type">Type de besoin *</Label>
                    <Select name="need-type" required>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Sélectionnez un type de besoin" />
                      </SelectTrigger>
                      <SelectContent>
                        {needTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Décrivez vos besoins ou posez vos questions..."
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                      Votre demande sera analysée afin de vous orienter vers le bon type d&apos;accompagnement.
                    </p>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto"
                    >
                      {isLoading ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
