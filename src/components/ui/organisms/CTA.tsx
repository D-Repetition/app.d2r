import { CTASection } from '@/types'
import Link from 'next/link'
import React, { ComponentProps } from 'react'
import Button from '../atomes/Button'
import { Arrow, Call, Folder, UserFace } from '@/components/assets/icons'

type CTAI = CTASection & ComponentProps<'div'>

const CTA = (props: CTAI) => {
    return (
        <section {...props} className='h-[60vh] w-full relative flex items-center justify-center flex-col'>
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img src={props.background_image} className='object-cover oject-center w-full h-full' alt={props.title} />
            </div>
            <div className="h-[10%] w-full absolute z-1 bottom-0 left-0 right-0 bg-board-black rounded-[54px_54px_0px_0px]"></div>
            <div className="relative z-2 flex items-center justify-center flex-col gap-4.5 w-full h-full">
                <div className="title text-center max-w-[40%]">{props.title}</div>
                <div className="subtitle text-center max-w-[40%] font-normal!">{props.description}</div>
                <div className="flex max-lg:w-full max-lg:flex-col items-center gap-2 text-board-black">
                    {props.buttons.map((button) => (
                        <Link
                            key={button.href}
                            href={button.href}
                            className="max-lg:w-full"
                        >
                            <Button
                                className={[
                                    "max-lg:w-full border-2",
                                    button.variant === "primary"
                                        ? "bg-board-black text-white border-board-black fill-white"
                                        : "bg-board-black/5 text-board-black border-board-black fill-board-black",
                                ].join(" ")}
                            >
                                {button.icon === "Arrow" && (
                                    <Arrow className="fill-current opacity-100" />
                                )}

                                {button.icon === "Folder" && (
                                    <Folder className="fill-current opacity-100" />
                                )}

                                {button.icon === "Call" && (
                                    <Call className="fill-current opacity-100" />
                                )}

                                {button.icon === "UserFace" && (
                                    <UserFace className="fill-current opacity-100" />
                                )}

                                <span>{button.label}</span>
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CTA
