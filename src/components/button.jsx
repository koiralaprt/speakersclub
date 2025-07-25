import React from 'react'

export default function Button(props) {
  return (
    <button className='lfbtn' onClick={props.onClick}>{props.text}</button>
  )
}

Button.defaultProps = {
    onClick:()=>{}
}