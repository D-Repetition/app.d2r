import Link from 'next/link'
import React from 'react'
import Button from '../../atomes/Button'
import { UserFace } from '@/components/assets/icons'
import { subjectSectionData } from '@/constants/homeSectionsData'
import { HomeSubject } from '../../molecules/Subject'
import Image from 'next/image'

const AccompaniementAllKeySubject = () => {
    return (
        <section className='min-h-svh mx-auto flex flex-col items-start pt-20 lg:pt-24 pb-12 lg:pb-10'>
            <div className="w-full min-h-svh flex flex-col items-center gap-[12vh]">
                <div className="w-full max-w-[90%] flex items-start justify-between">
                    <div className='title lg:max-w-[34vw]'>Un accompagnement dans toutes les matières <span className='text-board-black/60'>clés pour réussir</span></div>
                    <div className='flex flex-col lg:gap-[3vw] lg:max-w-[37vw]'>
                        <div className="simpleText flex flex-col items-start justify-start lg:gap-[2vw]">
                            <p>Que votre enfant ait besoin de renforcer ses acquis, de combler certaines difficultés ou de préparer un examen, nous proposons un accompagnement personnalisé dans les principales matières du programme scolaire.</p>
                            <p>Nos professeurs qualifiés interviennent du primaire au lycée afin d'offrir un suivi pédagogique efficace, adapté aux besoins de chaque élève.</p>
                        </div>
                        <div className="flex max-lg:flex-col items-center gap-2 text-board-black max-lg:w-full">
                            <Link href="/" className="max-lg:w-full">
                                <Button className="bg-blue-navy text-white max-lg:w-full">Commencer maintenant</Button>
                            </Link>
                            <Link href="/" className="max-lg:w-full">
                                <Button className="bg-blue-navy/5 text-blue-navy border-2 max-lg:w-full">
                                    <UserFace className="fill-blue-navy opacity-100" />
                                    <div className="">Devenir un professeur</div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-11 overflow-hidden w-full">
                    <div className="flex items-stretch gap-11 -translate-x-5">
                        {
                            subjectSectionData[0].map((ssd) => {
                                return (
                                    <>
                                        <HomeSubject key={ssd.title} {...ssd} />
                                    </>
                                );
                            })
                        }
                    </div>
                    <div className="flex items-center justify-start gap-11 translate-x-[-12vw]">
                        {
                            subjectSectionData[1].map((ssd) => {
                                return (
                                    <>
                                        <HomeSubject key={ssd.title} {...ssd} />
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center justify-center w-full gap-2">
                    <Image src="/images/info.png" className='h-[2vh]' alt="Infos" />
                    Vous ne trouvez pas la matière recherchée ?&nbsp;<Link href="" className='underline underline-offset-4'>Contactez-nous</Link>, nous étudions chaque demande.
                </div>
            </div>
        </section>
    )
}

export default AccompaniementAllKeySubject
