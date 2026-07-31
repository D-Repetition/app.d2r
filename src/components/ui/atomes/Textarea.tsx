"use client";

import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, className = "", id, ...props }, ref) => {
        const textareaId = id ?? props.name;

        return (
            <div className="flex w-full flex-col gap-1.5">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className="px-5 font-inter text-sm font-medium text-board-black"
                    >
                        {label}
                    </label>
                )}

                <textarea
                    ref={ref}
                    id={textareaId}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${textareaId}-error` : undefined}
                    className={`
                            lg:h-30 max-lg:h-25 w-full rounded-xl px-5 py-2.5
                            font-inter text-sm text-board-black
                            placeholder:text-board-black/60
                            transition-colors duration-150
                            focus:outline-none focus:ring-2 focus:ring-offset-0
                            border-2
                            bg-board-black/5
                            disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-board-black/40
                        ${error
                        ? "border-red-500 focus:ring-red-500/30"
                        : "border-board-black focus:border-blue-navy focus:ring-blue-navy/20"
                        }
                        ${className}
                    `}
                    {...props}
                />

                {error && (
                    <p
                        id={`${textareaId}-error`}
                        className="font-inter text-xs text-red-500"
                    >
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export default Textarea;