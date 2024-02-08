import React from 'react';
// import fondo from '../assets/media/img/error-404.jpg' 
import fondo from '@img/error-404.jpg'
import { Link } from "react-router-dom";

import './styles/NotFound.scss'

const NotFound = () => {
    return (
        <div className='NotFound'>
            <Link to="/" className='btn btn-light'>Ir al inicio</Link>
            <div className='conttenido' style={{ backgroundImage: `url(${fondo})` }}>
            </div>

        </div>
    );
};

export default NotFound;