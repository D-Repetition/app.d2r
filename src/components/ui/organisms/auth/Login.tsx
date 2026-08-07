"use client";

import React from 'react'
import AuthWrapper from '../../wrappers/AuthWrapper'
import { pages } from '@/constants/authData'
import Input from '../../atomes/Input'
import Button from '../../atomes/Button'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  return (
    <>
      <AuthWrapper {...pages.login.page_data}>
        <Input label='Email' placeholder='me@gmail.com' type='email' />
        <Input label='Mot de passe' placeholder='Entrer votre mot de passe' type='password' />
        <div className="flex flex-col gap-3 items-center w-full mt-4">
          <Button onClick={() =>  router.push("/parent/dashboard")} className='bg-blue-navy text-white w-full'>Se Connecter</Button>
          <p className="text-board-black/60 max-lg:text-[12px]">Vous avez déjà un compte parent? <a href="/s-inscrire-en-tant-que-parent" className="text-blue-navy">Créer en un</a></p>
        </div>
      </AuthWrapper>
    </>
  )
}

export default Login
