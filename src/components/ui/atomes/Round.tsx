import { Filter } from '@/components/assets/icons';
import { ComponentProps } from 'react'

interface RoundI extends ComponentProps<'button'> {
    isActive: boolean;
}

const Round = (props: RoundI) => {
  return (
      <button {...props} className={['shrink-0 lg:h-[6vh] lg:w-[6vh] flex items-center justify-center rounded-full', props.isActive ? 'bg-board-black cursor-pointer' : 'bg-board-black/50 cursor-not-allowed' ].join(" ")}>
          <Filter className={["h-8 lg:h-8 fill-white"].join(" ")} />
    </button>
  )
}

export default Round
