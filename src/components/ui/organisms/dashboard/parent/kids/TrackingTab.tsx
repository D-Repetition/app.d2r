import { StudentDetails } from "@/types"

interface TabDataI {
    student: StudentDetails
}

const TrackingTab = ({ student }: TabDataI) => {
  return (
    <div>
          Tracking tab
    </div>
  )
}

export default TrackingTab
