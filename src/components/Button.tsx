import React from 'react';
import { ReactNode } from 'react';

function Button(props : {text : string, icon?: ReactNode, onClick?: React.MouseEventHandler} ) {
  return (
    <button className='btn-primary' onClick={props.onClick}>
        <div className="btn-primary__content">
            {props.text}
            {props.icon}
        </div>
    </button>
  )
}

export default Button