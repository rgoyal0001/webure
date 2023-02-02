import React from "react";
import './Intro.css';
import verify from '../../icons/vuesax/bulk/vuesax/bulk/verify.png'
import videoCircle from '../../icons/vuesax/bold/vuesax/bold/video-circle.svg'
import girl from '../../images/girl.png';
export const Intro =()=>{
    return (
        <div className="intro">
            <div className="left">
                <div className="heading">
                    <img src={verify} alt="" />
                    <p>Best Business Platform - World Record 2021</p>
                </div>
                <p>Reach Your Business Goals in Record Time</p>
                <p className="content">Support small business and join the nationwide movement to encourage commercial support for the millions of minority owned businesses helping world economy.</p>
                <div className="bottom">
                    <button className="yes">Get Started</button>
                    <div className="meeting">
                        <img src={videoCircle} alt="" />
                        <p>Book a 30 Min Quick Meeting</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={girl} alt="" />

            </div>
        </div>
    )
}