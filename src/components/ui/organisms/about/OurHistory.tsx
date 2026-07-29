import { Images } from '@/constants/images'
import Image from 'next/image'
import React from 'react'

const OurHistory = () => {
    return (
        <section className='min-h-svh w-full bg-board-black relative'>
            <div className="w-full max-w-[90%] mx-auto min-h-svh flex flex-col items-start justify-between py-[6vh]">
                <div className="flex flex-col items-start justify-start gap-10.5">
                    <div className="flex flex-col items-start justify-start gap-2 text-white">
                        <div className="lg:text-[1.4vw]">Notre histore</div>
                        <div className="title">Une vision née d'un besoin réel</div>
                    </div>
                    <p className="max-w-[45%] lg:text-[1.25vw] leading-[2.2vw] text-white/80">
                        “ Créée en <span className='text-bold-white'>2023</span> , D²Répétition est née d'un constat simple : de nombreux élèves rencontrent des difficultés scolaires malgré les efforts des <span className='text-bold-white'>familles</span> et des <span className='text-bold-white'>enseignants</span>.
                        <br />
                        <br />
                        Nous avons choisi de repenser les cours de répétition en proposant un <span className='text-bold-white'>accompagnement structuré</span>, un <span className='text-bold-white'>suivi pédagogique personnalisé</span> et une <span className='text-bold-white'>communication continue</span> avec les parents afin d'aider chaque élève à <span className='text-bold-white'>progresser durablement</span>.“
                    </p>
                </div>
                <Image src={Images.CurveU} className='h-[16vh] w-auto object-contain' alt="Motif decoratif courbe" />
            </div>
            <Image src={Images.Curve} className='absolute top-0 bottom-0 right-0 h-svh w-auto object-contain' alt="Motif decoratif lateral" />
        </section>
    )
}

export default OurHistory
