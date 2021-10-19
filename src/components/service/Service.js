import './Service.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = ({ id, title, description, img }) => {

    return (
        <div className='Service'>
            <img src={img} alt={title} width='100%' />
            <h3>{title}</h3>
            <p>{description.substr(0, 100) + '...'}</p>
            <NavLink to={`/service-details/${id}`} className='bg-warning px-3 py-1 rounded text-light'>Buy Now</NavLink>
        </div>
    );
};

export default Service;