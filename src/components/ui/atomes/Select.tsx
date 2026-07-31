"use client";

import {
    forwardRef,
    SelectHTMLAttributes,
} from "react";
import { ChevronDown } from "@/components/assets/icons";

export interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}

interface SelectProps
    extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
    label?: string;
    placeholder?: string;
    error?: string;
    options: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            label,
            placeholder = "Sélectionnez une option",
            error,
            options,
            className = "",
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id ?? props.name;

        return (
            <div className="flex w-full flex-col gap-1.5">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="px-5 font-inter text-sm font-medium text-board-black"
                    >
                        {label}
                    </label>
                )}

                <div className="relative w-full">
                    <select
                        ref={ref}
                        id={inputId}
                        aria-invalid={!!error}
                        aria-describedby={error ? `${inputId}-error` : undefined}
                        defaultValue=""
                        className={`
                            lg:h-14 max-lg:h-10
                            w-full rounded-full
                            border-2
                            bg-board-black/5
                            px-5 pr-12
                            font-inter text-sm text-board-black
                            transition-colors duration-150
                            focus:outline-none
                            focus:ring-2
                            focus:ring-offset-0
                            appearance-none
                            disabled:cursor-not-allowed
                            disabled:bg-slate-50
                            disabled:text-board-black/40
                            ${error
                                ? "border-red-500 focus:ring-red-500/30"
                                : "border-board-black focus:border-blue-navy focus:ring-blue-navy/20"
                            }
                            ${className}
                        `}
                        {...props}
                    >
                        <option value="" disabled hidden>
                            {placeholder}
                        </option>

                        {options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-board-black/60">
                        <ChevronDown />
                    </div>
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

Select.displayName = "Select";

export default Select;