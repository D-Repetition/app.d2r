import { Images } from '@/constants/images'
import Image from 'next/image'
import Input from '../../atomes/Input'
import Textarea from '../../atomes/Textarea'
import Button from '../../atomes/Button'

const Hero = () => {
    return (
        <section className="w-full min-h-[110vh] mx-auto flex flex-col items-center pt-30 lg:pt-8 pb-12 lg:pb-10 lg:justify-center gap-6 lg:gap-[75px] relative">
            <div className="h-[4%] w-full absolute z-1 bottom-0 left-0 right-0 bg-board-black rounded-[54px_54px_0px_0px]"></div>
            <div className="mx-auto w-full max-w-[90%] min-h-[95vh] grid max-lg:grid-cols-1 lg:grid-cols-2 max-lg:gap-12">
                <div className="flex items-center max-lg:justify-start lg:justify-center">
                    <div className="w-full lg:max-w-[60%] flex flex-col items-center justify-start max-lg:gap-10 lg:gap-[4vh]">
                        <div className="flex flex-col items-center justify-start gap-1">
                            <div className="title font-dm-serif text-center">Contactez-nous</div>
                            <div className="subtitle2 tracking-[-2%] text-center">Une question ? Nous répondons sous 24 heures.</div>
                        </div>
                        <div className="w-full flex flex-col items-center justify-start gap-4">
                            <Input label='Prénom' placeholder='Saississez votre prénom' type='text' />
                            <Input label='Téléphone' placeholder='+228XXXXXXXX' type='tel' />
                            <Input label='Sujet' placeholder='De quoi souhaitez-vous nous parler ?' type='text' />
                            <Textarea label='Message' placeholder='Décrivez votre demande en détail. Nous vous répondrons dans les meilleurs délais.' />
                        </div>
                        <div className="flex flex-col gap-3 items-center w-full">
                            <Button className='bg-blue-navy text-white w-full'>Envoyer ma demande</Button>
                            <p className="text-board-black/60 max-lg:text-[12px]">Pour les demandes urgentes? <a href="" className="text-blue-navy">Nous écrire sur whatsapp</a></p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg bg-board-black/10 flex items-center justify-center">
                    <Image src={Images.ContactUs} className='h-[40vh] w-auto object-contain' alt="Contact us" />
                </div>
            </div>
        </section>
    )
}

export default Hero
