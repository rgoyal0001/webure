import React from "react";
import './Work.css';
import design from "../../icons/design.png"
import qa from "../../icons/qa.png"
import front from "../../icons/front.png"
import back from "../../icons/back.png"
import app from "../../icons/app.png"
import cloud from "../../icons/cloud.png"
import bank from "../../icons/bank.png"
import analytics from "../../icons/analytics.png"

import cosmetic from '../../images/cosmetic.png'
import fashion from '../../images/fashion.png'
import laura from '../../images/laura.png'
import sales from '../../images/sales.png'
import seo from '../../images/seo.png'

export const Work =()=>{
    return (
        <div className="work">
            <h1>What We Do</h1>
            <div className="workHead">
                <p>Our Services</p>
                <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature</p>
            </div>
            <div className="top">
                <div style={{'background':'#3F0598'}}>
                    <img src={design} alt="" />
                    <p style={{'fontSize':'23px','lineHeight':'34px','fontWeight':'600','color':'#FFFFFF'}}>Design</p>
                    <p style={{'fontSize':'14px','lineHeight':'21px','fontWeight':'500','color':'#DCDCDC'}}>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
                <div>
                    <img src={front} alt="" />
                    <p>Front End Development</p>
                </div>
                <div>
                    <img src={back} alt="" />
                    <p>Back End Development</p>
                </div>
                <div>
                    <img src={app} alt="" />
                    <p>Application Development</p>
                </div>
                <div>
                    <img src={cloud} alt="" />
                    <p>Cloud Services</p>
                </div>
                <div>
                    <img src={analytics} alt="" />
                    <p>Analytics</p>
                </div>
                <div>
                    <img src={qa} alt="" />
                    <p>Q-A And Testing</p>
                </div>
                <div>
                    <img src={bank} alt="" />
                    <p>Back Office Support</p>
                </div>
            </div>
            <div  className="workBottom">
                <div>
                    <img src={cosmetic} alt="" />
                    <p>Cosmetic Forcest Marketing</p>
                </div>
                <div>
                    <img src={sales} alt="" />
                    <p>Sales Analytic</p>
                </div>
                <div>
                    <img src={fashion} alt="" />
                    <p>Fashion Store Mobile Apps</p>
                </div>
                <div>
                    <img src={laura} alt="" />
                    <p>Laura’s Clore Branding Identity</p>
                </div>
                <div>
                    <img src={seo} alt="" />
                    <p>SEO Marketing 4.0</p>
                </div>
                <div>
                    <p style={{'textAlign':'left','fontSize':'16px','lineHeight':'18px','fontWeight':'400','color':'#F17216'}}>PROJECTS</p>
                    <p style={{'textAlign':'left','fontSize':'36px','lineHeight':'53px','fontWeight':'700','color':'#282C48'}}>Selected Works from Us</p>
                    <button style={{'fontSize':'14px','lineHeight':'16px','fontWeight':'700','color':'#282C48'}}>See More</button>
                </div>
            </div>
        </div>
    )
}