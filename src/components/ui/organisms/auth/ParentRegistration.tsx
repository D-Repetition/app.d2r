"use client";

import AuthWrapper from '../../wrappers/AuthWrapper'
import { pages } from '@/constants/authData'
import Input from '../../atomes/Input'
import Button from '../../atomes/Button'
import { useRouter } from 'next/navigation'

const ParentRegistration = () => {
    const router = useRouter()
    const redirectToParentVerificationAccount = () => {
        router.push("/s-inscrire-en-tant-que-parent/verification-de-email")
    }

    return (
        <>
            <AuthWrapper {...pages.parentRegistration.page_data}>
                <div className="w-full grid max-lg:grid-cols-1 lg:grid-cols-2 lg:gap-[2vh] max-lg:gap-6">
                    <Input label='Nom' placeholder='Saississez votre nom' type='text' />
                    <Input label='Prénom' placeholder='Saississez votre prénom' type='text' />
                </div>
                <Input label='Email' placeholder='me@gmail.com' type='email' />
                <Input label='Téléphone' placeholder='+228XXXXXXXX' type='tel' />
                <Input label='Mot de passe' placeholder='Entrer votre mot de passe' type='password' />
                <Input label='Confirmation du mot de passe' placeholder='Entrer votre mot de passe' type='password' />
                <div className="flex flex-col gap-3 items-center w-full mt-4">
                    <Button onClick={redirectToParentVerificationAccount} className='bg-blue-navy text-white w-full'>Inscription</Button>
                    <p className="text-board-black/60 max-lg:text-[12px]">Vous avez déjà un compte? <a href="/se-connecter" className="text-blue-navy">Se connecter</a></p>
                </div>
            </AuthWrapper>
        </>
    )
}

export default ParentRegistration
