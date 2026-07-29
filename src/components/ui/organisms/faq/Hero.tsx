import { Images } from '@/constants/images'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="w-full min-h-svh mx-auto flex flex-col items-center pt-30 lg:pt-44 pb-12 lg:pb-10 justify-center gap-6 lg:gap-[75px]">
            <div className="w-full flex flex-col items-center justify-start gap-15">
                <div className="flex flex-col items-center justify-start gap-8 w-full">
                    <div className="title text-center max-w-[60%]">Foire aux questions</div>
                    <div className="text-center subtitle font-normal! max-w-[40%]">Retrouvez les réponses aux questions les plus fréquentes concernant nos services, nos enseignants et le suivi pédagogique de votre enfant.</div>
                </div>
                <Image src={Images.WhyChooseUsIllustration2} className="h-[55vh] w-auto object-contain" alt="Illustration familles et accompagnement scolaire" />
            </div>
        </section>
    )
}

export default Hero
