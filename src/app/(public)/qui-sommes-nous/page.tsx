import Hero from "@/components/ui/organisms/about/Hero"
import KPI from "@/components/ui/organisms/about/KPI"
import OurChallenges from "@/components/ui/organisms/about/OurChallenges"
import OurCommitment from "@/components/ui/organisms/about/OurCommitment"
import OurHistory from "@/components/ui/organisms/about/OurHistory"
import OurMissionAndVision from "@/components/ui/organisms/about/OurMissionAndVision"
import OurTeam from "@/components/ui/organisms/about/OurTeam"
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
            <OurTeam />
            <KPI />
            <OurCommitment />
            <CTA {...aboutCtaSection} />
        </>
    )
}

export default page
