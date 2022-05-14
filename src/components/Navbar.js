import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from './context';


const Navbar = () => {

  const {setIsLogin,isLogin,userid,getUser}=useGlobalContext();
  getUser();
 


  return (
    <div className="navbar">
      <div className="narbar-header">
        <h1>Minna-Blogs</h1>
      </div>
      <div className="nav-links">
        <Link  className='active nav-link' to="/">Home</Link> 
        <Link  className='nav-link' to="/login">login</Link>
      </div>
    </div>

  )
}

export default Navbar
