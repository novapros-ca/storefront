import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Politique de confidentialite | NovaPros",
  description:
    "Politique de confidentialite de NovaPros concernant la collecte, l'utilisation et la conservation des renseignements personnels.",
  alternates: {
    canonical: "/politique-confidentialite",
  },
}

const sections = [
  {
    title: "1. Renseignements recueillis",
    body: "Lorsque vous communiquez avec NovaPros, nous pouvons recueillir des renseignements tels que votre nom, le nom de votre entreprise, votre adresse courriel, votre numero de telephone, le type de besoin selectionne et le contenu de votre message.",
  },
  {
    title: "2. Finalites et base du traitement",
    body: "Ces renseignements sont utilises pour repondre a votre demande, evaluer vos besoins, assurer le suivi des echanges et vous orienter vers le service approprie. Le traitement repose principalement sur votre consentement lorsque vous soumettez le formulaire de contact, ainsi que sur nos obligations administratives et legales applicables.",
  },
  {
    title: "3. Outils, hebergement et sous-traitants",
    body: "Le site web est heberge sur Netlify. Les demandes soumises via le formulaire de contact sont traitees par notre API puis transmises a Microsoft Graph afin d'etre enregistrees dans un classeur Excel Microsoft pour le suivi administratif. L'acces aux renseignements est limite aux personnes autorisees dans le cadre de leurs fonctions.",
  },
  {
    title: "4. Conservation",
    body: "Les renseignements personnels sont conserves uniquement pour la duree necessaire au traitement de la demande et au suivi administratif. Sauf obligation legale particuliere, les demandes de contact sont conservees pour une duree maximale de 24 mois apres le dernier echange, puis supprimees ou anonymisees.",
  },
  {
    title: "5. Communication et transferts",
    body: "NovaPros ne vend pas vos renseignements personnels. Certaines donnees peuvent etre traitees par nos fournisseurs technologiques, notamment Netlify (hebergement) et Microsoft (traitement via Graph et stockage Excel), uniquement pour les finalites decrites dans cette politique et avec des mesures de protection appropriees.",
  },
  {
    title: "6. Cookies et mesures techniques",
    body: "Le site peut utiliser des technologies techniques necessaires a son fonctionnement et a sa securite. A ce jour, NovaPros n'utilise pas le formulaire de contact pour des finalites publicitaires. Si des outils de mesure d'audience sont ajoutes, cette politique sera mise a jour en consequence.",
  },
  {
    title: "7. Vos droits",
    body: "Sous reserve des lois applicables, vous pouvez demander l'acces a vos renseignements personnels, leur correction ou leur suppression. Vous pouvez aussi retirer votre consentement a l'utilisation de vos renseignements lorsque cela est permis. NovaPros repond a ces demandes dans un delai raisonnable.",
  },
  {
    title: "8. Nous joindre",
    body: "Pour toute question relative a la confidentialite ou pour exercer vos droits, vous pouvez communiquer avec le responsable de la protection des renseignements personnels: Frédérik Lavoie, president, au 418-800-7784 ou a info@novapros.ca.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header />
      <section className="py-12 sm:py-16 lg:py-20 border-b border-border/60 bg-[linear-gradient(180deg,rgba(247,247,244,0.9),rgba(255,255,255,0.98))]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <p className="text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-foreground transition-colors">
              Accueil
            </Link>
            {" / "}
            <span className="text-foreground">Politique de confidentialite</span>
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Politique de confidentialite
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            Cette politique explique comment NovaPros recueille, utilise et protege les renseignements personnels transmis par l&apos;entremise de son site web.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground">
            Derniere mise a jour: 18 mai 2026
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-border/70 bg-card p-5 sm:p-6 lg:p-8 shadow-sm">
                <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
