"use client";

import { DocNotFill } from "@/components/assets/icons";
import { forwardRef, useState, InputHTMLAttributes, useRef, useImperativeHandle } from "react";

interface FileInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "value"> {
    label?: string;
    placeholder?: string;
    error?: string;
    multiple?: boolean;
    /** ex: ".pdf,.png,.jpg" ou "image/*" */
    accept?: string;
    onFilesChange?: (files: File[]) => void;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    (
        {
            label,
            placeholder = "Sélectionner un fichier",
            error,
            multiple = false,
            accept,
            className = "",
            id,
            onFilesChange,
            ...props
        },
        ref
    ) => {
        const [files, setFiles] = useState<File[]>([]);
        const innerRef = useRef<HTMLInputElement>(null);
        useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

        const inputId = id ?? props.name;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const selected = e.target.files ? Array.from(e.target.files) : [];
            setFiles(selected);
            onFilesChange?.(selected);
        };

        const displayText =
            files.length === 0
                ? placeholder
                : files.length === 1
                    ? files[0].name
                    : `${files.length} fichiers sélectionnés`;

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
                    {/* Faux input affichant le nom / nombre de fichiers */}
                    <button
                        type="button"
                        onClick={() => innerRef.current?.click()}
                        aria-invalid={!!error}
                        className={`
                            lg:h-14 max-lg:h-11 w-full rounded-full px-5 pr-12
                            font-inter text-sm text-left
                            transition-colors duration-150
                            focus:outline-none focus:ring-2 focus:ring-offset-0
                            border-2
                            bg-board-black/5
                            disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-board-black/40
                            truncate
                            ${files.length === 0 ? "text-board-black/60" : "text-board-black"}
                            ${error
                                ? "border-red-500 focus:ring-red-500/30"
                                : "border-board-black focus:border-blue-navy focus:ring-blue-navy/20"
                            }
                            ${className}
                        `}
                        disabled={props.disabled}
                    >
                        {displayText}
                    </button>

                    {/* Input natif caché, gère réellement la sélection */}
                    <input
                        ref={innerRef}
                        id={inputId}
                        type="file"
                        multiple={multiple}
                        accept={accept}
                        onChange={handleChange}
                        aria-describedby={error ? `${inputId}-error` : undefined}
                        className="sr-only"
                        {...props}
                    />

                    <span
                        onClick={() => innerRef.current?.click()}
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-board-black/40 pointer-events-none"
                    >
                        <DocNotFill className="fill-board-black" />
                    </span>
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

FileInput.displayName = "FileInput";

export default FileInput;