import { HowItWorksStep, SubjectHome, TeacherI, TestimonyI } from "@/types";

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
            icon: "math.svg",
        },
        {
            title: "Physique-Chimie",
            description: "Comprenez les notions essentielles grâce à des explications simples et des exercices ciblés.",
            teacher_number: 12,
            bg_color: "bg-blue-navy/5",
            icon: "ph.svg",
        },
        {
            title: "SVT",
            description: "Assimilez les concepts clés pour réussir les évaluations et les examens en toute confiance.",
            teacher_number: 10,
            bg_color: "bg-board-black/5",
            icon: "svt.svg",
        },
        {
            title: "Anglais",
            description: "Progressez à l'oral et à l'écrit avec un accompagnement personnalisé.",
            teacher_number: 16,
            bg_color: "bg-poppy-red/5",
            icon: "english.svg",
        },
        {
            title: "Français",
            description: "Renforcez votre expression écrite, votre grammaire et votre compréhension des textes.",
            teacher_number: 15,
            bg_color: "bg-marigold-amber/5",
            icon: "english.svg",
        },
        {
            title: "Espagnol",
            description: "Développez vos compétences linguistiques avec un apprentissage progressif et pratique.",
            teacher_number: 8,
            bg_color: "bg-emerald-green/5",
            icon: "spanish.svg",
        },
    ],
    [
        {
            title: "Histoire-Géographie",
            description: "Structurez vos connaissances et développez votre capacité d'analyse et de réflexion.",
            teacher_number: 11,
            bg_color: "bg-board-black/5",
            icon: "history.svg",
        },
        {
            title: "Philosophie",
            description: "Apprenez à argumenter avec méthode et à construire des dissertations de qualité.",
            teacher_number: 9,
            bg_color: "bg-board-black/5",
            icon: "philosophy.svg",
        },
        {
            title: "Allemand",
            description: "Initiez-vous à la langue allemande et développez votre communication.",
            teacher_number: 6,
            bg_color: "bg-cyan-50",
            icon: "english.svg",
        },
        {
            title: "Informatique",
            description: "Maîtrisez les bases de l'informatique et développez votre logique.",
            teacher_number: 13,
            bg_color: "bg-indigo-50",
            icon: "computer.svg",
        },
        {
            title: "Économie",
            description: "Comprenez les mécanismes économiques et financiers du monde actuel.",
            teacher_number: 7,
            bg_color: "bg-orange-50",
            icon: "economy.svg",
        },
        {
            title: "Comptabilité",
            description: "Apprenez les principes essentiels de la comptabilité et de la gestion.",
            teacher_number: 8,
            bg_color: "bg-teal-50",
            icon: "accounting.svg",
        },
    ],
];


/* TEACHERS */
const teachers: TeacherI[] = [
    {
        full_name: "Amina K.",
        photo: "/images/teachers/teacher-1.png",
        rating: 4.8,
        levels: ["Collège", "Lycée"],
        subjects: ["Mathématiques", "Physique-Chimie"],
        bio: "Pédagogue patiente, spécialisée dans la remise à niveau et la préparation aux examens.",
    },
    {
        full_name: "Kevin A.",
        photo: "/images/teachers/teacher-2.png",
        rating: 4.9,
        levels: ["Primaire", "Collège"],
        subjects: ["Français", "Anglais"],
        bio: "Expert en expression écrite et orale, avec une approche adaptée au rythme de chaque élève.",
    },
    {
        full_name: "Nadia M.",
        photo: "/images/teachers/teacher-3.png",
        rating: 4.8,
        levels: ["Collège", "Lycée"],
        subjects: ["SVT", "Physique-Chimie"],
        bio: "Rend les sciences accessibles grâce à des expériences concrètes et des explications claires.",
    },
    {
        full_name: "Jordan T.",
        photo: "/images/teachers/teacher-4.png",
        rating: 4.7,
        levels: ["Lycée"],
        subjects: ["Mathématiques", "Informatique"],
        bio: "Accompagne les élèves vers l'excellence avec une méthode rigoureuse et personnalisée.",
    },
    {
        full_name: "Sarah D.",
        photo: "/images/teachers/teacher-5.png",
        rating: 4.9,
        levels: ["Collège", "Lycée"],
        subjects: ["Histoire-Géographie", "Philosophie"],
        bio: "Développe l'esprit critique et aide les élèves à structurer leurs idées efficacement.",
    },
    {
        full_name: "David E.",
        photo: "/images/teachers/teacher-6.png",
        rating: 4.8,
        levels: ["Collège", "Lycée"],
        subjects: ["Espagnol", "Anglais"],
        bio: "Passionné de langues vivantes, il privilégie la pratique et la communication.",
    },
    {
        full_name: "Grâce B.",
        photo: "/images/teachers/teacher-7.png",
        rating: 5.0,
        levels: ["Primaire", "Collège"],
        subjects: ["Français", "Mathématiques"],
        bio: "Accompagne les plus jeunes avec bienveillance pour bâtir des bases solides et durables.",
    },
    {
        full_name: "Junior G.",
        photo: "/images/teachers/teacher-8.png",
        rating: 5.0,
        levels: ["Primaire", "Collège"],
        subjects: ["Français", "Mathématiques"],
        bio: "Accompagne les plus jeunes avec bienveillance pour bâtir des bases solides et durables.",
    },
];


