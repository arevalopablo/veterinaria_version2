import React from 'react'
import Button from './Button'

const Card = (props) => {
    const {nombre, fecha, hora, onClick} = props
    // console.log(props, 'CARD PROPS')

  return (
    <div style={{gridColumn: 'span 3', display: 'flex', justifyContent: 'center'}}>
                <div className='turno-ctn'>
                    <h2 style={{fontSize: '32px', textTransform: 'capitalize'}}>{nombre}</h2>
                    <h3 style={{fontSize: '32px'}}>{fecha}</h3>
                    <h3 style={{fontSize: '32px', color: '#008C06'}}>{hora}</h3>
                    <Button className='delete-btn' onClick={onClick} btntext={'ELIMINAR'}/>
                </div>
            </div>
  )
}

export default Card