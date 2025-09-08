//import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import './App.css'

function App() {
  
  return (
    <>
      <div>
        <Header />
          {/* Otros componentes como ProductList, Cart, etc. */}

      <Nav />
        {/* */}

      <Gallery />
        {/* */}
        
      <Footer />

      </div>
      
    </>
  )
}

export default App;
