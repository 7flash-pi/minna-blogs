import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="narbar-header">
        <h1>Minna-Blogs</h1>
      </div>
      <div className="nav-links">
        <a href="#home" className="active nav-link">Home</a>
        <a href="#contact" className="nav-link">Login</a>
      </div>
    </div>

  )
}

export default Navbar
