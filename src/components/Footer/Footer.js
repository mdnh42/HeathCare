import './Footer.css'
import React from 'react';
import { BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='Footer'>
            <p>Balace 360</p>
            <p>copyright © 2021 || All copyright reserved</p>
            <div className='secial-links'>
                <a href="http://facebook.com/mdnh1997" target="_blank"> <BsFacebook />    </a>
                <a href="http://github.com/mdnh42" target="_blank"> <BsGithub /> </a>


            </div>
        </div>
    );
};

export default Footer;