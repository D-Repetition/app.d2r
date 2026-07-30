import Link from 'next/link'
import React from 'react'
import Button from '../../atomes/Button'
import { UserFace } from '@/components/assets/icons'
import Stats from '../../atomes/Stats'

const KPI = () => {
    return (
        <section className='h-fit w-full'>
            <div className="w-full max-w-[90%] mx-auto lg:min-h-[80vh] flex flex-col items-center justify-between py-[6vh] gap-12">
                <div className="flex max-lg:flex-col items-start justify-between gap-6 w-full lg:h-[40vh]">
                    <div className="flex flex-col items-start justify-start gap-2 text-board-black max-lg:max-w-[90%] lg:max-w-[45%] h-full">
                        <div className="lg:text-[1.4vw] text-start">Chiffres clés</div>
                        <div className="title text-start">D²Répétition en quelques chiffres</div>
                    </div>
                    <div className="flex flex-col items-start justify-end gap-6 h-full max-lg:max-w-[90%] lg:max-w-[45%]">
                        <div className="flex flex-col items-start justify-start gap-6">
                            <p className="max-lg:text-[14px ] lg:text-[1.2vw]">Depuis sa création, D²Répétition accompagne chaque année davantage d'élèves et de familles avec le même niveau d'exigence.</p>
                            <Link href="/" className="">
                                <Button className="bg-blue-navy/5 text-board-black border-2 border-board-black">
                                    <UserFace className="fill-board-black opacity-100" />
                                    <div className="">Nous rejoindre</div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-11">
                    <Stats />
                </div>
            </div>
        </section>
    )
}

export default KPI  
