import React from 'react'
import './SubParagraphContainer.css'

function SubParagraphContainer({title,imgSrc,paragraph}){
    return(
        <div className='sub-paragraph-container'>
            <div className='heading'><h2>{title}</h2></div>
            {
                imgSrc && <img src={imgSrc} className='app-main-image' alt={imgSrc}/>
            }
            <p className='sub-paragraph'>{paragraph}</p>
                
        </div>
    )
}

export default React.memo(SubParagraphContainer);