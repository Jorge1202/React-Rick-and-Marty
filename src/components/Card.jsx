import React, { useEffect, useState } from 'react';
import './styles/Card.scss'

const Card = ({data, handleClick}) => {
    const [like, setLike] = useState([]);

    useEffect(async () => {
        let arrayTemporal = null;
        arrayTemporal = JSON.parse(localStorage.getItem('favolite'));
        if(arrayTemporal){
            setLike(()=>{
                let found = arrayTemporal.find(x => x.id == data.id)
                return !found
            })
        }
    })
    return (
        <div className='colhover col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2'>
            <div className="card">
                <img src={data.image} className="card-img-top" alt={data.name} />
                <div className="card-body">
                    <div className='iconlike'>
                        {
                            like ?
                                <i className="bi bi-heart" onClick={(e) => handleClick(data, e)}></i>
                            :   <i className="bi bi-heart-fill" onClick={(e) => handleClick(data, e)}></i>
                        }
                    </div>
                    <h6 className="card-title">{data.name}</h6>
                    <p className="card-text">Specie: {data.species} <br/> Status: {data.status} </p>
                </div>
            </div>
        </div>
    );
};

export default Card;