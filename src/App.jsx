import React, { useEffect } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {


  useEffect(() => {
    const reservas = JSON.parse(localStorage.getItem('reservas'))
    
    if (!reservas) {
      localStorage.setItem('reservas', JSON.stringify([]))
    }
    
  }, [])
  

  return (
    <>
      <AppRoutes/>
    </>
  )
}

export default App
