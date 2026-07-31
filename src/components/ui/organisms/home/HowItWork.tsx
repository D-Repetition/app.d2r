import React from 'react'
import Button from '../../atomes/Button'
import { Arrow } from '@/components/assets/icons'
import { howItWorksData } from '@/constants/sectionsData'
import HowItWorkStep from '../../molecules/HowItWorkStep'
import Image from 'next/image'
import { Images } from '@/constants/images'

const HowItWork = () => {
    return (
        <section className='min-h-svh mx-auto flex flex-col items-center pt-20 lg:pt-24 pb-12 lg:pb-30'>
            <div className="w-full max-w-[90%] min-h-svh grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[12vh]">
                <div className="flex flex-col-reverse max-lg:gap-4 lg:flex-col items-start justify-between">
                    <div className="flex flex-col items-start gap-4 lg:gap-8">
                        <h3 className="title">Comment ça fonctionne?</h3>
                        <Button className="bg-blue-navy text-white">
                            <div className="">Voir tout le fonctionnement</div>
                            <Arrow className="fill-white opacity-100" />
                        </Button>
                    </div>
                    <Image src={Images.HowItWork} className='h-18 lg:h-[18vh] w-auto object-contain' alt="Illustration du fonctionnement de D2Repetition" />
                </div>
                <div className="flex flex-col justify-between gap-[4vh]">
                    {
                        howItWorksData.map((hiwd, index) => (
                            <HowItWorkStep key={index} {...hiwd} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWork
