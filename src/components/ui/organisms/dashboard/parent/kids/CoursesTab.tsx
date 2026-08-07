import { StudentDetails } from "@/types"

interface TabDataI {
    student: StudentDetails
}

const CoursesTab = ({ student }: TabDataI) => {
  return (
    <div className="w-full p-6 flex flex-col items-center justify-start gap-3">
      <div className="w-full py-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-2 min-h-15 p-2 rounded-[20px] bg-board-black/5">
          <div className="h-15 rounded-[12px] bg-board-black/5 flex items-center justify-start px-4 py-2"><span className="font-medium text-board-black/80">{student.courses.statistics.completed}</span>&nbsp;<span className="text-board-black/60">Séances réalisées</span></div>
          <div className="h-15 rounded-[12px] bg-board-black/5 flex items-center justify-start px-4 py-2"><span className="font-medium text-board-black/80">{student.courses.statistics.cancelled}</span>&nbsp;<span className="text-board-black/60">Séances annulées</span></div>
          <div className="h-15 rounded-[12px] bg-board-black/5 flex items-center justify-start px-4 py-2"><span className="font-medium text-board-black/80">{student.courses.statistics.unvalidated}</span>&nbsp;<span className="text-board-black/60">Séances non validée</span></div>
          <div className="h-15 rounded-[12px] bg-board-black/5 flex items-center justify-start px-4 py-2"><span className="font-medium text-board-black/80">{student.courses.statistics.disputed}</span>&nbsp;<span className="text-board-black/60">Séances contestée</span></div>
          <div className="h-15 rounded-[12px] bg-olive-green flex items-center justify-start px-4 py-2"><span className="font-medium text-board-black/80">{student.courses.statistics.plannedThisMonth}</span>&nbsp;<span className="text-board-black/60">Séances prévus ce mois</span></div>
        </div>
        </div>
    </div>
  )
}

export default CoursesTab
