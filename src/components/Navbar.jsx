import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss'

const Navbar = ({children}) => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className='navbar_container'>
                <Link className="navbar-brand nav_title" to="/"> <strong>Rick and Marty</strong> </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" aria-current="page"> Personajes </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/episodios" aria-current="page"> Episodios </Link>
                        </li>
                    </ul> */}
                </div>
                <div className='btn_theme'>
                    {children}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;