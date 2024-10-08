import * as React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Register from './Pages/Register'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from './Pages/Login'
import Single from './Pages/Single'
import Write from './Pages/Write'

function App() {
  const Layout =()=>{
    return(
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
    
  
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/single",
          element: <Single/>,
        },
        {
          path: "/write",
          element: <Write/>,
        },
      ]
    }    
  ]  
    
    
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
