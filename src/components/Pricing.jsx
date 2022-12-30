import React from 'react'


function Pricing({shtitle,title,imageUrl,body}) {
  
  return (
    
      
      <div className='card-container'>
        
        <div className='cards'>
          <div className='image'>
            <img src={imageUrl} alt="image" srcset="" />
          </div>
          <div className='card-content'>
            <div className='sht-title'><h4>{shtitle}</h4></div>
            <div className='title'><h3>{title}</h3></div>
            <div className='des'><p>{body}</p></div>
          </div>
          <button>Buy Now</button>
        </div>
      </div>
    
  )
}

export default Pricing