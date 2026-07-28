import { Arrow } from '@/components/assets/icons'
import React from 'react'

const MoreThanCourse = () => {
    return (
        <section className="w-full max-w-[90%] min-h-[50vh] mx-auto flex flex-col items-center pt-24 lg:pt-36 pb-12 lg:pb-[12vh] justify-center gap-6 lg:gap-[75px]">
            <div className="title text-center">Bien plus que des cours de répétition</div>

            <div className="w-full grid grid-cols-4">
                <div
                    className={[
                        "shrink-0 p-[2vw] relative",
                        "bg-shade-cyan/80",
                    ].join(" ")}
                >
                    <div className="-rotate-45 z-100 absolute top-1/2 -right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                        <Arrow className='fill-board-black' />
                    </div>
                    <div className="flex h-full flex-col items-start justify-start gap-3">
                        <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                            Accompagnement personnalisé
                        </div>

                        <div className="lg:text-[.9vw] text-board-black/80">
                            Chaque élève bénéficie d'un suivi adapté à son niveau et à ses objectifs.
                        </div>
                    </div>
                </div>
                <div
                    className={[
                        "shrink-0 p-[2vw] relative",
                        "bg-marigold-amber/80",
                    ].join(" ")}
                >
                    <div className="-rotate-45 z-100 absolute top-1/2 -right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                        <Arrow className='fill-board-black' />
                    </div>
                    <div className="flex h-full flex-col items-start justify-start gap-3">
                        <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                            Professeurs qualifiés
                        </div>

                        <div className="lg:text-[.9vw] text-board-black/80">
                            Des enseignants sélectionnés pour leurs compétences pédagogiques.
                        </div>
                    </div>
                </div>
                <div
                    className={[
                        "shrink-0 p-[2vw] relative",
                        "bg-olive-green/80",
                    ].join(" ")}
                >
                    <div className="-rotate-45 z-100 absolute top-1/2 -right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                        <Arrow className='fill-board-black' />
                    </div>
                    <div className="flex h-full flex-col items-start justify-start gap-3">
                        <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                            Suivi pédagogique
                        </div>

                        <div className="lg:text-[.9vw] text-board-black/80">
                            Un compte rendu est disponible après chaque séance.
                        </div>
                    </div>
                </div>
                <div
                    className={[
                        "shrink-0 p-[2vw] relative",
                        "bg-poppy-red/80",
                    ].join(" ")}
                >
                    <div className="flex h-full flex-col items-start justify-start gap-3">
                        <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                            Transparence pour les familles
                        </div>

                        <div className="lg:text-[.9vw] text-board-black/80">
                            Les parents suivent facilement les progrès de leur enfant.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreThanCourse
