"use client";

import React, { useContext, useState } from 'react'
import { Sidebar} from "react-pro-sidebar";
import { Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import classNames from "classnames";
import Link from "next/link";
import routes from "@/routes";
import Image from "next/image";

import { usePathname } from 'next/navigation';
import AppContext from '@/_lib/contextApi';
import { currency, logo, rightArrow, tags, users } from '@/_shared/assets/icons';

const SidebarContainer = () => {
  const currentPathName = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const {setBrokenToMediumScreen, toggleSmMenu, setToggleSmMenu} = useContext(AppContext);
 
  return (
    <Sidebar 
      collapsed={collapsed}
      breakPoint="md"
      backgroundColor={"#FFF"}
      toggled={toggleSmMenu}
      onBackdropClick={() => setToggleSmMenu(false)}
      onBreakPoint={setBrokenToMediumScreen}

      >
        <div className='flex flex-col h-full py-10 px-6 relative'>
          <div className="logo-div flex space-x-4 items-center mb-[1.13rem] ">
            {collapsed ? (
              <Image
                src={logo} 
                alt="logo_img"
                width={32}
                height={32}
              />
            ) : 
            (
              <Image
                src={logo} 
                alt="logo_img"
                width={140}
                height={32}
              />
            )
            }
        
          </div>

          <div
            onClick={() => setCollapsed(!collapsed)}
            className="cursor-pointer absolute right-0 top-10 rounded-full w-6 h-6 bg-gray-500 flex justify-center items-center "
          >
            <Image src={rightArrow} width={6} height={6} alt="rightArrow-icon" />
          </div>

          <Divider className=" border-[1px] border-gray-500 opacity-20" />

          <List className="h-full mt-[1.5rem] overflow-y-auto [&::-webkit-scrollbar]:appearance-none ">
            <Link
              href={routes.USERS}
              className={`pointer-events-none"`}
              title="Users"
            >
              <ListItemButton
                selected={currentPathName ===  routes.USERS}
                className={classNames("", {
                  "[&.MuiButtonBase-root]:px-0 [&.MuiButtonBase-root]:block [&.MuiListItemButton-root]:h-[40px]":
                    collapsed,
                  "[&.MuiButtonBase-root]:px-6 [&.MuiButtonBase-root]:flex":
                  !collapsed,
                })}
              >
                <ListItemIcon
                  className={classNames({
                    "grid place-content-center [&.MuiListItemIcon-root]:m-auto":
                      collapsed,
                    "[&.MuiListItemIcon-root]:mr-3": !collapsed,
                  })}
                >
                  <Image className={classNames({"m-auto": !collapsed})} src={users} width={24} height={24} alt="users_icon" />
                </ListItemIcon>
                {!collapsed && (
                  <ListItemText primary="Users" />
                )}
              </ListItemButton>
            </Link>
            <Link
              href={routes.TRANSACTIONS}
              className={`pointer-events-none"`}
              title="Transactions"
            >
              <ListItemButton
                selected={currentPathName ===  routes.TRANSACTIONS}
                className={classNames("", {
                  "[&.MuiButtonBase-root]:px-0 [&.MuiButtonBase-root]:block [&.MuiListItemButton-root]:h-[40px]":
                    collapsed,
                  "[&.MuiButtonBase-root]:px-6 [&.MuiButtonBase-root]:flex":
                  !collapsed,
                })}
              >
                <ListItemIcon
                  className={classNames({
                    "grid place-content-center [&.MuiListItemIcon-root]:m-auto":
                      collapsed,
                    "[&.MuiListItemIcon-root]:mr-3": !collapsed,
                  })}
                >
                  <Image className={classNames({"m-auto": !collapsed,})} src={currency} width={24} height={24} alt="currency_icon" />
                </ListItemIcon>
                {!collapsed && (
                  <ListItemText primary="Transactions" />
                )}
              </ListItemButton>
            </Link>
          </List>
        </div>
      </Sidebar>
  )
}

export default SidebarContainer