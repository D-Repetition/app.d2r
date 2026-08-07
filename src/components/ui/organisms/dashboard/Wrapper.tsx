import React from 'react'

const Wrapper = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
      <div className="h-screen w-full grid grid-rows-[36px_1fr] p-3 gap-4">
         {children}
      </div>
  )
}

export default Wrapper
