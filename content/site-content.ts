export const siteConfig = {
  name: "NovaPros",
  phoneDisplay: "(418) 800-7784",
  phoneHref: "+14188007784",
  address: "128 53e rue Est, Québec, QC",
  hoursWeekday: "Lundi à vendredi: 8 h à 17 h",
  hoursWeekend: "Samedi et dimanche: fermé",
}

// Ancres root-relative (/#...) pour que la navigation fonctionne aussi depuis
// les sous-pages (ex. /politique-confidentialite) : on revient à l'accueil puis
// on défile vers la section, plutôt que de rester coincé sur la page courante.
export const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Propriétaires immobiliers", href: "/#examples" },
  { label: "Approche", href: "/#approche" },
  { label: "Carrières", href: "/#carrieres" },
  { label: "Contact", href: "/#contact" },
]

export const contactNeedTypes = [
  { label: "Comptabilité", value: "comptabilite" },
  { label: "Tenue de livres", value: "tenue-de-livres" },
  { label: "Soutien RH administratif", value: "soutien-rh-administratif" },
  { label: "Soutien opérationnel", value: "soutien-operationnel" },
  { label: "Propriétaire immobilier", value: "proprietaire-immobilier" },
  { label: "Candidature", value: "candidature" },
  { label: "Autre", value: "autre" },
]
