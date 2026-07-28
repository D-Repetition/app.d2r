import Link from "next/link"
import Button from "../../atomes/Button"
import { UserFace } from "@/components/assets/icons"
import Image from "next/image"

const Hero = () => {
    return (
        <section className="w-full max-w-[90%] min-h-svh mx-auto flex flex-col items-start pt-24 lg:pt-36 pb-12 lg:pb-10 justify-center gap-6 lg:gap-[75px]">
            <div className="w-full grid grid-cols-1 max-lg:gap-8 lg:grid-cols-2 min-h-[75vh]">
                <div className="flex flex-col items-start justify-center gap-4 max-lg:w-full">
                    <div className="flex flex-col items-start justify-center gap-4 lg:gap-8 lg:max-w-[35vw]">
                        <div className="title max-lg:text-center">Votre enfant mérite un suivi sur mesure, pas une <i className="text-blue-navy">répétition</i> au hasard.</div>
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
                    <Image src="/images/hero.png" className="w-full h-full object-cover" alt="Hero bg" />
                </div>
            </div>
            <div className="w-full max-lg:grid max-lg:grid-cols-3 max-lg:gap-2 gap-y-8 lg:flex items-center justify-between">
                <div className="flex flex-col lg:items-start items-center gap-3">
                    <div className="title">3+</div>
                    <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Année d'éxpérience</div>
                </div>
                <div className="flex flex-col lg:items-start items-center gap-3">
                    <div className="title">458</div>
                    <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Élèves accompagnés</div>
                </div>
                <div className="flex flex-col lg:items-start items-center gap-3">
                    <div className="title">35</div>
                    <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Enseignants <br className="hidden max-lg:block " /> actifs</div>
                </div>
                <div className="flex flex-col lg:items-start items-center gap-3">
                    <div className="title">97%</div>
                    <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Satisfaction des familles</div>
                </div>
                <div className="flex flex-col lg:items-start items-center gap-3">
                    <div className="title">10+</div>
                    <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Matières enseignées</div>
                </div>
                <div className="flex flex-col lg:items-start items-center gap-3">
                    <div className="title">4</div>
                    <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Langues proposées</div>
                </div>
            </div>
        </section>
    )
}

export default Hero
