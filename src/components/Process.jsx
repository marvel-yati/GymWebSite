import React from 'react'
import ReactDOM from 'react-dom'
import img from '../images/black.png'

function Process({shtitle,title,imageUrl,body}) {
  return (
    <div className='card-container'>
      <div className='cards'>
        <div className='image'>
          <img src={imageUrl} alt="" srcset="" />
        </div>
        <div className='card-content'>
          <div className='sht-title'><h5>{shtitle}</h5></div>
          <div className='title'><h3>{title}</h3></div>
          <div className='des'><p>{body}</p></div>
        </div>
        <button>JOIN</button>
      </div>
    </div>
  )
}



export default Process