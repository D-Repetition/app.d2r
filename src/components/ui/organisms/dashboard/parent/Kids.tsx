"use client";

import Wrapper from '../Wrapper'
import DashboardTopbar from '../DashboardTopbar'
import Button from '@/components/ui/atomes/Button';
import { Message } from '@/components/assets/icons';
import { students } from '@/constants/dashboardData';
import StudentCard from '@/components/ui/molecules/dashboard/StudentCard';

const Kids = () => {
    const studentBgColors = [
        "bg-poppy-red",
        "bg-olive-green",
        "bg-shade-cyan",
        "bg-marigold-amber",
    ];
    return (
        <Wrapper>
            <DashboardTopbar pageTitile='Mes enfants' />
            <div className="w-full h-full flex flex-col items-center justify-start gap-3 overflow-x-hidden overflow-y-scroll scrollbar bg-white rounded-lg p-2">
                <div className="flex items-center justify-between w-full pl-2 py-4">
                    <div className="flex items-center justify-start gap-2">
                        <div className="bg-board-black/10 rounded h-8 w-8"></div>
                        <div className="text-board-black/60"><span className="text-board-black/80">{students.length}</span> enfants suivis</div>
                    </div>
                    <Button className='border-2 border-board-black bg-board-black/5 hover:bg-board-black/10'><Message className='fill-board-black' /> Contacter admin</Button>
                </div>
                <div className="w-full rounded-[36px] bg-board-black/5 p-2 grid grid-cols-4 gap-3">
                    {
                        students.map((st, i) => {
                            return (
                                <StudentCard
                                    key={st.id}
                                    {...st}
                                    bgcolor={studentBgColors[i % studentBgColors.length]}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}

export default Kids
