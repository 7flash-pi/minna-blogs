import React  from 'react'
import { useGlobalContext } from './context';
import { Link } from "react-router-dom";

const Login = () => {
    const {user,getUserData,postUser}=useGlobalContext();

   
    
        
  return (
    
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
                    <input type="submit"  />
                    
                </div>
                <p><Link style={{
                    marginTop:'1rem',
                    textDecorationColor: '#fff',
                    color: '#000'
                }}to="/">Back to Home</Link> </p>
            </form>
        </div>
  )
}

export default Login
