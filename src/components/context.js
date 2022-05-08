import React, { useContext } from "react";
import { useState} from "react";
import {  ref, set } from "firebase/database";
import { database } from './firebase'

const AppContext=React.createContext()

const AppProvider=({children})=>
{
    const [blogs,setBlogs]=useState({
        category:"",
        blog:"",
        time:''
        });

    const[loginFormActive,setLoginFormActive]=useState(false);
    const[user,setUser]=useState({
        username:"",
        password:"",
        });
    
    const getUserData=(e)=> 
     {
         const name = e.target.name;
         const value= e.target.value;
        setUser({...user, [name]: value});
    }

    const getBlogData=(e)=> 
    {
        const name = e.target.name;
        const value= e.target.value;
        setBlogs({...blogs, [name]: value});
    }

    
    const currentTime=()=>{
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date=new Date();
        const newDate=date.getDate()+' '+months[date.getMonth()]+
        '  '+date.getHours()+':'+date.getMinutes()+'  '+date.getFullYear();
        return newDate;

    }
const currTime=currentTime();

const postUser=async(e)=>{
        const {username,password}=user;
        e.preventDefault();
        set(ref(database, 'user/' + new Date().getTime().toString()), {
        username:username,
        password:password
   
    });
    setUser({
        username:"",
        password:""
    })
}

const postData=async(e)=>{
    const {blog,category}=blogs;
    e.preventDefault();
    if(blog && category){
    set(ref(database, 'blogs/' + new Date().getTime().toString()), {
      blog:blog,
      category:category,
      time:currTime
   
  });
  setBlogs({
  category:"",
  blog:""
})
    }
  }


const closeLoginForm=(e)=>{
        e.preventDefault();
       setLoginFormActive(false);
}

const openLoginForm=()=>{
        setLoginFormActive(true);
}
    
    return<AppContext.Provider value={{
        blogs,
        setBlogs,
        getBlogData,
        currentTime,
        loginFormActive,
        closeLoginForm,
        openLoginForm,
        postData,
        user,
        getUserData
    }}>
            {children}
        </AppContext.Provider>
}

export const useGlobalContext=()=>
{
    return useContext(AppContext);
}
export { AppProvider};