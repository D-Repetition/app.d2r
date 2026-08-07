import { StaticImageData } from "next/image";
import { ComponentProps, ElementType, ReactNode } from "react";

export interface Subject {
    title: string;
    description: string;
    teacher_number: number;
    bg_color: string;
}

export interface SubjectHome extends Subject {
    icon: string;
}

type SubjectTag = "College" | "Primary" | "HighSchool";

type SubjectTags =
    | []
    | [SubjectTag]
    | [SubjectTag, SubjectTag]
    | [SubjectTag, SubjectTag, SubjectTag];

export interface SubjectItself extends Subject {
    tags: SubjectTags;
}

/* TEACHERS SECTION */
export interface TeacherI {
    full_name: string;
    photo: StaticImageData | string;
    rating: number;
    levels: string[];
    subjects: string[];
    bio: string;
    isTrueCard?: boolean;
}

/* Testimonies */

export interface TestimonyI {
    full_name: string;
    role: string;
    testimony: string;
    avatar: StaticImageData | string;
    bg_color: string;
}

export type HowItWorksStep = {
    step: number;
    title: string;
    description: string;
    bg_color?: string;
};

export type FaqItem = {
    question: string;
    answer: string;
    isOpen: boolean;
    btn?: {
        label: string,
        href: string
    }
};

export type CTAButton = {
    label: string;
    href: string;
    variant: "primary" | "secondary";
    icon: 'Arrow' | 'Folder' | 'Call' | 'UserFace';
};

export interface CTASection {
    title: string;
    description: string;
    background_image: StaticImageData | string;
    buttons: CTAButton[];
}

export interface FooterItem {
    label: string;
    href?: string;
}

export interface FooterSection {
    title: string;
    items: FooterItem[];
}

export interface Statistic {
    id: number;
    value: string;
    label: string;
}

export interface NavigationItem {
    id: number;
    title: string;
    description: string;
    active: boolean;
}

export interface ValueSlide {
    id: number;
    image: StaticImageData | string;
    title: string;
    active: boolean;

    theme: "primary" | "dark" | "olive";

    backgroundColor: string;
    textColor: string;
    dividerColor: string;

    statistics: Statistic[];
}

export interface SupportCategory {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
    icon: StaticImageData | string;
}

export interface ValueItem {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
    icon: StaticImageData | string;
}

export interface AuthWrapperI {
    title: string;
    subtitle: string;
    illustration: StaticImageData;
    children: ReactNode;
    start?: boolean;
}

interface AuthPageData {
    title: string;
    subtitle: string;
    illustration: StaticImageData;
}

interface AuthPage {
    id: string;
    page_data: AuthPageData;
}

export type AuthPages = Record<string, AuthPage>;


/* DASHBOARD */

export interface SidebarItem {
    id: string;
    label: string;
    href: string;
    icon: ElementType;
}

export interface SidebarConfig {
    main: SidebarItem[];
    secondary: SidebarItem[];
}

export interface DahsboardTeacherI {
    profil: string;
    fullname: string;
}

export interface Session {
    id: number;
    hour: string;
    subject: string;
    teacher: DahsboardTeacherI;
    place: string;
    status: "done" | "rejected" | "pending";
    indicator: "read" | "not-read";
}

export interface TableHeader {
    key: keyof Session | "actions";
    label: string;
    sortable?: boolean;
}

export interface StudentCardStat {
    label: string;
    value: number | string;
}

export interface StudentCardProps extends ComponentProps<"div"> {
    id: string;
    avatar: string;
    fullname: string;
    bgcolor?: string;
    activeSince: string;
    level: string;
    schoolType: string;
    school: string;
    subjects: string[];
    nextSession: string;
    stats: StudentCardStat[];
}
export interface TeacherSummary {
    id: string;
    fullname: string;
    avatar: string;
}

export type FileType = "pdf" | "docx" | "xlsx" | "image";

export type ExtendedFileType = FileType | "pptx" | "video";

export interface AssignedTeacher extends TeacherSummary {
    experience: number;
    teaches: string[];
    assignedSince: string;
    objectives: string;
}

export interface CurrentSubject {
    id: string;
    name: string;
    startedAt: string;
    sessionsCount: number;
}

export interface FollowUp {
    assignedTeacher: string;
    lastSession: string;
    nextSession: string;
}

