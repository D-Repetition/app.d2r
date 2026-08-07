"use client";

import { Expand, Collapse, Settings, LogOut } from "@/components/assets/icons";
import { useEffect, useRef, useState } from "react";

interface AccountMenuProps {
    name: string;
    role?: string;
    avatarUrl?: string;
    collapsed?: boolean;
    onSettings?: () => void;
    onLogout?: () => void;
}

const AccountMenu = ({
    name,
    role = "Compte parent",
    avatarUrl,
    collapsed = false,
    onSettings,
    onLogout,
}: AccountMenuProps) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full group">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-haspopup="true"
                className={`
                    h-10 flex items-center cursor-pointer py-1
                    ${collapsed ? "w-10 justify-center" : "w-full justify-between"}
                `}
            >
                <div className="flex items-center justify-start gap-2 h-full">
                    <div className="relative w-8 h-8 rounded bg-board-black/5 overflow-hidden shrink-0">
                        {avatarUrl && (
                            <img
                                src={avatarUrl}
                                alt={name}
                                className={`
                                    w-full h-full object-cover transition-opacity duration-150
                                    ${collapsed ? "group-hover:opacity-0" : ""}
                                `}
                            />
                        )}

                        {collapsed && (
                            <div
                                className="
                                    absolute inset-0 flex items-center justify-center
                                    bg-board-black/5 opacity-0 group-hover:opacity-100
                                    transition-opacity duration-150
                                "
                            >
                                {open ? (
                                    <Collapse className="fill-board-black/60" />
                                ) : (
                                    <Expand className="fill-board-black/60" />
                                )}
                            </div>
                        )}
                    </div>

                    {!collapsed && (
                        <div className="flex flex-col items-start">
                            <div className="font-inter text-sm text-board-black">{name}</div>
                            <div className="text-[11px] text-board-black/50">{role}</div>
                        </div>
                    )}
                </div>

                {!collapsed && (
                    open ? (
                        <Collapse className="fill-board-black/60" />
                    ) : (
                        <Expand className="fill-board-black/60" />
                    )
                )}
            </button>

            {open && (
                <div
                    role="menu"
                    className={`
                        absolute left-[107%] bottom-0 mb-1
                        rounded-lg
                        border border-board-black/10
                        bg-white shadow
                        px-1.5 py-1.5
                        flex flex-col gap-1
                        z-50
                        ${collapsed ? "left-[107%] min-w-[180px]" : "left-0 w-full min-w-[180px]"}
                    `}
                >
                    <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                            setOpen(false);
                            onSettings?.();
                        }}
                        className="
                            cursor-pointer
                            flex items-center gap-2 rounded px-3 py-2
                            font-inter text-sm text-board-black
                            hover:bg-board-black/10 bg-board-black/5 transition-colors duration-150
                        "
                    >
                        <Settings className="fill-board-black/60" />
                        Paramètres
                    </button>

                    <button
                        type="button"
                        role="menuitem"
                        onClick={() => {
                            setOpen(false);
                            onLogout?.();
                        }}
                        className="
                            cursor-pointer
                            flex items-center gap-2 rounded px-3 py-2
                            font-inter text-sm text-red-500
                            hover:bg-red-500/10 transition-colors duration-150
                        "
                    >
                        <LogOut className="fill-red-500" />
                        Déconnexion
                    </button>
                </div>
            )}
        </div>
    );
};

export default AccountMenu;