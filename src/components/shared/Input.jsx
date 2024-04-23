import React from 'react'

const Input = (props) => {
  const {type, name, value, array, tag, handleChange} = props

  const setInputs = {
    input: 'input',
    select: 'select',
    textarea: 'textarea'
  }

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0'}}>
      <label style={{textTransform: 'capitalize'}} htmlFor="">{name}</label>
      {setInputs.input === tag && <input type={type} name={name} value={value} id="" onChange={handleChange}/>}
      {setInputs.select === tag && 
        (<select name={name} id="" value={value} onChange={handleChange}>
          {array.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>)}
      {setInputs.textarea === tag && <textarea placeholder='Describe los síntomas de tu mascota...' name={name} value={value} id="" cols="30" rows="10" onChange={handleChange}></textarea>}
    </div>
  )
}

export default Input