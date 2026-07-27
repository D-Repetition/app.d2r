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
                        className="font-inter text-sm font-medium text-board-black"
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
                        h-[100px] w-full resize-none rounded-lg border bg-white px-3 py-2
                        font-inter text-sm text-board-black
                        placeholder:text-board-black/40
                        transition-colors duration-150
                        focus:outline-none focus:ring-2 focus:ring-offset-0
                        disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-board-black/40
                        ${error
                            ? "border-red-500 focus:ring-red-500/30"
                            : "border-slate-300 focus:border-slate-400 focus:ring-slate-400/20"
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