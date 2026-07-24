import Hero from "@/components/ui/organisms/about/Hero"
import OurChallenges from "@/components/ui/organisms/about/OurChallenges"
import OurHistory from "@/components/ui/organisms/about/OurHistory"
import OurMissionAndVision from "@/components/ui/organisms/about/OurMissionAndVision"
import OurValues from "@/components/ui/organisms/about/OurValues"
import CTA from "@/components/ui/organisms/CTA"
import { aboutCtaSection } from "@/constants/homeSectionsData"

const page = () => {

    return (
        <>
            <Hero />
            <OurHistory />
            <OurChallenges />
            <OurMissionAndVision />
            <OurValues />
            <CTA {...aboutCtaSection} />
        </>
    )
}

export default page
