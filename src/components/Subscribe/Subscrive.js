import './Subscrive.css'
import React from 'react';

const Subscrive = () => {
    return (
        <div className='Subscribe'>
            <div>
                <h2 className="text-dark">Newsletter to our mail service</h2>
                <p>Newsletter to our mail section to get differents offer, and tips and Tricks. <br /> Stay connected with us</p>
            </div>
            <form className="mt-3">
                
                <input type="email" placeholder='Enter your email' id="" />
                <br />
                <button className='btn bg-warning text-light'>  Newsletter  </button>
            </form>
        </div>
    );
};

export default Subscrive;