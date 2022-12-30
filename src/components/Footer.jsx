import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <div>
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='footer-col'>
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#">watch</a></li>
                            <li><a href="#">bag</a></li>
                            <li><a href="#">shoes</a></li>
                            <li><a href="#">dress</a></li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>follow us</h4>
                        <div className='social-links'>
                            <a href="#"><FacebookIcon/></a>
                            <a href="#"><TwitterIcon/></a>
                            <a href="#"><InstagramIcon/></a>
                            <a href="#"><LinkedInIcon/></a>
                        </div>
                    </div>
                </div>
            </div>
            <p>©2022 Fitness Website. All Rights Reserved | Design By Debayati, Rahul, Adhish</p>
        </footer>
    </div>
  )
}

export default Footer