import Link from 'next/link'
import React from 'react'
import Button from '../../atomes/Button'
import Image from 'next/image'
import { Images } from '@/constants/images'

const OurTeam = () => {
    return (
        <section className='min-h-svh w-full'>
            <div className="w-full max-w-[90%] mx-auto min-h-svh flex flex-col items-center justify-start py-[6vh] gap-12">
                <div className="flex flex-col items-center justify-start gap-6 max-lg:max-w-[90%] lg:max-w-[45%]">
                    <div className="flex flex-col items-center justify-start gap-2 text-board-black max-lg:w-full">
                        <div className="lg:text-[1.4vw] text-center">Notre équipe</div>
                        <div className="title text-center">Une équipe engagée au service de la réussite scolaire</div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-11">
                    <div className="w-full min-h-[65vh] relative flex max-lg:flex-col items-center justify-center max-lg:p-8">
                        <div className="absolute inset-0 z-0 rotate-[-0.5deg] overflow-hidden">
                            <Image src={Images.Cta3} className='w-full h-full object-cover object-center' alt="Arriere-plan de la section Notre equipe" />
                        </div>
                        <Image src={Images.HomeFly} className="z-100 max-lg:h-16 lg:h-[14vh] rotate-z-10 rotate-y-180 absolute top-6 max-lg:right-3 lg:right-12 w-auto object-contain" alt="Element graphique decoratif" />
                        <div className="flex max-lg:flex-col max-lg:items-start lg:items-center justify-start max-lg:gap-8 lg:gap-20.5 relative z-100 max-lg:w-full lg:w-[60%]">
                            <div className="max-lg:w-[200px] max-lg:h-[200px] lg:h-[18vw] lg:w-[16vw] shrink-0 rounded-lg overflow-hidden">
                                <Image src={Images.D2} className='w-full h-full object-cover object-center' alt="Photo de Damparou Danfai" />
                            </div>
                            <div className="flex flex-col items-start justify-center max-lg:gap-6 lg:gap-16">
                                <div className="flex flex-col items-start justify-center">
                                    <Button className="max-lg:hidden lg:block cursor-default! bg-poppy-red/30 text-poppy-red border-2 border-poppy-red max-lg:w-full">
                                        <div className="">Direction Générale</div>
                                    </Button>
                                    <div className="max-lg:block lg:hidden max-lg:py-2! max-lg:px-4! bg-poppy-red/30 text-poppy-red border-2 border-poppy-red rounded-full text-[12px]">Direction Générale</div>
                                    <h3 className="max-lg:text-[20px] lg:text-[2vw] font-dm-serif">Damparou DANFAI</h3>
                                    <div className="max-lg:text-[18px] lg:text-[1.4vw] text-start">Fondateur & Directeur Général</div>
                                </div>
                                <div className="max-lg:text-[14px] w-full lg:text-[1vw]">Certifié en Neurosciences Appliquées et Santé Cérébrale, il pilote la stratégie de D²Répétition, supervise les orientations pédagogiques et développe des solutions éducatives innovantes.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex max-lg:items-start lg:items-center justify-center w-full gap-2">
                        <span className='shrink-0'><Image src={Images.Info} className='max-lg:h-4 lg:h-[2vh] grayscale w-auto object-contain shrink-0' alt="Icone information" /></span>
                        <span className='max-lg:text-[12px]'>D²Répétition s'appuie sur une équipe pluridisciplinaire qui œuvre chaque jour pour garantir un accompagnement de qualité.</span>
                    </div>
                    <div className="w-full grid max-lg:grid-cols-1 lg:grid-cols-3 gap-11 h-fit">
                        <div className="relative">
                            <div className="absolute z-0 inset-0 rotate-[-0.5deg] overflow-hidden">
                                <Image src={Images.Cta1} className='w-full h-full object-cover object-center' alt="Arriere-plan equipe pedagogique" />
                            </div>
                            <div className="relative z-100 flex flex-col items-start justify-start gap-7 w-full h-full  max-lg:p-8 lg:p-[2vw]">
                                <div className="flex items-start justify-between w-full">
                                    <h3 className="max-lg:text-[20px] lg:text-[2vw] font-dm-serif">Équipe <br />pédagogique</h3>
                                    <Image src={Images.Pedagogie} className='h-[8vh] w-auto object-contain' alt="Icone equipe pedagogique" />
                                </div>
                                <div className="max-lg:text-[14px] w-full lg:text-[1.1vw]">Certifié en Neurosciences Appliquées et Santé Cérébrale, il pilote la stratégie de D²Répétition, supervise les orientations pédagogiques et développe des solutions éducatives innovantes.</div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute z-0 inset-0 rotate-[-0.5deg] overflow-hidden">
                                <Image src={Images.Cta2} className='w-full h-full object-cover object-center' alt="Arriere-plan supervision pedagogique" />
                            </div>
                            <div className="relative z-100 flex flex-col items-start justify-start gap-7 w-full h-full  max-lg:p-8 lg:p-[2vw]">
                                <div className="flex items-start justify-between w-full">
                                    <h3 className="max-lg:text-[20px] max-lg:text-[20px] lg:text-[2vw] font-dm-serif">Supervision <br />pédagogique</h3>
                                    <Image src={Images.Supervision} className='h-[8vh] w-auto object-contain' alt="Icone supervision pedagogique" />
                                </div>
                                <div className="max-lg:text-[14px] w-full lg:text-[1.1vw]">Des superviseurs veillent au respect des standards de qualité, accompagnent les enseignants et favorisent l'amélioration continue.</div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute z-0 inset-0 rotate-[-0.5deg] overflow-hidden">
                                <Image src={Images.Cta4} className='w-full h-full object-cover object-center' alt="Arriere-plan equipe administrative" />
                            </div>
                            <div className="relative z-100 flex flex-col items-start justify-start gap-7 w-full h-full  max-lg:p-8 lg:p-[2vw]">
                                <div className="flex items-start justify-between w-full">
                                    <h3 className="max-lg:text-[20px] lg:text-[2vw] font-dm-serif">Équipe <br />administrative</h3>
                                    <Image src={Images.Admin} className='h-[8vh] w-auto object-contain' alt="Icone equipe administrative" />
                                </div>
                                <div className="max-lg:text-[14px] w-full lg:text-[1.1vw]">Certifié en Neurosciences Appliquées et Santé Cérébrale, il pilote la stratégie de D²Répétition, supervise les orientations pédagogiques et développe des solutions éducatives innovantes.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam
