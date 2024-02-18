import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Style
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// Import App Body and Pages
import App from './App.jsx'
import Project from './components/pages/Project.jsx'
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Portfolio from './components/pages/Porfolio.jsx';
import Resume from './components/pages/Resume.jsx';



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
        element: <Portfolio />,
        children: [
             {
              path: 'project/:id',
              element: <Project />,
             } 
        ]
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

