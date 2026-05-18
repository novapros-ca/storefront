import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CredibilityBand } from "@/components/credibility-band"
import { ProblemsSection } from "@/components/problems-section"
import { ServicesSection } from "@/components/services-section"
import { RealEstateSection } from "@/components/real-estate-section"
import { ApproachSection } from "@/components/approach-section"
import { ExamplesSection } from "@/components/examples-section"
import { TrustSection } from "@/components/trust-section"
import { CareersSection } from "@/components/careers-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CredibilityBand />
      <ProblemsSection />
      <ServicesSection />
      <RealEstateSection />
      <ApproachSection />
      <ExamplesSection />
      <TrustSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