export interface OverviewStats {
    totalCourses: number;
    validatedCourses: number;
    pendingReports: number;
}

export interface Overview {
    avatar: string;
    fullname: string;
    activeSince: string;
    birthDate: string;

    level: string;
    schoolType: string;
    school: string;

    subjects: string[];

    assignedTeacher: AssignedTeacher;
    currentSubject: CurrentSubject;
    followUp: FollowUp;
    stats: OverviewStats;
}

export type SessionStatus =
    | "planned"
    | "done"
    | "cancelled"
    | "disputed"
    | "waiting_validation";

export interface CourseSession {
    id: string;
    number: number;

    subject: string;

    teacher: TeacherSummary;

    place: string;

    date: string;
    startHour: string;
    endHour: string;

    status: SessionStatus;

    reportAvailable: boolean;
    teacherValidation: boolean;
    parentValidation: boolean;

    objective: string;
    summary: string;
}

export interface CourseStatistics {
    completed: number;
    cancelled: number;
    unvalidated: number;
    disputed: number;
    plannedThisMonth: number;
}

export interface Courses {
    statistics: CourseStatistics;
    sessions: CourseSession[];
}

export interface Attachment {
    id: string;
    name: string;
    type: FileType;
    url: string;
}

export interface SessionDetail {
    id: string;
    sessionId: string;

    duration: number;
    place: string;

    objective: string;
    report: string;

    homework: string[];

    teacherValidation: boolean;
    parentValidation: boolean;

    attachments: Attachment[];
}

export type ObjectiveStatus = "in-progress" | "completed" | "failed";

export interface TrackingObjective {
    id: string;

    subject: string;

    createdAt: string;
    deadline: string;

    title: string;
    description: string;

    status: ObjectiveStatus;

    progress: number;
    remainingDays: number | null;

    completedAt?: string;

    teacherComment: string;
}

export type EvaluationType =
    | "Contrôle de cours"
    | "Exercice de compréhension"
    | "Évaluation orale"
    | "Évaluation de chapitre";

export interface Evaluation {
    id: string;

    subject: string;
    date: string;

    type: EvaluationType;

    competencies: string[];

    result: string;

    teacher: TeacherSummary;

    teacherComment: string;
}

export interface Grade {
    id: string;

    subject: string;
    date: string;

    evaluationType: string;

    score: number;
    maxScore: number;

    teacherComment: string;
}

export type Trend = "up" | "down" | "stable";

export interface SubjectAverage {
    id: string;

    subject: string;
    month: string;

    average: number;
    scale: number;

    evaluationsCount: number;

    trend: Trend;

    appreciation: string;
}

export type ReportStatus = "read" | "unread";

export interface TrackingReport {
    id: string;

    subject: string;
    date: string;

    teacher: TeacherSummary;

    status: ReportStatus;

    summary: string;

    coveredTopics: string[];
    completedExercises: string[];
    observedDifficulties: string[];
    recommendations: string[];

    downloadable: boolean;
    fileUrl?: string;
}

export interface Tracking {
    objectives: TrackingObjective[];
    evaluations: Evaluation[];
    grades: Grade[];
    averages: SubjectAverage[];
    reports: TrackingReport[];
}

export interface ResourceFile {
    name: string;
    type: ExtendedFileType;
    size: string;
    url: string;
}

export type ResourceCategory =
    | "Cours"
    | "Exercice"
    | "Correction"
    | "Fiche"
    | "Vidéo"
    | "Évaluation";

export interface ResourceDocument {
    id: string;

    title: string;

    category: ResourceCategory;
    subject: string;

    sharedAt: string;

    file: ResourceFile;

    contentTitle: string;

    teacher: TeacherSummary;

    description: string;
    tags: string[];
    teacherComment: string;

    viewed: boolean;
    downloaded: boolean;
    downloadable: boolean;
    shareable: boolean;
}

export interface ResourceStatistics {
    available: number;
    unread: number;
}

export interface Resources {
    statistics: ResourceStatistics;
    documents: ResourceDocument[];
}

export interface StudentDetails {
    id: string;

    overview: Overview;
    courses: Courses;
    sessionDetails: SessionDetail[];
    tracking: Tracking;
    resources: Resources;
}