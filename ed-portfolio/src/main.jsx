import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Style
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

// Import App Body and Pages
import App from './App.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Porfolio.jsx';
import Resume from './pages/Resume.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

