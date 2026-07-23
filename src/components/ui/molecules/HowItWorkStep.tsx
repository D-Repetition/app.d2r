import { HowItWorksStep } from '@/types'
import React, { ComponentProps } from 'react'

type HowItWorkI = HowItWorksStep & ComponentProps<'div'>

const HowItWorkStep = (props: HowItWorkI) => {
  return (
    <div {...props} className={['border-b pb-4 w-full flex flex-col items-start gap-5', props.className].join(" ")}>
          <div className="text-[1.2rem] font-bold w-[3.5vw] h-[3.5vw] flex items-center justify-center text-board-black/60 border border-board-black rounded-full">
              { props.step }
          </div>
          <div className="flex flex-col gap-1 items-start justify-start">
              <div className="text-[1.7vw] font-medium">{props.title}</div>
              <div className="text-[1.1vw] text-board-black/80">{props.description }</div>
          </div>
    </div>
  )
}

export default HowItWorkStep
