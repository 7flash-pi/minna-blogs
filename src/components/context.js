import React, { useContext } from "react";
import { useState} from "react";
import {  ref, set } from "firebase/database";
import { database ,db} from './firebase';
import { collection, addDoc , getDocs} from "firebase/firestore"; 



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

    const [userid,setUserID]=useState('');
    const [islogin,setIsLogin]=useState('false');
    
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

const postUser=async(e)=>{
            e.preventDefault();
            const {username,password}=user;
            try {
                const docRef = await addDoc(collection(db, "users"), {
            username:username,
            password:password
                });
            setUserID(docRef.id);
                } 
                catch (e) {
                    console.error("Error adding document: ", e);
        }
        
    setUser({
        username:"",
        password:""
    })
    setIsLogin(true);
}

const getUser=async()=>{
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

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
        getUser,
        setIsLogin,
        islogin
    }}>
            {children}
        </AppContext.Provider>
}

export const useGlobalContext=()=>
{
    return useContext(AppContext);
}
export { AppProvider};