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
                <span className="aboutmedetailsSpan3"> M.tech</span>
                <span className="aboutmedetailsSpan3"> 24th Oct</span>
                <span className="aboutmedetailsSpan3">&nbsp;&nbsp; 4+ java Experience&nbsp;&nbsp;</span>


            </p>
            </div>
            
            
            <h1 className="h1Aboutme"> About Me :</h1>
            <p className="pesonalInfo">
            
                I am Guru Prasath, interested on web development always eager to learn new things in web,
                have 4+ years  Experience in java and good hands on experenece in Restfull service,
                currently learning reactJs, microservices and mongoDB. <br/>
            Worked in Banking domain under a team called ACT which means Accounts Cards and Transaction for
            2 years where we have handled debit credit transaction and account creation parts,<br/>
            Worked on retails domain for 2+ years under Direct team where we handled 3 type of application
            internal, External and Epro. Internal for system associates only and external for external customers
            to place order directly and Epro for 3rd part ordering system. etc..
            

            </p>
            <p className="aboutMepara">
            </p>
            
            </div>

        )
    }
}