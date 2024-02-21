// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import './components/Header';
import Header from './components/Header';
import About from './pages/About'
import Portfolio from './pages/Porfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from './components/Footer';
import Nav from './components/Nav';




function App() {
  return <div>
        <Header />
        <Nav />
        
    
      <div>
          <Routes>
            <Route path="*" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

      </div>
      <Footer />
      </div>

}

export default App
