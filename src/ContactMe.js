import React from 'react';
import './ContactMe.css';

export default class ContactMe extends React.Component{

    render(){
        return(
            <div className="ContactMe">
            <form className="contactForm">
            <div className="">
            <h1 className="lables">Full Name <span>&#33;Atleast 4 characters</span></h1>
            <input className="ContactTextField" type="text" ></input>
            </div>
            <div className="">
            <h1 className="lables">Email Id <span>&#33;Please enter valid EmailId</span></h1>
            <input className="ContactTextField" type="text" ></input>
            </div>
            <div className="">
            <h1 className="lables">Subject <span>&#33;Atleast 10 characters</span></h1>
            <input className="ContactTextField" type="text" ></input>
            </div>
            <div className="">
            <h1 className="lables">Message <span>&#33;Atleast 20 characters</span></h1>
            <textarea className="ContactTextField Area" type="text" ></textarea>
            </div>
            <a href="#">Submit</a>
            </form>

            </div>
        )
    }
}