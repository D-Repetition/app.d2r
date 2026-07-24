import Link from "next/link"
import Button from "../../atomes/Button"
import { UserFace } from "@/components/assets/icons"

const Hero = () => {
    return (
        <section className="w-full max-w-[90%] min-h-svh mx-auto flex flex-col items-start pt-24 lg:pt-36 pb-12 lg:pb-10 justify-center gap-6 lg:gap-[75px]">
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="title">Qui sommes-nous?</h1>
            </div>
        </section>
    )
}

export default Hero
