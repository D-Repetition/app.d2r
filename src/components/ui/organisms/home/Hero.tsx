import Link from "next/link"
import Button from "../../atomes/Button"
import { UserFace } from "@/components/assets/icons"
import Image from "next/image"

import { Images } from "@/constants/images"
import Stats from "../../atomes/Stats"

const Hero = () => {
    return (
        <section className="w-full max-w-[90%] min-h-svh mx-auto flex flex-col items-start pt-30 lg:pt-36 pb-12 lg:pb-10 justify-center gap-6 lg:gap-[75px]">
            <div className="w-full grid grid-cols-1 max-lg:gap-8 lg:grid-cols-2 min-h-[75vh]">
                <div className="flex flex-col items-start justify-center gap-4 max-lg:w-full">
                    <div className="flex flex-col items-start justify-center gap-4 lg:gap-8 lg:max-w-[35vw]">
                        <div className="title max-lg:text-center">Offrez à votre enfant un accompagnement personnalisé vers la <i className="text-blue-navy">réussite scolaire.</i></div>
                        <div className="subtitle max-lg:text-center">Un seul outil pour suivre les cours, coordonner les professeurs et donner aux parents une visibilité totale sur le parcours de leur enfant.</div>
                        <div className="flex max-lg:flex-col items-center gap-2 text-board-black max-lg:w-full">
                            <Link href="/" className="max-lg:w-full">
                                <Button className="bg-blue-navy text-white max-lg:w-full">Commencer maintenant</Button>
                            </Link>
                            <Link href="/" className="max-lg:w-full">
                                <Button className="bg-blue-navy/5 text-blue-navy border-2 max-lg:w-full">
                                    <UserFace className="fill-blue-navy opacity-100" />
                                    <div className="">Devenir un professeur</div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-4xl">
                    <Image src={Images.Hero} className="w-full h-full object-cover" alt="Hero bg" />
                </div>
            </div>
            <Stats />
        </section>
    )
}

export default Hero
