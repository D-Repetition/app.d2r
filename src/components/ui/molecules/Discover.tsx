import Link from 'next/link'
import React from 'react'

const Discover = () => {
    return (
        <div className='px-16 py-8 bg-white rounded-xl border-[0.5px] border-board-black/10 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] flex items-center gap-17.25'>
            <div className="flex items-start justify-between flex-col h-39.75">
                <Link href="/qui-sommes-nous" className="">
                    <div className="flex items-center text-board-black max-xl:text-[14px] text-nowrap underline underline-offset-2 hover:decoration-transparent duration-100">
                        Qui sommes-nous
                    </div>
                </Link>
                <Link href="/matieres" className="">
                    <div className="flex items-center text-board-black max-xl:text-[14px] text-nowrap underline underline-offset-2 hover:decoration-transparent duration-100">
                        Nos matières
                    </div>
                </Link>
                <Link href="/enseignants" className="">
                    <div className="flex items-center text-board-black max-xl:text-[14px] text-nowrap underline underline-offset-2 hover:decoration-transparent duration-100">
                        Nos professeurs
                    </div>
                </Link>
                <Link href="/comment-ca-marche" className="">
                    <div className="flex items-center text-board-black max-xl:text-[14px] text-nowrap underline underline-offset-2 hover:decoration-transparent duration-100">
                        Comment ça marche
                    </div>
                </Link>
                <Link href="/temoignages" className="">
                    <div className="flex items-center text-board-black max-xl:text-[14px] text-nowrap underline underline-offset-2 hover:decoration-transparent duration-100">
                        Témoignages
                    </div>
                </Link>
            </div>
            <div className="w-34 bg-poppy-red rounded-sm flex items-center justify-center p-1">
                <img src="/images/discover.png" className='h-37.5 w-32.25' alt="discover image" />
            </div>
        </div>
    )
}

export default Discover
