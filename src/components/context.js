import React, { useContext } from "react";
import { useState} from "react";

const AppContext=React.createContext()

const AppProvider=({children})=>
{
    const [blogs,setBlogs]=useState([]);
    return<AppContext.Provider value={{
        blogs,
        setBlogs
    }}>
            {children}
        </AppContext.Provider>
}

export const useGlobalContext=()=>
{
    return useContext(AppContext);
}
export { AppProvider};