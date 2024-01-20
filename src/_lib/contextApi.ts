import { createContext } from 'react';

interface I_AppContext {
  brokenToMediumScreen:boolean;
  setBrokenToMediumScreen:(prev: boolean) => void;
  toggleSmMenu:boolean;
  setToggleSmMenu:(prev: boolean) => void;
  breadcrumbsData: {pathName:string; length:string}, 
  setBreadcrumbsData:(prev: {pathName:string; length:string}) => void,
  toggleCreateUser:boolean;
  setToggleCreateUser:(prev: boolean) => void;
  toggleTransfer:boolean;
  setToggleTransfer:(prev: boolean) => void;
  toggleAirtime:boolean;
  setToggleAirtime:(prev: boolean) => void;
}

const AppContext = createContext<I_AppContext>({} as I_AppContext);

export default AppContext;