import React,{Component} from 'react'
import "./Components.css"

function Card({height, padding, margin, content, minHeight}) {
  return (
    <div style={{minHeight: minHeight, margin: margin, padding: padding}} className='card-wrapper'>
      {content}
    </div>
  )
}

export default Card