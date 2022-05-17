import React from 'react';
import { useGlobalContext } from './context';




const BlogForm = () => {
  const {blogs,getBlogData,postData}=useGlobalContext();


  return (
   <section className="form">
           
           <div className="blog-form">
             <input type="text" name="category" placeholder="Enter Category"  value={blogs.category}required
             onChange={getBlogData}/>
            <textarea name="blog"   placeholder='Blogs' className='input-blog' value={blogs.blog}
             onChange={getBlogData}/>
                <button className="submit-btn" onClick={postData}>
                    Post
                </button>
           </div>

   </section>
  )
}

export default BlogForm
