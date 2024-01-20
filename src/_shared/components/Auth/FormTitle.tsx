import React, { FC } from 'react'

const FormTitle:FC<{title: string, color?: string}> = ({title, color}) => {
  return (
    <h6 className={`text-sm font-medium ${!color ? "text-black-200" : color}`}>{title}</h6>
  )
}

export default FormTitle