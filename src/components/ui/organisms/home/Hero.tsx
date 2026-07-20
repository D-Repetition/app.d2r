import Link from "next/link"
import Button from "../../atomes/Button"
import { UserFace } from "@/components/assets/icons"

const Hero = () => {
    return (
        <section className="w-full max-w-[90%] min-h-svh mx-auto flex flex-col items-start pt-40 justify-center gap-[75px]">
            <div className="w-full grid grid-cols-2 min-h-[75vh]">
                <div className="flex flex-col items-start justify-center gap-4">
                    <div className="flex flex-col items-start justify-center gap-8 max-w-[35vw]">
                        <div className="title">Votre enfant mérite un suivi sur mesure, pas une <i className="text-blue-navy">répétition</i> au hasard.</div>
                        <div className="subtitle">Un seul outil pour suivre les cours, coordonner les professeurs et donner aux parents une visibilité totale sur le parcours de leur enfant.</div>
                        <div className="flex items-center gap-2 text-board-black">
                            <Link href="/" className="">
                                <Button className="bg-blue-navy text-white">Commencer maintenant</Button>
                            </Link>
                            <Link href="/" className="">
                                <Button className="bg-blue-navy/5 text-blue-navy border-2">
                                    <UserFace className="fill-blue-navy opacity-100" />
                                    <div className="">Devenir un professeur</div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-4xl">
                    <img src="/images/hero.png" className="w-full h-full object-cover" alt="Hero bg" />
                </div>
            </div>
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-col items-start gap-3">
                    <div className="title">3+</div>
                    <div className="subtitle font-normal!">Année d'éxpérience</div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <div className="title">458</div>
                    <div className="subtitle font-normal!">Élèves accompagnés</div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <div className="title">35</div>
                    <div className="subtitle font-normal!">Enseignants actifs</div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <div className="title">97%</div>
                    <div className="subtitle font-normal!">Satisfaction des familles</div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <div className="title">10+</div>
                    <div className="subtitle font-normal!">Matières enseignées</div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <div className="title">4</div>
                    <div className="subtitle font-normal!">Langues proposées</div>
                </div>
            </div>
        </section>
    )
}

export default Hero
