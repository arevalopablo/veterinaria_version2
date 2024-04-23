import React, { useState } from 'react'
import Checklist from './icons/Checklist'
import Button from './shared/Button'
import { dataPatient, dataTime, inputDecider, inputTypes } from './config/config'
import Input from './shared/Input'
import Nabvar from './navbar/Nabvar'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  iconColor: 'green',
  color: 'black',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
})

const showAlert = () => {
    return Toast.fire({
        icon: 'success',
        title: 'Tu turno se agendó correctamente!',
      })
}

const Reserva = () => {
    const [agenda, setAgenda] = useState({
        nombre: '', 
        raza: '', 
        dueño: '', 
        teléfono: '', 
        fecha: '', 
        hora: '10:00', 
        síntomas: '',
    })

    const redirect = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        setAgenda({
            ...agenda,
            [name]:value
        })
    }

    const checkValues = () => {
        return Object.values(agenda).some((value) => !value)
    }

    const saveData = () => {
        const actualStorage = JSON.parse(localStorage.getItem('reservas')) || []
        const data = [...actualStorage, agenda].map((obj, index) => {
            return {
                ...obj,
                id: index + 1
            }
        })
        localStorage.setItem('reservas', JSON.stringify(data))
        // redirect('/agendas')
        setAgenda({
            nombre: '', 
            raza: '', 
            dueño: '', 
            teléfono: '', 
            fecha: '', 
            hora: '10:00', 
            síntomas: '',
        })
        showAlert()
    }

  return (
    <div className='container'>
        <Nabvar navLink={'Mis Agendas'} page={'/agendas'}/>
        <main className='main' style={{paddingTop: '50px'}}> 
            <div style={{gridColumn: 'span 5'}}>
                <Checklist width={'100%'}/>        
            </div>     
            <div style={{gridColumn: '7 / 12', display: 'flex', flexDirection: 'column'}}>
                <form action="">
                    {dataPatient.map(({name, tag}, index)=> (
                        <Input key={index} type={inputTypes[name] || inputTypes.alternative} name={name} value={agenda[name]} tag={tag} array={dataTime} handleChange={handleChange} />
                    ))}
                </form>
                <Button disabled={checkValues()} btntext={'Agendar ahora!'} className={checkValues() ? 'disabled-btn' : 'btn'} width={'480px'} height={'65px'} fontSize={'25px'} margin={'30px 0'} alignSelf={'end'} onClick={saveData}/>
            </div>
        </main>
    </div>
  )
}

export default Reserva