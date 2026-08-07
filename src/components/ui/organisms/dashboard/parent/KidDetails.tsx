"use client";

import Wrapper from '../Wrapper'
import DashboardTopbar from '../DashboardTopbar'
import { studentDetails } from "@/constants/dashboardData";
import { School } from "@/components/assets/icons";
import Button from "@/components/ui/atomes/Button";
import { useState } from "react";
import OverviewTab from './kids/OverviewTab';
import CoursesTab from './kids/CoursesTab';
import TrackingTab from './kids/TrackingTab';
import ResourcesTab from './kids/ResourcesTab';


interface KidDetailID {
    kidid: string;
}

type TabKey = "overview" | "courses" | "tracking" | "resources";

interface KidDetailsTab {
    key: TabKey;
    label: string;
    tabItemNumber?: number;
}

function useStudent(kidid: string) {
    return studentDetails.find((stdd) => stdd.id === kidid);
}

const TAB_DEFINITIONS: { key: TabKey; label: string }[] = [
    { key: "overview", label: "Vue d'ensemble" },
    { key: "courses", label: "Cours" },
    { key: "tracking", label: "Suivi pédagogique" },
    { key: "resources", label: "Ressources" },
];

const KidDetails = ({ kidid }: KidDetailID) => {
    const student = useStudent(kidid);
    const [activeTab, setActiveTab] = useState<TabKey>("overview");

    if (!student) {
        return (
            <Wrapper>
                <DashboardTopbar pageTitile="Profil élève introuvable" />
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-white rounded-lg p-6">
                    <p className="text-board-black/60 text-sm">
                        Cet élève n'existe pas ou n'est plus rattaché à votre compte.
                    </p>
                </div>
            </Wrapper>
        );
    }

    const tabs: KidDetailsTab[] = TAB_DEFINITIONS.map((t) => ({
        ...t,
        tabItemNumber:
            t.key === "courses"
                ? student.courses.sessions.length
                : t.key === "tracking"
                    ? student.tracking.objectives.length
                    : undefined,
    }));

    return (
        <Wrapper>
            <DashboardTopbar pageTitile={`Profil complet de ${student.overview.fullname}`} />
            <div className="w-full h-full flex flex-col items-center justify-start gap-3 overflow-x-hidden overflow-y-scroll scrollbar bg-white rounded-lg p-2">
                <div className="flex flex-col items-center justify-between w-full relative">
                    <div className="flex items-center justify-between w-full relative">
                        <div className="flex items-center justify-start w-full p-4 gap-5">
                            <div className="h-30 w-30 rounded-[32px] bg-board-black/5 overflow-hidden">
                                <img
                                    src={student.overview.avatar}
                                    className="w-full h-full object-cover object-center"
                                    alt="Use avatar"
                                />
                            </div>
                            <div className="">
                                <div className="text-start flex flex-col items-start justify-center">
                                    <p className="text-[12px] text-board-black/60">
                                        <span className="font-medium text-blue-navy text-[18px]">Actif</span>{" "}
                                        Depuis le {student.overview.activeSince}
                                    </p>

                                    <h3 className={["text-[20px] leading-[24px] flex shrink-0 my-1 w-fit"].join(" ")}>
                                        {student.overview.fullname}
                                    </h3>

                                    <div className="flex justify-start gap-2 text-board-black/80">
                                        <span className="rounded bg-board-black/5 px-2 py-1 text-xs">
                                            {student.overview.level}
                                        </span>

                                        <span className="rounded bg-board-black/5 px-2 py-1 text-xs">
                                            {student.overview.schoolType}
                                        </span>
                                    </div>

                                    <p className="mt-1 text-sm flex items-center justify-start text-board-black gap-2">
                                        <School className="fill-board-black" /> {student.overview.school}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img src="/images/dashboard/student-details.png" className="h-30 w-auto" alt="Student details" />
                    </div>
                    <img
                        src="/images/dashboard/student-details-curve.png"
                        className="h-24 w-auto absolute right-0"
                        alt="Student details poppy red curve"
                    />
                    <div className="flex w-full px-4">
                        <div className="h-10 p-1 flex items-center justify-start w-full rounded-full bg-board-black/5">
                            {tabs.map((tab) => {
                                const active = tab.key === activeTab;
                                return (
                                    <Button
                                        key={tab.key}
                                        onClick={() => setActiveTab(tab.key)}
                                        className={[
                                            "text-[13px] h-full! flex items-center justify-center gap-1",
                                            active ? "text-white bg-board-black" : "text-board-black/50",
                                        ].join(" ")}
                                    >
                                        {tab.label}
                                        {typeof tab.tabItemNumber === "number" && tab.tabItemNumber > 0 && (
                                            <div
                                                className={[
                                                    "rounded p-0.5 leading-3.5",
                                                    active ? "text-board-black bg-white" : "text-white bg-board-black/50",
                                                ].join(" ")}
                                            >
                                                {tab.tabItemNumber}
                                            </div>
                                        )}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {activeTab === "overview" && <OverviewTab student={student} />}
                {activeTab === "courses" && <CoursesTab student={student} />}
                {activeTab === "tracking" && <TrackingTab student={student} />}
                {activeTab === "resources" && <ResourcesTab student={student} />}
            </div>
        </Wrapper>
    );
};

export default KidDetails;