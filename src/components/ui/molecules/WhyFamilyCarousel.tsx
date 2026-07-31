"use client"

import { whyFamilyChooseUsSectionData } from '@/constants/homeSectionsData';
import React from 'react'
import Button from '../atomes/Button';
import Image from 'next/image';

interface WhyFamilyCarouselI {
    whyId?: number;
}

const WhyFamilyCarousel = ({ whyId = 1 }: WhyFamilyCarouselI) => {
    const currentWhyFamilyCarousel = whyFamilyChooseUsSectionData.find(
        ({ id }) => id === whyId
    );
    const currentImg = currentWhyFamilyCarousel?.image;

    return (
        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='grid grid-rows-1 lg:grid-rows-[1fr_70px] gap-2'>
                <div className={[currentWhyFamilyCarousel?.cardBackgroundColor, "rounded-lg order-0 flex flex-col items-start justify-between p-5"].join(" ")}>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <div className="max-lg:text-[18px]! max-lg:leading-[24px]! max-lg:font-dm-serif title2">"{currentWhyFamilyCarousel?.title}"</div>
                        <div className="max-lg:text-[14px]! max-lg:leading-[20px]! max-lg:font-inter simpleText2">{currentWhyFamilyCarousel?.description}</div>
                    </div>
                    <Button className={[`${currentWhyFamilyCarousel?.buttonBackground} ${currentWhyFamilyCarousel?.buttonLabelColor}`, "max-lg:mt-6"].join(" ")}>{currentWhyFamilyCarousel?.buttonLabel}</Button>
                </div>
            </div>
            <div className='grid grid-rows-1 lg:grid-rows-[70px_1fr] gap-2'>
                <div className='lg:block hidden' />
                <div className="order-2 overflow-hidden rounded-lg max-lg:max-h-75">
                    {currentImg && <Image src={currentImg} className='h-full w-full object-cover max-lg:object-top' alt={currentWhyFamilyCarousel?.title!} />}
                </div>
            </div>
        </div>
    )
}

export default WhyFamilyCarousel
