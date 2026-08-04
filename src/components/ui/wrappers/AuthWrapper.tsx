import Image from 'next/image';
import { AuthWrapperI } from '@/types';
import Link from 'next/link';
import { Arrow, Logo } from '@/components/assets/icons';

const AuthWrapper = ({ title, subtitle, illustration, start = false, children }: AuthWrapperI) => {
    return (
        <section className='p-5 w-full min-h-svh grid max-lg:grid-cols-1 lg:grid-cols-2 max-lg:gap-8'>
            <div className="flex max-lg:flex-col items-center max-lg:justify-start lg:justify-center">
                <div className="lg:hidden max-lg:flex mb-8 items-center justify-between w-full">
                    <Link href="/" className="">
                        <div className="flex items-center text-blue-navy">
                            <Logo className="fill-blue-navy h-10!" />
                            {/* <Logo className="fill-board-black h-10!" /> */}
                        </div>
                    </Link>
                    <button
                        type="button"
                        className="flex h-12 w-12 items-center justify-center rounded-4xl border border-board-black/10 bg-white"
                    ><Arrow className="fill-board-black rotate-180" />
                    </button>
                </div>
                <div className="w-full lg:max-w-[50%] flex flex-col items-center justify-start max-lg:gap-8 lg:gap-[3vh]">
                    <div className={["flex flex-col justify-start gap-1", start ? "items-start" : "items-center"].join(" ")}>
                        <div className={["max-lg:text-[24px] lg:text-[1.9vw] lg:leading-[2.3vw] font-dm-serif", start ? "text-start" : "text-center"].join(" ")}>{title}</div>
                        <div className={["max-lg:text-[14px] lg:text-[.85vw] tracking-[-2%] text-center lg: lg:w-full", start ? "text-start" : "text-center"].join(" ")}>{subtitle}</div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start max-lg:gap-4 lg:gap-[2vh]">
                        {children}
                    </div>
                </div>
            </div>
            <div className="rounded-lg bg-board-black/10 flex items-center justify-center relative">
                <Link href="/" className="max-lg:hidden lg:block absolute -translate-x-1/2 left-1/2 top-6">
                    <div className="flex items-center text-blue-navy">
                        <Logo className="fill-blue-navy h-10!" />
                        {/* <Logo className="fill-board-black h-10!" /> */}
                    </div>
                </Link>
                <Image src={illustration} className="max-lg:h-[300px] lg:h-[50vh] w-auto object-contain" alt="Hero bg" />
            </div>
        </section>
    )
}

export default AuthWrapper
