import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Book from './pages/Book'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import Payment from './pages/Payment'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book/:slot' element={<Book/>}/>        
        <Route path='/payment/:slot' element={<Payment/>}/>        
      </Routes>
      <Footer/>
      <ToastContainer position='bottom-right'/>
    </div>
  )
}

export default App