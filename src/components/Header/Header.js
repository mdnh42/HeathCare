import './Header.css';
import logo from '../../img/log.jpg';
import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light Header">
            <div className="container-fluid">
                <span className='logo'>
                    <Link className="navbar-brand" to='/'><h1>BALANCE <span className="text-warning">360</span></h1> </Link>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to='/rd'>Instructors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to='/rd'>Instructors</NavLink>
                        </li>

                        {
                            !user.uid ?
                                <>
                                    < li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to='/signin'><span className='bl-btn-secondary'>Sign In</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to='/signup'><span className='bl-btn-warning'>Sign Up</span></NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <button className='bl-btn-danger' onClick={() => logOut()}>Log Out</button>
                                    <li className='nav-item text-light d-flex align-items-center ms-2'>
                                        {user.email}
                                    </li>
                                </>

                        }

                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Header;