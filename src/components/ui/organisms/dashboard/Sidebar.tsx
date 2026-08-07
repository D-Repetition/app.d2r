"use client";

import { ClosePanel, Expand, Help, Logo, Moon } from '@/components/assets/icons'
import { sidebarConfig } from '@/constants/dashboardData';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import AccountMenu from '../../atomes/AccountMenu';

const Sidebar = () => {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [isCollapse, setIsCollapse] = useState(false)
    const reduceSideBar = () => {
        const isSidebarOpen = sidebarOpen === true ? false : true
        setIsCollapse(isSidebarOpen)
        setSidebarOpen(isSidebarOpen)
    }

    return (
        <div className={['bg-white h-full p-3 flex flex-col justify-between items-center transition duration-300 shrink-0', !sidebarOpen ? "w-[260px]" : "w-[70px]"].join(" ")}>
            <div className="flex flex-col w-full items-center gap-7">
                <div className="flex items-center justify-between rounded py-1 pl-2 pr-1 bg-board-black/10 w-full">
                    <Logo className="fill-board-black h-8 w-auto" />
                    <ClosePanel className='fill-board-black cursor-pointer' onClick={reduceSideBar} />
                </div>
                <div className="py-2 flex flex-col gap-1.5 w-full">
                    {sidebarConfig.main.map((sc) => {
                        const isActive = pathname === sc.href;

                        return (
                            <Link href={sc.href} key={sc.id} className="w-full">
                                <button
                                    className={`cursor-pointer w-full h-10 flex items-center justify-start gap-2 rounded py-1 pl-2 pr-1 transition-colors ${isActive
                                            ? "bg-board-black/10 text-board-black/80"
                                        : "hover:bg-board-black/5 text-board-black/60"
                                        }`}
                                >
                                    <sc.icon className={[isActive
                                        ? "fill-board-black/80"
                                        : "fill-board-black/60"].join(" ")} />
                                    <span>{sc.label}</span>
                                </button>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-1.5 w-full">
                <div className="h-[0.5px] w-full bg-board-black/20"></div>
                  <button className="cursor-pointer w-full h-10 flex items-center justify-start gap-2 rounded py-1 pl-2 pr-1 transition-colors bg-board-black/10 text-board-black/80" >
                        <Moon className="fill-board-black/80" />
                        <span>Mode nuit</span>
                    </button>
                <button className="cursor-pointer w-full h-10 flex items-center justify-start gap-2 rounded py-1 pl-2 pr-1 transition-colors bg-board-black/10 text-board-black/80" >
                    <Help className="fill-board-black/80" />
                    <span>Centre d'aide</span>
                </button>
                <div className="h-[0.5px] w-full bg-board-black/20"></div>
                <AccountMenu name="Martin" collapsed={isCollapse} />
            </div>
        </div>
    )
}

export default Sidebar
