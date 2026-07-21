import Link from 'next/link'
import React from 'react'
import Button from '../../atomes/Button'
import { UserFace } from '@/components/assets/icons'

const AccompaniementAllKeySubject = () => {
    return (
        <section className='w-full max-w-[90%] min-h-svh mx-auto flex flex-col items-start pt-20 lg:pt-24 pb-12 lg:pb-10'>
            <div className="w-full min-h-svh flex flex-col items-center">
                <div className="w-full flex items-start justify-between">
                    <div className='title lg:max-w-[35vw]'>Un accompagnement dans toutes les matières <span className='text-board-black/60'>clés pour réussir</span></div>
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
                <div className="">
                    
                </div>
            </div>
        </section>
    )
}

export default AccompaniementAllKeySubject
