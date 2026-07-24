import Hero from "@/components/ui/organisms/about/Hero"
import CTA from "@/components/ui/organisms/CTA"
import { aboutCtaSection } from "@/constants/homeSectionsData"

const page = () => {

    return (
        <>
            <Hero />
            <CTA {...aboutCtaSection} />
        </>
    )
}

export default page
