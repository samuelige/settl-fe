"Use Client";

import AppContext from '@/_lib/contextApi';
import { arrow_down, bell } from '@/_shared/assets/icons';
import { profile_picture } from '@/_shared/assets/images';
import Image from 'next/image';
import React, { useContext } from 'react'
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    const {breadcrumbsData, brokenToMediumScreen, toggleSmMenu, setToggleSmMenu} = useContext(AppContext);

  return (
    <div className='flex flex-row items-center justify-between pt-[1.38rem] pb-[1.37rem] bg-white pl-[2.19rem] pr-8'>
        <div className='flex flex-row items-center space-x-2'>
            <p className='text-2xl text-black-200 font-bold'>{breadcrumbsData?.pathName || ""}</p>
            <p className='text-center w-[1.5rem] h-[1.5rem] rounded-[1.5rem] bg-primary-100 text-primary-25'>{breadcrumbsData?.length || ""}</p>
        </div>

        {!brokenToMediumScreen ? (
            <div className='flex flex-row items-center'>
                <Image
                    src={bell}
                    width={21}
                    height={25}
                    alt='bell-icon'
                />
                <Image
                    src={profile_picture}
                    width={44}
                    height={44}
                    alt='profile_picture-image'
                    className='mr-2 ml-6'
                />
                <Image
                    src={arrow_down}
                    width={24}
                    height={24}
                    alt='arrow_down-icon'
                />

            </div>
          ):(
            <HiMenu onClick={() => setToggleSmMenu(!toggleSmMenu)}/>
          )
        }
        
    </div>
  )
}

export default Navbar