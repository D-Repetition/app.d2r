"use client"

import { whyFamilyChooseUsSectionData } from '@/constants/homeSectionsData';
import React, { useState } from 'react'
import Button from '../atomes/Button';
import Image from 'next/image';

interface WhyFamilyCarouselI {
    whyId?: number;
}

const WhyFamilyCarousel = ({ whyId = 1 }: WhyFamilyCarouselI) => {
    const currentWhyFamilyCarousel = whyFamilyChooseUsSectionData.find(
        ({ id }) => id === whyId
    );
    return (
        <div className='w-full h-full grid grid-cols-2 gap-6'>
            <div className='grid grid-rows-[1fr_70px] gap-2'>
                <div className={[currentWhyFamilyCarousel?.cardBackgroundColor, "rounded-lg order-0 flex flex-col items-start justify-between p-5"].join(" ")}>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <div className="title2">"{currentWhyFamilyCarousel?.title}"</div>
                        <div className="simpleText2">{currentWhyFamilyCarousel?.description}</div>
                    </div>
                    <Button className={[`${currentWhyFamilyCarousel?.buttonBackground} ${currentWhyFamilyCarousel?.buttonLabelColor}`].join(" ")}>{currentWhyFamilyCarousel?.buttonLabel}</Button>
                </div>
            </div>
            <div className='grid grid-rows-[70px_1fr] gap-2'>
                <div />
                <div className="order-2 overflow-hidden rounded-lg">
                    <Image src={`/images/${currentWhyFamilyCarousel?.image}`} className='h-full w-full object-cover' alt={currentWhyFamilyCarousel?.title!} />
                </div>
            </div>
        </div>
    )
}

export default WhyFamilyCarousel
