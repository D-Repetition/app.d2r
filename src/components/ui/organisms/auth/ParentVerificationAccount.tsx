"use client";

import { useState } from 'react'
import AuthWrapper from '../../wrappers/AuthWrapper'
import { pages } from '@/constants/authData'
import Input from '../../atomes/Input'
import Button from '../../atomes/Button'
import { useRouter } from 'next/navigation';

const ParentVerificationAccount = () => {
    const [code, setCode] = useState("")
    const router = useRouter()
    const verifyAccount = () => {
        router.push("/dashboard")
    }
    return (
        <>
            <AuthWrapper {...pages.parentVerificationAccountIllustration.page_data}>
                <Input
                    label="Code de vérification"
                    placeholder="Saisissez le code de vérification"
                    type="text"
                    inputMode="numeric"
                    value={code}
                    onChange={(e) =>
                        setCode(e.target.value.replace(/\D/g, ""))
                    }
                />
                <div className="flex flex-col gap-3 items-center w-full mt-4">
                    <Button onClick={verifyAccount} className='bg-blue-navy text-white w-full'>Vérifier l’email</Button>
                    <p className="text-board-black/60 max-lg:text-[12px]">Vous n’avez pas reçu le code? <button className="text-blue-navy bg-none border-none cursor-pointer">Renvoyer</button></p>
                </div>
            </AuthWrapper>
        </>
    )
}

export default ParentVerificationAccount
