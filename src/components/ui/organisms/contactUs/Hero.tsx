import Image from 'next/image'

const Hero = () => {
    return (
        <section className="w-full min-h-[110vh] mx-auto flex flex-col items-center py-12 justify-center gap-6 lg:gap-[75px] relative">
            <div className="h-[4%] w-full absolute z-1 bottom-0 left-0 right-0 bg-board-black rounded-[54px_54px_0px_0px]"></div>
            <div className="mx-auto w-full max-w-[90%] h-[95vh] grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-[60%]">
                        <div className="flex flex-col items-center justify-start gap-1">
                            <div className="text-[44px] font-dm-serif leading-[48px]">Contactez-nous</div>
                            <div className="text-[14px] leading-[20px] tracking-[-2%] font-medium">Une question ? Nous répondons sous 24 heures.</div>

                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-board-black/10 flex items-center justify-center">
                    <Image src="/images/contact-us.png" className='h-[40vh]' alt="Contact us" />
                </div>
            </div>
        </section>
    )
}

export default Hero
