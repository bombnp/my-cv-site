import React from 'react';

import "./PersonalInfo.css"

const PersonalInfo = (props) => {
    return ( 
        <div className="PersonalInfo">
            <img src="/images/prof_pic_fixed.png" alt="My Face"/>
            <h1>Nut Pinyo</h1>
            <p>Backend Developer</p>
        </div>
    );
}
 
export default PersonalInfo;