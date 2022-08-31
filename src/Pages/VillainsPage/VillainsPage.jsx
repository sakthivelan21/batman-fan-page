import React from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import Heading from '../../Components/Heading/Heading';
import './VillainsPage';


const cardModelList=[
    {
        imgSrc:'ras-al-ghul.jpg',
        title:"Ra's al Ghul"
    },
    {
        imgSrc:'2face.webp',
        title:"Two-Face"
    },
    {
        imgSrc:"joker.jpg",
        title:"Joker"
    },
    {
        imgSrc:"bane.jpg",
        title:"Bane"
    }
]

function VillainsPage(){
    
    return(
        <>
            <Heading heading='Villains'/>
            <CardContainer cardModelList={cardModelList}/>
        </>
    )
}

export default React.memo(VillainsPage);