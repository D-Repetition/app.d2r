import Hero from '@/components/ui/organisms/contactUs/Hero'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Nous contacter",
    description:
        "Contactez D2Repetition pour inscrire votre enfant, poser vos questions ou en savoir plus sur nos cours de repetition et notre accompagnement scolaire.",
    keywords: [
        "contact D2Repetition",
        "inscription cours de repetition",
        "soutien scolaire Togo",
        "informations parents",
    ],
    alternates: {
        canonical: "/nous-contactez",
    },
    openGraph: {
        title: "Contactez D2Repetition",
        description:
            "Notre equipe est disponible pour vous accompagner dans la reussite scolaire de votre enfant.",
        url: "/nous-contactez",
        type: "website",
        locale: "fr_FR",
        siteName: "D2Repetition",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Page de contact D2Repetition",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nous contacter | D2Repetition",
        description: "Discutez avec notre equipe pour demarrer un accompagnement scolaire.",
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
        </>
    )
}

export default page
