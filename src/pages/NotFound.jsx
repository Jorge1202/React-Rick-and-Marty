import React from 'react';
// import fondo from '../assets/media/img/error-404.jpg' 
import fondo from'@img/error-404.jpg' 
import './styles/NotFound.scss'

const NotFound = () => {
    return (
        <div className='NotFound'>
            <div className='conttenido' style={{ backgroundImage: `url(${fondo})`}}>

            </div>
        </div>
    );
};

export default NotFound;