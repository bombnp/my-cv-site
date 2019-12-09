import React from 'react';
import "./NavButtons.css"

import NavButton from "./NavButton"

const NavButtons = (props) => {
    const labels = ["Home", "Education", "Works", "Awards", "Projects", "Contact Me"]
    return ( 
        <div className="NavButtons">
            {labels.map((label, index) => <NavButton 
            key={index} 
            label={label} 
            active={index===props.activeTab} 
            tabNumber={index} 
            onClick={props.onClick}
            />)}
        </div>
    );
}
 
export default NavButtons;