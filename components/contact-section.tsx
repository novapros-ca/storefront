"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MapPin, Clock3, Send, CheckCircle } from "lucide-react"
import { contactNeedTypes, siteConfig } from "@/content/site-content"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [needType, setNeedType] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage("")
    setIsLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      needType,
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { message?: string }
          | null
        throw new Error(data?.message ?? "Une erreur est survenue.")
      }

      setIsSubmitted(true)
      form.reset()
      setNeedType("")
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Impossible d'envoyer votre demande pour le moment.",
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="scroll-mt-24 py-12 sm:py-16 lg:py-24 bg-background" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 text-balance">
            Parlons de vos besoins
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Vous souhaitez structurer votre gestion, déléguer certaines tâches ou clarifier vos suivis? Écrivez-nous et nous vous répondrons pour voir comment NovaPros peut vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 lg:mb-6">Coordonnées</h3>
              <div className="space-y-3 sm:space-y-4">
                <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Téléphone</p>
                    <span className="text-sm sm:text-base text-foreground group-hover:text-accent transition-colors">
                      {siteConfig.phoneDisplay}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Adresse</p>
                    <p className="text-sm sm:text-base text-foreground">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Heures</p>
                    <p className="text-sm sm:text-base text-foreground">{siteConfig.hoursWeekday}</p>
                    <p className="text-sm sm:text-base text-foreground">{siteConfig.hoursWeekend}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-secondary/50 rounded-lg">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong className="text-foreground">Services offerts au Québec</strong>
                <br />
                Accompagnement à distance et en personne selon vos besoins.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-card border-border order-1 lg:order-2">
            <CardContent className="p-4 sm:p-6 lg:p-8">
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
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="name" className="text-xs sm:text-sm">Nom *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Votre nom"
                        className="bg-background h-9 sm:h-10 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="company" className="text-xs sm:text-sm">Entreprise</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nom de votre entreprise"
                        className="bg-background h-9 sm:h-10 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm">Courriel *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="votre@courriel.com"
                        className="bg-background h-9 sm:h-10 text-sm"
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="phone" className="text-xs sm:text-sm">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(XXX) XXX-XXXX"
                        className="bg-background h-9 sm:h-10 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="need-type" className="text-xs sm:text-sm">Type de besoin *</Label>
                    <Select value={needType} onValueChange={setNeedType} required>
                      <SelectTrigger id="need-type" className="bg-background h-9 sm:h-10 text-sm">
                        <SelectValue placeholder="Sélectionnez un type de besoin" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactNeedTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="needType" value={needType} required />
                  </div>

                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="message" className="text-xs sm:text-sm">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Décrivez vos besoins..."
                      rows={4}
                      className="bg-background resize-none text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-4">
                    {errorMessage && (
                      <p className="text-xs sm:text-sm text-destructive" role="alert">
                        {errorMessage}
                      </p>
                    )}
                    <Button
                      type="submit"
                      disabled={isLoading || !needType}
                      className="bg-accent hover:bg-accent/90 text-accent-foreground w-full h-10 sm:h-11 text-sm"
                    >
                      {isLoading ? (
                        "Envoi..."
                      ) : (
                        <>
                          Envoyer
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-[10px] sm:text-xs text-muted-foreground text-center leading-relaxed">
                      En envoyant ce formulaire, vous consentez au traitement de vos renseignements personnels conformement a notre{" "}
                      <Link href="/politique-confidentialite" className="underline underline-offset-2 hover:text-foreground transition-colors">
                        politique de confidentialite
                      </Link>
                      .
                    </p>
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
