import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Headers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
