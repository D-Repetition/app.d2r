"use client"

import Image from 'next/image'
import { Images } from '@/constants/images'
import { howItWorks } from '@/constants/homeSectionsData'

const Steps = () => {
    return (
        <section className="w-full min-h-svh mx-auto flex flex-col items-center pt-24 lg:pt-44 pb-12 lg:pb-16 justify-start gap-6 lg:gap-[75px]">
            <div className="w-full mx-auto max-w-[90%] flex flex-col items-center justify-start max-lg:gap-16 lg:gap-[14vh]">
                <div className="flex flex-col items-center justify-start gap-8 w-full">
                    <div className="title text-center lg:max-w-[60%]">Votre parcours en 4 étapes</div>
                    <div className="text-center subtitle font-normal! lg:max-w-[40%]">Notre processus est conçu pour offrir un accompagnement personnalisé dès le premier contact.</div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] w-full">
                    <div className="flex flex-col justify-between max-lg:gap-10 lg:gap-[6vh]">
                        {howItWorks.map((item, index) => (
                            <div key={index} className="flex max-lg:flex-col items-start justify-start max-lg:gap-4 lg:gap-[2vw] w-full">
                                <Image src={item.image} className="max-lg:h-20 lg:h-[16vh] w-auto object-contain" alt={item.alt} />
                                <div className="flex flex-col gap-3 items-start justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                        <div className="max-lg:text-[16px] lg:text-[1.2vw]">{item.step}</div>
                                        <div className="max-lg:text-[20px] lg:text-[1.6vw] font-medium">{item.title}</div>
                                    </div>
                                    <div className="max-lg:text-[14px] lg:text-[1vw] text-board-black/60 lg:max-w-[60%]">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="max-lg:hidden flex items-end justify-end">
                        <Image src={Images.HowItWorkIllustration} className="h-[80vh] w-auto object-contain" alt="Illustration globale du parcours en 4 etapes" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps
