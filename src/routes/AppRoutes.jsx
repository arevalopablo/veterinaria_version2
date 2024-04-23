import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import VetMain from '../components/VetMain'
import Agenda from '../components/Agenda'
import Reserva from '../components/Reserva'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<VetMain/>}/>
            <Route path='/reservas' element={<Reserva/>}/>
            <Route path='/agendas' element={<Agenda/>}/>
            <Route path='*' element={<Navigate to={'/'}/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes