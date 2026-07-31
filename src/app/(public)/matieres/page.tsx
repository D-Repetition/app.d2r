import CTA from '@/components/ui/organisms/CTA'
import Hero from '@/components/ui/organisms/subjects/Hero'
import MoreThanCourse from '@/components/ui/organisms/subjects/MoreThanCourse'
import { subjectCtaSection } from '@/constants/sectionsData'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Nos matieres",
    description:
        "Explorez les matieres enseignees par D2Repetition du primaire au lycee: accompagnement personnalise, professeurs qualifies et progression continue.",
    keywords: [
        "matieres scolaires",
        "cours de mathematiques",
        "cours de francais",
        "soutien scolaire primaire college lycee",
        "D2Repetition",
    ],
    alternates: {
        canonical: "/matieres",
    },
    openGraph: {
        title: "Matieres enseignees | D2Repetition",
        description:
            "Un accompagnement dans les matieres cles pour la reussite scolaire de votre enfant.",
        url: "/matieres",
        type: "website",
        locale: "fr_FR",
        siteName: "D2Repetition",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Matieres enseignees par D2Repetition",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nos matieres | D2Repetition",
        description:
            "Des matieres essentielles avec un suivi pedagogique adapte a chaque niveau.",
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
            <MoreThanCourse />
            <CTA {...subjectCtaSection} />
        </>
    )
}

export default page
