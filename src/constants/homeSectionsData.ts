import { CTASection, FaqItem, FooterSection, HowItWorksStep, NavigationItem, SubjectHome, SubjectItself, SupportCategory, TeacherI, TestimonyI, ValueItem, ValueSlide } from "@/types";

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

const howItWorksFaqsData: FaqItem[] = [
    {
        question: "Comment effectuer une demande de cours ?",
        answer:
            "Commencez par remplir le formulaire de demande en indiquant le niveau scolaire de l'élève, les matières concernées, vos disponibilités ainsi que toute information utile. Ces éléments nous permettent de préparer un accompagnement adapté.",
        isOpen: true,
    },
    {
        question: "Comment analysons-nous votre demande ?",
        answer:
            "Notre équipe étudie chaque demande afin de comprendre les besoins de l'élève, ses objectifs, ses difficultés éventuelles et les contraintes d'organisation. Cette analyse permet de sélectionner le profil d'enseignant le plus pertinent.",
        isOpen: false,
    },
    {
        question: "Comment le professeur est-il sélectionné ?",
        answer:
            "Nous choisissons un enseignant qualifié selon la matière, le niveau scolaire, la localisation, les disponibilités et les objectifs pédagogiques. Chaque professeur est recruté selon des critères stricts de compétence et de professionnalisme.",
        isOpen: false,
    },
    {
        question: "Comment la première séance est-elle organisée ?",
        answer:
            "Une fois le professeur validé, nous planifions la première séance en accord avec la famille. Cette rencontre permet d'établir un premier contact, d'évaluer les besoins de l'élève et de définir les objectifs de l'accompagnement.",
        isOpen: false,
    },
    {
        question: "Comment se déroulent les séances de répétition ?",
        answer:
            "Chaque séance est préparée selon les besoins de l'élève. Le professeur adapte sa pédagogie, travaille les notions du programme, propose des exercices ciblés et accompagne progressivement l'élève vers ses objectifs.",
        isOpen: false,
    },
    {
        question: "Comment les parents suivent-ils l'évolution de leur enfant ?",
        answer:
            "Après chaque séance, un compte rendu pédagogique est rédigé. Les parents peuvent consulter les notions étudiées, les progrès réalisés, les difficultés rencontrées ainsi que les recommandations pour les prochaines séances.",
        isOpen: false,
    },
    {
        question: "Comment les progrès sont-ils évalués ?",
        answer:
            "Tout au long de l'accompagnement, le professeur évalue régulièrement les acquis de l'élève grâce à des exercices, des observations et des bilans pédagogiques afin d'ajuster la méthode de travail lorsque cela est nécessaire.",
        isOpen: false,
    },
    {
        question: "Peut-on modifier le planning ou changer de professeur ?",
        answer:
            "Oui. En cas de besoin, notre équipe peut réorganiser les horaires des séances ou proposer un nouvel enseignant afin de garantir un accompagnement toujours adapté à la situation de l'élève.",
        isOpen: false,
    },
    {
        question: "Quand l'accompagnement prend-il fin ?",
        answer:
            "L'accompagnement se poursuit aussi longtemps que nécessaire. Les objectifs sont réévalués régulièrement avec la famille afin de déterminer le moment le plus approprié pour mettre fin au suivi ou poursuivre les séances.",
        isOpen: false,
    },
];

