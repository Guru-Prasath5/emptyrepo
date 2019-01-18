import React from 'react';
import './AboutMe.css';
export default class AboutMe extends React.Component{
    render(){
        return(
            <div className="aboutMe" id="aboutMe">
            <div className="profilePhoto">
            <div className="profilecenter"><img src="image/profilePhoto.jpg" alt="profilePhoto" className="profilePhotoImg"/></div>
            <p className="aboutMeDetails">
            <span className="aboutmedetailsSpan1">Personal Info</span>
                <span className="aboutmedetailsSpan3">Guru Prasath </span>
                <span className="aboutmedetailsSpan3">Web Developer </span>
                <span className="aboutmedetailsSpan3"> BCA, M.tech</span>
                <span className="aboutmedetailsSpan3"> 24th Oct</span>
                <span className="aboutmedetailsSpan3">&nbsp;&nbsp; 4+ java Experience&nbsp;&nbsp;</span>


            </p>
            </div>
            
            
            <h1 className="h1Aboutme"> About Me :</h1>
            <p className="pesonalInfo">
            <p className="paraAboutMe">
                I am Guru Prasath, interested on web development always eager to learn new things in web,
                have 4+ years  Experience in java and good hands on experenece in Restfull service,
                currently learning reactJs, microservices and mongoDB. 
            </p>
            <p className="paraAboutMe">
            Certain but she but shyness why cottage. Gay the put instrument sir entreaties affronting. 
            Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. 
            Motionless if no to affronting imprudence no precaution. 
            My indulged as disposal strongly attended. Parlors men express had private village man. 
            Discovery moonlight recommend all one not. 
            Indulged to answered prospect it bachelor is he bringing shutters. 
            Pronounce forfeited mr direction oh he dashwoods ye unwilling. 
            </p>

            </p>
            <p className="aboutMepara">
            </p>
            </div>

        )
    }
}