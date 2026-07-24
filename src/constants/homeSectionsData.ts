import { CTASection, FaqItem, FooterSection, HowItWorksStep, NavigationItem, SubjectHome, SupportCategory, TeacherI, TestimonyI, ValueItem, ValueSlide } from "@/types";

const whyFamilyChooseUsSectionData = [
    {
        id: 1,
        image: "whatHelearn.png",
        title: "Sachez exactement ce que votre enfant apprend.",
        description: "Planning, comptes rendus et objectifs accessibles à tout moment. Vous ne ratez plus rien.",
        buttonLabel: "Créer votre compte",
        buttonLabelColor: "text-white",
        buttonBackground: "bg-blue-navy",
        cardBackgroundColor: "bg-blue-navy/10"
    },
    {
        id: 2,
        image: "seeEverything.png",
        title: "Fini le flou après chaque cours.",
        description: "Chaque séance est documentée. Consultez ce qui a été travaillé, ce qui reste à revoir et les progrès réalisés, depuis votre téléphone.",
        buttonLabel: "Enregister vous",
        buttonLabelColor: "text-board-black",
        buttonBackground: "bg-shade-cyan",
        cardBackgroundColor: "bg-shade-cyan/10"
    },
    {
        id: 3,
        image: "trackAll.png",
        title: "Un suivi qui vous parle vraiment.",
        description: "Recevez un compte rendu après chaque cours et suivez la progression de votre enfant semaine après semaine.",
        buttonLabel: "Commencer un suivi",
        buttonLabelColor: "text-board-black",
        buttonBackground: "bg-olive-green",
        cardBackgroundColor: "bg-olive-green/10"
    }
];

