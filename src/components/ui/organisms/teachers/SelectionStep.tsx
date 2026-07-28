import { Arrow } from '@/components/assets/icons'
import Image from 'next/image'
import React from 'react'

const SelectionStep = () => {
    return (
        <section className="w-full max-w-[90%] min-h-[50vh] mx-auto flex flex-col items-center pt-24 lg:pt-36 pb-12 lg:pb-[12vh] justify-center gap-6 lg:gap-[75px]">
            <div className="title text-center max-w-[50%]">Une sélection rigoureuse avant chaque accompagnement</div>

            <div className="w-full grid grid-cols-4">
                <div
                    className={[
                        "shrink-0 px-[2vw] pt-[2vw] relative",
                        "bg-shade-cyan/90",
                    ].join(" ")}
                >
                    <div className="z-100 absolute top-1/2 -right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                        <Arrow className='fill-board-black' />
                    </div>
                    <div className="flex h-full flex-col items-center justify-start gap-3">
                        <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                            Étude du dossier
                        </div>

                        <div className="lg:text-[.9vw] text-board-black/80 w-full">
                            Analyse des diplômes, de l'expérience et des compétences.
                        </div>
                        <Image src="/images/selection-step/illustration-1.png" className='h-[20vh]' alt="Illustration 1" />
                    </div>
                </div>
                <div
                    className={[
                        "shrink-0 px-[2vw] pt-[2vw] relative",
                        "bg-marigold-amber/90",
                    ].join(" ")}
                >
                    <div className="z-100 absolute top-1/2 -right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                        <Arrow className='fill-board-black' />
                    </div>
                    <div className="flex h-full flex-col items-center justify-start gap-3">
                        <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                            Validation pédagogique
                        </div>

                        <div className="lg:text-[.9vw] text-board-black/80 w-full">
                            Évaluation des connaissances et des aptitudes pédagogiques.
                        </div>
                        <Image src="/images/selection-step/illustration-2.png" className='h-[20vh]' alt="Illustration 1" />

                    </div>
                </div>
                <div
                    className={[
                        "shrink-0 px-[2vw] pt-[2vw] relative",
                        "bg-poppy-red/90",
                    ].join(" ")}
                >
                    <div className="z-100 absolute top-1/2 -right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                        <Arrow className='fill-board-black' />
                    </div>
                    <div className="flex h-full flex-col items-center justify-start gap-3">
                        <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                            Entretien individuel
                        </div>

                        <div className="lg:text-[.9vw] text-board-black/80 w-full">
                            Échange sur la motivation, les valeurs et la posture professionnelle.
                        </div>
                        <Image src="/images/selection-step/illustration-3.png" className='h-[20vh]' alt="Illustration 1" />

                    </div>
                </div>
                <div
                    className={[
                        "shrink-0 px-[2vw] pt-[2vw] relative",
                        "bg-olive-green/90",
                    ].join(" ")}
                >
                    <div className="flex h-full flex-col items-center justify-start gap-3">
                        <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                            Suivi continu
                        </div>

                        <div className="lg:text-[.9vw] text-board-black/80 w-full">
                            Chaque enseignant est accompagné et évalué tout au long de sa collaboration.
                        </div>
                        <Image src="/images/selection-step/illustration-4.png" className='h-[20vh]' alt="Illustration 1" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SelectionStep
