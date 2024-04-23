import React from 'react'

const Button = (props) => {
    
  return (
    <button disabled={props.disabled} className={props.className} onClick={props.onClick} style={{...props}}>{props.btntext}</button>
  )
}

export default Button