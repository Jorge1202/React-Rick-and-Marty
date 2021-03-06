import React from 'react';

const CardSection = ({name, activo}) => {
    return (
        <div className={`card ${activo ? 'active': ''}`}>
            <div className="card-body">
                <h5 className="card-title">{name} </h5>
            </div>
        </div>
    );
};

export default CardSection;