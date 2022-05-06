import React, { useState } from 'react';
import { useGlobalContext } from './context';
import {  ref, set } from "firebase/database";
import { database } from './firebase';




const BlogForm = () => {
  const {blogs,setBlogs}=useGlobalContext();
const [user,SetUser]=useState({
  category:"",
  blog:""
});

  const postData=async(e)=>{
    const {blog,category}=user;
    e.preventDefault();
    set(ref(database, 'users/' + new Date().getTime().toString()), {
      blog:blog,
      category:category
   
  });
  SetUser({
  category:"",
  blog:""
})
  }

  const getUserData=(e)=> 
  {
    const name = e.target.name;
    const value= e.target.value;
    SetUser({...user, [name]: value});
    setBlogs({...blogs,user});

  }




  return (
   <section className="form">
           
           <div className="blog-form">
             <input type="text" name="category" placeholder="Enter Category"  value={user.category}required
             onChange={getUserData}/>
            <textarea name="blog"   placeholder='Blogs' className='input-blog' value={user.blog}
             onChange={getUserData}/>
                <button className="submit-btn" onClick={postData}>
                    Post
                </button>
           </div>

   </section>
  )
}

export default BlogForm
