import { valuesData } from '@/constants/homeSectionsData';
import Image from 'next/image';
import React from 'react'

const OurValues = () => {
    return (
        <section className='min-h-svh w-full'>
            <div className="w-full max-w-[75%] mx-auto min-h-svh flex items-start justify-between py-[6vh] gap-20">
                <div className="flex flex-col items-start justify-start gap-6 max-w-[50%]">
                    <div className="flex flex-col items-start justify-start gap-2 text-board-black">
                        <div className="lg:text-[1.4vw] text-start">Nos valeurs</div>
                        <div className="title text-start">Les valeurs qui guident chacune de nos actions</div>
                    </div>
                    <div className="text-start subtitle font-normal w-[90%]">Nos engagements reposent sur des principes forts qui orientent notre accompagnement et nos relations avec les familles, les élèves et les enseignants.</div>
                </div>
                <div className="relative h-svh overflow-hidden">
                    <div className="flex flex-col gap-8 animate-marquee-vertical">
                        {[...valuesData, ...valuesData].map((vd, index) => {
                            const iconImg = vd.icon;
                            return (
                                <div
                                    key={`${vd.id}-${index}`}
                                    className={[
                                        "max-w-[20vw] min-h-[26vh] shrink-0 rounded-lg p-[2vw] relative",
                                        vd.backgroundColor,
                                    ].join(" ")}
                                >
                                    <div className="absolute bottom-6 right-8 text-[1.4rem] font-bold w-[3.2vw] h-[3.2vw] flex items-center justify-center text-board-black border border-board-black rounded-full">
                                        <Image src={iconImg} className="h-14 w-auto object-contain" alt={vd.title} />
                                    </div>

                                <div className="flex h-full flex-col items-start justify-start gap-3">
                                    <div className="max-w-[70%] lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                                        {vd.title}
                                    </div>

                                    <div className="lg:text-[.9vw] text-board-black/40">
                                        {vd.description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValues
