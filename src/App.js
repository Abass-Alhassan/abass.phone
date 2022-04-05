import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import {Routes, Route} from "react-router-dom"
import Products from './components/Products'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      
     <Route path='/' element={<Home/>}/>
     <Route path='/products' element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App