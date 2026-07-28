import Link from 'next/link'
import Image from 'next/image'
import Button from '../../atomes/Button'
import { UserFace } from '@/components/assets/icons'

const Method = () => {
    return (
        <section className='h-fit w-full'>
            <div className="w-full max-w-[90%] mx-auto min-h-[80vh] flex flex-col items-center justify-between py-[8vh] gap-12">
                <div className="flex items-start justify-between gap-6 w-full h-[40vh]">
                    <div className="flex flex-col items-start justify-start gap-2 text-board-black max-w-[45%] h-full">
                        <div className="title text-start">Une méthode pensée pour la réussite de chaque élève</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-6 h-full max-w-[45%]">
                        <div className="flex flex-col items-start justify-start gap-6">
                            <p className="lg:text-[1.2vw]">Nous combinons expertise pédagogique, suivi personnalisé et communication avec les familles afin d'offrir un accompagnement efficace et durable.</p>
                            <Link href="/" className="max-lg:w-full">
                                <Button className="bg-blue-navy/5 text-board-black border-2 border-board-black max-lg:w-full">
                                    <UserFace className="fill-board-black opacity-100" />
                                    <div className="">Nous rejoindre</div>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-start gap-11">
                    <div className="w-full max-lg:grid max-lg:grid-cols-3 max-lg:gap-2 gap-y-8 lg:flex items-center justify-between">
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <Image src="/images/how-it-work/illustration-5.png" className='h-[12vh]' alt="Illustration enseignants qualifies" />
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Enseignants qualifiés</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <Image src="/images/how-it-work/illustration-6.png" className='h-[12vh]' alt="Illustration approche inspiree des neurosciences" />
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Approche inspirée des neurosciences</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <Image src="/images/how-it-work/illustration-7.png" className='h-[12vh]' alt="Illustration suivi pedagogique rigoureux" />
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Suivi pédagogique rigoureux</div>
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-3">
                            <Image src="/images/how-it-work/illustration-8.png" className='h-[12vh]' alt="Illustration communication avec les familles" />
                            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center!">Communication avec les familles</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Method  
