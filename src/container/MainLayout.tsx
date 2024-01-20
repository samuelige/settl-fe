"use client";
import React, { FC, PropsWithChildren } from 'react'
import AuthNavbar from './AuthNavbar';
import { usePathname } from 'next/navigation';

const MainLayout:FC<PropsWithChildren> = ({children}) => {
    const currentPathName = usePathname();
  return (
    <div>
        {
            currentPathName === '/' ? (
                <div className='bg-gray-500 px-4 pb-8 xl-1:pb-0 md:px-0 h-full overflow-auto md:h-screen'>
                    <AuthNavbar/>
                    {children}
                </div>
            ) : (
                <main>
                    {
                        children
                    }
                </main>
            )
        }
        
    </div>
  )
}

export default MainLayout