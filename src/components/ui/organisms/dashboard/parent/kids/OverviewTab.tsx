import { StudentDetails } from "@/types"

interface TabDataI {
    student: StudentDetails
}

const OverviewTab = ({ student }: TabDataI) => {
  return (
    <div>
      Overview tab
    </div>
  )
}

export default OverviewTab
