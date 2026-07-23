import Link from 'next/link'
import React from 'react'
import Button from '../../atomes/Button'
import { Arrow } from '@/components/assets/icons'
import { teachers } from '@/constants/homeSectionsData'
import TeacherCard from '../../molecules/TeacherCard'

const Teachers = () => {
    return (
        <section className='min-h-svh mx-auto flex flex-col items-start pt-20 lg:pt-24 pb-12 lg:pb-30'>
            <div className="w-full min-h-svh flex flex-col items-center gap-[12vh]">
                <div className="flex flex-col items-center justify-start lg:max-w-[35vw] gap-4 relative">
                    <img src='/images/teacherIllustration.png' className='absolute -bottom-8 left-[-6vw] h-[65%]' alt="" />

                    <div className='title text-center'>Des professeurs à la hauteur de vos attentes</div>
                    <div className="simpleText text-center">Chaque professeur intègre la plateforme après une sélection rigoureuse. Diplômes, expérience et pédagogie sont vérifiés avant toute affectation.</div>
                </div>
                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max items-stretch gap-6 animate-marquee">
                        {[...teachers, ...teachers].map((teacher, index) => (
                            <TeacherCard
                                key={`${teacher.full_name}-${index}`}
                                {...teacher}
                            />
                        ))}
                    </div>
                </div>
                <Link href="/" className="">
                    <Button className="bg-blue-navy/5 text-blue-navy border border-[2px] border-blue-navy">
                        <div className="">Voir tous nos professeurs</div>
                        <Arrow className="fill-blue-navy opacity-100" />
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default Teachers