const subjectSectionData: SubjectHome[][] = [
    [
        {
            title: "Mathématiques",
            description: "Développez des bases solides et progressez avec une méthode adaptée à votre rythme.",
            teacher_number: 14,
            bg_color: "bg-shade-cyan/10",
            icon: "math.svg",
        },
        {
            title: "Physique-Chimie",
            description: "Comprenez les notions essentielles grâce à des explications simples et des exercices ciblés.",
            teacher_number: 12,
            bg_color: "bg-blue-navy/10",
            icon: "ph.svg",
        },
        {
            title: "SVT",
            description: "Assimilez les concepts clés pour réussir les évaluations et les examens en toute confiance.",
            teacher_number: 10,
            bg_color: "bg-board-black/10",
            icon: "svt.svg",
        },
        {
            title: "Anglais",
            description: "Progressez à l'oral et à l'écrit avec un accompagnement personnalisé.",
            teacher_number: 16,
            bg_color: "bg-poppy-red/10",
            icon: "english.svg",
        },
        {
            title: "Français",
            description: "Renforcez votre expression écrite, votre grammaire et votre compréhension des textes.",
            teacher_number: 15,
            bg_color: "bg-marigold-amber/10",
            icon: "english.svg",
        },
        {
            title: "Espagnol",
            description: "Développez vos compétences linguistiques avec un apprentissage progressif et pratique.",
            teacher_number: 8,
            bg_color: "bg-emerald-green/10",
            icon: "spanish.svg",
        },
    ],
    [
        {
            title: "Histoire-Géographie",
            description: "Structurez vos connaissances et développez votre capacité d'analyse et de réflexion.",
            teacher_number: 11,
            bg_color: "bg-board-black/10",
            icon: "history.svg",
        },
        {
            title: "Philosophie",
            description: "Apprenez à argumenter avec méthode et à construire des dissertations de qualité.",
            teacher_number: 9,
            bg_color: "bg-board-black/10",
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

const faqsData: FaqItem[] = [
    {
        question: "Validation de la séance",
        answer:
            "Retrouvez les réponses aux questions les plus fréquemment posées par les familles concernant l'inscription, le déroulement des cours et le suivi pédagogique proposé par D²Répétition.",
        isOpen: true,
    },
    {
        question: "Combien de temps faut-il pour obtenir un professeur ?",
        answer:
            "Après réception de votre demande d'inscription, notre équipe analyse les besoins de votre enfant et sélectionne le profil le plus adapté. Dans la plupart des cas, une proposition d'affectation est réalisée sous quelques jours ouvrés.",
        isOpen: false,
    },
    {
        question: "Comment choisissez-vous les enseignants ?",
        answer:
            "Tous nos enseignants sont sélectionnés selon plusieurs critères : leurs diplômes, leur expérience, leurs compétences pédagogiques, leur professionnalisme et leur engagement envers la réussite des élèves. Chaque candidature fait l'objet d'une évaluation avant toute intégration à notre équipe.",
        isOpen: false,
    },
    {
        question: "Les cours sont-ils uniquement à domicile ?",
        answer:
            "Notre accompagnement est principalement conçu pour les cours de répétition à domicile afin d'offrir un cadre de travail confortable et adapté à l'élève. D'autres modalités peuvent être étudiées selon les besoins et l'organisation mise en place par D²Répétition.",
        isOpen: false,
    },
    {
        question: "Comment suivre les progrès de mon enfant ?",
        answer:
            "Après chaque séance, le professeur rédige un compte rendu pédagogique détaillant les notions abordées, les difficultés rencontrées, les progrès observés et les recommandations pour la suite. Les parents disposent ainsi d'une vision claire et régulière de l'évolution de leur enfant.",
        isOpen: false,
    },
    {
        question: "Que contient le compte rendu pédagogique ?",
        answer:
            "Le compte rendu présente les objectifs de la séance, les notions travaillées, les exercices réalisés, les acquis observés, les points à renforcer ainsi que les recommandations du professeur pour les prochaines séances.",
        isOpen: false,
    },
    {
        question: "Les cours sont-ils adaptés au niveau de chaque élève ?",
        answer:
            "Nous intervenons dans les principales matières des programmes togolais, français et internationaux, notamment en Mathématiques, Physique-Chimie, SVT, Français, Anglais, Allemand, Espagnol et dans plusieurs autres disciplines selon les besoins.",
        isOpen: false,
    },
    {
        question: "Comment les parents sont-ils informés après les cours ?",
        answer:
            "La transparence fait partie de nos engagements. Les familles reçoivent les informations essentielles concernant les séances réalisées, les comptes rendus pédagogiques et l'évolution des apprentissages de leur enfant.",
        isOpen: false,
    },
    {
        question: "Comment puis-je inscrire mon enfant ?",
        answer:
            "Il suffit de remplir le formulaire d'inscription disponible sur la plateforme. Une fois votre demande reçue, notre équipe vous contacte afin d'analyser vos besoins et de mettre en place l'accompagnement le plus adapté.",
        isOpen: false,
    },
];

const homeCtaSection: CTASection = {
    title: "Prêt à offrir à votre enfant le suivi qu'il mérite ?",
    description:
        "Rejoignez les familles qui font confiance à D²Répétition pour accompagner la réussite scolaire de leurs enfants.",

    background_image: "/images/cta/cta-1.png",

    buttons: [
        {
            label: "Inscrire mon enfant",
            href: "/inscription",
            variant: "primary",
            icon: "UserFace",
        },
        {
            label: "Nous contacter",
            href: "/contact",
            variant: "secondary",
            icon: "Call",
        },
    ],
};

const aboutCtaSection: CTASection = {
    title: "Prêt à offrir un accompagnement d'excellence à votre enfant ?",
    description:
        "Rejoignez les familles qui font confiance à D²Répétition pour accompagner la réussite scolaire de leurs enfants.",

    background_image: "/images/cta/cta-2.png",

    buttons: [
        {
            label: "Inscrire mon enfant",
            href: "/inscription",
            variant: "primary",
            icon: "UserFace",
        },
        {
            label: "Nous contacter",
            href: "/contact",
            variant: "secondary",
            icon: "Call",
        },
    ],
};

const footerSectionsData: FooterSection[] = [
    {
        title: "Coordonnées",
        items: [
            {
                label: "Lomé, Togo",
            },
            {
                label: "+228 XX XX XX XX",
            },
            {
                label: "contact@d2repetition.com",
            },
            {
                label: "Lundi - Samedi : 08h00 - 18h00",
            },
        ],
    },
    {
        title: "Navigation rapide",
        items: [
            {
                label: "Accueil",
                href: "/",
            },
            {
                label: "Qui sommes-nous",
                href: "/qui-sommes-nous",
            },
            {
                label: "Nos matières",
                href: "/matieres",
            },
            {
                label: "Nos professeurs",
                href: "/professeurs",
            },
            {
                label: "Comment ça marche",
                href: "/comment-ca-marche",
            },
            {
                label: "Témoignages",
                href: "/#temoignages",
            },
            {
                label: "Contact",
                href: "/contact",
            },
        ],
    },
    {
        title: "Liens utilisateurs",
        items: [
            {
                label: "Inscription élève",
                href: "/inscription",
            },
            {
                label: "Candidature professeur",
                href: "/candidature",
            },
            {
                label: "Connexion à mon espace",
                href: "/connexion",
            },
        ],
    },
    {
        title: "Réseaux sociaux",
        items: [
            {
                label: "Facebook",
                href: "https://facebook.com",
            },
            {
                label: "Instagram",
                href: "https://instagram.com",
            },
            {
                label: "WhatsApp",
                href: "https://wa.me/",
            },
            {
                label: "LinkedIn",
                href: "https://linkedin.com",
            },
        ],
    },
    {
        title: "Liens légaux",
        items: [
            {
                label: "Mentions légales",
                href: "/mentions-legales",
            },
            {
                label: "Politique de confidentialité",
                href: "/politique-confidentialite",
            },
            {
                label: "Conditions générales d'utilisation",
                href: "/conditions-generales-utilisation",
            },
            {
                label: "Politique de cookies",
                href: "/politique-cookies",
            },
        ],
    },
];


const navigationItemsData: NavigationItem[] = [
    {
        id: 1,
        title: "Une nouvelle vision des cours de répétition",
        description:
            "Nous accompagnons les familles avec un suivi scolaire transparent, organisé et de qualité.",
        active: true,
    },
    {
        id: 2,
        title: "Accompagner la réussite de chaque élève",
        description:
            "Un accompagnement personnalisé, assuré par des professeurs qualifiés et un suivi pédagogique rigoureux.",
        active: false,
    },
    {
        id: 3,
        title: "Transparence et confiance au quotidien",
        description:
            "Chaque séance est tracée, validée et accessible aux parents depuis leur espace personnel.",
        active: false,
    },
];

const slidesData: ValueSlide[] = [
    {
        id: 1,
        image: "/images/value-1.png",
        title: "Une nouvelle vision des cours de répétition à domicile",
        active: true,

        theme: "primary",
        backgroundColor: "bg-poppy-pink",
        textColor: "text-board-black",
        dividerColor: "border-b border-b-board-black border-b-[0.25px]",

        statistics: [
            { id: 1, value: "458+", label: "Élèves suivis" },
            { id: 2, value: "35+", label: "Professeurs actifs" },
            { id: 3, value: "10+", label: "Matières proposées" },
        ],
    },

    {
        id: 2,
        image: "/images/value-2.png",
        title: "Accompagner chaque élève vers sa réussite",
        active: false,

        theme: "dark",
        backgroundColor: "bg-board-black",
        textColor: "text-white",
        dividerColor: "border-b border-b-white border-b-[0.25px]",

        statistics: [
            { id: 1, value: "100%", label: "Professeurs validés" },
            { id: 2, value: "100%", label: "Cours suivis" },
            { id: 3, value: "24h", label: "Temps de réponse" },
        ],
    },

    {
        id: 3,
        image: "/images/value-3.png",
        title: "Transparence, qualité et confiance au quotidien",
        active: false,

        theme: "olive",
        backgroundColor: "bg-olive-green",
        textColor: "text-board-black",
        dividerColor: "border-b border-b-board-black border-b-[0.25px]",

        statistics: [
            { id: 1, value: "100%", label: "Comptes rendus" },
            { id: 2, value: "100%", label: "Séances validées" },
            { id: 3, value: "98%", label: "Satisfaction moyenne" },
        ],
    },
];

const supportCategoriesData: SupportCategory[] = [
    {
        id: 1,
        title: "Difficultés d'apprentissage",
        description:
            "Lecture, écriture, calcul, compréhension et raisonnement.",
        backgroundColor: "bg-shade-cyan/10",
        icon: "/images/challenges/Learning.png",
    },
    {
        id: 2,
        title: "Difficultés cognitives",
        description:
            "Concentration, mémorisation, organisation et autonomie.",
        backgroundColor: "bg-olive-green/10",
        icon: "/images/challenges/Brain.png",
    },
    {
        id: 3,
        title: "Difficultés scolaires",
        description:
            "Retard, baisse des résultats et préparation aux examens.",
        backgroundColor: "bg-poppy-red/10",
        icon: "/images/challenges/Bag.png",
    },
    {
        id: 4,
        title: "Confiance et motivation",
        description:
            "Stress, motivation, confiance en soi et implication.",
        backgroundColor: "bg-blue-navy/10",
        icon: "/images/challenges/Cup.png",
    },
    {
        id: 5,
        title: "Accompagnement des familles",
        description:
            "Suivi des progrès et communication avec les parents.",
        backgroundColor: "bg-marigold-amber/10",
        icon: "/images/challenges/Hug.png",
    },
    {
        id: 6,
        title: "Orientation scolaire",
        description:
            "Choix des séries, méthodes de travail et préparation de l'avenir.",
        backgroundColor: "bg-emerald-green/10",
        icon: "/images/challenges/Direction.png",
    },
];

const valuesData: ValueItem[] = [
    {
        id: 1,
        title: "Excellence",
        description:
            "Nous recherchons en permanence la qualité dans chacune de nos prestations.",
        backgroundColor: "bg-[#ECECEA]",
        icon: "/images/values/Excellence.png",
    },
    {
        id: 2,
        title: "Professionnalisme",
        description:
            "Nous intervenons avec rigueur, ponctualité et responsabilité.",
        backgroundColor: "bg-[#ECEBE6]",
        icon: "/images/values/Professionnalisme.png",
    },
    {
        id: 3,
        title: "Innovation",
        description:
            "Nous intégrons les neurosciences éducatives et les technologies numériques.",
        backgroundColor: "bg-[#F4E8EB]",
        icon: "/images/values/Innovation.png",
    },
    {
        id: 4,
        title: "Intégrité",
        description:
            "Nous agissons avec honnêteté, transparence et éthique.",
        backgroundColor: "bg-[#E8E8EC]",
        icon: "/images/values/Integrity.png",
    },
    {
        id: 5,
        title: "Engagement",
        description:
            "Nous nous impliquons pleinement dans la réussite de chaque élève.",
        backgroundColor: "bg-[#F2E8E6]",
        icon: "/images/values/Engagement.png",
    },
    {
        id: 6,
        title: "Respect",
        description:
            "Nous plaçons l'écoute et le respect au cœur de nos relations.",
        backgroundColor: "bg-[#ECE8E2]",
        icon: "/images/values/Respect.png",
    },
];

export {
    whyFamilyChooseUsSectionData,
    subjectSectionData,
    teachers,
    testimonies,
    howItWorksData,
    faqsData,
    homeCtaSection,
    aboutCtaSection,
    footerSectionsData,
    navigationItemsData,
    slidesData,
    supportCategoriesData,
    valuesData
}