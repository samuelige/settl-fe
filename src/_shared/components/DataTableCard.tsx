import React, { FC, PropsWithChildren } from 'react'

const DataTableCard:FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='bg-white rounded-[0.25rem] shadow-25 '>{children}</div>
  )
}

export default DataTableCard