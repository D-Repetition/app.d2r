import { supportCategoriesData } from '@/constants/homeSectionsData'
import Image from 'next/image';
import React from 'react'

const OurChallenges = () => {
    return (
        <section className='min-h-svh w-full'>
            <div className="w-full max-w-[75%] mx-auto min-h-svh flex flex-col items-center justify-between py-[6vh] gap-20">
                <div className="flex flex-col items-center justify-start gap-6 max-w-[60%]">
                    <div className="flex flex-col items-center justify-start gap-2 text-board-black">
                        <div className="lg:text-[1.4vw] text-center">Les défis que nous relevons</div>
                        <div className="title text-center">Chaque élève est unique, chaque accompagnement l'est aussi</div>
                    </div>
                    <div className="text-center subtitle font-normal w-[90%]">Au-delà des cours de répétition, nous accompagnons les élèves face aux différents obstacles qui peuvent freiner leur réussite scolaire.</div>
                </div>
                <div className="w-full h-[65vh] grid grid-cols-3 grid-rows-2 gap-11">
                    {
                        supportCategoriesData.map((scd, index) => {
                            const iconImg = scd.icon;
                            return (
                                <>
                                    <div className={["rounded-lg p-[2vw] relative", scd.backgroundColor].join(" ")}>
                                        <Image src={iconImg} className='absolute top-4 right-0 opacity-5 h-[14vh] w-auto object-contain' alt={scd.title} />
                                        <div className="absolute bottom-6 right-8 text-[1.4rem] font-bold w-[3.2vw] h-[3.2vw] flex items-center justify-center text-board-black border border-board-black rounded-full">
                                            {scd.id}
                                        </div>
                                        <div className="w-full h-full flex flex-col gap-3 items-start justify-start">
                                            <div className="lg:text-[1.7vw] leading-[2vw] text-board-black/90 max-w-[70%]">{scd.title}</div>
                                            <div className="text-board-black/40 lg:text-[.9vw]">{scd.description}</div>
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurChallenges
