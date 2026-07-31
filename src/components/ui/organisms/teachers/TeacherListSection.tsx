"use client"

import React from 'react'
import SearchField from '../../molecules/SearchField';
import Round from '../../atomes/Round';
import Button from '../../atomes/Button';
import { teacherCtaSection, teachers } from '@/constants/sectionsData'
import { ChevronDown } from '@/components/assets/icons';
import TeacherCard from '../../molecules/TeacherCard';

const TeacherListSection = () => {
    return (
        <section className="w-full max-w-[90%] min-h-svh mx-auto flex flex-col items-start pt-24 lg:pt-44 pb-12 lg:pb-10 justify-start gap-6 lg:gap-[75px]">
            <div className="w-full flex flex-col items-center justify-start gap-15">
                <div className="flex flex-col items-center justify-start gap-6 w-full">
                    <div className="title text-center">Des profils variés, une même exigence de qualité</div>
                    <div className="text-center subtitle font-normal! lg:max-w-[55%]">Chaque professeur intègre la plateforme après une sélection rigoureuse. Diplômes, expérience et pédagogie sont vérifiés avant toute affectation.</div>
                </div>

                <div className="max-w-125 flex items-center justify-center gap-2">
                    <SearchField placeholder="Rechercher un enseignant" />
                    <Round isActive={true} />
                </div>

                <div className="w-full grid max-lg:grid-cols-1 lg:grid-cols-3 gap-6">
                    {[...teachers].map((teacher, index) => (
                        <TeacherCard
                            className='w-full!'
                            key={`${index}`}
                            {...teacher}
                            isTrueCard={true}
                        />
                    ))}
                </div>
                <Button className="bg-board-black/5 text-board-black">
                    <div className="">Voir plus</div>
                    <ChevronDown className="fill-board-black opacity-100" />
                </Button>
            </div>
        </section>
    )
}

export default TeacherListSection
