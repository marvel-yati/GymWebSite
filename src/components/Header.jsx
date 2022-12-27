import React,{useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';
// import Logo from '../images/gym.png'
import {Link} from 'react-scroll'
import Logo from "../images/logo.png";


function Header() {
 
    
    const [nav,setnav] = useState(false)
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true)
        }
        else{
            setnav(false)
        }
    }
    window.addEventListener('scroll',changeBackground)
    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to= "#" className='logo'>
                <img src={Logo} className="photo" alt=''/>
            </Link>
            <input className = 'menu-btn' type="checkbox" id='menu-btn'/>
            <label className="menu-icon" for = "menu-btn">
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to="#">Discover</Link></li>
                <li><Link to="#">Process</Link></li>
                <li><Link to="#">Team</Link></li>
                <li><Link to="#">Pricing</Link></li>
                <li><Link to="#">About</Link></li>
            </ul>
        </nav>
    )
    
}

export default Header;