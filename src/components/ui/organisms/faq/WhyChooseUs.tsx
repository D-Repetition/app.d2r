import Link from 'next/link'
import Image from 'next/image'
import Button from '../../atomes/Button'
import { UserFace } from '@/components/assets/icons'
import { Images } from '@/constants/images'

const WhyChooseUs = () => {
    return (
        <section className='h-fit w-full'>
            <div className="w-full max-w-[90%] mx-auto min-h-[80vh] flex flex-col items-center justify-between max-lg:py-12 lg:py-[8vh] gap-12">
                <div className="flex items-start justify-between gap-6 w-full min-h-[40vh]">
                    <div className="flex flex-col items-start justify-start w-full gap-10">
                        <div className="flex flex-col items-start justify-start gap-2 text-board-black h-full">
                            <div className="title text-start">Pourquoi choisir D²Répétition ?</div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-6 h-full lg:max-w-[80%]">
                            <div className="flex flex-col items-start justify-start gap-6">
                                <p className="lg:text-[1.2vw]">D²Répétition associe expertise pédagogique, suivi personnalisé et outils numériques pour offrir aux familles un accompagnement scolaire transparent, structuré et efficace. Chaque élève bénéficie d'un encadrement adapté à ses besoins et à ses objectifs.</p>
                                <div className="max-lg:flex max-lg:flex-col items-center gap-2 text-board-black max-lg:w-full lg:grid grid-cols-2">
                                    <Link href="/" className="w-full">
                                        <Button className="bg-blue-navy text-white w-full">
                                            <UserFace className="fill-white opacity-100" />
                                            <div className="">Inscrire mon enfant</div>
                                        </Button>
                                    </Link>
                                    <Link href="/comment-ca-marche" className="w-full">
                                        <Button className="w-full bg-blue-navy/5 text-board-black max-lg:w-full">
                                            <div className="">Découvrir notre approche</div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={Images.WhyChooseUsIllustration1} className='max-lg:hidden h-[20vh] w-auto object-contain' alt="Illustration pourquoi choisir D2Repetition" />
                </div>
                <div className="w-full grid max-lg:grid-cols-3 lg:grid-cols-6">
                    <div className="p-4 flex flex-col lg:items-start items-center gap-3 bg-shade-cyan">
                        <div className="title">3+</div>
                        <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Année d'éxpérience</div>
                    </div>
                    <div className="p-4 flex flex-col lg:items-start items-center gap-3 bg-marigold-amber">
                        <div className="title">458</div>
                        <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Élèves accompagnés</div>
                    </div>
                    <div className="p-4 flex flex-col lg:items-start items-center gap-3 bg-poppy-red">
                        <div className="title">35</div>
                        <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Enseignants <br className="hidden max-lg:block " /> actifs</div>
                    </div>
                    <div className="p-4 flex flex-col lg:items-start items-center gap-3 bg-shade-cyan">
                        <div className="title">97%</div>
                        <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Satisfaction des familles</div>
                    </div>
                    <div className="p-4 flex flex-col lg:items-start items-center gap-3 bg-marigold-amber">
                        <div className="title">10+</div>
                        <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Matières enseignées</div>
                    </div>
                    <div className="p-4 flex flex-col lg:items-start items-center gap-3 bg-poppy-red">
                        <div className="title">4</div>
                        <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Langues proposées</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
