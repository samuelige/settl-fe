import React, { FC } from 'react'

const SubTilte:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='text-xs font-medium text-gray-400'>{children}</div>
  )
}

export default SubTilte