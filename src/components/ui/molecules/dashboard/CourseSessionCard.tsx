"use client";

import { CourseSession } from '@/types'
import { ComponentProps, useState } from 'react'
import Button from '../../atomes/Button'
import { Book, Eye, Location, MoreVertical, Status } from '@/components/assets/icons'
import { useModalesStore } from '@/stores/modals.store'
import CoursSessionModal from './modals/CoursSessionModal'

const CourseSessionCard = (props: CourseSession & ComponentProps<'div'>) => {

  const openModal = useModalesStore((state) => state.onOpen)

  return (
    <div {...props} className={["p-6 border-[0.5px] border-board-black/5 flex flex-col items-start justify-start gap-4 rounded-[32px] bg-white"].join(" ")}>
      <div className="w-full flex flex-col items-start justify-start gap-5">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <div className="px-1 bg-board-black/10 rounded text-[14px]">#{props.number}</div>
              <div className="flex items-center justify-start gap-1 text-[14px]"><Status className={[props.status === 'disputed' ? 'fill-marigold-amber' : props.status === 'cancelled' ? 'fill-poppy-red' : props.status === 'done' ? 'fill-emerald-green' : props.status === 'planned' ? 'fill-sky-blue' : 'fill-board-black'].join(" ")} /> <div className="">{ props.status === 'disputed' ? 'Contesté' : props.status === 'cancelled' ? 'Annulée' : props.status === 'done' ? 'Réalisé' : props.status === 'planned' ? 'Programmée' : 'En attente de validation' }</div></div>
            </div>
            <MoreVertical className='fill-board-black cursor-pointer' />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-start gap-2">
              <span><Book className='fill-board-black/80 h-7 w-7' /></span>
              <span className="text-[28px]">{ props.subject }</span>
            </div>
            <div className="text-board-black/80 text-[14px]"><span className="text-board-black">Date & Heure :</span> <br />{ props.date } ({ props.startHour } - { props.endHour })</div>
          </div>
        </div>
        <div className="w-full rounded py-2 pr-2 pl-1 grid grid-cols-2 bg-board-black/10 flex-wrap gap-2">
          <div className="flex items-start justify-start gap-1 min-w-30">
            <Location className='fill-board-black shrink-0 h-5 w-5 mt-1/2' />
            <div className="flex flex-col items-start justify-start gap-1 text-[14px]">
              <div className="text-board-black">Lieu :</div>
              <div className="text-board-black/80">{props.place}</div>
            </div>
          </div>
          <div className="flex items-start justify-start gap-1 min-w-30">
            <img src={props.teacher.avatar} className='h-5 w-5 object-cover object-center bg-board-black/5 rounded-full mt-1/2' alt="Avatar" />
            <div className="flex flex-col items-start justify-start gap-1 text-[14px]">
              <div className="text-board-black">Professeur :</div>
              <div className="text-board-black/80">{props.teacher.fullname}</div>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={() => openModal(<CoursSessionModal {...props} />)} className="h-5! w-8! border border-board-black flex items-center justify-center"><Eye className='fill-board-black shrink-0' /></Button>
    </div>
  )
}

export default CourseSessionCard
