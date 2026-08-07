import React, { ComponentProps } from 'react'
import Button from '../../atomes/Button'
import { Session, TableHeader } from '@/types';
import CustomCheckbox from '../../atomes/CustomCheckbox';
import { subjectTableData, subjectTableHeaders } from '@/constants/dashboardData';
import { Doc, Expand, Eye, Hour, Location } from '@/components/assets/icons';




type data = {
    subjects: Session[]
}

const DashboardSubjectDataTable = ({ subjects, className, ...props }: data & ComponentProps<'div'>) => {
    const check = () => {

    }


    return (
        <div {...props} className={['w-full border border-[0.4px] border-board-black/10 rounded flex flex-col items-center justify-start overflow-hidden', className].join(" ")}>
            <div className="shrink-0 w-full px-3 flex items-center justify-start bg-board-black/5 h-16">
                <Button className='bg-board-black text-white! h-5! px-3! text-[12px]!'>{subjects.length} Cours</Button>
            </div>
            <div className=" border-b border-b-[0.4px] border-b-board-black/10 shrink-0 h-16 w-full px-3 grid grid-cols-[56px_1fr_1fr_1fr_1fr_1fr_1fr_56px]">
                <div className="flex items-center justify-center">
                    <CustomCheckbox checked={false} onChange={check}/>
                </div>
                {
                    subjectTableHeaders.map(std => {
                        return (
                            <div key={std.key} className=' flex items-center justify-start gap-1 text-board-black/40'>
                                {std.label}
                                <Expand className='fill-board-black/60' />
                            </div>
                        );
                    })
                }
            </div>

                {
                    subjectTableData.map(std => {
                        return (
                            <div className="shrink-0 h-16 border-b border-b-[0.4px] border-b-board-black/10 w-full px-3 grid grid-cols-[56px_1fr_1fr_1fr_1fr_1fr_1fr_56px]">
                                <div className="flex items-center justify-center">
                                    <CustomCheckbox checked={false} onChange={check} />
                                </div>
                                <div className="flex items-center justify-start gap-1 text-board-black/80">
                                    <Hour className='fill-board-black/80' />
                                    <span>{ std.hour }</span>
                                </div>
                                <div className="flex items-center justify-start gap-1 text-board-black/80">
                                    <span>{std.subject}</span>
                                </div>
                                <div className="flex items-center justify-start gap-1 text-board-black/80">
                                    <div className="overflow-hidden h-7 w-7 rounded-full bg-board-black/5">{std.teacher.profil.length > 1 && <img src={std.teacher.profil} alt={std.teacher.fullname} /> }</div>
                                    <span>{std.teacher.fullname}</span>
                                </div>
                                <div className="flex items-center justify-start gap-1 text-board-black/80">
                                    <Location className='fill-board-black/80' />
                                    <span>{std.place}</span>
                                </div>
                                <div className="flex items-center justify-start gap-1 text-board-black/80">
                                    {
                                        std.status === "done" && <div className="flex items-center justify-start gap-2 bg-poppy-green/10 text-poppy-green px-2 py-1 rounded-full">
                                            <div className="h-2 w-2 rounded-full bg-poppy-green"></div><div>Réalisée</div>
                                        </div>
                                    }
                                    {
                                        std.status === "pending" && <div className="flex items-center justify-start gap-2 bg-marigold-amber/10 text-marigold-amber px-2 py-1 rounded-full">
                                            <div className="h-2 w-2 rounded-full bg-marigold-amber"></div><div>En attente</div>
                                        </div>
                                    }
                                    {
                                        std.status === "rejected" && <div className="flex items-center justify-start gap-2 bg-poppy-red/10 text-poppy-red px-2 py-1 rounded-full">
                                            <div className="h-2 w-2 rounded-full bg-poppy-red"></div><div>Contestée</div>
                                        </div>
                                    }
                                </div>
                                <div className="flex items-center justify-start gap-1 text-board-black/80">
                                    {
                                        std.indicator === "read" &&
                                        <div className="flex items-center justify-start gap-1 text-poppy-green">
                                                <Doc className='fill-poppy-green' />
                                                <span>Lu</span>
                                        </div>
                                    }
                                    {
                                        std.indicator === "not-read" &&
                                        <div className="">---</div>
                                    }
                                </div>
                                <div className="flex items-center justify-center">
                                    <Eye className='fill-blue-navy' />
                                </div>
                            </div>
                        );
                    })
                }
        </div>
    )
}

export default DashboardSubjectDataTable
