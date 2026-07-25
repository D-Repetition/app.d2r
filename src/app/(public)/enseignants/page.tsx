import CTA from '@/components/ui/organisms/CTA'
import Hero from '@/components/ui/organisms/teachers/Hero'
import SelectionStep from '@/components/ui/organisms/teachers/SelectionStep'
import TeacherListSection from '@/components/ui/organisms/teachers/TeacherListSection'
import { teacherCtaSection } from '@/constants/homeSectionsData'

const page = () => {
  return (
      <>
          <Hero />
          <SelectionStep />
          <TeacherListSection />
          <CTA {...teacherCtaSection} />
      </>
  )
}

export default page
