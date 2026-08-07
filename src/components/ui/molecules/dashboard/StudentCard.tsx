import { StudentCardProps } from "@/types";
import Button from "../../atomes/Button";
import { School } from "@/components/assets/icons";
import Link from "next/link";

export default function StudentCard({
    id,
    avatar,
    fullname,
    bgcolor,
    activeSince,
    level,
    schoolType,
    school,
    subjects,
    nextSession,
    stats,
    className,
    ...props
}: StudentCardProps) {
    return (
        <div
            {...props}
            className={[
                "flex flex-col items-center justify-start min-w-[240px] flex-col rounded-4xl bg-white p-6",
                className,
            ].join(" ")}
        >
            {/* Avatar */}
            <div className="flex justify-center w-10 h-10 rounded-full bg-board-black/10">
                <img
                    src={avatar}
                    alt={fullname}
                    className="size-10 rounded-full object-cover"
                />
            </div>

            {/* Informations */}
            <div className="mt-5 text-center flex flex-col items-center justify-center">
                <p className="text-sm text-board-black/60">
                    <span className="font-medium text-board-black text-[18px]">Actif</span>{" "}
                    Depuis le {activeSince}
                </p>

                <h3 className={["mt-1 text-[20px] leading-[24px] flex shrink-0 p-1 w-fit", bgcolor].join(" ")}>
                    {fullname}
                </h3>

                <div className="mt-3 flex justify-center gap-2 text-board-black/80">
                    <span className="rounded bg-board-black/5 px-2 py-1 text-xs">
                        {level}
                    </span>

                    <span className="rounded bg-board-black/5 px-2 py-1 text-xs">
                        {schoolType}
                    </span>
                </div>

                <p className="mt-8 text-sm flex items-center justify-center text-board-black gap-2"><School className="fill-board-black" /> {school}</p>

                <p className="mt-4 text-sm text-board-black/60">
                    {subjects.join(" · ")}
                </p>
            </div>

            {/* Statistiques */}
            <div className="mt-8 w-full rounded-xl bg-board-black/5 p-1">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="mb-1 last:mb-0 rounded-md text-board-black/60 bg-board-black/5 py-2 text-center text-sm"
                    >
                        <span className="font-medium">{stat.value}</span>{" "}
                        {stat.label}
                    </div>
                ))}

                <div className="mt-1 rounded-md bg-white text-board-black/80 py-3 text-center text-sm">
                    <span className="font-medium">Prochaine séance :</span>{" "}
                    {nextSession}
                </div>
            </div>

            {/* Bouton */}
            <Link href={{
                pathname: `/parent/enfants/${id}`,
                query: {},
            }} className="w-full">
                <Button
                    className="mt-8 w-full rounded-full bg-board-black/5 font-inter text-board-black/40 transition duration-300 hover:bg-blue-navy hover:text-white"
                >
                    Voir le profil complet
                </Button>
            </Link>
        </div>
    );
}