import './NotFound.css'
import React from 'react';
import notFound from '../../img/notfound.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='NotFound'>
            <img src={notFound} alt="" width='100%' />
            <h2>Sorry the page not available........</h2>
            <p><Link to='/'>Go Back</Link></p>
        </div>
    );
};

export default NotFound;