import React, { useContext } from "react";
import { useState} from "react";

const AppContext=React.createContext()

const AppProvider=({children})=>
{
    const {data,setData}=useState('hello');
    return<AppContext.Provider value={{data}}>
            {children}
        </AppContext.Provider>
}

export const useGlobalContext=()=>
{
    return useContext(AppContext);
}
export { AppContext,AppProvider};