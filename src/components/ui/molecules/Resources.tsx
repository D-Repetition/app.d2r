import Link from 'next/link'
import Button from '../atomes/Button'
import { Arrow } from '@/components/assets/icons'

const Resources = () => {
    return (
        <div className='px-16 py-8 bg-white rounded-xl border-[0.5px] border-board-black/10 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center gap-17.25'>
            <div className="flex items-start justify-between flex-col h-39.75">
                <div className="flex flex-col items-start justify-start gap-2">
                    <Link href="/faq" className="">
                        <div className="flex items-center text-board-black max-xl:text-[14px] text-nowrap underline underline-offset-2 hover:decoration-transparent duration-100">
                            FAQ
                        </div>
                    </Link>
                    <Link href="/contact" className="">
                        <div className="flex items-center text-board-black max-xl:text-[14px] text-nowrap underline underline-offset-2 hover:decoration-transparent duration-100">
                            Contact
                        </div>
                    </Link>
                    <Link href="/devenir-professeur" className="">
                        <div className="flex items-center text-board-black max-xl:text-[14px] text-nowrap underline underline-offset-2 hover:decoration-transparent duration-100">
                            Devenir professeur
                        </div>
                    </Link>
                </div>
                <Link href="/bibliotheque" className="">
                    <Button className="flex items-center text-white bg-board-black max-xl:text-[14px] text-nowrap">
                        <div className="">Notre bibliothèque</div>
                        <Arrow className='fill-white -rotate-45' />
                    </Button>
                </Link>
            </div>
            <div className="w-34 bg-marigold-amber rounded-sm flex items-center justify-center p-1">
                <img src="/images/resources.png" className='h-37.5 w-32.25' alt="discover image" />
            </div>
        </div>
    )
}

export default Resources
