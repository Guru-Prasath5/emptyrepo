import React from 'react';
import './Home.css';

export default class Home extends React.Component
{
    render(){
        return(
            <div className="home">
                <img src="image/Home.jpg" alt="Home img" className="home"/>
                <div className=" ">
                    <img src='image/GC.png' alt="profileIcon" className="Icon"/>
                </div>
                <div className="homeText">
                    <h1>
                        <span className="homeTextMain">GuruPrasath</span>
                        <span className="homeTextSecondary">Bio</span>
                    </h1>
                    <img src='image/arrow.png' alt="swipe down" className="arrow"/>
                </div>
            </div> 
        );
    }
}