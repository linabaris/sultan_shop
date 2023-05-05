import React from 'react';
import { ReactNode } from 'react'; 

interface InputField {
  text: string,
  icon?: ReactNode,
  onChange?: React.ChangeEventHandler, 
  onClick?:React.MouseEventHandler, 
  value?:string
}

function Input(props: InputField) {
  return (
      <div className="input">
        <input className='input__area' type="text" placeholder={props.text} onChange={props.onChange}/>
        <button className="input__btn" onClick={props.onClick}>{props.icon}</button>
      </div>
  )
}

export default Input