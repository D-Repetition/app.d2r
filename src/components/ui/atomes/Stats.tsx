import type { ReactElement } from "react";

interface Stat {
    value: string;
    label: string;
    bgColor: string;
}

interface StatItemProps extends Stat { }

const stats: Stat[] = [
    { value: "+3", label: "Année d'éxpérience", bgColor: "max-lg:bg-[#FFE8CC]" },
    { value: "458", label: "Élèves accompagnés", bgColor: "max-lg:bg-[#D6EFFF]" },
    { value: "35", label: "Enseignants actifs", bgColor: "max-lg:bg-[#E4F8E0]" },
    { value: "97%", label: "Satisfaction des familles", bgColor: "max-lg:bg-[#FDE2E4]" },
    { value: "+10", label: "Matières enseignées", bgColor: "max-lg:bg-[#F0E4FF]" },
    { value: "4", label: "Langues proposées", bgColor: "max-lg:bg-[#FFF6C9]" },
];

function StatItem({ value, label, bgColor }: StatItemProps): ReactElement {
    return (
        <div
            className={`flex flex-col lg:items-start items-center gap-3 shrink-0 w-auto px-2 max-lg:px-6 max-lg:py-4 b${bgColor}`}
        >
            <div className="title">{value}</div>
            <div className="simpleText font-normal! max-lg:text-[12px]! max-lg:leading-[14px]! max-lg:text-center! text-nowrap">
                {label}
            </div>
        </div>
    );
}

export default function Stats(): ReactElement {
    return (
        <>
            {/* Desktop / tablette : layout normal */}
            <div className="hidden lg:flex w-full items-center justify-between">
                {stats.map((s: Stat, i: number) => (
                    <StatItem key={i} value={s.value} label={s.label} bgColor={s.bgColor} />
                ))}
            </div>

            {/* Mobile : marquee infini */}
            <div className="lg:hidden w-full overflow-hidden relative mt-4">
                <div className="flex w-max animate-marquee">
                    {[...stats, ...stats].map((s: Stat, i: number) => (
                        <StatItem key={i} value={s.value} label={s.label} bgColor={s.bgColor} />
                    ))}
                </div>
            </div>
        </>
    );
}