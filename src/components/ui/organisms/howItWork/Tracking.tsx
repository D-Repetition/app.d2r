"use client"

import { Arrow } from "@/components/assets/icons"
import Image from 'next/image'
import { Images } from "@/constants/images"


const Tracking = () => {
    return (
        <section className="w-full min-h-svh mx-auto flex flex-col items-center pt-24 lg:pt-44 pb-12 lg:pb-16 justify-start gap-6 lg:gap-[75px]">
            <div className="w-full mx-auto max-w-[90%] flex flex-col items-center justify-start max-lg:gap-16 lg:gap-[14vh]">
                <div className="flex flex-col items-center justify-start gap-8 w-full">
                    <div className="title text-center lg:max-w-[60%]">Votre parcours en 4 étapes</div>
                    <div className="text-center subtitle font-normal! lg:max-w-[40%]">Notre processus est conçu pour offrir un accompagnement personnalisé dès le premier contact.</div>
                </div>
                <div className="w-full grid max-lg:grid-cols-1 lg:grid-cols-4">
                    <div
                        className={[
                            "shrink-0 px-[2vw] pt-[2vw] relative",
                            "bg-shade-cyan/90",
                        ].join(" ")}
                    >
                        <div className="max-lg:rotate-90 lg:-rotate-0 z-100 absolute max-lg:top-full max-lg:left-1/2 lg:top-1/2 lg:-right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                            <Arrow className='fill-board-black' />
                        </div>
                        <div className="max-lg:p-6 flex h-full flex-col items-center justify-start gap-3">
                            <div className="max-lg:text-[20px] font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                                Compte rendu détaillé
                            </div>

                            <div className="max-lg:text-[14px] lg:text-[.9vw] text-board-black/80 w-full">
                                Le professeur renseigne les notions étudiées, les progrès observés et les recommandations.
                            </div>
                            <Image src={Images.HowItWorkIllustration1} className='h-[20vh] w-auto object-contain' alt="Illustration compte rendu detaille" />
                        </div>
                    </div>
                    <div
                        className={[
                            "shrink-0 px-[2vw] pt-[2vw] relative",
                            "bg-marigold-amber/90",
                        ].join(" ")}
                    >
                        <div className="max-lg:rotate-90 lg:-rotate-0 z-100 absolute max-lg:top-full max-lg:left-1/2 lg:top-1/2 lg:-right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                            <Arrow className='fill-board-black' />
                        </div>
                        <div className="max-lg:p-6 flex h-full flex-col items-center justify-start gap-3">
                            <div className="max-lg:text-[20px] font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                                Validation de la séance
                            </div>

                            <div className="max-lg:text-[14px] lg:text-[.9vw] text-board-black/80 w-full">
                                Les parents confirment la réalisation du cours pour garantir la transparence.
                            </div>
                            <Image src={Images.HowItWorkIllustration2} className='h-[20vh] w-auto object-contain' alt="Illustration validation de la seance" />

                        </div>
                    </div>
                    <div
                        className={[
                            "shrink-0 px-[2vw] pt-[2vw] relative",
                            "bg-poppy-red/90",
                        ].join(" ")}
                    >
                        <div className="max-lg:rotate-90 lg:-rotate-0 z-100 absolute max-lg:top-full max-lg:left-1/2 lg:top-1/2 lg:-right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                            <Arrow className='fill-board-black' />
                        </div>
                        <div className="max-lg:p-6 flex h-full flex-col items-center justify-start gap-3">
                            <div className="max-lg:text-[20px] font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                                Suivi de la progression
                            </div>

                            <div className="max-lg:text-[14px] lg:text-[.9vw] text-board-black/80 w-full">
                                Les objectifs, les évaluations et les observations sont mis à jour au fil des séances.
                            </div>
                            <Image src={Images.HowItWorkIllustration3} className='h-[20vh] w-auto object-contain' alt="Illustration suivi de la progression" />

                        </div>
                    </div>
                    <div
                        className={[
                            "shrink-0 px-[2vw] pt-[2vw] relative",
                            "bg-olive-green/90",
                        ].join(" ")}
                    >
                        <div className="max-lg:p-6 flex h-full flex-col items-center justify-start gap-3">
                            <div className="max-lg:text-[20px] font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                                Notifications
                            </div>

                            <div className="max-lg:text-[14px] lg:text-[.9vw] text-board-black/80 w-full">
                                Les familles sont informées après chaque intervention importante.
                            </div>
                            <Image src={Images.HowItWorkIllustration4} className='h-[20vh] w-auto object-contain' alt="Illustration notifications familles" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tracking
