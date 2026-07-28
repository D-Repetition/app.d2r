import Hero from "@/components/ui/organisms/about/Hero"
import KPI from "@/components/ui/organisms/about/KPI"
import OurChallenges from "@/components/ui/organisms/about/OurChallenges"
import OurCommitment from "@/components/ui/organisms/about/OurCommitment"
import OurHistory from "@/components/ui/organisms/about/OurHistory"
import OurMissionAndVision from "@/components/ui/organisms/about/OurMissionAndVision"
import OurTeam from "@/components/ui/organisms/about/OurTeam"
import OurValues from "@/components/ui/organisms/about/OurValues"
import CTA from "@/components/ui/organisms/CTA"
import { aboutCtaSection } from "@/constants/homeSectionsData"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Qui sommes-nous",
    description:
        "Decouvrez D2Repetition: notre histoire, notre mission, notre vision et notre equipe engagee pour la reussite scolaire des eleves.",
    keywords: [
        "qui sommes nous",
        "a propos D2Repetition",
        "mission vision education",
        "equipe pedagogique",
        "soutien scolaire Togo",
    ],
    alternates: {
        canonical: "/qui-sommes-nous",
    },
    openGraph: {
        title: "Qui sommes-nous | D2Repetition",
        description:
            "Une equipe engagee, une vision educative forte et des valeurs au service des familles.",
        url: "/qui-sommes-nous",
        type: "website",
        locale: "fr_FR",
        siteName: "D2Repetition",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Presentation de D2Repetition",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Qui sommes-nous | D2Repetition",
        description:
            "Notre histoire, nos valeurs et notre engagement pour l accompagnement scolaire.",
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
            <OurHistory />
            <OurChallenges />
            <OurMissionAndVision />
            <OurValues />
            <OurTeam />
            <KPI />
            <OurCommitment />
            <CTA {...aboutCtaSection} />
        </>
    )
}

export default page
