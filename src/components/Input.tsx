import React from 'react'

function Input(props: {text:string}) {
  return (
    <input className='input' type="text" placeholder={props.text}/>
  )
}

export default Input