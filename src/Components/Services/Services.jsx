import React from "react";
import './Services.css';
import shop from '../../icons/vuesax/bulk/vuesax/bulk/shop.png'
import cards from '../../icons/vuesax/bulk/vuesax/bulk/cards.png'
import favoriteChart from '../../icons/vuesax/bulk/vuesax/bulk/favorite-chart.png'
export const Services =()=>{
    return (
        <div className="service">
            <div className="services">
                <p>SERVICES</p>
                <h3>Our Capabilitie</h3>
                <p>We will bring the breathe of our experience and industry knowledge to help you succeed</p>
                {/* <img className="des" src={serviceVector} alt="" /> */}
            </div>
            <div className="serviceList">
                <div>
                    <img src={shop} alt="" />
                    <h4>Consult</h4>
                    <p>Leverage agile framework to provide a robust high level synopsys overviews</p>
                </div>
                <div>
                    <img src={cards} alt="" />
                    <h4>Create</h4>
                    <p>Bring to the table survival strategies to ensure proactive domination</p>
                </div>
                <div>
                    <img src={favoriteChart} alt="" />
                    <h4>Collaborate</h4>
                    <p>Grow the holistic world view of disruptive innovation workspace</p>
                </div>
                
            </div>
        </div>
    )
}