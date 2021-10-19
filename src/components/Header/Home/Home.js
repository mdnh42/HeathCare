import './Home.css'
import React from 'react';
import Services from '../../Services/Services';
import Banner from '../../Banner/Banner';
import Subscrive from '../../Subscribe/Subscrive';
import Contact from '../../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Subscrive />
            <Contact />
        </div>
    );
};

export default Home;