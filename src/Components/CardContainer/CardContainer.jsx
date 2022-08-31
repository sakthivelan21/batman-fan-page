import React from 'react';
import CardHolder from '../CardHolder/CardHolder';
import './CardContainer.css';

function CardContainer({cardModelList}){
    return(
        <div className="card-container">
            {
                cardModelList.map((cardModel,index)=>
                <CardHolder key={index} {...cardModel}/>)
            }
        </div>  
    )
}

export default React.memo(CardContainer);