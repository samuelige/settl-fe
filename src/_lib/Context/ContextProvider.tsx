"use client";
import { useState } from "react";
import AppContext from "../contextApi";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggleRegisterSuccessModal, setToggleRegisterSuccessModal] = useState<boolean>(false);
  const [brokenToMediumScreen, setBrokenToMediumScreen] = useState<boolean>(false);
  const [toggleSmMenu, setToggleSmMenu] = useState<boolean>(false);
  const [breadcrumbsData, setBreadcrumbsData] = useState<{pathName:string; length:string}>({pathName:"", length:""});
  const [toggleCreateUser, setToggleCreateUser] = useState<boolean>(false);
  const [toggleTransfer, setToggleTransfer] = useState<boolean>(false);
  const [toggleAirtime, setToggleAirtime] = useState<boolean>(false);
 
  return (
    <AppContext.Provider
      value={{
        brokenToMediumScreen, 
        setBrokenToMediumScreen,
        toggleSmMenu, 
        setToggleSmMenu,
        breadcrumbsData, 
        setBreadcrumbsData,
        toggleCreateUser, 
        setToggleCreateUser,
        toggleTransfer, setToggleTransfer,
        toggleAirtime, setToggleAirtime
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
