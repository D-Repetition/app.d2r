import { Arrow, Star } from '@/components/assets/icons'
import { TeacherI } from '@/types'
import { ComponentProps } from 'react'

type TeacherCardI = TeacherI & ComponentProps<'div'>

const TeacherCard = (props: TeacherCardI) => {
    return (
        <div {...props} className={['h-[70vh] w-[30vw] shrink-0 rounded-lg overflow-hidden relative', props.className].join(" ")}>
            <img src={`${props.photo}`} className='relative z-0 object-cover object-center w-full h-full' alt="" />
            <div className="absolute h-[33%] left-0 right-0 bottom-0 black-gradient z-0"></div>
            <div className="absolute inset-0 px-7 py-5 flex items-center justify-between flex-col">
                <div className="flex w-full items-center justify-end">
                    {
                        !props.isTrueCard && <div className="h-6 flex gap-1/2 justify-start items-center bg-white px-2 text-board-black rounded-full"><Star className='fill-marigold-amber' /> <p className="">{props.rating}</p></div>
                    }
                </div>
                <div className="py-[1vh] flex flex-col gap-7 items-start justify-start w-full relative">
                    <div className="flex flex-col items-start justify-start gap-1 relative z-1">
                        <div className="text-white/80 w-full text-start">
                            {
                                props.levels.map((l, index) => {
                                    return (
                                        <span>
                                            {
                                                index < props.levels.length - 1 &&
                                                <span className="">
                                                    {l} {
                                                        (props.levels.length - 1 - index) > 1 && <span>,</span>
                                                    }
                                                </span>
                                            }
                                            {
                                                index === props.levels.length - 1 &&
                                                <span className="">
                                                    et {l}
                                                </span>
                                            }
                                        </span>
                                    );
                                })
                            }
                        </div>
                        <div className="text-white w-full text-start simple">
                            {
                                props.subjects.map((s, index) => {
                                    return (
                                        <span>
                                            {
                                                index < props.subjects.length - 1 &&
                                                <span className="">
                                                    {s} {
                                                            (props.subjects.length - 1 - index) > 1 && <span>,</span>
                                                    }
                                                </span>
                                            }
                                            {
                                                index === props.subjects.length - 1 &&
                                                <span className="">
                                                    et {s}
                                                </span>
                                            }
                                        </span>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="flex items-center justify-between relative z-1">
                        <div className="flex flex-col gap-1/2">
                            <div className="simpleText2 text-white">{props.full_name}</div>
                            <div className="small text-white/80">{ props.bio }</div>
                        </div>
                        <div className="w-12 h-7 shrink-0 border border-2 border-white flex items-center justify-center rounded-full">
                            <Arrow className='fill-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherCard
