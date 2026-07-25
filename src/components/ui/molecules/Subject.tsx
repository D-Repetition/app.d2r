import { Students } from '@/components/assets/icons'
import { SubjectHome, SubjectItself } from '@/types'
import React, { ComponentProps } from 'react'

type HomeSubjectI = SubjectHome & ComponentProps<'div'>
type SubjectItselfI = SubjectItself & ComponentProps<'div'>

const HomeSubject = (props: HomeSubjectI) => {
  return (
      <div {...props} className={['p-8 rounded-lg flex flex-col items-start justify-between gap-[4vh] relative w-[19.75vw] self-stretch shrink-0 overflow-hidden', props.className, props.bg_color].join(" ")}>
          <img src={`/images/subjects/${props.icon}`} className='absolute top-2 -right-8 h-[65%] opacity-5' alt="" />
          <div className="flex flex-col gap-3">
              <div className="titleInter">{props.title}</div>
              <div className="text-board-black/40">{props.description}</div>
          </div>
          <div className="flex items-center justify-start gap-1"><Students className='fill-board-black h-7' />{ props.teacher_number }</div>
    </div>
  )
}

const Subject = (props: SubjectItselfI) => {
    return (
        <div {...props} className={['px-8 py-12 rounded-lg flex flex-col items-start justify-start gap-2', props.className, props.bg_color].join(" ")}>
            {
                props.tags.length > 0 && <div className="flex gap-1 items-start justify-start">
                    {
                        props.tags.map((t) => {
                            return (
                                <>
                                    {
                                        t === 'Primary' && <div className={["py-1 px-2.5 text-[.8rem] border bg-poppy-red/5 border-poppy-red text-poppy-red rounded-full"].join(" ")}>Primaire</div>
                                    }
                                    {
                                        t === 'College' && <div className={["py-1 px-2.5 text-[.8rem] border bg-olive-green/5 border-olive-green text-olive-green rounded-full"].join(" ")}>Collège</div>
                                    }
                                    {
                                        t === 'HighSchool' && <div className={["py-1 px-2.5 text-[.8rem] border bg-shade-cyan/5 border-shade-cyan text-shade-cyan rounded-full"].join(" ")}>Lycée</div>
                                    }
                                </>
                            );
                        })
                    }
                </div>
            }
            <div className="flex flex-col gap-3">
                <div className="titleInter">{props.title}</div>
                <div className="text-board-black/40">{props.description}</div>
            </div>
            <div className="flex items-center justify-start gap-1 mt-3"><Students className='fill-board-black h-7' />{props.teacher_number} Enseignants</div>
        </div>
    )
}

export {
    HomeSubject,
    Subject
}
