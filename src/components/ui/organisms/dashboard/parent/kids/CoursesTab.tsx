import { StudentDetails } from "@/types"

interface TabDataI {
    student: StudentDetails
}

const CoursesTab = ({ student }: TabDataI) => {
  return (
    <div>
          Courses tab
    </div>
  )
}

export default CoursesTab
