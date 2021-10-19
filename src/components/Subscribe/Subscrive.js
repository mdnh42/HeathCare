import './Subscrive.css'
import React from 'react';

const Subscrive = () => {
    return (
        <div className='Subscribe'>
            <div>
                <h2>Subscrive to our mail service</h2>
                <p>Subscribe to our mail section to get differents offer, and tips and Tricks. <br /> Stay connected with us</p>
            </div>
            <form>
                <p>Email: </p>
                <input type="email" placeholder='Enter your email' id="" />
                <br />
                <button className='bl-btn-secondary'>  Subscribe  </button>
            </form>
        </div>
    );
};

export default Subscrive;