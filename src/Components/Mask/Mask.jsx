import React from "react";
import './Mask.css';
import tick from '../../icons/vectors/tick.png'

import mask from '../../images/mask.png';
export const Mask =()=>{
    return (
        <div className="mask">
            <div className="left">
                <img src={mask} alt="" />
            </div>
            <div className="right">
                <p>WHY CHOOSE US</p>
                <p>Take on any Challenge of the Digital World</p>
                <p><img src={tick} alt="" /> Corporate Financial Advisory</p>
                <p><img src={tick} alt="" /> Development of Financial Models</p>
                <p><img src={tick} alt="" /> Deal Structuring</p>
                <input type="email" placeholder="Enter your email ID"></input>
                <button>Get Started</button>
            </div>
        </div>
    )
}