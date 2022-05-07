import React from 'react';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openLoginForm }=useGlobalContext();

  const handleLogin=(e)=>
  {
    openLoginForm()
  }
  return (
    <div className="navbar">
      <div className="narbar-header">
        <h1>Minna-Blogs</h1>
      </div>
      <div className="nav-links">
        <a className="active nav-link">Home</a>
        <a href="#contact" className="nav-link"  value="Login"onClick={handleLogin}>Login</a>
      </div>
    </div>

  )
}

export default Navbar
