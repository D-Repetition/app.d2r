"use client"

import Link from "next/link"
import Button from "../../atomes/Button"
import { ChevronDown, UserFace } from "@/components/assets/icons"
import WhoWeAreCarousel from "../../molecules/WhoWeAreCarousel"
import { Subject } from "../../molecules/Subject"
import { subjectsData } from "@/constants/homeSectionsData"
import SearchField from "../../molecules/SearchField"
import Round from "../../atomes/Round"

const Hero = () => {
    return (
        <section className="w-full min-h-svh mx-auto flex flex-col items-center pt-24 lg:pt-44 pb-12 lg:pb-10 justify-center gap-6 lg:gap-[75px]">
            <div className="w-full flex flex-col items-center justify-start gap-15">
                <div className="flex flex-col items-center justify-start gap-8 w-full">
                    <div className="title text-center max-w-[60%]">Un accompagnement simple, <br className="lg:block hidden" />transparent et pensé pour votre enfant</div>
                    <div className="text-center subtitle font-normal! max-w-[40%]">De l'inscription au suivi pédagogique, découvrez comment <br className="lg:block hidden" /> D²Répétition accompagne chaque élève et sa famille à chaque étape.</div>
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
                </div>
                <img src="/images/how-it-work/hero.png" className="h-[22.5vh]" alt="Users" />
            </div>
        </section>
    )
}

export default Hero
