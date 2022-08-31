import React from 'react';
import "./NavButton.css"
function NavButton({title,iconClass,navButtonClassName,handleEvent,link,activePath}){
    return(
        <div className={(link===activePath)?  `${navButtonClassName} active` : navButtonClassName} onClick={()=> handleEvent(title,link)}>
            <h3 className="nav-button">
                <i className={ `nav-button-icon ${iconClass}` }></i>
                {title}
            </h3>
        </div>
    )
}

export default React.memo(NavButton);