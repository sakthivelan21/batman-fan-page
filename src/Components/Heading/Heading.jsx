import React from 'react';
import './Heading.css';
function Heading({heading}){
    return(
        <h2 className="animated-title sub-heading">
            {heading}
        </h2>
    )
}

export default React.memo(Heading);