import React, { useState } from 'react'
import Card from './shared/Card'
import Nabvar from './navbar/Nabvar'

const Agenda = () => {
  const [reservas, setReservas] = useState(JSON.parse(localStorage.getItem('reservas'))) 
  console.log(reservas, 'RESERVA DATOS')

  const eliminar = (id) => {
    const filtro = reservas.filter((obj) => obj.id !== id)
    localStorage.setItem('reservas', JSON.stringify(filtro))
    setReservas(filtro)
  }

  return (
    <div className='container'>
        <Nabvar navLink={'Nueva Agenda'} page={'/reservas'}/>
        <main className='main' style={{gridTemplateRows: '200px 1fr', minHeight: '100vh'}}> 
          <h1 style={{gridColumn: 'span 12', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>MIS TURNOS</h1>

          <div style={{gridColumn: 'span 12', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '30px'}}>
            {!!reservas.length ? reservas.sort((a, b) => (
              new Date(a.fecha) - new Date(b.fecha) 
            )).map((props, index) => (
                <Card key={index} onClick={() => eliminar(props.id)} {...props} />
            )) : <h1 style={{gridColumn: 'span 12', display: 'flex', justifyContent: 'center'}}>Lo sentimos... no hay reservas realizadas!</h1>}    
          </div>
        </main>
    </div>
  )
}

export default Agenda