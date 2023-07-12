import React from 'react'

export default function Card(props) {
  const {children,onClick,...rest} = props;
  return (
    <div className='card' onClick={props.onClick} {...rest}>
      {children}
    </div>
  )
}

Card.defaultProps={
  onClick:()=>{},
  children: <></>
}