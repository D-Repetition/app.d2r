import React, { useId } from "react";

interface CustomCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    indeterminate?: boolean;
}

export default function CustomCheckbox({
    checked,
    onChange,
    label,
    disabled = false,
    indeterminate = false,
}: CustomCheckboxProps) {
    const id = useId();

    return (
        <label
            htmlFor={id}
            className={`inline-flex items-center gap-3 select-none ${disabled ? "opacity-20 cursor-not-allowed" : "cursor-pointer"
                }`}
        >
            <span className="relative flex items-center justify-center w-5 h-5 shrink-0">
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={(e) => onChange(e.target.checked)}
                    className="peer sr-only"
                    aria-checked={indeterminate ? "mixed" : checked}
                />
                <span
                    className={`absolute inset-0 rounded border-1 transition-all duration-150 ease-out
            ${checked || indeterminate
                            ? "bg-blue-navy border-board-black/80"
                            : "bg-white border-board-black/20"
                        }
            peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-neutral-500
            peer-hover:border-neutral-500
          `}
                />
                <svg
                    className={`relative w-3.5 h-3.5 text-white transition-all duration-150 ease-out ${checked && !indeterminate
                            ? "scale-100 opacity-100"
                            : "scale-50 opacity-0"
                        }`}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span
                    className={`absolute w-2.5 h-0.5 rounded-full bg-white transition-all duration-150 ease-out ${indeterminate ? "scale-100 opacity-100" : "scale-50 opacity-0"
                        } ${checked && !indeterminate ? "hidden" : ""}`}
                />
            </span>
            {label && (
                <span className="text-sm font-medium text-neutral-800">{label}</span>
            )}
        </label>
    );
}