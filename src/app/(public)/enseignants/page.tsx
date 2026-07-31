import CTA from '@/components/ui/organisms/CTA'
import Hero from '@/components/ui/organisms/teachers/Hero'
import KPI from '@/components/ui/organisms/teachers/KPI'
import OurTeachersValues from '@/components/ui/organisms/teachers/OurTeachersValues'
import SelectionStep from '@/components/ui/organisms/teachers/SelectionStep'
import TeacherListSection from '@/components/ui/organisms/teachers/TeacherListSection'
import { teacherCtaSection } from '@/constants/sectionsData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Nos enseignants",
    description:
        "Rencontrez nos enseignants verifies: selection rigoureuse, competences pedagogiques validees et accompagnement personnalise pour chaque eleve.",
    keywords: [
        "enseignants verifies",
        "professeurs a domicile",
        "selection pedagogique",
        "cours de repetition",
        "D2Repetition",
        "Togo",
    ],
    alternates: {
        canonical: "/enseignants",
    },
    openGraph: {
        title: "Nos enseignants verifies | D2Repetition",
        description:
            "Des professeurs selectionnes pour leurs competences, leur pedagogie et leur engagement.",
        url: "/enseignants",
        type: "website",
        locale: "fr_FR",
        siteName: "D2Repetition",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Enseignants verifies D2Repetition",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Nos enseignants | D2Repetition",
        description:
            "Professeurs qualifies et verifies pour un accompagnement scolaire de qualite.",
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
            <SelectionStep />
            <TeacherListSection />
            <KPI />
            <OurTeachersValues />
            <CTA {...teacherCtaSection} />
        </>
    )
}

export default page
