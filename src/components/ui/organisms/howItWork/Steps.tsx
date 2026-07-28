"use client"

import Image from 'next/image'


const Steps = () => {
    return (
        <section className="w-full min-h-svh mx-auto flex flex-col items-center pt-24 lg:pt-44 pb-12 lg:pb-16 justify-start gap-6 lg:gap-[75px]">
            <div className="w-full mx-auto max-w-[90%] flex flex-col items-center justify-start gap-[14vh]">
                <div className="flex flex-col items-center justify-start gap-8 w-full">
                    <div className="title text-center max-w-[60%]">Votre parcours en 4 étapes</div>
                    <div className="text-center subtitle font-normal! max-w-[40%]">Notre processus est conçu pour offrir un accompagnement personnalisé dès le premier contact.</div>
                </div>
                <div className="grid grid-cols-[2fr_1fr] w-full">
                    <div className="flex flex-col justify-between gap-[6vh]">
                        <div className="flex items-start justify-start gap-[2vw]">
                            <Image src="/images/how-it-work/one.png" className="h-[16vh]" alt="One" />
                            <div className="flex flex-col gap-3 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                    <div className="lg:text-[1.2vw]">Inscription</div>
                                    <div className="lg:text-[1.6vw] font-medium">Déposez votre demande</div>
                                </div>
                                <div className="lg:text-[1vw] text-board-black/60 max-w-[60%]">Remplissez le formulaire d'inscription avec les informations de votre enfant et les matières souhaitées. Notre équipe prend contact avec vous sous 48 heures.</div>
                            </div>
                        </div>
                        <div className="flex items-start justify-start gap-[2vw] w-full">
                            <Image src="/images/how-it-work/two.png" className="h-[16vh]" alt="One" />
                            <div className="flex flex-col gap-3 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start">
                                    <div className="lg:text-[1.2vw]">Analyse des besoins</div>
                                    <div className="lg:text-[1.6vw] font-medium">Nous étudions le profil de votre enfant</div>
                                </div>
                                <div className="lg:text-[1vw] text-board-black/60 max-w-[60%]">Nous analysons son niveau, ses objectifs et ses difficultés afin de proposer un accompagnement adapté et sélectionner le professeur le plus qualifié.</div>
                            </div>
                        </div>
                        <div className="flex items-start justify-start gap-[2vw] w-full">
                            <Image src="/images/how-it-work/three.png" className="h-[16vh]" alt="One" />
                            <div className="flex flex-col gap-3 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start">
                                    <div className="lg:text-[1.2vw]">Affectation du professeur</div>
                                    <div className="lg:text-[1.6vw] font-medium">Nous sélectionnons le meilleur enseignant</div>
                                </div>
                                <div className="lg:text-[1vw] text-board-black/60 max-w-[60%]">Un professeur est choisi selon ses compétences, son expérience et sa pédagogie. Vous recevez ensuite toutes les informations concernant son affectation.</div>
                            </div>
                        </div>
                        <div className="flex items-start justify-start gap-[2vw] w-full">
                            <Image src="/images/how-it-work/four.png" className="h-[16vh]" alt="One" />
                            <div className="flex flex-col gap-3 items-start justify-start w-full">
                                <div className="flex flex-col items-start justify-start">
                                    <div className="lg:text-[1.2vw]">Suivi pédagogique</div>
                                    <div className="lg:text-[1.6vw] font-medium">Un accompagnement continu</div>
                                </div>
                                <div className="lg:text-[1vw] text-board-black/60 max-w-[60%]">Après chaque séance, un compte rendu est disponible et les parents peuvent suivre les progrès, les objectifs et l'évolution de leur enfant.</div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-end justify-end">
                        <Image src="/images/how-it-work/illustration.png" className="h-[80vh]" alt="How it work illustration" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps
