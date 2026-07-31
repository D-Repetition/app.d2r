import Link from 'next/link'
import React from 'react'
import Button from '../../atomes/Button'
import { UserFace } from '@/components/assets/icons'
import { subjectSectionData } from '@/constants/sectionsData'
import { HomeSubject } from '../../molecules/Subject'
import Image from 'next/image'

import { Images } from '@/constants/images'

const AccompaniementAllKeySubject = () => {
    return (
        <section className='lg:min-h-svh mx-auto flex flex-col items-start lg:pt-20 lg:pt-24 pb-6 lg:pb-10'>
            <div className="w-full min-h-svh flex flex-col items-center gap-8 lg:gap-[12vh]">
                <div className="w-full max-w-[90%] flex max-lg:flex-col items-start justify-between max-lg:gap-3">
                    <div className='title lg:max-w-[34vw]'>Un accompagnement dans toutes les matières <span className='text-board-black/60'>clés pour réussir</span></div>
                    <div className='flex flex-col gap-3 lg:gap-[3vw] lg:max-w-[37vw]'>
                        <div className="max-lg:subtitle! lg:simpleText flex flex-col items-start justify-start gap-3 lg:gap-[2vw]">
                            <p>Que votre enfant ait besoin de renforcer ses acquis, de combler certaines difficultés ou de préparer un examen, nous proposons un accompagnement personnalisé dans les principales matières du programme scolaire.</p>
                            <p>Nos professeurs qualifiés interviennent du primaire au lycée afin d'offrir un suivi pédagogique efficace, adapté aux besoins de chaque élève.</p>
                        </div>
                        <div className="flex max-lg:gap-4 items-center gap-2 text-board-black">
                            <Link href="/" className="max-lg:w-full max-lg:mt-4">
                                <Button className="bg-blue-navy text-white">Commencer maintenant</Button>
                            </Link>
                            <Link href="/" className="max-lg:w-full lg:block hidden">
                                <Button className="bg-blue-navy/5 text-blue-navy border-2 max-lg:w-full">
                                    <UserFace className="fill-blue-navy opacity-100" />
                                    <div className="">Devenir un professeur</div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="max-lg:mx-auto max-lg:max-w-[90%] flex max-lg:items-center max-lg:justify-start lg:flex-col gap-8 lg:gap-11 max-lg:overflow-y-hidden max-lg:overflow-x-scroll lg:overflow-hidden w-full max-lg:no-scrollbar">
                    <div className="flex lg:items-stretch gap-8 lg:gap-11 lg:-translate-x-5 w-auto shrink-0">
                        {
                            subjectSectionData[0].map((ssd) => {
                                return (
                                    <HomeSubject key={ssd.title} {...ssd} />
                                );
                            })
                        }
                    </div>
                    <div className="flex lg:items-center lg:justify-start gap-8 lg:gap-11 lg:translate-x-[-12vw] w-auto shrink-0">
                        {
                            subjectSectionData[1].map((ssd) => {
                                return (
                                    <HomeSubject key={ssd.title} {...ssd} />
                                );
                            })
                        }
                    </div>
                </div>
                <div className="max-lg:mx-auto max-lg:max-w-[90%] lg:flex lg:items-center lg:justify-center w-full lg:gap-2 max-lg:text-[14px]">
                    <Image src={Images.Info} className='h-[2vh] w-auto object-contain max-lg:hidden' alt="Icone information" />
                    <span>Vous ne trouvez pas la matière recherchée ?&nbsp;</span><Link href="" className='underline underline-offset-4 max-lg:text-blue-navy'>Contactez-nous</Link><span>, nous étudions chaque demande.</span>
                </div>
            </div>
        </section>
    )
}

export default AccompaniementAllKeySubject
