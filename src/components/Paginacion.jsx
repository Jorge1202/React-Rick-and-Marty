import React from 'react';
import './styles/Paginacion.scss'

const Paginacion = ({paginacion, paginacionCharacter}) => {
    return (
        <div className='paginacion row'>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                Page {paginacion.prev ? parseInt(paginacion.prev.split('=')[1]) + 1 : '1'} of {paginacion.pages}
            </div>
            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={`page-item ${paginacion.prev ? '' : 'disabled'}`}><samp onClick={(e) => paginacionCharacter(paginacion.prev, e)} className="page-link">Previous</samp></li>
                        <li className={`page-item ${paginacion.next ? '' : 'disabled'}`}><samp onClick={(e) => paginacionCharacter(paginacion.next, e)} className="page-link" >Next</samp></li>
                    </ul>
                </nav>
            </div>
        </div>

       
    );
};

export default Paginacion;