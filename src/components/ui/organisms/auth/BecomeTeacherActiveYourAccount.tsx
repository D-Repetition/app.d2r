"use client";

import AuthWrapper from '../../wrappers/AuthWrapper'
import { pages } from '@/constants/authData'
import Input from '../../atomes/Input'
import Button from '../../atomes/Button'
import { useRouter } from 'next/navigation'
import { useState } from 'react';

const BecomeTeacherActiveYourAccount = () => {
    const [code, setCode] = useState("")
    const router = useRouter()
    const activateAccount = () => {
        router.push("/dashboard")
    }

    return (
        <>
            <AuthWrapper {...pages.becomeTeacherStep5.page_data}>
                <Input label='Code de vérification' placeholder='Entrez le code reçu par e-mail.' type="text" inputMode="numeric" value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} />
                <Input label='Mot de passe' placeholder='Créez un mot de passe sécurisé pour votre compte.' type='password' />
                <Input label='Confirmation du mot de passe' placeholder='Confirmation du mot de passe' type='password' />
                <div className="flex flex-col gap-3 items-center w-full mt-4">
                    <Button onClick={activateAccount} className='bg-blue-navy text-white w-full'>Activer mon compte</Button>
                </div>
            </AuthWrapper>
        </>
    )
}

export default BecomeTeacherActiveYourAccount
