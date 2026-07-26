import CTA from '@/components/ui/organisms/CTA'
import FAQ from '@/components/ui/organisms/faq/FAQ'
import Hero from '@/components/ui/organisms/faq/Hero'
import WhyChooseUs from '@/components/ui/organisms/faq/WhyChooseUs'
import { faqCtaSection } from '@/constants/homeSectionsData'

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
