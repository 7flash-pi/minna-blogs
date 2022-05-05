import React from 'react';
import { useGlobalContext } from './components/context';
import BlogForm from './components/BlogForm';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';

const App = () => {
  return (
    <>
    <Navbar />
    <BlogForm/>
    <Blogs />
    </>
  )
}

export default App
