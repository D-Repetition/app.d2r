import { Arrow } from '@/components/assets/icons';
import React, { ComponentProps } from 'react'

interface RoundButtonI extends ComponentProps<'button'> {
    isActive: boolean;
    direction: 'left' | 'right';
}

const RoundButton = (props: RoundButtonI) => {
  return (
      <button {...props} className={['shrink-0 lg:h-[7.5vh] lg:w-[7.5vh] flex items-center justify-center border rounded-full', props.isActive ? 'border-black cursor-pointer' : 'border-black/50 cursor-not-allowed' ].join(" ")}>
          <Arrow className={["h-8 lg:h-8", props.isActive ? 'fill-black' : 'fill-black/50', props.direction === 'left' ? 'rotate-180' : ''].join(" ")} />
    </button>
  )
}

export default RoundButton
