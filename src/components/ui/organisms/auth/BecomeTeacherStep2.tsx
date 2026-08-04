"use client";

import AuthWrapper from '../../wrappers/AuthWrapper'
import { pages } from '@/constants/authData'
import Input from '../../atomes/Input'
import Button from '../../atomes/Button'
import { useRouter } from 'next/navigation'
import Select from '../../atomes/Select';

const BecomeTeacherStep2 = () => {
    const router = useRouter()
    const redirectToStep3 = () => {
        router.push("/devenir-enseignant/etape-3")
    }

    return (
        <>
            <AuthWrapper {...pages.becomeTeacherStep2.page_data}>
                <Select label='Matières enseignées' placeholder='Séléctionner les matières enseignées' options={[]} />
                <Select label='Niveaux enseignés' placeholder='Séléctionner les niveaux enseignés' options={[]} />
                <Input label='Quelle est votre nombre d’années d’éxpérience' placeholder='Ex: 5' type='number' min={1} />
                <Select label='Zone d’intervention' placeholder='Séléctionner vos zones d’interventions' options={[]} />
                <div className="flex flex-col gap-3 items-center w-full mt-4">
                    <Button onClick={redirectToStep3} className='bg-blue-navy text-white w-full'>Continuer à l’étape 3</Button>
                    <p className="text-board-black/60 max-lg:text-[12px]">Vous avez déjà un compte? <a href="/se-connecter" className="text-blue-navy">Se connecter</a></p>
                </div>
            </AuthWrapper>
        </>
    )
}

export default BecomeTeacherStep2
