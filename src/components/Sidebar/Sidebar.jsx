import React from 'react';
import "./Sidebar.css"

import NavButtons from "./NavButtons"
import PersonalInfo from "./PersonalInfo"
import Contacts from "./Contacts"

const Sidebar = (props) => {
    return ( 
			<div className="Sidebar">
        <PersonalInfo />
        <NavButtons activeTab={props.activeTab} onClick={props.changeTab}/>
        <Contacts />
			</div>
		);
}
 
export default Sidebar;