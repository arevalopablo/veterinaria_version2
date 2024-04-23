import React from 'react'
import Dog from './icons/Dog'
import Button from './shared/Button'
import Nabvar from './navbar/Nabvar'
import { useNavigate } from 'react-router-dom'

const VetMain = () => {
  const redirect = useNavigate()
  
  return (
    <div className='container'>
        <Nabvar navLink={'Mis Agendas'} page={'/agendas'}/>
        <main className='main'> 
          <div style={{gridColumn: 'span 6' }}>
            <Dog width={'100%'}/>  
          </div>   
          <div className='main-text-ctn'>
            <h2 style={{fontSize: '55px'}}>¡Confía en nosotros para mantener a tus peludos compañeros felices, saludables y llenos de vida!"</h2>
            <Button onClick={() => redirect('/reservas')} btntext={'Agendar ahora!'} className={'btn'} width={'500px'} height={'70px'} fontSize={'40px'} alignSelf={'center'}/>
          </div>
        </main>
    </div>
  )
}

export default VetMain



