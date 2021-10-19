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
                    <span className='bl-icon'><AiFillPhone /></span>
                    <h4> <span className="text-primary"> +00 34 234 231 </span></h4>
                    
                </div>
                <div>
                    <span className='bl-icon'><MdEmail /></span>
                    <h4><span className="text-primary"> mail@balance.360.com </span></h4>
                </div>
                <div>
                    <span className='bl-icon'><AiFillHome /></span>
                    <h4> <span className="text-primary"> New York, USA </span></h4>
                </div>
            </div>
        </div>
    );
};

export default Contact;