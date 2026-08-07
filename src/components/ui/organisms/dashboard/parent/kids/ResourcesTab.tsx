import { StudentDetails } from "@/types"

interface TabDataI {
    student: StudentDetails
}

const ResourcesTab = ({ student }: TabDataI) => {
  return (
    <div>
          Resources tab
    </div>
  )
}

export default ResourcesTab
