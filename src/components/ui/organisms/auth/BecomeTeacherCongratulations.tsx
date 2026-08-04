"use client";

import AuthWrapper from '../../wrappers/AuthWrapper'
import { pages } from '@/constants/authData'
import Input from '../../atomes/Input'
import Button from '../../atomes/Button'
import { useRouter } from 'next/navigation'

const BecomeTeacherCongratulations = () => {
    const router = useRouter()
    const closePage = () => {
        router.push("/")
    }

    return (
        <>
            <AuthWrapper start={true} {...pages.becomeTeacherStep4.page_data}>
                <div className="flex flex-col max-lg:text-[14px] lg:text-[.85vw] tracking-[-2%] w-full">
                    <div className="mb-2">Voici le déroulé après votre soummission</div>
                    <ul className='flex flex-col gap-2 list-disc pl-6'>
                        <li>Etude du dossier</li>
                        <li>Un entretien qui sera requis</li>
                        <li>Validation</li>
                        <li>Envoie d’un mail d’activation de votre compte</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3 items-center w-full mt-4">
                    <Button onClick={closePage} className='bg-blue-navy text-white w-full'>Fermer la page</Button>
                </div>
            </AuthWrapper>
        </>
    )
}

export default BecomeTeacherCongratulations
