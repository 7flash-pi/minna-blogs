import React ,{ useState } from 'react'
import { useGlobalContext } from './context'

const Login = () => {
    const {loginFormActive,user,getUserData,postUser}=useGlobalContext();
    
        
  return (
    <div className= {
        `${
             loginFormActive ? 'login-overlay show-login' : 'login-overlay'
        }`
    }>
        <div className="form-container">

           <form onSubmit={postUser}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" value={user.username} name="username" onChange={getUserData}/>
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" value={user.password} name="password" onChange={getUserData} />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
