import { supportCategoriesData } from '@/constants/homeSectionsData'
import Image from 'next/image';
import React from 'react'

const OurChallenges = () => {
    return (
        <section className='min-h-svh w-full'>
            <div className="w-full max-lg:max-w-[90%] lg:max-w-[75%] mx-auto min-h-svh flex flex-col items-center justify-between max-lg:py-10 lg:py-[6vh] gap-8 lg:gap-20">
                <div className="flex flex-col items-center justify-start gap-6 max-lg:w-full max-lg:max-w-full lg:max-w-[60%]">
                    <div className="flex flex-col items-center justify-start gap-2 text-board-black">
                        <div className="lg:text-[1.4vw] text-center">Les défis que nous relevons</div>
                        <div className="title text-center">Chaque élève est unique, chaque accompagnement l'est aussi</div>
                    </div>
                    <div className="text-center subtitle font-normal w-[90%]">Au-delà des cours de répétition, nous accompagnons les élèves face aux différents obstacles qui peuvent freiner leur réussite scolaire.</div>
                </div>
                <div className="w-full lg:h-[65vh] max-lg:flex max-lg:items-stretch max-lg:flex-wrap lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:gap-11">
                    {
                        supportCategoriesData.map((scd, index) => {
                            const iconImg = scd.icon;
                            return (
                                <>
                                    <div className={["rounded-lg p-[2vw] relative", scd.backgroundColor, "max-lg:w-full max-lg:mx-auto max-lg:max-w-full max-lg:min-h-[150px] items-stretch"].join(" ")}>
                                        <Image src={iconImg} className='absolute top-4 right-0 opacity-5 max-lg:h-16 lg:h-[14vh] w-auto object-contain' alt={scd.title} />
                                        <div className="absolute max-lg:bottom-3 max-lg:right-4 lg:bottom-6 lg:right-8 text-[1.4rem] font-bold max-lg:w-12 max-lg:h-12 lg:w-[3.2vw] lg:h-[3.2vw] flex items-center justify-center text-board-black border border-board-black rounded-full">
                                            {scd.id}
                                        </div>
                                        <div className="w-full h-full flex flex-col gap-3 items-start justify-start max-lg:p-3">
                                            <div className="max-lg:text-[18px] lg:text-[1.7vw] lg:leading-[2vw] text-board-black/90 max-w-[70%]">{scd.title}</div>
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
