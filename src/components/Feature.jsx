import React from 'react'
import About from './About'
import fimage from '../images/1.svg'
import fimage1 from '../images/2.svg'
// import LooksOneIcon from '@mui/icons-material/LooksOne';

function Feature() {
  return (
    <div id='features'>
        <h1>ABOUT</h1>
        <div className='a-container'>
            <About image = {fimage} title="Weight"/>
            <About image = {fimage1} title= "Lifting"/>
            {/* <LooksOneIcon/> */}
        </div>
    </div>
  )
}

export default Feature