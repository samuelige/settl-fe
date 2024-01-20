import React, { FC } from 'react'
import AuthTitleTexts from './AuthTitleTexts'
import { Divider } from '@mui/material';


interface AuthLayoutProps {
    title: string;
    subTitle: string;
    height?: string;
    children: React.ReactNode
  }
const AuthLayout:FC<AuthLayoutProps> = ({title, height, subTitle, children}) => {
  return (
    <div className='w-full md:w-[32.625rem] bg-white rounded-lg mx-auto mt-[5.75rem] xl:mt-[3.75rem] xl-1:mt-[5.75rem] shadow-25'>
        <section className='w-full px-10 pt-10'>
            <AuthTitleTexts
                title={title}
                subTitle={subTitle}
            />
            <Divider className="mt-4 border-2 border-gray-500" />
        </section>
        
        <section className={`${height && height} mt-6 pl-10 pr-7 pb-10 overflow-y-auto [&::-webkit-scrollbar]:appearance-none`}>
            {
                children
            }
        </section>
    </div>
  )
}

export default AuthLayout