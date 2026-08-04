"use client";

import { Eye } from "@/components/assets/icons";
import { forwardRef, useState, InputHTMLAttributes } from "react";

export type InputType =
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    placeholder?: string;
    error?: string;
    type?: InputType;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, placeholder, error, type = "text", className = "", id, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const inputId = id ?? props.name;

        const isPassword = type === "password";
        const resolvedType = isPassword && showPassword ? "text" : type;

        return (
            <div className="flex w-full flex-col gap-1.5">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="font-inter text-sm font-medium text-board-black px-5"
                    >
                        {label}
                    </label>
                )}

                <div className="relative w-full">
                    <input
                        ref={ref}
                        id={inputId}
                        type={resolvedType}
                        aria-invalid={!!error}
                        placeholder={placeholder}
                        aria-describedby={error ? `${inputId}-error` : undefined}
                        className={`
                            lg:h-14 max-lg:h-11 w-full rounded-full px-5
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
                            ${isPassword ? "pr-10" : ""}
                            ${className}
                        `}
                        {...props}
                    />

                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-board-black/40 hover:text-board-black/70"
                            tabIndex={-1}
                            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                        >
                            {showPassword ? <Eye /> : <Eye />}
                        </button>
                    )}
                </div>

                {error && (
                    <p
                        id={`${inputId}-error`}
                        className="font-inter text-xs text-red-500"
                    >
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;