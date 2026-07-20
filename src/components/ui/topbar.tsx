import Link from "next/link"
import ChevronDown from "../assets/icons/ChevronDown"
import { Logo, UserFace } from "../assets/icons"
import Button from "./atomes/Button"
import Discover from "./molecules/Discover"
import Resources from "./molecules/Resources"

const Topbar = () => {

    return (
        <div className="w-full maxw left-1/2 -translate-x-1/2 flex items-center justify-between fixed mt-15 pl-6 py-2 pr-2 rounded-4xl bg-white border border-board-black/10">
            <div className="flex items-center justify-start gap-10">
                <Link href="/" className="">
                    <div className="flex items-center text-blue-navy">
                        <Logo className="fill-board-black" />
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
                        <div className="absolute top-8 left-0 duration-500 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-0 overflow-hidden h-4 w-20 group-hover:w-auto group-hover:h-auto z-0 group-hover:z-1000"><Discover /></div>
                    </div>
                    <div className="flex items-center text-board-black relative group">
                        <div className="">Ressources</div>
                        <ChevronDown className="fill-board-black group-hover:-rotate-180 duration-500" />
                        <div className="absolute top-8 left-0 duration-500 -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-0 overflow-hidden h-4 w-20 group-hover:w-auto group-hover:h-auto z-0 group-hover:z-1000"><Resources /></div>
                    </div>
                    <Link href="/" className="">
                        <div className="flex items-center text-board-black">
                            Contact
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-2 text-board-black">
                <Link href="/" className="">
                    <Button>Se connecter</Button>
                </Link>
                <Link href="/" className="">
                    <Button className="bg-blue-navy text-white">
                        <UserFace className="fill-white opacity-100" />
                        <div className="">Inscrire mon enfant</div>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Topbar
