import Image from 'next/image';
import { AuthWrapperI } from '@/types';

const AuthWrapper = ({ title, subtitle, illustration, children }: AuthWrapperI) => {
    return (
        <section className='p-5 w-full min-h-svh grid max-lg:grid-cols-1 lg:grid-cols-2'>
            <div className="flex items-center justify-center">
                <div className="w-full lg:max-w-[60%] flex flex-col items-center justify-start max-lg:gap-8 lg:gap-[2vh]">
                    <div className="flex flex-col items-center justify-start gap-1">
                        <div className="title font-dm-serif text-center">{title}</div>
                        <div className="subtitle2 tracking-[-2%] text-center">{subtitle}</div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start max-lg:gap-10 lg:gap-[4vh]">
                        {children}
                    </div>
                </div>
            </div>
            <div className="rounded-lg bg-board-black/10 flex items-center justify-center">
                <Image src={illustration} className="max-lg:h-[300px] lg:h-[50vh] w-auto object-contain" alt="Hero bg" />
            </div>
        </section>
    )
}

export default AuthWrapper
