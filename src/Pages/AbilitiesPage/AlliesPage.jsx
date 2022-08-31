import React from 'react';
import './AlliesPage.css';
import CardContainer from '../../Components/CardContainer/CardContainer';
import Heading from '../../Components/Heading/Heading';


const cardModelList=[
    {
        imgSrc:'alfred.jpg',
        title:"Alfred Pennyworth"
    },
    {
        imgSrc:'catwoman.webp',
        title:" Selina Kyle / Catwoman"
    },
    {
        imgSrc:'gordan.webp',
        title:"James Gordan"
    },
    {
        imgSrc:'lucius_fox.jpg',
        title:"Lucius Fox"
    },
    {
        imgSrc:'blake.webp',
        title:"John Blake (Robin)"
    }
]
function AlliesPage(){
    return(
        <>
            <Heading heading='Allies'/>
            <CardContainer cardModelList={cardModelList}/>
        </>
    )
}

export default React.memo(AlliesPage);