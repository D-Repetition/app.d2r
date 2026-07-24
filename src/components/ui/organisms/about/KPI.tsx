import Link from 'next/link'
import React from 'react'
import Button from '../../atomes/Button'
import { UserFace } from '@/components/assets/icons'

const KPI = () => {
    return (
        <section className='h-fit w-full'>
            <div className="w-full max-w-[90%] mx-auto min-h-[80vh] flex flex-col items-center justify-between py-[6vh] gap-12">
                <div className="flex items-start justify-between gap-6 w-full h-[40vh]">
                    <div className="flex flex-col items-start justify-start gap-2 text-board-black max-w-[45%] h-full">
                        <div className="text-[1.4vw] text-start">Chiffres clés</div>
                        <div className="title text-start">D²Répétition en quelques chiffres</div>
                    </div>
                    <div className="flex flex-col items-start justify-end gap-6 h-full max-w-[45%]">
                        <div className="flex flex-col items-start justify-start gap-6">
                            <p className="lg:text-[1.2vw]">Depuis sa création, D²Répétition accompagne chaque année davantage d'élèves et de familles avec le même niveau d'exigence.</p>
                            <Link href="/" className="max-lg:w-full">
                                <Button className="bg-blue-navy/5 text-board-black border-2 border-board-black max-lg:w-full">
                                    <UserFace className="fill-board-black opacity-100" />
                                    <div className="">Nous rejoindre</div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-11">
                    <div className="w-full max-lg:grid max-lg:grid-cols-3 max-lg:gap-2 gap-y-8 lg:flex items-center justify-between">
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <div className="title">3+</div>
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Année d'éxpérience</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <div className="title">458</div>
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Élèves accompagnés</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <div className="title">35</div>
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Enseignants <br className="hidden max-lg:block " /> actifs</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <div className="title">97%</div>
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Satisfaction des familles</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <div className="title">10+</div>
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Matières enseignées</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <div className="title">4</div>
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Langues proposées</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KPI  
