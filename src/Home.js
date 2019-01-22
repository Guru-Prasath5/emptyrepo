import React from 'react';
import './Home.css';

export default class Home extends React.Component
{
    render(){
        return(
            <div className="home">
                <img src="image/Home.jpg" alt="Home img" className="home"/>
                <div className="">
                <a href="#">
                    <img src='image/GC.png' alt="profileIcon" className="Icon"/></a>
                </div>
                <div className="homeText">
                    <h1>
                        <span className="homeTextMain">GuruPrasath</span>
                        <span className="homeTextSecondary">Biker | Developer | Talkative</span>
                    </h1>
                    <a href="#aboutMe">
                    <img src='image/rsz_arrow2.png' alt="swipe down" className="arrow"/></a>
                </div>
            </div> 
        );
    }
}