import CTA from '@/components/ui/organisms/CTA'
import FAQ from '@/components/ui/organisms/faq/FAQ'
import { faqCtaSection } from '@/constants/homeSectionsData'

const page = () => {
    return (
        <>
            <FAQ />
            <CTA {...faqCtaSection} />
        </>
    )
}

export default page
