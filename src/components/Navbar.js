import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from './context';


const Navbar = () => {

  const {isLogin,getUser}=useGlobalContext();
  
 

  return (
    <div className="navbar">
      <div className="narbar-header">
        <h1>Minna-Blogs</h1>
      </div>
      <div className="nav-links">
        <Link  className='active nav-link' to="/">Home</Link> 
        <Link  className='nav-link' to="/login">Login</Link>
      </div>
    </div>

  )
}

export default Navbar
