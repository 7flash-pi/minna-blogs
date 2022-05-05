import React from 'react';


const BlogForm = () => {
  return (
   <section className="form">
           <input type="text" name="category" placeholder="Enter Category" required/>
           <div className="blog-form">
                <textarea name="blog"  cols="30" rows="8" placeholder='Blogs'></textarea>
                <button className="submit-btn">
                    Post
                </button>
           </div>

   </section>
  )
}

export default BlogForm
