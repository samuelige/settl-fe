import React, { FC } from 'react'

const Title:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='text-2xl font-medium text-primary-25'>{children}</div>
  )
}

export default Title