const testimonies: TestimonyI[] = [
    {
        full_name: "Kofi A.",
        role: "Père d'une élève en 3e",
        testimony:
            "J'ai enfin une visibilité sur les cours de ma fille. Avant, je payais sans savoir si le professeur venait vraiment. Maintenant, tout est validé et transparent.",
        avatar: "/images/testimonies/avatar-1.svg",
        bg_color: "bg-poppy-orange",
    },
    {
        full_name: "Fatou D.",
        role: "Mère d'un élève en Terminale, Lomé",
        testimony:
            "Depuis que mon fils est suivi par D²Répétition, je vois vraiment la différence. Je reçois un compte rendu après chaque cours et je sais exactement ce qui a été travaillé. C'est rassurant.",
        avatar: "/images/testimonies/avatar-2.svg",
        bg_color: "bg-poppy-gold",
    },
    {
        full_name: "Edem",
        role: "Lycéen",
        testimony:
            "Le professeur que j'ai est vraiment patient. Il rédige un résumé après chaque cours que je peux relire ce qu'on a fait. Mes notes en maths ont nettement progressé.",
        avatar: "/images/testimonies/avatar-3.svg",
        bg_color: "bg-shade-cyan",
    },
    {
        full_name: "Afi M.",
        role: "Mère d'un élève en CM2",
        testimony:
            "Ma fille a repris confiance en elle. Les professeurs sont ponctuels, attentifs et les comptes rendus me permettent de suivre sa progression semaine après semaine.",
        avatar: "/images/testimonies/avatar-4.svg",
        bg_color: "bg-olive-green",
    },
    {
        full_name: "Komlan K.",
        role: "Parent d'un élève en 5e",
        testimony:
            "La plateforme est simple à utiliser. J'apprécie particulièrement les rapports détaillés après chaque séance et la réactivité de l'équipe.",
        avatar: "/images/testimonies/avatar-5.svg",
        bg_color: "bg-poppy-purple/90",
    },
    {
        full_name: "Sandra E.",
        role: "Élève en Première",
        testimony:
            "Les explications sont claires et adaptées à mon niveau. Je suis beaucoup plus à l'aise en physique et en mathématiques depuis le début des répétitions.",
        avatar: "/images/testimonies/avatar-6.svg",
        bg_color: "bg-poppy-pink",
    },
];

const howItWorksData: HowItWorksStep[] = [
    {
        step: 1,
        title: "Inscription",
        description:
            "Remplissez le formulaire d'inscription avec les informations de votre enfant et les matières souhaitées. Notre équipe prend contact avec vous sous 48 heures.",
    },
    {
        step: 2,
        title: "Affectation",
        description:
            "Nous sélectionnons le professeur le plus adapté au profil et aux besoins de votre enfant. Vous êtes informé de l'affectation et pouvez consulter son profil.",
    },
    {
        step: 3,
        title: "Cours à domicile",
        description:
            "Le professeur se rend au domicile de l'élève aux créneaux définis. Après chaque séance, il rédige un compte rendu détaillé visible depuis votre espace.",
    },
    {
        step: 4,
        title: "Suivi et validation",
        description:
            "Vous recevez une notification après chaque cours pour confirmer que la séance a bien eu lieu. Vous accédez à tout moment aux notes, objectifs et comptes rendus de votre enfant.",
    },
];

export {
    whyFamilyChooseUsSectionData,
    subjectSectionData,
    teachers,
    testimonies,
    howItWorksData
}