import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetais from './pages/MovieDetais'
import MyBooking from './pages/MyBooking'
import SeatLayout from './pages/SeatLayout'
import Favorite from './pages/Favorite'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'
const App = () => {

  const isAdminRoute=useLocation().pathname.startsWith('/admin');
  return (
    <div>
      <>
      <Toaster />

     {!isAdminRoute && <NavBar />}

      <Routes >

        <Route path='/' element={<Home />}/>
          <Route path='/favorite' element={<Favorite />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/movies/:id' element={<MovieDetais />}/>
          <Route path='/my-booking' element={<MyBooking />}/>
          <Route path='/movies/:id/:date' element={<SeatLayout />}/>


      </Routes>
         {!isAdminRoute && <Footer />}
      
      
      </>
    </div>
  )
}

export default App
