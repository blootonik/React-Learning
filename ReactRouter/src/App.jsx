import React from 'react'
import Header from './components/Header';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portolio from './pages/Portolio'
import Services from './pages/Services'
import User from './components/User';


function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element: <><Header/><Home/></>
    },
    {
      path:"about-us",
      element:<><Header/><About/></>
    },
    {
      path:"contact-us",
      element:<><Header/><Contact/></>
    },
    {
      path:'portfolio',
      element:<><Header/><Portolio/></>
    },
    {
      path:'services',
      element:<><Header/><Services/></>
    },
    {
      path:'/user/:username',
      element:<><Header/><User/></>
    },
  ])
  return (
    <>
        
        <RouterProvider router={router} />
    </>
  )
}

export default App