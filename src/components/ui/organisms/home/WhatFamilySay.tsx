"use client"
import React from 'react'
import WhyFamilyCarousel from '../../molecules/WhyFamilyCarousel'
import WhatFamilySayCarousel from '../../molecules/WhatFamilySayCarousel'
import Image from 'next/image'
import { Images } from '@/constants/images'

const WhatFamilySay = () => {
    return (
        <section className='min-h-svh mx-auto flex flex-col items-center pt-20 lg:pt-24 pb-12 lg:pb-30'>
            <div className="w-full max-w-[90%] min-h-svh flex flex-col items-center gap-[12vh]">
                <div className="flex flex-col items-center justify-start lg:max-w-[35vw] gap-4 relative">
                    <Image src={Images.WhatFamilySay} className='h-[14vh] w-auto object-contain' alt="Illustration temoignages des familles" />
                    <div className='title text-center'>Ce que disent les familles</div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <WhatFamilySayCarousel />
                </div>
            </div>
        </section>
    )
}

export default WhatFamilySay
