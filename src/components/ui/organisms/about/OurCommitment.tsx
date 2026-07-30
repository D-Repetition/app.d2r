import { Arrow } from '@/components/assets/icons'
import { Images } from '@/constants/images'
import Image from 'next/image'
import React from 'react'

const OurCommitment = () => {
    return (
        <section className='min-h-svh w-full'>
            <div className="w-full max-w-[90%] lg:max-w-[75%] mx-auto min-h-svh flex flex-col items-center justify-start pt-[6vh] pb-[12vh] max-lg:gap-10 lg:gap-20">
                <div className="flex flex-col items-center justify-start gap-6 w-full">
                    <div className="title text-center max-lg:w-full lg:max-w-[70%]">Nos engagements pour un accompagnement en toute confiance</div>
                    <div className="text-center subtitle font-normal  max-lg:w-full lg:max-w-[60%]">Chaque famille bénéficie d'un suivi transparent, d'un accompagnement personnalisé et d'une équipe disponible à chaque étape.</div>
                </div>
                <div className="w-full max-lg:max-w-full lg:max-w-[80%] min-h-[75vh] grid lg:grid-cols-3 lg:grid-rows-3">
                    <div
                        className={[
                            "max-lg:max-w-full lg:max-w-[20vw] max-lg:p-3 max-lg:min-h-[150px]  shrink-0 lg:p-[2vw] relative",
                            "bg-shade-cyan/80",
                        ].join(" ")}
                    >
                        <div className="max-lg:hidden z-100 absolute top-1/2 -right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                            <Arrow className='fill-board-black' />
                        </div>
                        <div className="flex h-full flex-col items-start justify-start gap-3 py-3">
                            <div className="font-dm-serif max-lg:text-[20px] lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                                Validation des cours
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80">
                                Chaque famille bénéficie d'un suivi transparent, d'un accompagnement personnalisé et d'une équipe disponible à chaque étape.
                            </div>
                        </div>
                    </div>
                    <div
                        className={[
                            "max-lg:max-w-full lg:max-w-[20vw] max-lg:p-3 max-lg:min-h-[150px]  shrink-0 lg:p-[2vw] relative",
                            "bg-marigold-amber/80",
                        ].join(" ")}
                    >
                        <div className="max-lg:hidden z-100 absolute top-1/2 -right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                            <Arrow className='fill-board-black' />
                        </div>
                        <div className="flex h-full flex-col items-start justify-start gap-3 py-3">
                            <div className="font-dm-serif max-lg:text-[20px] lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                                Réactivité
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80">
                                Notre équipe répond rapidement à toutes les demandes.
                            </div>
                        </div>
                    </div>
                    <div
                        className={[
                            "max-lg:max-w-full lg:max-w-[20vw] max-lg:p-3 max-lg:min-h-[150px]  shrink-0 lg:p-[2vw] relative",
                            "bg-poppy-pink/80",
                        ].join(" ")}
                    >
                        <div className="flex h-full flex-col items-start justify-start gap-3 py-3">
                            <div className="font-dm-serif max-lg:text-[20px] lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                                Compte rendu pédagogique
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80">
                                Un rapport détaillé est disponible après chaque séance.
                            </div>
                        </div>
                    </div>
                    <div
                        className={[
                            "max-lg:hidden max-lg:max-w-full lg:max-w-[20vw] max-lg:p-3 max-lg:min-h-[150px]  shrink-0 p-[2vw] relative flex items-center justify-center",
                            "bg-blue-navy/5",
                        ].join(" ")}
                    >
                        <Image src={Images.Commit} className='h-[15vh] w-auto object-contain' alt="Illustration de nos engagements pedagogiques" />
                    </div>
                    <div
                        className={[
                            "max-lg:max-w-full lg:max-w-[20vw] max-lg:p-3 max-lg:min-h-[150px]  shrink-0 lg:p-[2vw] relative",
                            "bg-poppy-red/80",
                        ].join(" ")}
                    >
                        <div className="flex h-full flex-col items-start justify-start gap-3 py-3">
                            <div className="font-dm-serif max-lg:text-[20px] lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                                Suivi personnalisé
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80">
                                Chaque élève bénéficie d'un accompagnement adapté à son profil.
                            </div>
                        </div>
                    </div>
                    <div
                        className={[
                            "max-lg:hidden max-lg:max-w-full lg:max-w-[20vw] p-3 max-lg:min-h-[150px]  shrink-0 p-[2vw] relative flex items-center justify-center",
                            "bg-blue-navy/5",
                        ].join(" ")}
                    >
                        <Image src={Images.Commit2} className='h-[15vh] w-auto object-contain' alt="Illustration du suivi des engagements" />
                    </div>
                    <div
                        className={[
                            "max-lg:max-w-full lg:max-w-[20vw] max-lg:p-3 max-lg:min-h-[150px]  shrink-0 lg:p-[2vw] relative",
                            "bg-olive-green/80",
                        ].join(" ")}
                    >
                        <div className="max-lg:hidden z-100 absolute top-1/2 -right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                            <Arrow className='fill-board-black' />
                        </div>
                        <div className="flex h-full flex-col items-start justify-start gap-3 py-3">
                            <div className="font-dm-serif max-lg:text-[20px] lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                                Qualité pédagogique
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80">
                                Nos enseignants sont sélectionnés, accompagnés et régulièrement évalués.
                            </div>
                        </div>
                    </div>
                    <div
                        className={[
                            "max-lg:max-w-full lg:max-w-[20vw] max-lg:p-3 max-lg:min-h-[150px]  shrink-0 lg:p-[2vw] relative",
                            "bg-emerald-green/80",
                        ].join(" ")}
                    >
                        <div className="max-lg:hidden z-100 absolute top-1/2 -right-9 -translate-1/2 h-9 w-9 flex items-center justify-center border border-board-black bg-white rounded-full">
                            <Arrow className='fill-board-black' />
                        </div>
                        <div className="flex h-full flex-col items-start justify-start gap-3 py-3">
                            <div className=" max-lg:text-[20px] font-dm-serif lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                                Innovation
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80">
                                Nous intégrons progressivement les neurosciences éducatives et les technologies numériques.
                            </div>
                        </div>
                    </div>
                    <div
                        className={[
                            "max-lg:max-w-full lg:max-w-[20vw] max-lg:p-3 max-lg:min-h-[150px]  shrink-0 lg:p-[2vw] relative",
                            "bg-poppy-orange/80",
                        ].join(" ")}
                    >
                        <div className="flex h-full flex-col items-start justify-start gap-3 py-3">
                            <div className="font-dm-serif max-lg:text-[20px] lg:text-[1.7vw] leading-[2vw] text-board-black/90">
                                Transparence
                            </div>

                            <div className="lg:text-[.9vw] text-board-black/80">
                                Planning, rapports, paiements et progression restent accessibles aux familles.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurCommitment
