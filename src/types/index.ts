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
    photo: string;
    rating: number;
    levels: string[];
    subjects: string[];
    bio: string;
}

/* Testimonies */

export interface TestimonyI {
    full_name: string;
    role: string;
    testimony: string;
    avatar: string;
    bg_color: string;
}

export type HowItWorksStep = {
    step: number;
    title: string;
    description: string;
};

export type FaqItem = {
    question: string;
    answer: string;
    isOpen: boolean;
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
    background_image: string;
    buttons: CTAButton[];
}