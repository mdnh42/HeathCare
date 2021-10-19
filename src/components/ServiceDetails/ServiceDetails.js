import './ServiceDetails.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { service } = useParams();

    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            // .then(data => console.log('test', data))
            .then(data => setDetails(data.find(d => d.id == service)))

    }, [])
    const { title, img, description } = details;

    return (
        <div className='service-details'>
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default ServiceDetails;