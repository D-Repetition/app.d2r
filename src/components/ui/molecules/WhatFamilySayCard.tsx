import { TestimonyI } from '@/types'
import Image from 'next/image'
import React, { ComponentProps } from 'react'


type WhatFamilySayCardI = TestimonyI & ComponentProps<'div'>

const WhatFamilySayCard = (props: WhatFamilySayCardI) => {
  return (
    <div {...props} className={['shrink-0 flex flex-col justify-between rounded-lg px-10 py-5 h-[70vh] max-w-[25vw]', props.className, props.bg_color].join(" ")}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-start gap-5">
          <div className="border border-board-black h-[5vh] w-[5vh] rounded-full overflow-hidden">
            <Image src={props.avatar} className='w-full h-full object-center object-cover' alt={`${props.role}`} title={props.role} />
          </div>
          <div className="lg:text-[1vw]">{props.full_name}</div>
        </div>
        <div className="font-inter lg:text-[1.4vw] leading-[2vw] text-board-black/80 tracking-[-3%]">«&nbsp;{props.testimony}&nbsp;»</div>
      </div>
      <div className="font-inter lg:text-[1.2vw]">{props.role}</div>
    </div>
  )
}

export default WhatFamilySayCard
