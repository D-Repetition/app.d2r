import CTA from '@/components/ui/organisms/CTA'
import FAQ from '@/components/ui/organisms/howItWork/FAQ'
import Hero from '@/components/ui/organisms/howItWork/Hero'
import Method from '@/components/ui/organisms/howItWork/Method'
import Steps from '@/components/ui/organisms/howItWork/Steps'
import Tracking from '@/components/ui/organisms/howItWork/Tracking'
import { howItWorkCtaSection } from '@/constants/homeSectionsData'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Comment ca marche",
    description:
        "Decouvrez le fonctionnement de D2Repetition: inscription, analyse des besoins, affectation du professeur et suivi pedagogique apres chaque seance.",
    keywords: [
        "comment ca marche",
        "suivi pedagogique",
        "cours a domicile",
        "inscription repetition",
        "soutien scolaire",
        "D2Repetition",
    ],
    alternates: {
        canonical: "/comment-ca-marche",
    },
    openGraph: {
        title: "Comment fonctionne D2Repetition",
        description:
            "Un parcours en 4 etapes pour un accompagnement scolaire clair, structure et efficace.",
        url: "/comment-ca-marche",
        type: "website",
        locale: "fr_FR",
        siteName: "D2Repetition",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Processus d accompagnement D2Repetition",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Comment ca marche | D2Repetition",
        description:
            "De l'inscription au suivi de progression: comprenez chaque etape de notre accompagnement scolaire.",
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
            <Steps />
            <Tracking />
            <Method />
            <FAQ />
            <CTA {...howItWorkCtaSection} />
        </>
    )
}

export default page
