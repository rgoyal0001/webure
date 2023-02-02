import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'
export const Navbar =()=>{
    const style={
        'fontFamily': 'Ubuntu',
        'fontStyle': 'normal',
        // 'fontWeight': '400',
        // 'fontSize': '16px',
        // 'lineHeight': '18px',
        'color': '#747582',
        'textDecoration':'none',
    }
    return (
        <div className="nav">
            <div className="name">
                <p>Webure Technologies</p>
            </div>
            <div className="links">
                <div><Link to="/" style={style}>About Us</Link></div>
                <div><Link to="/" style={style}>Services</Link></div>
                <div><Link to="/" style={style}>Careers</Link></div>
                <div><Link to="/" style={style}>ROI Stories</Link></div>
                <div><Link to="/" style={style}>Blog</Link></div>
                <div><Link to="/" style={style}>Contact Us</Link></div>
                <div><button>Let's Talk</button></div>
            </div>
        </div>
    )
}