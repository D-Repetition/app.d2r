"use client";

import { Close } from '@/components/assets/icons'
import { useModalesStore } from '@/stores/modals.store'


const Modals = () => {
    const {isOpen, child, onClose} = useModalesStore()
    if (!isOpen) return null

    return (
        <div className='fixed inset-0 bg-board-black/60 flex items-center justify-center'>
            <div className="relative p-6 rounded-[32px] bg-white">
                <Close onClick={() => onClose()} className='cursor-pointer fill-board-black/80 absolute top-6 right-6' />
                {child}
            </div>
        </div>
    )
}

export default Modals
