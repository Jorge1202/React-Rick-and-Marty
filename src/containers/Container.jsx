import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './styles/Container.scss'

const Container = ({ children }) => {
    const [theme, setsTheme] = useState(true)

    return (
        <section id='Container' className={theme ? 'theme-dark' : 'theme-light'}>
            <div className="Container">
                <div className="Container_nav">
                    <Navbar>
                        <button onClick={() => { setsTheme(!theme) }} type="button" className="btn btn-sm" data-bs-toggle="tooltip" data-bs-placement="left" title={theme?'Light':'Dark'}>
                            {
                                theme
                                    ? <i className="bi bi-sun-fill"></i>
                                    : <i className="bi bi-moon-stars-fill"></i>
                            }
                        </button>
                    </Navbar>
                </div>
                <div className="Container_body">
                    <div className='cont-body__head' ></div>
                    <div className='cont-body__contenido'>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Container;

