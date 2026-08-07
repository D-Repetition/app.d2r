"use client"

import Link from "next/link"
import Button from "../../atomes/Button"
import { ChevronDown, UserFace } from "@/components/assets/icons"
import WhoWeAreCarousel from "../../molecules/WhoWeAreCarousel"
import { Subject } from "../../molecules/Subject"
import { subjectsData } from "@/constants/sectionsData"
import SearchField from "../../molecules/SearchField"
import Round from "../../atomes/Round"

const Hero = () => {
    return (
        <section className="w-full max-w-[90%] min-h-svh mx-auto flex flex-col items-start pt-30 lg:pt-44 pb-12 lg:pb-10 justify-start gap-6 lg:gap-[75px]">
            <div className="w-full flex flex-col items-center justify-start gap-8 lg:gap-15">
                <div className="flex flex-col items-center justify-start gap-6 w-full">
                    <div className="title text-center">Un accompagnement dans toutes les matières clés</div>
                    <div className="text-center subtitle font-normal!">Des cours personnalisés pour aider chaque élève à progresser et atteindre ses objectifs.</div>
                </div>

                <div className="max-lg:w-full lg:max-w-125 w-full flex items-center justify-center gap-2">
                    <SearchField placeholder="Rechercher une matière" />
                    <Round isActive={true} />
                </div>

                <div className="w-full lg:max-w-[85%] grid max-lg:grid-cols-1 lg:grid-cols-3 max-lg:gap-6 lg:gap-12">
                    {
                        subjectsData.map((sd, index) => {
                            return (
                                <>
                                    <Subject {...sd} />
                                </>
                            );
                        })
                    }
                </div>
                <Button className="bg-board-black/5 text-board-black">
                    <div className="">Voir plus</div>
                    <ChevronDown className="fill-board-black opacity-100" />
                </Button>
            </div>
        </section>
    )
}

export default Hero
