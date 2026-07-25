import CTA from '@/components/ui/organisms/CTA'
import Hero from '@/components/ui/organisms/howItWork/Hero'
import { howItWorkCtaSection } from '@/constants/homeSectionsData'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero />
            <CTA {...howItWorkCtaSection} />
        </>
    )
}

export default page
