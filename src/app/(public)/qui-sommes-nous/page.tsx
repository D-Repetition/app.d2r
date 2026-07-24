import Hero from "@/components/ui/organisms/about/Hero"
import OurChallenges from "@/components/ui/organisms/about/OurChallenges"
import OurHistory from "@/components/ui/organisms/about/OurHistory"
import CTA from "@/components/ui/organisms/CTA"
import { aboutCtaSection } from "@/constants/homeSectionsData"

const page = () => {

    return (
        <>
            <Hero />
            <OurHistory />
            <OurChallenges />
            <CTA {...aboutCtaSection} />
        </>
    )
}

export default page
