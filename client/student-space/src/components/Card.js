import React,{Component} from 'react'
import "./Components.css"

function Card({height, padding, margin, content, overflowX, overflowY}) {
  return (
    <div style={{overflowY: overflowY,overflowX: overflowX ,height: height, margin: margin, padding: padding}}>
      {content}
    </div>
  )
}

export default Card