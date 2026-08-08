import { CircleCheck, Doc, Download, School, Status } from '@/components/assets/icons'
import Button from '@/components/ui/atomes/Button'
import { CourseSession } from '@/types'

const CoursSessionModal = (props: CourseSession) => {
    return (
        <div className='max-w-[500px] min-w-[320px] flex flex-col gap-5 items-start justify-start'>
            <div className="flex flex-col gap-2">
                <div className="text-[14px]">{props.subject}</div>
                <div className="text-[24px] leading-6">{props.date}</div>
                <div className="flex items-center justify-start gap-2"><span className="rounded bg-board-black/5 px-2 py-1 text-xs">{props.startHour} - {props.endHour}</span><span className="rounded bg-board-black/5 px-2 py-1 text-xs">2 Heures</span></div>
            </div>
            <div className="flex items-center justify-start gap-2">
                <School className='fill-board-black' /> <div className="">{props.place}</div>
            </div>
            <div className="flex items-start justify-start gap-2">
                <CircleCheck className='fill-board-black' />
                <span className="text-board-black/80">
                    <span className="text-board-black">Objectif:</span>
                    <br />{props.objective}
                </span>
            </div>
            <div className="p-1 rounded-lg flex flex-col gap-1 w-full bg-board-black/5">
                <div className="w-full grid grid-cols-2 gap-1">
                    <div className="w-full mih-h-10 flex items-center justify-start p-2 text-board-black/50 bg-board-black/5 round">Professeur:</div>
                    <div className="w-full mih-h-10 flex items-center justify-start p-2 bg-board-black/5 round">
                        <div className="flex items-start justify-start gap-2">
                            <img src={props.teacher.avatar} className='h-7 w-7 object-cover object-center bg-board-black/5 rounded-full mt-1/2' alt="Avatar" />
                            <div className="text-board-black/80">{props.teacher.fullname}</div>
                        </div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-2 gap-1">
                    <div className="w-full mih-h-10 flex items-center justify-start p-2 text-board-black/50 bg-board-black/5 round">Statut:</div>
                    <div className="w-full mih-h-10 flex items-center justify-start p-2 bg-board-black/5 round">
                        <div className="flex items-center justify-start gap-1 text-[14px]"><Status className={[props.status === 'disputed' ? 'fill-marigold-amber' : props.status === 'cancelled' ? 'fill-poppy-red' : props.status === 'done' ? 'fill-emerald-green' : props.status === 'planned' ? 'fill-sky-blue' : 'fill-board-black'].join(" ")} /> <div className="">{props.status === 'disputed' ? 'Contesté' : props.status === 'cancelled' ? 'Annulée' : props.status === 'done' ? 'Réalisé' : props.status === 'planned' ? 'Programmée' : 'En attente de validation'}</div></div>
                    </div>
                </div>

                <div className="w-full grid grid-cols-2 gap-1">
                    <div className="w-full mih-h-10 flex items-center justify-start p-2 text-board-black/50 bg-board-black/5 round">Validation professeur:</div>
                    <div className="w-full mih-h-10 flex items-center justify-start p-2 bg-board-black/5 round">
                        Confirmée
                    </div>
                </div>

                <div className="w-full grid grid-cols-2 gap-1">
                    <div className="w-full mih-h-10 flex items-center justify-start p-2 text-board-black/50 bg-board-black/5 round">Validation parent:</div>
                    <div className="w-full mih-h-10 flex items-center justify-start p-2 bg-board-black/5 round">
                        {
                            props.parentValidation ? "Validée" : "En attente"
                        }
                    </div>
                </div>
            </div>

            {
                props.summary.length > 0 && <div className="flex items-start justify-start gap-2">
                    <Doc className='fill-board-black' />
                    <span className="text-board-black/80">
                        <span className="text-board-black">Compte rendu résumé:</span>
                        <br />{props.summary}
                        <div className="w-full flex items-start justify-end mt-1">
                            <Download className='cursor-pointer fill-board-black' />
                        </div>
                    </span>
                </div>
            }
            <div className="w-full flex items-center justify-end">
                <Button className='bg-board-black text-white'>Compte rendu complet</Button>
            </div>
        </div >
    )
}

export default CoursSessionModal
