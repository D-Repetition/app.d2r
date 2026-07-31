"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import ChevronDown from "../assets/icons/ChevronDown"
import { Arrow, Close, Logo, UserFace } from "../assets/icons"
import Button from "./atomes/Button"
import Discover from "./molecules/Discover"
import Resources from "./molecules/Resources"
import Menu from "../assets/icons/Menu"

const DESKTOP_BREAKPOINT = 1024 

const Topbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        lastScrollY.current = window.scrollY

        const handleScroll = () => {
            if (window.innerWidth < DESKTOP_BREAKPOINT) return

            const currentScrollY = window.scrollY

            if (Math.abs(currentScrollY - lastScrollY.current) < 5) return

            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setHidden(true)
                setMobileMenuOpen(false)
            } else {
                setHidden(false)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <div
                className={`hidden w-full maxw left-1/2 -translate-x-1/2 items-center justify-between z-10000 fixed mt-6 lg:mt-11 pl-6 lg:py-2 lg:pr-2 py-1 pr-1 rounded-full bg-white border border-board-black/10 lg:flex transition-transform duration-300 ${hidden ? "lg:-translate-y-32" : "lg:translate-y-0"
                    }`}
            >
                <div className="flex items-center justify-start gap-10">
                    <Link href="/" className="">
                        <div className="flex items-center text-blue-navy">
                            <Logo className="fill-board-black h-10!" />
                        </div>
                    </Link>
                    <div className="flex items-center text-blue-navy gap-4">
                        <Link href="/" className="">
                            <div className="flex items-center text-board-black max-xl:text-[14px]">
                                Acceuil
                            </div>
                        </Link>
                        <div className="flex items-center text-board-black relative group">
                            <div className="">Découvrir</div>
                            <ChevronDown className="fill-board-black group-hover:-rotate-180 duration-500" />
                            <div className="absolute top-8 left-0 duration-500 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-0 overflow-hidden h-4 w-20 group-hover:w-auto group-hover:h-auto z-1000 group-hover:z-10000"><Discover /></div>
                        </div>
                        <div className="flex items-center text-board-black relative group">
                            <div className="">Ressources</div>
                            <ChevronDown className="fill-board-black group-hover:-rotate-180 duration-500" />
                            <div className="absolute top-8 left-0 duration-500 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-0 overflow-hidden h-4 w-20 group-hover:w-auto group-hover:h-auto z-1000 group-hover:z-10000"><Resources /></div>
                        </div>
                        <Link href="/nous-contactez" className="">
                            <div className="flex items-center text-board-black">
                                Contact
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-board-black">
                    <Link href="/se-connecter" className="">
                        <Button>Se connecter</Button>
                    </Link>
                    <Link href="/s-inscrire-en-tant-que-parent" className="">
                        <Button className="bg-blue-navy text-white">
                            <UserFace className="fill-white opacity-100" />
                            <div className="">Inscrire mon enfant</div>
                        </Button>
                    </Link>
                </div>
            </div>

            <div
                className={`fixed left-1/2 top-6 z-10000 w-[min(92vw,1200px)] -translate-x-1/2 lg:hidden transition-transform duration-300`}
            >
                <div className="rounded-4xl border border-board-black/10 bg-white pl-6 py-1 pr-2 lg:py-2 shadow-[0px_10px_30px_rgba(0,0,0,0.08)]">
                    <div className="flex items-center justify-between gap-3">
                        <Link href="/" className="shrink-0">
                            <div className="flex items-center text-blue-navy">
                                <Logo className="fill-board-black h-8 w-auto" />
                            </div>
                        </Link>

                        <div className="flex items-center gap-2 text-board-black">
                            <Link href="/se-connecter" className="">
                                <Button className="px-4 py-3">Se connecter</Button>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(() => !mobileMenuOpen)}
                                className="flex h-12 w-12 items-center justify-center rounded-4xl border border-board-black/10 bg-white"
                                aria-expanded={mobileMenuOpen}
                                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                            >
                                {mobileMenuOpen ? <Close className="h-6 w-6" /> : <Menu className="fill-board-black" />}
                            </button>
                        </div>
                    </div>

                    {mobileMenuOpen ? (
                        <div className="my-4">
                            <div className="flex flex-col items-center text-blue-navy gap-4">
                                <Link href="/" className="">
                                    <div className="flex items-center text-board-black max-xl:text-[14px]">
                                        Acceuil
                                    </div>
                                </Link>
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
                                <div className="flex flex-col items-start justify-start gap-2">
                                    <Link href="/foire-aux-questions" className="">
                                        <div className="flex items-center text-board-black max-xl:text-[14px] text-nowrap underline underline-offset-2 hover:decoration-transparent duration-100">
                                            FAQ
                                        </div>
                                    </Link>
                                    <Link href="/nous-contactez" className="">
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
                                <Link href="/bibliotheque" className="mt-4 w-full">
                                    <Button className="flex items-center justify-center text-white bg-board-black max-xl:text-[14px] text-nowrap w-full">
                                        <div className="">Notre bibliothèque</div>
                                        <Arrow className='fill-white -rotate-45' />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default Topbar