import Hero from "@/components/ui/organisms/about/Hero"
import OurHistory from "@/components/ui/organisms/about/OurHistory"
import CTA from "@/components/ui/organisms/CTA"
import { aboutCtaSection } from "@/constants/homeSectionsData"

const page = () => {

    return (
        <>
            <Hero />
            <OurHistory />
            <CTA {...aboutCtaSection} />
        </>
    )
}

export default page
