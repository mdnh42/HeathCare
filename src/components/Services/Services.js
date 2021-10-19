import './Services.css'
import React, { useEffect, useState } from 'react';
import Service from '../service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className='Services'>
            <h2>Our Services</h2>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service.id} {...service} />)
                }
            </div>
        </div>
    );
};

export default Services;