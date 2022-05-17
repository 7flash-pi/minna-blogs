import React, { useEffect, useState } from 'react';
import { useGlobalContext } from './context';
import { db } from './firebase';



const Blogs = () => {
  const [getblog,setGetBlog]=useState();

  useEffect(()=>{

    const getblog=async()=>{
      try {
            const q = query(collection(db, "blogs"));
            const querySnapshot = await getDocs(q);
            let allNames = {};
            querySnapshot.forEach((doc) => {
              const data=doc.data();
            allNames.push(data)
          });
          setGetBlog(allNames);
      } catch (error) {
        console.log("error",error);
      }

}
})
  
  
  return (
    {
      getblog.map((blog)=> {
        return(
          <div className="blogs">
            <p className='category'>Sports</p>
           <p className='blog-time'> 5 May 11:41PM</p>
            <p className='blog info'>Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown 
printer took a galley of type and scrambled it to make a 
type specimen book. It has survived not only five centuries, 
but also the leap into electronic typesetting, 
remaining essentially unchanged. </p>
            <p className="blog-author">By: <span>Ashish Raj</span></p>
    </div>
        )
      })
    }
  )
}

export default Blogs
