import Image from 'next/image'
import React from 'react'

const OurMissionAndVision = () => {
    return (
        <section className='min-h-svh w-full relative'>
            <Image src="/images/curve-cyan.png" className='absolute left-0 bottom-0 h-[30vh]' alt="Motif decoratif cyan" />
            <div className="w-full max-w-[75%] mx-auto min-h-svh flex flex-col items-center justify-between py-[6vh] gap-20">
                <div className="lg:text-[1.4vw] text-center">Mission & Vision</div>
                <div className="w-full h-[85vh] grid grid-cols-2 gap-[8vw]">
                    <div className="flex flex-col items-start">
                        <div className="flex flex-col items-start justify-start gap-8 lg:gap-[3vh]">
                            <div className="flex flex-col items-start justify-start gap-1">
                                <Image src="/images/goat.png" className="h-[10vh]" alt="Illustration de notre mission educative" />

                                <div className="title">
                                    Notre mission
                                </div></div>

                            <div className="lg:text-[1vw] font-medium">Offrir à chaque apprenant un accompagnement scolaire personnalisé, rigoureux et innovant grâce à des enseignants compétents, un suivi pédagogique permanent et des méthodes inspirées des neurosciences éducatives.</div>
                            <div className="flex items-start gap-9">
                                <div className="flex flex-col items-start gap-3">
                                    <Image src="/images/student.png" className="h-[4vh]" alt="Icone eleves accompagnes" />
                                    <div className="lg:text-[1vw] font-medium">458+ Élèves accompagnés</div>
                                    <div className="lg:text-[.85vw] font-normal">Depuis notre création</div>
                                </div>
                                <div className="flex flex-col items-start gap-3">
                                    <Image src="/images/teacher.png" className="h-[4vh]" alt="Icone enseignants actifs" />
                                    <div className="lg:text-[1vw] font-medium">35 Enseignants actifs</div>
                                    <div className="lg:text-[.85vw] font-normal">Sélectionnés et accompagnés</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <div className="flex flex-col items-start justify-center gap-8 lg:gap-[3vh]">
                            <div className="flex flex-col items-start justify-start gap-1">
                                <Image src="/images/lion.png" className="h-[10vh]" alt="Illustration de notre vision educative" />

                                <div className="title">
                                    Notre vision
                                </div></div>

                            <div className="lg:text-[1vw] font-medium">Devenir la référence en Afrique dans l'accompagnement scolaire personnalisé en développant un écosystème éducatif innovant intégrant les technologies numériques, les neurosciences éducatives et des pratiques pédagogiques centrées sur la réussite de chaque élève.</div>
                            <div className="flex items-start gap-9">
                                <div className="flex flex-col items-start gap-3">
                                    <Image src="/images/student.png" className="h-[4vh]" alt="Icone annees d experience" />
                                    <div className="lg:text-[1vw] font-medium">3+ Années d'expérience</div>
                                    <div className="lg:text-[.85vw] font-normal">Depuis 2023</div>
                                </div>
                                <div className="flex flex-col items-start gap-3">
                                    <Image src="/images/teacher.png" className="h-[4vh]" alt="Icone satisfaction des familles" />
                                    <div className="lg:text-[1vw] font-medium">97 % Familles satisfaites</div>
                                    <div className="lg:text-[.85vw] font-normal">Un accompagnement reconnu</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMissionAndVision
