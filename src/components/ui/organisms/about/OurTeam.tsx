import Link from 'next/link'
import React from 'react'

const OurTeam = () => {
    return (
        <section className='min-h-svh w-full'>
            <div className="w-full max-w-[90%] mx-auto min-h-svh flex flex-col items-center justify-start py-[6vh] gap-12">
                <div className="flex flex-col items-center justify-start gap-6 max-w-[45%]">
                    <div className="flex flex-col items-center justify-start gap-2 text-board-black">
                        <div className="text-[1.4vw] text-center">Notre équipe</div>
                        <div className="title text-center">Une équipe engagée au service de la réussite scolaire</div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-11">
                    <div className="w-full h-[65vh] relative flex items-center justify-center">
                        <div className="absolute inset-0 rotate-[-0.5deg] overflow-hidden">
                            <img src="/images/cta/cta-3.png" className='w-full h-full object-cover object-center' alt="" />
                        </div>
                        <img src="/images/home-fly.png" className="z-100 h-[14vh] rotate-z-10 rotate-y-180 absolute top-6 right-12" alt="Home fly" />
                        <div className="flex items-center justify-start gap-20.5 relative z-100">

                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full gap-2">
                        <img src="/images/info.png" className='h-[2vh] grayscale' alt="Infos" />
                        <span>D²Répétition s'appuie sur une équipe pluridisciplinaire qui œuvre chaque jour pour garantir un accompagnement de qualité.</span>
                    </div>
                    <div className="w-full grid grid-cols-3 gap-11 h-fit">
                        <div className="relative">
                            <div className="absolute z-0 inset-0 rotate-[-0.5deg] overflow-hidden">
                                <img src="/images/cta/cta-1.png" className='w-full h-full object-cover object-center' alt="" />
                            </div>
                            <div className="relative z-100 flex flex-col items-start justify-start gap-7 w-full h-full p-[2vw]">
                                <div className="flex items-start justify-between w-full">
                                    <h3 className="lg:text-[2vw] font-dm-serif">Équipe <br />pédagogique</h3>
                                    <img src="/images/team/pedagogie.png" className='h-[8vh]' alt="" />
                                </div>
                                <div className="w-full lg:text-[1.1vw]">Certifié en Neurosciences Appliquées et Santé Cérébrale, il pilote la stratégie de D²Répétition, supervise les orientations pédagogiques et développe des solutions éducatives innovantes.</div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute z-0 inset-0 rotate-[-0.5deg] overflow-hidden">
                                <img src="/images/cta/cta-2.png" className='w-full h-full object-cover object-center' alt="" />
                            </div>
                            <div className="relative z-100 flex flex-col items-start justify-start gap-7 w-full h-full p-[2vw]">
                                <div className="flex items-start justify-between w-full">
                                    <h3 className="lg:text-[2vw] font-dm-serif">Supervision <br />pédagogique</h3>
                                    <img src="/images/team/supervision.png" className='h-[8vh]' alt="" />
                                </div>
                                <div className="w-full lg:text-[1.1vw]">Des superviseurs veillent au respect des standards de qualité, accompagnent les enseignants et favorisent l'amélioration continue.</div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute z-0 inset-0 rotate-[-0.5deg] overflow-hidden">
                                <img src="/images/cta/cta-4.png" className='w-full h-full object-cover object-center' alt="" />
                            </div>
                            <div className="relative z-100 flex flex-col items-start justify-start gap-7 w-full h-full p-[2vw]">
                                <div className="flex items-start justify-between w-full">
                                    <h3 className="lg:text-[2vw] font-dm-serif">Équipe <br />administrative</h3>
                                    <img src="/images/team/admin.png" className='h-[8vh]' alt="" />
                                </div>
                                <div className="w-full lg:text-[1.1vw]">Certifié en Neurosciences Appliquées et Santé Cérébrale, il pilote la stratégie de D²Répétition, supervise les orientations pédagogiques et développe des solutions éducatives innovantes.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam
