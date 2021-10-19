import './Contact.css'
import React from 'react';
import { AiFillHome, AiFillPhone } from "react-icons/ai"
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    return (
        <div className='Contact'>
            <h2>Contuct us</h2>
            {/* all fake data here is fake */}
            <div className="icons">

                <div>
                    <span className='bl-icon'><AiFillHome /></span>

                    <h4>Address: dfsasfasf</h4>
                </div>
                <div>
                    <span className='bl-icon'><AiFillPhone /></span>

                    <h4>Phone: 01812345678</h4>
                </div>
                <div>
                    <span className='bl-icon'><MdEmail /></span>

                    <h4>Email: wefit2021@gmail.com</h4>
                </div>
            </div>
        </div>
    );
};

export default Contact;