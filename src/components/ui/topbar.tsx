"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import ChevronDown from "../assets/icons/ChevronDown"
import { Close, Logo, UserFace } from "../assets/icons"
import Button from "./atomes/Button"
import Discover from "./molecules/Discover"
import Resources from "./molecules/Resources"
import Menu from "../assets/icons/Menu"

const DESKTOP_BREAKPOINT = 1024 // correspond au breakpoint `lg` de Tailwind

const Topbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [hidden, setHidden] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        lastScrollY.current = window.scrollY

        const handleScroll = () => {
            // On ne gère le hide-on-scroll (et la fermeture auto du menu) que sur desktop
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
                                {mobileMenuOpen ? <Close className="h-6 w-6" /> : <Menu className="fill-board-black -rotate-90" />}
                            </button>
                        </div>
                    </div>

                    {mobileMenuOpen ? (
                        <div className="mt-4 rounded-3xl border border-board-black/10 bg-white p-4 shadow-[0px_10px_24px_rgba(0,0,0,0.08)]">
                            <div className="flex flex-col gap-4 text-board-black">
                                <Link href="/" className="flex items-center py-1" onClick={() => setMobileMenuOpen(false)}>
                                    Acceuil
                                </Link>

                                <div className="space-y-2">
                                    <div className="flex items-center text-board-black gap-2">
                                        <span>Découvrir</span>
                                        <ChevronDown className="fill-board-black" />
                                    </div>
                                    <div className="pl-3">
                                        <Discover />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center text-board-black gap-2">
                                        <span>Ressources</span>
                                        <ChevronDown className="fill-board-black" />
                                    </div>
                                    <div className="pl-3">
                                        <Resources />
                                    </div>
                                </div>

                                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                                    Contact
                                </Link>

                                <div className="grid gap-2 pt-1">
                                    <Link href="/se-connecter" onClick={() => setMobileMenuOpen(false)}>
                                        <Button className="w-full">Se connecter</Button>
                                    </Link>
                                    <Link href="/s-inscrire-en-tant-que-parent" onClick={() => setMobileMenuOpen(false)}>
                                        <Button className="w-full bg-blue-navy text-white">
                                            <UserFace className="fill-white opacity-100" />
                                            <div className="">Inscrire mon enfant</div>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default Topbar