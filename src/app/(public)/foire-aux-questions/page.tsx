import CTA from '@/components/ui/organisms/CTA'
import FAQ from '@/components/ui/organisms/faq/FAQ'
import Hero from '@/components/ui/organisms/faq/Hero'
import WhyChooseUs from '@/components/ui/organisms/faq/WhyChooseUs'
import { faqCtaSection } from '@/constants/sectionsData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Foire aux questions",
    description:
        "Consultez les reponses aux questions frequentes sur les cours de repetition, les enseignants, le suivi pedagogique et les services D2Repetition.",
    keywords: [
        "FAQ repetition",
        "questions frequentes soutien scolaire",
        "suivi pedagogique",
        "parents et eleves",
        "D2Repetition",
    ],
    alternates: {
        canonical: "/foire-aux-questions",
    },
    openGraph: {
        title: "FAQ D²Repetition",
        description:
            "Toutes les informations utiles pour comprendre nos services d accompagnement scolaire.",
        url: "/foire-aux-questions",
        type: "website",
        locale: "fr_FR",
        siteName: "D2Repetition",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "FAQ D2Repetition",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQ | D2Repetition",
        description:
            "Reponses aux questions frequentes des parents et des eleves.",
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
            <WhyChooseUs />
            <FAQ />
            <CTA {...faqCtaSection} />
        </>
    )
}

export default page
