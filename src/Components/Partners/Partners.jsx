import React from "react";
import './Partners.css';

import slack from '../../icons/logos/slack.png'
import microsoft from '../../icons/logos/microsoft.png'
import prudential from '../../icons/logos/prudential.png'
import zoover from '../../icons/logos/zoover.png'
export const Partners =()=>{
    return (
        <div className="partners">
            <div className="logos">
                <img  src={slack} alt="" />

            </div>
            <div className="logos">
                <img src={microsoft}  alt="" />

            </div>
            <div className="logos">
                <img src={prudential} alt="" />

            </div>
            <div className="logos">
                <img src={zoover} alt="" />

            </div>
        </div>
    )
}