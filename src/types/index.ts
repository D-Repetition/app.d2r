import { StaticImageData } from "next/image";
import { ReactNode } from "react";

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