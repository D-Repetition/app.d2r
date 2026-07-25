import CTA from '@/components/ui/organisms/CTA'
import Hero from '@/components/ui/organisms/subjects/Hero'
import MoreThanCourse from '@/components/ui/organisms/subjects/MoreThanCourse'
import { subjectCtaSection } from '@/constants/homeSectionsData'
import React from 'react'

const page = () => {
  return (
      <>
          <Hero />
          <MoreThanCourse />
          <CTA {...subjectCtaSection} />
      </>
  )
}

export default page
