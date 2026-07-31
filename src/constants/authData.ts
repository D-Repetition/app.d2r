import { Images } from "@/constants/images";
import { AuthPages } from "@/types";

const pages = {
    login : {
        id: "login",
        page_data: {
            title: "Bon retour parmi nous",
            subtitle: "Connectez-vous à votre espace pour suivre les cours, consulter les informations pédagogiques et accéder à l'ensemble des services D²Répétition.",
            illustration: Images.LoginIllustration
        }
    },
    parentRegistration: {
        id: "parent registration",
        page_data: {
            title: "Construisons ensemble la réussite de votre enfant",
            subtitle: "Créez votre espace parent et bénéficiez d'un accompagnement scolaire structuré, personnalisé et transparent pour vos enfant.",
            illustration: Images.ParentRegistrationIllustration
        }
    },
    parentVerificationAccountIllustration: {
        id: "parent verification account",
        page_data: {
            title: "Vérifiez votre adresse e-mail",
            subtitle: "Saisissez le code de vérification envoyé à votre adresse e-mail afin d'activer votre espace parent et de sécuriser votre compte.",
            illustration: Images.ParentVerificationAccountIllustration
        }
    },
    becomeTeacherStep1: {
        id: "become teacher step 1",
        page_data: {
            title: "Parlez-nous de vous",
            subtitle: "Renseignez vos informations personnelles afin de nous permettre de vous identifier et de vous contacter tout au long du processus de candidature.",
            illustration: Images.BecomeTeacherStep1
        }
    },
    becomeTeacherStep2: {
        id: "become teacher step 2",
        page_data: {
            title: "Présentez votre parcours pédagogique",
            subtitle: "Indiquez vos domaines d'enseignement, votre expérience et vos niveaux d'intervention afin que nous puissions évaluer votre expertise et vos compétences.",
            illustration: Images.BecomeTeacherStep2
        }
    },
    becomeTeacherStep3: {
        id: "become teacher step 3",
        page_data: {
            title: "Présentez nous votre expérience professionnel",
            subtitle: "Ajoutez votre CV, vos diplômes et présentez en quelques mots votre parcours ainsi que vos motivations.",
            illustration: Images.BecomeTeacherStep3
        }
    },
    becomeTeacherStep4: {
        id: "become teacher step 4",
        page_data: {
            title: "Félicitations",
            subtitle: "Vous venez de finaliser la soummission de votre candidature.Vous recevrez un email lorsque votre candidature sera accepter. celà peut prendre quelques heures.",
            illustration: Images.BecomeTeacherStep4
        }
    },
    becomeTeacherStep5: {
        id: "become teacher step 5",
        page_data: {
            title: "Activez votre espace enseignant",
            subtitle: "Votre candidature a été validée. Vérifiez votre adresse e-mail et définissez votre mot de passe afin d'accéder à votre espace professionnel D²Répétition.",
            illustration: Images.BecomeTeacherStep5
        }
    },
} as const

export {
    pages
} 