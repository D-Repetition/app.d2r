import AccompaniementAllKeySubject from "@/components/ui/organisms/home/AccompaniementAllKeySubject"
import Hero from "@/components/ui/organisms/home/Hero"
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
    </>
  )
}

export default page
