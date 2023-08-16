import React from 'react'
import "./InfoBlock.css"
function InfoBlock({props}) {
  return (
    <div className='infoBlock'>
      <div>{props.title}</div>
      <div>{props.body}</div>
    </div>
  )
}

export default InfoBlock
