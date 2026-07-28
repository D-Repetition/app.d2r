"use client";

import { useCallback, useEffect, useState } from "react";
import { whyFamilyChooseUsSectionData } from "@/constants/homeSectionsData";

import RoundButton from "../../atomes/RoundButton";
import WhyFamilyCarousel from "../../molecules/WhyFamilyCarousel";
import Image from "next/image";

const MAX = whyFamilyChooseUsSectionData.length;
const AUTO_PLAY_DELAY = 5000;

const WhyFamilyChooseUs = () => {
    const [currentCarousel, setCurrentCarousel] = useState(1);

    const next = useCallback(() => {
        setCurrentCarousel((prev) => (prev === MAX ? 1 : prev + 1));
    }, []);

    const previous = useCallback(() => {
        setCurrentCarousel((prev) => (prev === 1 ? MAX : prev - 1));
    }, []);

    useEffect(() => {
        const interval = setInterval(next, AUTO_PLAY_DELAY);

        return () => clearInterval(interval);
    }, [next]);

    return (
        <section className="w-full max-w-[90%] min-h-svh mx-auto flex flex-col items-start pt-20 lg:pt-24 pb-12 lg:pb-10">
            <div className="w-full min-h-svh flex flex-col items-center">
                <div className="flex flex-col items-center justify-start gap-8">
                    <div className="font-inter simpleText font-medium">
                        Nos partenaires de confiance
                    </div>

                    <div className="flex items-center justify-center gap-8">
                        <Image src="/images/davys.png" className="lg:h-[10vh]" alt="" />
                        <Image src="/images/fnepi.png" className="lg:h-[7vh]" alt="" />
                    </div>
                </div>

                <div className="h-auto w-full py-10 lg:pt-40 lg:pb-24 grid grid-cols-2">
                    <div className="flex flex-col items-start justify-between gap-8 lg:gap-[3vh]">
                        <Image src="/images/home-fly.png" className="h-[12vh]" alt="Home fly" />

                        <div className="title">
                            Pourquoi les familles nous choisissent
                        </div>

                        <div className="subtitle">Parce qu'un bon professeur ne suffit pas. Il faut aussi savoir ce qui se passe, quand ça se passe, et pouvoir le confirmer. C'est exactement ce que D²Répétition vous offre.</div>
                        <div className="flex items-start gap-9">
                            <div className="flex flex-col items-start gap-3">
                                <Image src="/images/student.png" className="h-[5vh]" alt="Student" />
                                <div className="secondaryTitle">200+ élèves suivis</div>
                                <div className="simpleText">Sur l'ensemble de nos centres</div>
                            </div>
                            <div className="flex flex-col items-start gap-3">
                                <Image src="/images/teacher.png" className="h-[5vh]" alt="Teacher" />
                                <div className="secondaryTitle">45+ professeurs actifs</div>
                                <div className="simpleText">Validés et évalués en continu</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <RoundButton
                                onClick={previous}
                                isActive={currentCarousel !== 1}
                                direction="left"
                            />

                            <RoundButton
                                onClick={next}
                                isActive={currentCarousel !== MAX}
                                direction="right"
                            />
                        </div>
                    </div>

                    <div className="pl-[4vw]">
                        <WhyFamilyCarousel whyId={currentCarousel} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyFamilyChooseUs;