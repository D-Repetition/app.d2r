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
    error?: string;
    type?: InputType;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, type = "text", className = "", id, ...props }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const inputId = id ?? props.name;

        const isPassword = type === "password";
        const resolvedType = isPassword && showPassword ? "text" : type;

        return (
            <div className="flex w-full flex-col gap-1.5">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="font-inter text-sm font-medium text-board-black"
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
                        aria-describedby={error ? `${inputId}-error` : undefined}
                        className={`
                            h-10 w-full rounded-lg border bg-white px-3
                            font-inter text-sm text-board-black
                            placeholder:text-board-black/40
                            transition-colors duration-150
                            focus:outline-none focus:ring-2 focus:ring-offset-0
                            disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-board-black/40
                            ${error
                                ? "border-red-500 focus:ring-red-500/30"
                                : "border-slate-300 focus:border-slate-400 focus:ring-slate-400/20"
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