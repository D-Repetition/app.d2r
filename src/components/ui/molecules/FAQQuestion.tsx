import { Add, Minus } from "@/components/assets/icons";
import { FaqItem } from "@/types";
import Link from "next/link";
import React, { ComponentProps } from "react";
import Button from "../atomes/Button";

type FAQQuestionI = FaqItem &
    ComponentProps<"div"> & {
        onToggle?: () => void;
    };

const FAQQuestion = ({
    question,
    answer,
    isOpen,
    btn,
    onToggle,
    className,
    ...props
}: FAQQuestionI) => {
    return (
        <div
            {...props}
            className={[
                "w-full rounded-lg bg-blue-navy/5 px-8 py-6 transition-all duration-300",
                className,
            ].join(" ")}
        >
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center justify-between text-left"
            >
                <h3 className="font-dm-serif text-[1.6vw]">{question}</h3>

                <span className="shrink-0">
                    {isOpen ? <Minus /> : <Add />}
                </span>
            </button>

            <div
                className={[
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]",
                ].join(" ")}
            >
                <div className="overflow-hidden flex flex-col items-start justify-start gap-4">
                    <div
                        className="font-inter text-[1.1vw] leading-relaxed text-board-black/60 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_p]:mb-2 [&_p:last-child]:mb-0"
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />
                    {
                        btn && <Link href={btn.href} className="">
                            <Button className="bg-board-black text-white w-full">{ btn.label }</Button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default FAQQuestion;