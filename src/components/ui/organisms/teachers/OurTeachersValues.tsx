import { Arrow } from '@/components/assets/icons'
import Image from 'next/image'

const OurTeachersValues = () => {
    return (
        <section className="w-full max-w-[90%] min-h-[50vh] mx-auto flex flex-col items-center pt-24 lg:pt-36 pb-12 lg:pb-[12vh] justify-center gap-6 lg:gap-[75px]">
            <div className="title text-center max-w-[50%]">Une sélection rigoureuse avant chaque accompagnement</div>

            <div className="w-full grid grid-cols-2 grid-rows-2 relative">
                <div className="z-100 absolute top-1/2 left-1/2 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                    <Arrow className='fill-board-black' />
                </div>
                <div
                    className={[
                        "shrink-0 px-[2vw] pt-[2vw] relative",
                        "bg-poppy-pink",
                    ].join(" ")}
                >
                    <div className="flex h-full items-center justify-between gap-3">
                        <div className="flex flex-col items-start gap-3 justify-start max-w-[60%]">
                            <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                                Étude du dossier
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80 w-full">
                                Analyse des diplômes, de l'expérience et des compétences.
                            </div>
                        </div>
                        <Image src="/images/selection-step/illustration-5.png" className='h-[20vh]' alt="Illustration etude du dossier" />
                    </div>
                </div>
                <div
                    className={[
                        "shrink-0 px-[2vw] pt-[2vw] relative",
                        "bg-shade-cyan",
                    ].join(" ")}
                >
                    <div className="flex h-full items-center justify-between gap-3">
                        <div className="flex flex-col items-start gap-3 justify-start max-w-[60%]">
                            <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                                Validation pédagogique
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80 w-full">
                                Évaluation des connaissances et des aptitudes pédagogiques.
                            </div>
                        </div>
                        <Image src="/images/selection-step/illustration-6.png" className='h-[20vh]' alt="Illustration validation pedagogique" />

                    </div>
                </div>
                <div
                    className={[
                        "shrink-0 px-[2vw] pt-[2vw] relative",
                        "bg-marigold-amber",
                    ].join(" ")}
                >
                    <div className="flex h-full items-center justify-between gap-3">
                        <div className="flex flex-col items-start gap-3 justify-start max-w-[60%]">
                            <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                                Entretien individuel
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80 w-full">
                                Échange sur la motivation, les valeurs et la posture professionnelle.
                            </div>
                        </div>

                        <Image src="/images/selection-step/illustration-7.png" className='h-[20vh]' alt="Illustration entretien individuel" />

                    </div>
                </div>
                <div
                    className={[
                        "shrink-0 px-[2vw] pt-[2vw] relative",
                        "bg-poppy-purple/90",
                    ].join(" ")}
                >
                    <div className="flex h-full items-center justify-between gap-3">
                        <div className="flex flex-col items-start gap-3 justify-start max-w-[60%]">
                            <div className="font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90 w-full">
                                Suivi continu
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80 w-full">
                                Chaque enseignant est accompagné et évalué tout au long de sa collaboration.
                            </div>
                        </div>

                        <Image src="/images/selection-step/illustration-8.png" className='h-[20vh]' alt="Illustration suivi continu des enseignants" />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeachersValues
