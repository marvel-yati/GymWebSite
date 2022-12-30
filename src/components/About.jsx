import React from 'react'

function About(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} alt="" />
        </div>
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi et reprehenderit architecto nihil beatae exercitationem optio, vero commodi similique est.</p>
        </div>
    </div>
  )
}

export default About