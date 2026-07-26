import CTA from '@/components/ui/organisms/CTA'
import Hero from '@/components/ui/organisms/howItWork/Hero'
import Steps from '@/components/ui/organisms/howItWork/Steps'
import { howItWorkCtaSection } from '@/constants/homeSectionsData'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero />
            <Steps />
            <CTA {...howItWorkCtaSection} />
        </>
    )
}

export default page
