import { Message, Review, School } from "@/components/assets/icons"
import Button from "@/components/ui/atomes/Button"
import RoundButton from "@/components/ui/atomes/RoundButton"
import { StudentDetails } from "@/types"

interface TabDataI {
    student: StudentDetails
}

const OverviewTab = ({ student }: TabDataI) => {
    return (
        <div className="w-full p-4 flex flex-col items-center justify-start gap-3">
            <div className="w-full flex flex-col gap-2.5 items-start justify-start">
                Informations personnelles et scolaires
                <div className="w-full grid max-lg:grid-cols-1 lg:grid-cols-2 lg:h-25 gap-3">
                    <div className="rounded-lg bg-board-black/5 p-2 flex flex-col items-start justify-start gap-3">
                        <div className="text-board-black/60">Identité</div>
                        <div className="w-full h-full p-1 flex items-center justify-start gap-2.5 bg-white rounded-lg">
                            <div className="h-full w-11 rounded bg-board-black/5 overflow-hidden">
                                <img src="/images/dashboard/user.png" className="w-full h-full object-contain object-center" alt="user" />
                            </div>
                            <div className="">
                                <div className="text-board-black/80 text-[16px]">{student.overview.fullname}</div>
                                <div className="text-board-black/50 text-[14px]">Né le {student.overview.birthDate}</div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-board-black/5 p-2 flex flex-col items-start justify-start gap-3">
                        <div className="text-board-black/60">Informations scolaires</div>
                        <div className="w-full h-full p-1 flex items-center justify-start gap-2.5 bg-white rounded-lg">
                            <div className="h-full w-11 rounded bg-board-black/5 overflow-hidden flex items-center justify-center">
                                <School className="fill-board-black" />
                            </div>
                            <div className="">
                                <div className="text-board-black/80 text-[16px]">{student.overview.school}</div>
                                <div className="text-board-black/50 text-[14px]">{student.overview.level} • {student.overview.activeSince}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-2.5 items-start justify-start py-2">
                Professeur attribué & Matières suivies
                <div className="w-full grid max-lg:grid-cols-1 lg:grid-cols-2 lg:h-25 gap-3">
                    <div className="rounded-lg bg-board-black/5 p-2 flex flex-col items-start justify-start gap-3">
                        <div className="text-board-black/60">Identité du professeur</div>
                        <div className="flex flex-col gap-4 p-6 bg-white rounded-lg w-full items-start justify-start">
                            <div className="w-full h-full flex items-center justify-between gap-2.5">
                                <div className="w-full h-full flex items-center justify-start gap-2.5">
                                    <div className="h-12 w-12 rounded-full bg-board-black/5 overflow-hidden">
                                        <img src={student.overview.assignedTeacher.avatar} className="w-full h-full object-cover object-center" alt="avatar" />
                                    </div>
                                    <div className="">
                                        <div className="text-board-black/80 text-[16px]">{student.overview.assignedTeacher.fullname}</div>
                                        <div className="text-board-black/50 text-[14px] flex items-center justify-start gap-2">
                                            <span className="rounded bg-board-black/5 px-2 py-1 text-xs">
                                                {student.overview.assignedTeacher.teacherLevels?.join(" et ")}
                                            </span>
                                            <span className="rounded bg-board-black/5 px-2 py-1 text-xs">
                                                {student.overview.assignedTeacher.experience} ans d'experience
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Button className="border-2 border-board-black bg-board-black/5 h-8! w-8! p-6! rounded-full!">
                                    <Message className="fill-board-black shrink-0" />
                                </Button>
                            </div>
                            <div className="text-board-black/50 text-[14px] flex items-center justify-start gap-2 mt-2">
                                {
                                    student.overview.assignedTeacher.teaches.map(t => (<span className="rounded bg-board-black/5 px-2 py-1 text-xs">{t}</span>))
                                }

                            </div>
                            <div className="mt-2">
                                <div className="text-board-black/80 text-[16px]">Statut de l'affectation active</div>
                                <div className="text-board-black/50 text-[14px]">Depuis le {student.overview.assignedTeacher.assignedSince}</div>
                            </div>
                            <div className="mt-2 w-full p-1 rounded-lg bg-board-black/5">
                                <div className="w-full h-full rounded p-2 bg-board-black/5">
                                    <p className="text-board-black/60" >
                                        <span className="text-board-black/80">Objectifs: </span> {student.overview.assignedTeacher.objectives}
                                    </p>
                                </div>
                            </div>
                            <Button className="mt-2 text-[14px] leading-3.5 px-3! bg-blue-navy text-white h-8! flex items-center justify-center"><Review className="fill-white" /> 12 Avis</Button>
                        </div>
                    </div>
                    <div className="rounded-lg bg-board-black/5 p-2 flex flex-col items-start justify-start gap-3">
                        <div className="text-board-black/60">Matières suivies</div>
                        <div className="h-full flex flex-col gap-4 p-6 bg-white rounded-lg w-full items-start justify-start">
                            <div className="w-full h-full flex items-center justify-between gap-2.5">
                                <div className="w-full h-full flex items-center justify-start gap-2.5">
                                    <div className="h-12 w-12 rounded-lg bg-board-black/5 overflow-hidden bg-olive-green flex items-center justify-center"></div>
                                    <div className="">
                                        <div className="text-board-black/80 text-[16px]">{student.overview.currentSubject.name}</div>
                                        <div className="text-board-black/50 text-[14px] flex items-center justify-start gap-2">
                                            {student.overview.currentSubject.startedAt}
                                        </div>
                                    </div>
                                </div>
                                <Button className="border-2 border-board-black bg-board-black/5 h-6! rounded-full! flex items-center justify-center">
                                    <span>{student.overview.currentSubject.sessionsCount}</span> <span>Séances</span>
                                </Button>
                            </div>
                            <div className="text-board-black/50 text-[14px] flex items-center justify-start gap-2 mt-2">
                                {
                                    student.overview.assignedTeacher.teaches.map(t => (<span className="rounded bg-board-black/5 px-2 py-1 text-xs">{t}</span>))
                                }

                            </div>
                        </div>

                        <div className="mt-2 text-board-black/60">Détails du suivi</div>
                        <div className="h-full flex flex-col gap-4 p-6 bg-white rounded-lg w-full items-start justify-start">
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="flex items-center justify-center gap-8">
                                    <div className="">
                                        <div className="text-board-black/80 text-[16px]">Professeur assigné</div>
                                        <div className="text-board-black/50 text-[14px] flex items-center justify-start gap-2">
                                            {student.overview.followUp.assignedTeacher}
                                        </div>
                                    </div> 
                                    <div className="">
                                        <div className="text-board-black/80 text-[16px]">Dernière séance</div>
                                        <div className="text-board-black/50 text-[14px] flex items-center justify-start gap-2">
                                            {student.overview.followUp.lastSession}
                                        </div>
                                    </div> 
                                    <div className="">
                                        <div className="text-board-black/80 text-[16px]">Prochaine séance</div>
                                        <div className="text-board-black/50 text-[14px] flex items-center justify-start gap-2">
                                            {student.overview.followUp.nextSession}
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewTab
