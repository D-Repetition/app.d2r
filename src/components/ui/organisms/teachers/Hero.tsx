"use client"

import Link from "next/link"
import Button from "../../atomes/Button"
import { UserFace } from "@/components/assets/icons"
import Image from 'next/image'
import { Images } from "@/constants/images"


const Hero = () => {
    return (
        <section className="w-full min-h-svh mx-auto flex flex-col items-center pt-30 lg:pt-44 pb-12 lg:pb-10 justify-center gap-6 lg:gap-[75px]">
            <div className="w-full flex flex-col items-center justify-start gap-15">
                <div className="flex flex-col items-center justify-start gap-8 w-full">
                    <div className="title text-center max-w-[60%]">Des enseignants sélectionnés pour accompagner chaque réussite</div>
                    <div className="text-center subtitle font-normal! max-w-[40%]">Tous nos enseignants sont rigoureusement sélectionnés pour leurs compétences, leur pédagogie et leur engagement afin d'offrir un accompagnement de qualité à chaque élève.</div>
                    <div className="max-lg:flex max-lg:flex-col items-center gap-2 text-board-black max-lg:w-[400px] lg:grid grid-cols-2">
                        <Link href="/" className="w-full">
                            <Button className="bg-blue-navy text-white w-full">Inscrire mon enfant </Button>
                        </Link>
                        <Link href="/" className="w-full">
                            <Button className="w-full bg-blue-navy/5 text-blue-navy border-2 max-lg:w-full">
                                <UserFace className="fill-blue-navy opacity-100" />
                                <div className="">Devenir un professeur</div>
                            </Button>
                        </Link>
                    </div>
                    <Image src={Images.Users} className="h-[8vh] w-auto object-contain" alt="Illustration enseignants et eleves" />
                    <div className="flex items-center justify-center gap-2"><Image src={Images.Verify} className="w-auto object-contain" alt="Badge verification des enseignants" /><span className="">Plus de 50 répétiteurs vérifiés</span></div>
                    <div className="marquee-container">
                        <div className="marquee-track">
                            <Image src={Images.TeacherHorizScroll} alt="Bandeau de photos des enseignants" />
                            <Image src={Images.TeacherHorizScroll} alt="Bandeau de photos des enseignants" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
