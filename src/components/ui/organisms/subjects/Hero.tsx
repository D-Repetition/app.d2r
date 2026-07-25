"use client"

import Link from "next/link"
import Button from "../../atomes/Button"
import { UserFace } from "@/components/assets/icons"
import WhoWeAreCarousel from "../../molecules/WhoWeAreCarousel"

const Hero = () => {
    return (
        <section className="w-full max-w-[90%] min-h-svh mx-auto flex flex-col items-start pt-24 lg:pt-36 pb-12 lg:pb-10 justify-center gap-6 lg:gap-[75px]">
            <div className="w-full flex flex-col items-center justify-center gap-15">
                <div className="flex flex-col items-center justify-start gap-6 w-full">
                    <div className="title text-center">Un accompagnement dans toutes les matières clés</div>
                    <div className="text-center subtitle font-normal!">Des cours personnalisés pour aider chaque élève à progresser et atteindre ses objectifs.</div>
                </div>
            </div>
        </section>
    )
}

export default Hero
