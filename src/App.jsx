import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './assets/AllProducts'
import About from './assets/About'
import Contact from './assets/Contact'
import AdminLogin from './assets/AdminLogin'
import Header from './assets/Header'
import Footer from './assets/Footer'
import Home from './assets/Home'
import Men from './assets/Men'
import Womens from './assets/WOMENS'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/men' element={<Men/>} />
          <Route path='/womens' element={<Womens/>} />
          <Route path='/allproducts' element={<AllProducts />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App