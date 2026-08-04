"use client";

import AuthWrapper from '../../wrappers/AuthWrapper'
import { pages } from '@/constants/authData'
import Button from '../../atomes/Button'
import { useRouter } from 'next/navigation'
import FileInput from '../../atomes/FileInput';
import Textarea from '../../atomes/Textarea';

const BecomeTeacherStep3 = () => {
    const router = useRouter()
    const redirectToStep4 = () => {
        router.push("/devenir-enseignant/derniere-etape")
    }

    return (
        <>
            <AuthWrapper {...pages.becomeTeacherStep3.page_data}>
                <FileInput label='Curriculum vitae' placeholder='Séléctionner votre CV' multiple={true} accept='.pdf,.png,.jpg' />
                <FileInput label='Diplômes' placeholder='Charger vos diplômes pouvant servir' multiple={true} accept='.pdf,.png,.jpg' />
                <Textarea label='Motivation' placeholder='Dites nous plus sur vous...' />
                <div className="flex flex-col gap-3 items-center w-full mt-4">
                    <Button onClick={redirectToStep4} className='bg-blue-navy text-white w-full'>Soumettre ma candidature</Button>
                    <p className="text-board-black/60 max-lg:text-[12px]">Vous avez déjà un compte? <a href="/se-connecter" className="text-blue-navy">Se connecter</a></p>
                </div>
            </AuthWrapper>
        </>
    )
}

export default BecomeTeacherStep3
