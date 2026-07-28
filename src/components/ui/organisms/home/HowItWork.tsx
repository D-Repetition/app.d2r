import React from 'react'
import Button from '../../atomes/Button'
import { Arrow } from '@/components/assets/icons'
import { howItWorksData } from '@/constants/homeSectionsData'
import HowItWorkStep from '../../molecules/HowItWorkStep'
import Image from 'next/image'

const HowItWork = () => {
    return (
        <section className='min-h-svh mx-auto flex flex-col items-center pt-20 lg:pt-24 pb-12 lg:pb-30'>
            <div className="w-full max-w-[90%] min-h-svh grid grid-cols-2 gap-[12vh]">
                <div className="flex flex-col items-start justify-between">
                    <div className="flex flex-col items-start gap-8">
                        <h3 className="title">Comment ça fonctionne?</h3>
                        <Button className="bg-blue-navy text-white">
                            <div className="">Voir tout le fonctionnement</div>
                            <Arrow className="fill-white opacity-100" />
                        </Button>
                    </div>
                    <Image src="/images/howItWork.png" className='h-[18vh]' alt="How it work png" />
                </div>
                <div className="flex flex-col justify-between gap-[4vh]">
                    {
                        howItWorksData.map((hiwd, index) => {
                            return (
                                <>
                                    <HowItWorkStep key={index} {...hiwd} />
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWork
