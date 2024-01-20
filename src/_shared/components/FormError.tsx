import React from "react"

interface FormErrorInput {
 message: string | undefined
}

const FormError: React.FC<FormErrorInput> = ({ message }) => {
    return (
        <div style={{ color: 'red', fontSize: '12px' }}>
         {message}
        </div>
       )
}

export default FormError
