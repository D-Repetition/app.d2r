import AccompaniementAllKeySubject from "@/components/ui/organisms/home/AccompaniementAllKeySubject"
import FAQ from "@/components/ui/organisms/home/FAQ"
import Hero from "@/components/ui/organisms/home/Hero"
import HowItWork from "@/components/ui/organisms/home/HowItWork"
import Teachers from "@/components/ui/organisms/home/Teachers"
import WhatFamilySay from "@/components/ui/organisms/home/WhatFamilySay"
import WhyFamilyChooseUs from "@/components/ui/organisms/home/WhyFamilyChooseUs"

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
    </>
  )
}

export default page
