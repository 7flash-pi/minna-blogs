import React from 'react'
import {  ref, onValue } from "firebase/database";
import { database } from './firebase'

const Blogs = () => {
  

  
  return (
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
}

export default Blogs
