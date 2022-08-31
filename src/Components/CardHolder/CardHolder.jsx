import React from 'react';
import './CardHolder.css';

function CardHolder({imgSrc,title}){
    return(
        <div className='card-holder'>
            <img src={imgSrc} className="card-holder-image" alt="event-img"/>
            <h3 className="card-holder-heading">{title}</h3>
        </div>
    )
}

export default React.memo(CardHolder);