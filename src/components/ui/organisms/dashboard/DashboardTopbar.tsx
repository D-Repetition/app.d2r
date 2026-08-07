"use client";

import { Notification } from '@/components/assets/icons'
interface DashboardTopbarI {
  pageTitile: string
}

const DashboardTopbar = ({pageTitile}: DashboardTopbarI) => {
  const openNotification = () => { }
  const gotToProfile = () => { }

  return (
    <div className='flex items-center justify-between pl-4 pr-1'>
      <div className="text-[20px] font-dm-serif">
        {pageTitile}
      </div>

      <div className="flex items-center justify-end gap-2">
        <button onClick={openNotification} className='w-8 h-8 rounded cursor-pointer bg-board-black/10 flex items-center justify-center'>
          <Notification className='fill-board-black/80' />
        </button>
        <button onClick={gotToProfile} className='w-8 h-8 rounded cursor-pointer bg-board-black/10 flex items-center justify-center'>
          
        </button>
      </div>
    </div>
  )
}

export default DashboardTopbar
