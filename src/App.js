import React from 'react';
import BlogForm from './components/BlogForm';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import Login from './components/Login'
import { useGlobalContext } from './components/context';


const App = () => {
  const {loginFormActive}=useGlobalContext();
  if(loginFormActive)
  {
    return <Login />
  }
  return (
    <>
    <Navbar />
    <BlogForm/>
    <Blogs />
    </>
  )
}

export default App
