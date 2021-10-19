import './Footer.css'
import React from 'react';
import { BsFacebook, BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='Footer'>
            <h3>Balacen <span className="text-warning">360</span></h3>
            <p>copyright © 2021 || All copyright reserved</p>
            <div className='secial-links'>
                <a href="http://facebook.com/mdnh1997" target="_blank"> <span className="text-light h4"> <BsFacebook /> </span>   </a>
                <a href="http://github.com/mdnh42" target="_blank"> <span className="text-light h4"> <BsGithub /> </span></a>


            </div>
        </div>
    );
};

export default Footer;