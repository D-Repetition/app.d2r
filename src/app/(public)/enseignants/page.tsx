import CTA from '@/components/ui/organisms/CTA'
import Hero from '@/components/ui/organisms/teachers/Hero'
import { teacherCtaSection } from '@/constants/homeSectionsData'

const page = () => {
  return (
      <>
          <Hero />
          <CTA {...teacherCtaSection} />
      </>
  )
}

export default page
