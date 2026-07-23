import React from 'react'

const WhatFamilySay = () => {
  return (
      <section className='min-h-svh mx-auto flex flex-col items-start pt-20 lg:pt-24 pb-12 lg:pb-30'>
          <div className="w-full min-h-svh flex flex-col items-center gap-[12vh]">
              <div className="flex flex-col items-center justify-start lg:max-w-[35vw] gap-4 relative">
                  <img src='/images/whaFamilySay.png' className='h-[14vh]' alt="" />
                  <div className='title text-center'>Ce que disent les familles</div>
              </div>
          </div>
      </section>
  )
}

export default WhatFamilySay
