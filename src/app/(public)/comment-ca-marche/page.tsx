import CTA from '@/components/ui/organisms/CTA'
import FAQ from '@/components/ui/organisms/howItWork/FAQ'
import Hero from '@/components/ui/organisms/howItWork/Hero'
import Method from '@/components/ui/organisms/howItWork/Method'
import Steps from '@/components/ui/organisms/howItWork/Steps'
import Tracking from '@/components/ui/organisms/howItWork/Tracking'
import { howItWorkCtaSection } from '@/constants/homeSectionsData'
import React from 'react'

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
