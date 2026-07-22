import { SubjectHome } from "@/types";

const whyFamilyChooseUsSectionData = [
    {
        id: 1,
        image: "whatHelearn.png",
        title: "Sachez exactement ce que votre enfant apprend.",
        description: "Planning, comptes rendus et objectifs accessibles à tout moment. Vous ne ratez plus rien.",
        buttonLabel: "Créer votre compte",
        buttonLabelColor: "text-white",
        buttonBackground: "bg-blue-navy",
        cardBackgroundColor: "bg-blue-navy/5"
    },
    {
        id: 2,
        image: "seeEverything.png",
        title: "Fini le flou après chaque cours.",
        description: "Chaque séance est documentée. Consultez ce qui a été travaillé, ce qui reste à revoir et les progrès réalisés, depuis votre téléphone.",
        buttonLabel: "Enregister vous",
        buttonLabelColor: "text-board-black",
        buttonBackground: "bg-shade-cyan",
        cardBackgroundColor: "bg-shade-cyan/5"
    },
    {
        id: 3,
        image: "trackAll.png",
        title: "Un suivi qui vous parle vraiment.",
        description: "Recevez un compte rendu après chaque cours et suivez la progression de votre enfant semaine après semaine.",
        buttonLabel: "Commencer un suivi",
        buttonLabelColor: "text-board-black",
        buttonBackground: "bg-olive-green",
        cardBackgroundColor: "bg-olive-green/5"
    }
];

const subjectSectionData: SubjectHome[][] = [
    [
        {
            title: "Mathématiques",
            description: "Développez des bases solides et progressez avec une méthode adaptée à votre rythme.",
            teacher_number: 14,
            bg_color: "bg-shade-cyan/5",
            icon: "/icons/subjects/mathematics.svg",
        },
        {
            title: "Physique-Chimie",
            description: "Comprenez les notions essentielles grâce à des explications simples et des exercices ciblés.",
            teacher_number: 12,
            bg_color: "bg-blue-navy/5",
            icon: "/icons/subjects/physics.svg",
        },
        {
            title: "SVT",
            description: "Assimilez les concepts clés pour réussir les évaluations et les examens en toute confiance.",
            teacher_number: 10,
            bg_color: "bg-board-black/5",
            icon: "/icons/subjects/svt.svg",
        },
        {
            title: "Anglais",
            description: "Progressez à l'oral et à l'écrit avec un accompagnement personnalisé.",
            teacher_number: 16,
            bg_color: "bg-poppy-red/5",
            icon: "/icons/subjects/english.svg",
        },
        {
            title: "Français",
            description: "Renforcez votre expression écrite, votre grammaire et votre compréhension des textes.",
            teacher_number: 15,
            bg_color: "bg-marigold-amber/5",
            icon: "/icons/subjects/french.svg",
        },
        {
            title: "Espagnol",
            description: "Développez vos compétences linguistiques avec un apprentissage progressif et pratique.",
            teacher_number: 8,
            bg_color: "bg-emerald-green/5",
            icon: "/icons/subjects/spanish.svg",
        },
    ],
    [
        {
            title: "Histoire-Géographie",
            description: "Structurez vos connaissances et développez votre capacité d'analyse et de réflexion.",
            teacher_number: 11,
            bg_color: "bg-board-black/5",
            icon: "/icons/subjects/history.svg",
        },
        {
            title: "Philosophie",
            description: "Apprenez à argumenter avec méthode et à construire des dissertations de qualité.",
            teacher_number: 9,
            bg_color: "bg-board-black/5",
            icon: "/icons/subjects/philosophy.svg",
        },
        {
            title: "Allemand",
            description: "Initiez-vous à la langue allemande et développez votre communication.",
            teacher_number: 6,
            bg_color: "bg-cyan-50",
            icon: "/icons/subjects/german.svg",
        },
        {
            title: "Informatique",
            description: "Maîtrisez les bases de l'informatique et développez votre logique.",
            teacher_number: 13,
            bg_color: "bg-indigo-50",
            icon: "/icons/subjects/computer.svg",
        },
        {
            title: "Économie",
            description: "Comprenez les mécanismes économiques et financiers du monde actuel.",
            teacher_number: 7,
            bg_color: "bg-orange-50",
            icon: "/icons/subjects/economy.svg",
        },
        {
            title: "Comptabilité",
            description: "Apprenez les principes essentiels de la comptabilité et de la gestion.",
            teacher_number: 8,
            bg_color: "bg-teal-50",
            icon: "/icons/subjects/accounting.svg",
        },
    ],
];

export {
    whyFamilyChooseUsSectionData,
    subjectSectionData
}