const faqFaqsData: FaqItem[] = [
    {
        question: "Qu'est-ce que D²Répétition ?",
        answer:
            "<p>D²Répétition est une structure spécialisée dans l'accompagnement scolaire personnalisé à domicile. Nous proposons des cours particuliers, un suivi pédagogique rigoureux et des méthodes d'apprentissage innovantes basées sur les neurosciences éducatives afin d'améliorer durablement les performances scolaires.</p>",
        isOpen: true,
    },
    {
        question: "À quels niveaux intervenez-vous ?",
        answer:
            "<p>Nous accompagnons les élèves :</p><ul><li>Préscolaire</li><li>Primaire</li><li>Collège</li><li>Lycée</li><li>Étudiants (selon les disciplines)</li><li>Adultes pour l'apprentissage des langues</li></ul>",
        isOpen: false,
    },
    {
        question: "Quelles matières enseignez-vous ?",
        answer:
            "<p>Nos matières principales sont :</p><ul><li>Mathématiques</li><li>Physique-Chimie (PCT)</li><li>Sciences de la Vie et de la Terre (SVT)</li><li>Anglais</li></ul><p>Nous proposons également toutes les autres matières des programmes :</p><ul><li>Togolais</li><li>Français</li><li>International</li></ul>",
        isOpen: false,
    },
    {
        question: "Quelles langues proposez-vous ?",
        answer:
            "<p>Nous proposons des cours en :</p><ul><li>Français</li><li>Anglais</li><li>Allemand</li><li>Espagnol</li></ul>",
        isOpen: false,
    },
    {
        question: "Les cours se déroulent où ?",
        answer:
            "<p>Les cours peuvent être organisés :</p><ul><li>À domicile.</li><li>En ligne.</li><li>Dans tout autre lieu convenu entre les parties.</li></ul>",
        isOpen: false,
    },
    {
        question: "Comment choisissez-vous les enseignants ?",
        answer:
            "<ul><li>Étude du dossier.</li><li>Vérification des diplômes.</li><li>Entretien.</li><li>Évaluation pédagogique.</li><li>Validation par la direction.</li></ul>",
        isOpen: false,
    },
    {
        question: "Comment se déroule l'inscription ?",
        answer:
            "<p>L'inscription comprend :</p><ol><li>La prise de contact.</li><li>L'analyse des besoins de l'élève.</li><li>Le choix des matières.</li><li>L'affectation d'un enseignant.</li><li>Le démarrage des cours.</li></ol>",
        isOpen: false,
    },
    {
        question: "Comment suivez-vous les progrès de l'élève ?",
        answer:
            "<p>Chaque élève bénéficie :</p><ul><li>d'un suivi pédagogique personnalisé ;</li><li>d'un compte rendu après chaque séance ;</li><li>d'évaluations régulières ;</li><li>de rapports périodiques transmis aux parents.</li></ul>",
        isOpen: false,
    },
    {
        question: "Les parents peuvent-ils suivre les cours ?",
        answer:
            "<p>Oui. Grâce à la plateforme D²Répétition, les parents peuvent consulter :</p><ul><li>le planning des cours ;</li><li>les comptes rendus ;</li><li>les progrès de leur enfant ;</li><li>les statistiques ;</li><li>les paiements ;</li><li>les notifications.</li></ul>",
        isOpen: false,
    },
    {
        question: "Que se passe-t-il si un professeur est absent ?",
        answer:
            "<p>En cas d'absence, D²Répétition informe rapidement la famille et organise le report du cours ou le remplacement de l'enseignant dans les meilleurs délais.</p>",
        isOpen: false,
    },
    {
        question: "Comment les cours sont-ils validés ?",
        answer:
            "<p>À la fin de chaque séance :</p><ul><li>le professeur confirme la réalisation du cours ;</li><li>le parent valide également que le cours a bien eu lieu.</li></ul><p>Cette double validation garantit la transparence.</p>",
        isOpen: false,
    },
    {
        question: "Qu'est-ce qui différencie D²Répétition des autres structures ?",
        answer:
            "<p>Notre différence repose sur :</p><ul><li>un accompagnement personnalisé ;</li><li>des enseignants qualifiés ;</li><li>un suivi pédagogique permanent ;</li><li>des rapports détaillés après chaque séance ;</li><li>l'utilisation des neurosciences éducatives ;</li><li>une plateforme numérique de suivi.</li></ul>",
        isOpen: false,
    },
    {
        question: "Utilisez-vous les neurosciences éducatives ?",
        answer:
            "<p>Oui. Nos méthodes s'appuient sur les neurosciences éducatives afin de mieux comprendre les mécanismes d'apprentissage, de mémorisation, d'attention et de motivation de chaque élève.</p>",
        isOpen: false,
    },
    {
        question: "Comment les paiements sont-ils effectués ?",
        answer:
            "<p>Les paiements peuvent être réalisés selon les modalités proposées par D²Répétition (Mobile Money, virement bancaire, espèces ou autres moyens disponibles).</p>",
        isOpen: false,
    },
    {
        question: "Puis-je arrêter les cours à tout moment ?",
        answer:
            "<p>Oui. En respectant les engagements et les modalités d'arrêt de cours convenu avec la société.</p>",
        isOpen: false,
    },
    {
        question: "D²Répétition intervient-elle uniquement à Lomé ?",
        answer:
            "<p>Nos services sont principalement disponibles à Lomé. Selon les besoins et les possibilités, nous pouvons également intervenir dans d'autres localités ou proposer des cours en ligne.</p>",
        isOpen: false,
    },
    {
        question: "Comment puis-je contacter D²Répétition ?",
        answer:
            "<p>Vous pouvez nous joindre par :</p><ul><li>Téléphone</li><li>WhatsApp</li><li>E-mail</li><li>Formulaire de contact sur notre site internet</li><li>Réseaux sociaux officiels</li></ul><p>Notre équipe se fera un plaisir de vous accompagner.</p>",
        isOpen: false,
        btn: {
            label: "Inscrire mon enfant",
            href: "/devenir-un-enseignant",
        },
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

const subjectCtaSection: CTASection = {
    title: "Vous ne trouvez pas la matière recherchée ?",
    description:
        "Notre équipe étudie chaque demande et peut vous proposer un accompagnement adapté selon les besoins de votre enfant.",

    background_image: "/images/cta/cta-3.png",

    buttons: [
        {
            label: "Nous contacter",
            href: "/nous-contacter",
            variant: "primary",
            icon: "Call",
        },
        {
            label: "Inscrire mon enfant",
            href: "/inscrire",
            variant: "secondary",
            icon: "UserFace",
        },
    ],
};

const teacherCtaSection: CTASection = {
    title: "Vous souhaitez transmettre votre savoir ?",
    description:
        "Nous recherchons des enseignants passionnés, compétents et engagés dans la réussite des élèves.",

    background_image: "/images/cta/cta-4.png",

    buttons: [
        {
            label: "Déposer ma candidature",
            href: "/devenir-un-enseignant",
            variant: "primary",
            icon: "Folder",
        }
    ],
};

const howItWorkCtaSection: CTASection = {
    title: "Prêt à commencer l'accompagnement de votre enfant ?",
    description:
        "Notre équipe vous accompagne dès votre demande d'inscription et reste à vos côtés tout au long du parcours scolaire.",

    background_image: "/images/cta/cta-1.png",

    buttons: [
        {
            label: "Inscrire mon enfant",
            href: "/devenir-un-enseignant",
            variant: "primary",
            icon: "UserFace",
        },
        {
            label: "Nous contactez",
            href: "/nous-contactez",
            variant: "secondary",
            icon: "Call",
        }
    ],
};

const faqCtaSection: CTASection = {
    title: "Prêt à commencer l'accompagnement de votre enfant ?",
    description:
        "Notre équipe vous accompagne dès votre demande d'inscription et reste à vos côtés tout au long du parcours scolaire.",

    background_image: "/images/cta/cta-2.png",

    buttons: [
        {
            label: "Inscrire mon enfant",
            href: "/devenir-un-enseignant",
            variant: "primary",
            icon: "UserFace",
        },
        {
            label: "Nous contactez",
            href: "/nous-contactez",
            variant: "secondary",
            icon: "Call",
        }
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
                href: "/enseignants",
            },
            {
                label: "Comment ça marche",
                href: "/comment-ca-marche",
            },
            {
                label: "Foires aux questions",
                href: "/foire-aux-questions",
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
        backgroundColor: "bg-shade-cyan/10",
        icon: "/images/values/Excellence.png",
    },
    {
        id: 2,
        title: "Professionnalisme",
        description:
            "Nous intervenons avec rigueur, ponctualité et responsabilité.",
        backgroundColor: "bg-olive-green/10",
        icon: "/images/values/Professionnalisme.png",
    },
    {
        id: 3,
        title: "Innovation",
        description:
            "Nous intégrons les neurosciences éducatives et les technologies numériques.",
        backgroundColor: "bg-poppy-pink/10",
        icon: "/images/values/Innovation.png",
    },
    {
        id: 4,
        title: "Intégrité",
        description:
            "Nous agissons avec honnêteté, transparence et éthique.",
        backgroundColor: "bg-board-black/10",
        icon: "/images/values/Integrity.png",
    },
    {
        id: 5,
        title: "Engagement",
        description:
            "Nous nous impliquons pleinement dans la réussite de chaque élève.",
        backgroundColor: "bg-poppy-red/10",
        icon: "/images/values/Engagement.png",
    },
    {
        id: 6,
        title: "Respect",
        description:
            "Nous plaçons l'écoute et le respect au cœur de nos relations.",
        backgroundColor: "bg-poppy-gold/10",
        icon: "/images/values/Respect.png",
    },
];

const subjectsData: SubjectItself[] = [
    {
        title: "Mathématiques",
        description:
            "Développez des bases solides et progressez avec une méthode adaptée au rythme de chaque élève.",
        teacher_number: 14,
        bg_color: "bg-[#F7F7F2]",
        tags: ["Primary", "College", "HighSchool"],
    },
    {
        title: "Physique-Chimie",
        description:
            "Assimilez les notions scientifiques grâce à des explications claires, des exercices pratiques et un suivi personnalisé.",
        teacher_number: 10,
        bg_color: "bg-[#EFFAF7]",
        tags: ["College", "HighSchool"],
    },
    {
        title: "Sciences de la Vie et de la Terre (SVT)",
        description:
            "Approfondissez vos connaissances en biologie et en géologie avec une méthode adaptée à votre programme.",
        teacher_number: 9,
        bg_color: "bg-[#F5F7FC]",
        tags: ["College", "HighSchool"],
    },
    {
        title: "Anglais",
        description:
            "Développez votre compréhension, votre expression orale et votre maîtrise de la langue grâce à un accompagnement progressif.",
        teacher_number: 8,
        bg_color: "bg-[#FDF4F6]",
        tags: ["Primary", "College", "HighSchool"],
    },
    {
        title: "Français",
        description:
            "Renforcez la compréhension, l'expression écrite et orale ainsi que la maîtrise de la langue.",
        teacher_number: 9,
        bg_color: "bg-[#F2F8FF]",
        tags: ["Primary", "College", "HighSchool"],
    },
    {
        title: "Histoire-Géographie",
        description:
            "Renforcez vos connaissances, développez votre esprit d'analyse et préparez efficacement vos évaluations.",
        teacher_number: 7,
        bg_color: "bg-[#FDF4F2]",
        tags: ["College", "HighSchool"],
    },
    {
        title: "Philosophie",
        description:
            "Maîtrisez la dissertation, l'explication de texte et les grands courants de pensée.",
        teacher_number: 5,
        bg_color: "bg-[#F6F2FA]",
        tags: ["HighSchool"],
    },
    {
        title: "Espagnol",
        description:
            "Progressez en compréhension, expression orale et écrite grâce à une pédagogie interactive.",
        teacher_number: 4,
        bg_color: "bg-[#FFF7EF]",
        tags: ["College", "HighSchool"],
    },
    {
        title: "Allemand",
        description:
            "Développez vos compétences linguistiques avec des cours adaptés à votre niveau.",
        teacher_number: 3,
        bg_color: "bg-[#F5F5F5]",
        tags: ["HighSchool"],
    },
    {
        title: "Informatique",
        description:
            "Initiez-vous à l'algorithmique, à la programmation et aux outils numériques essentiels.",
        teacher_number: 6,
        bg_color: "bg-[#EEF6FF]",
        tags: ["College", "HighSchool"],
    },
    {
        title: "Économie",
        description:
            "Comprenez les mécanismes économiques et développez votre capacité d'analyse.",
        teacher_number: 5,
        bg_color: "bg-[#F5F8EC]",
        tags: ["HighSchool"],
    },
    {
        title: "Comptabilité",
        description:
            "Apprenez les fondamentaux de la comptabilité et de la gestion financière.",
        teacher_number: 4,
        bg_color: "bg-[#F3F1FD]",
        tags: ["HighSchool"],
    },
];

export {
    whyFamilyChooseUsSectionData,
    subjectSectionData,
    teachers,
    testimonies,
    howItWorksData,
    faqsData,
    howItWorksFaqsData,
    faqFaqsData,

    homeCtaSection,
    aboutCtaSection,
    subjectCtaSection,
    teacherCtaSection,
    howItWorkCtaSection,
    faqCtaSection,

    footerSectionsData,
    navigationItemsData,
    slidesData,
    supportCategoriesData,
    valuesData,
    subjectsData
}