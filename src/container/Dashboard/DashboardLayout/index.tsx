"use client";

import SidebarContainer from './Sidebar'
import { FC, PropsWithChildren} from 'react';
import Navbar from './Navbar';

const DashboardLayoutContainer:FC<PropsWithChildren> = ({children}) =>{

  
  return (
    <div className="flex">
        {/* Side Navigation Bar */}
        <SidebarContainer />
        {/* Main component on basis of selected navigation from nav bar */}
        <main className="grow bg-gray-500  h-screen w-full  overflow-auto">
          <Navbar/>
          
          <div className="py-8 px-4 md:pl-[2.19rem] md:pr-8 w-full">
            {children}
          </div>
          
        </main>
      </div>
  )
}

export default DashboardLayoutContainer