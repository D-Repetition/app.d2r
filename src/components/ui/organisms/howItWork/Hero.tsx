"use client"

import Link from "next/link"
import Button from "../../atomes/Button"
import { ChevronDown, UserFace } from "@/components/assets/icons"
import WhoWeAreCarousel from "../../molecules/WhoWeAreCarousel"
import { Subject } from "../../molecules/Subject"
import { subjectsData } from "@/constants/homeSectionsData"
import SearchField from "../../molecules/SearchField"
import Round from "../../atomes/Round"
import Image from "next/image"
import { Images } from "@/constants/images"

const Hero = () => {
    return (
        <section className="w-full min-h-svh mx-auto flex flex-col items-center pt-30 lg:pt-44 pb-12 lg:pb-10 justify-center gap-6 lg:gap-[75px]">
            <div className="w-full flex flex-col items-center justify-start max-lg:gap-8 lg:gap-15">
                <div className="flex flex-col items-center justify-start gap-8 w-full max-lg:max-w-[90%]">
                    <div className="title text-center lg:max-w-[60%]">Un accompagnement simple, <br className="lg:block hidden" />transparent et pensé pour votre enfant</div>
                    <div className="text-center subtitle font-normal! lg:max-w-[40%]">De l'inscription au suivi pédagogique, découvrez comment <br className="lg:block hidden" /> D²Répétition accompagne chaque élève et sa famille à chaque étape.</div>
                    <div className="max-lg:flex max-lg:flex-col items-center gap-2 text-board-black max-lg:w-full lg:grid grid-cols-2">
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
                <Image src={Images.HowItWorkHero} className="max-lg:h-24 lg:h-[22.5vh] w-auto object-contain" alt="Illustration du parcours d accompagnement" />
            </div>
        </section>
    )
}

export default Hero
