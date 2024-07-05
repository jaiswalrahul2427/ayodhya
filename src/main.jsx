import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, } from 'react-router-dom';
import Layout from './Layout.jsx';
import AboutPage from './components/aboutUs/AboutPage.jsx';
import Home from './components/home/Home.jsx';
import DestinationPage from './components/designation/DestinationPage.jsx';
import ContactUs from './components/contact/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path:"Destination",
        element:<DestinationPage/>
      },
      {
        path:"Contact-us",
        element:<ContactUs/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
