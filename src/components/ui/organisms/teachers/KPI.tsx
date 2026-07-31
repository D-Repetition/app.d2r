import Link from 'next/link'
import React from 'react'
import Button from '../../atomes/Button'
import { UserFace } from '@/components/assets/icons'
import Stats from '../../atomes/Stats'

const KPI = () => {
    return (
        <section className='h-fit w-full'>
            <div className="w-full max-w-[90%] mx-auto min-h-[80vh] flex flex-col items-center justify-between py-[6vh] gap-12">
                <div className="flex max-lg:flex-col items-start justify-between gap-6 w-full h-[40vh]">
                    <div className="flex flex-col items-start justify-start gap-2 text-board-black max-lg:max-w-full lg:max-w-[45%] h-full">
                        <div className="lg:text-[1.4vw] text-start">Chiffres clés</div>
                        <div className="title text-start">Des résultats qui témoignent de notre engagement</div>
                    </div>
                    <div className="flex flex-col items-start justify-end gap-6 h-full max-lg:max-w-full lg:max-w-[45%]">
                        <div className="flex flex-col items-start justify-start gap-6">
                            <p className="lg:text-[1.2vw]">Depuis notre création, nous accompagnons chaque élève avec la même exigence de qualité, de transparence et de réussite. Ces chiffres reflètent la confiance que nous accordent les familles.</p>
                            <Link href="/" className="">
                                <Button className="bg-blue-navy/5 text-board-black border-2 border-board-black">
                                    <UserFace className="fill-board-black opacity-100" />
                                    <div className="">Nous rejoindre</div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="max-lg:hidden w-full flex flex-col items-center justify-start gap-11">
                    <div className="w-full max-lg:grid max-lg:grid-cols-3 max-lg:gap-2 gap-y-8 lg:flex items-center justify-between">
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <div className="title">35</div>
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Enseignants actifs</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <div className="title">458</div>
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Élèves accompagnés</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <div className="title">97%</div>
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Satisfaction des familles</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <div className="title">3+</div>
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Années d'expérience</div>
                        </div>
                    </div>
                </div>
                <div className="hidden max-lg:block w-full">
                    <Stats />
                </div>
            </div>
        </section>
    )
}

export default KPI  
