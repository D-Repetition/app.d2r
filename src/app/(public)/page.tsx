import CTA from "@/components/ui/organisms/CTA"
import AccompaniementAllKeySubject from "@/components/ui/organisms/home/AccompaniementAllKeySubject"
import FAQ from "@/components/ui/organisms/home/FAQ"
import Hero from "@/components/ui/organisms/home/Hero"
import HowItWork from "@/components/ui/organisms/home/HowItWork"
import Teachers from "@/components/ui/organisms/home/Teachers"
import WhatFamilySay from "@/components/ui/organisms/home/WhatFamilySay"
import WhyFamilyChooseUs from "@/components/ui/organisms/home/WhyFamilyChooseUs"
import { homeCtaSection } from "@/constants/homeSectionsData"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cours de repetition a domicile au Togo",
  description:
    "D2Repetition accompagne les eleves avec des professeurs verifies, un suivi pedagogique transparent et des cours de repetition personnalises au Togo.",
  keywords: [
    "cours de repetition",
    "soutien scolaire",
    "professeurs a domicile",
    "accompagnement scolaire",
    "Togo",
    "Lome",
    "D2Repetition",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "D2Repetition - Cours de repetition a domicile au Togo",
    description:
      "Professeurs selectionnes, suivi des seances et accompagnement scolaire personnalise pour la reussite de chaque eleve.",
    url: "/",
    type: "website",
    locale: "fr_FR",
    siteName: "D2Repetition",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "D2Repetition - Plateforme de repetition scolaire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D2Repetition - Cours de repetition a domicile",
    description:
      "Un accompagnement scolaire fiable avec des enseignants verifies et un suivi transparent.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const page = () => {

  return (
    <>
      <Hero />
      <WhyFamilyChooseUs />
      <AccompaniementAllKeySubject />
      <Teachers />
      <WhatFamilySay />
      <HowItWork />
      <FAQ />
      <CTA {...homeCtaSection} />
    </>
  )
}

export default page
