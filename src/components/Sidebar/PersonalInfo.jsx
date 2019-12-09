import React from 'react';

import "./PersonalInfo.css"

const PersonalInfo = (props) => {
    return ( 
        <div className="PersonalInfo">
            <img src="/images/prof_pic_fixed.png" alt="My Face"/>
            <h2>Nut Pinyo</h2>
            <p>Backend Developer</p>
        </div>
    );
}
 
export default PersonalInfo;