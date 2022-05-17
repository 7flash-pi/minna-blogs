import React, { useContext } from "react";
import { useState} from "react";
import {  ref, set } from "firebase/database";
import { database ,db} from './firebase';
import { collection, addDoc ,query,getDocs,doc} from "firebase/firestore"; 



const AppContext=React.createContext()

const AppProvider=({children})=>
{
    const [blogs,setBlogs]=useState({
        category:"",
        blog:"",
        time:''
        });

    const[user,setUser]=useState({
        username:"",
        password:"",
        });

    const [userid,setUserId]=useState('');
    const [islogin,setIsLogin]=useState('');
    
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


const postData=async(e)=>{
    const {blog,category}=blogs;
    e.preventDefault();
    if(blog && category){
         try {
                const docRef = await addDoc(collection(db, "blogs"), {
            category:category,
            blog:blog,
            time:currTime
                });
            
                } 
                catch (e) {
                    console.error("Error adding document: ", e);
        }
        
    setBlogs({
        blog:"",
        category:""
    })
    
    
    }
}

const postUser=async(e)=>{
            e.preventDefault();
            const {username,password}=user;
            try {
                const docRef = await addDoc(collection(db, "users"), {
            username:username,
            password:password
                });
            setUserId(docRef.id);
                } 
                catch (e) {
                    console.error("Error adding document: ", e);
        }
        
    setUser({
        username:"",
        password:""
    })
}








    
    return<AppContext.Provider value={{
        blogs,
        setBlogs,
        getBlogData,
        currentTime,
        postData,
        user,
        getUserData,
        postUser,
        setIsLogin,
        islogin,
        setUserId,
        userid,

    }}>
            {children}
        </AppContext.Provider>
}

export const useGlobalContext=()=>
{
    return useContext(AppContext);
}
export { AppProvider};