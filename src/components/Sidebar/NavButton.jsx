import React from 'react';
import "./NavButton.css"

const NavButton = (props) => {
    if(props.active === true)
        return (
            <button className="NavButton active" onClick={() => props.onClick(props.tabNumber)}>
                {props.label}
            </button>
        );
    else
        return (
            <button className="NavButton" onClick={() => props.onClick(props.tabNumber)}>
                {props.label}
            </button>
        );
    
}
 
export default NavButton;