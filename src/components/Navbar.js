import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-header">
            <h2>Minna blogs</h2>
        </div>
        <div className="nav-links">
            <ul className="links">
                <li>Login</li>
                <li>Home</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
