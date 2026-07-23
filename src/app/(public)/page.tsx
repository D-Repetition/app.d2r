import CTA from "@/components/ui/organisms/CTA"
import AccompaniementAllKeySubject from "@/components/ui/organisms/home/AccompaniementAllKeySubject"
import FAQ from "@/components/ui/organisms/home/FAQ"
import Hero from "@/components/ui/organisms/home/Hero"
import HowItWork from "@/components/ui/organisms/home/HowItWork"
import Teachers from "@/components/ui/organisms/home/Teachers"
import WhatFamilySay from "@/components/ui/organisms/home/WhatFamilySay"
import WhyFamilyChooseUs from "@/components/ui/organisms/home/WhyFamilyChooseUs"
import { homeCtaSection } from "@/constants/homeSectionsData"

const page = () => {

  return (
    <>
      <Hero />
      <WhyFamilyChooseUs />
      <AccompaniementAllKeySubject />
      <Teachers />
      <WhatFamilySay />
      <HowItWork />
      <FAQ />
      <CTA {...homeCtaSection} />
    </>
  )
}

export default page
