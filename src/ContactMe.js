import React from 'react';
import './ContactMe.css';

export default class ContactMe extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name : "",
            emailId : "",
            subject : "",
            msg : "",
            nameErr:false,
            emailIdErr:false,
            subjectErr:false,
            msgErr : false,
        }
        this.HandleTextChanges = this.HandleTextChanges.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
    }
    HandleTextChanges(e){
        const id = e.target.id;
         this.setState({
            
                [id] : e.target.value
            
            }
         );
     }
     HandleSubmit(e){
        e.preventDefault();
        this.setState({
            nameErr:false,
            subjectErr:false,
            msgErr:false,
            emailIdErr:false
        })
        if(this.state.name === '' || this.state.name.length <4){
            this.setState({
                nameErr : true,
            })
        }
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(this.state.emailId === '' || reg.test(this.state.emailId)===false){
            console.log("emai;-"+this.state.emailId)
            this.setState({
                emailIdErr:true,
            })
        }
        if(this.state.subject ==='' || this.state.subject.length <10){
            this.setState({
                subjectErr : true,
            })
        }
        if(this.state.msg ===''|| this.state.msg.length <20){
            this.setState({
                msgErr:true,
            })
        }

     }

    render(){
        return(
            <div className="ContactMe">
            
            <form className="contactForm">
            <img src="image/contactPhoto.jpg" alt="Contact img" className="contactImg"/>
            <img src="image/contactPhoto2.jpg" alt="Contact img" className="contactImg2"/>
            <div className="">
            <h1 className="lables">Full Name <span style={{ display:this.state.nameErr?"inline": "none"}}>&#33;Atleast 4 characters</span></h1>
            <input className="ContactTextField" type="text" value={this.state.name} id="name" onChange={this.HandleTextChanges}></input>
            </div>
            <div className="">
            <h1 className="lables">Email Id <span style={{ display:this.state.emailIdErr?"inline": "none"}}>&#33;Please enter valid EmailId</span></h1>
            <input className="ContactTextField" type="text" value={this.state.emailId} id="emailId" onChange={this.HandleTextChanges}></input>
            </div>
            <div className="">
            <h1 className="lables">Subject <span style={{ display:this.state.subjectErr?"inline": "none"}}>&#33;Atleast 10 characters</span></h1>
            <input className="ContactTextField" type="text" value={this.state.subject} id="subject" onChange={this.HandleTextChanges}></input>
            </div>
            <div className="">
            <h1 className="lables">Message <span style={{ display:this.state.msgErr?"inline": "none"}}>&#33;Atleast 20 characters</span></h1>
            <textarea className="ContactTextField Area" type="text" value={this.state.msg} id="msg" onChange={this.HandleTextChanges}></textarea>
            </div>
            <a href="#" className="btn btn-white btn-animated" onClick={this.HandleSubmit}>Submit</a>
            
            </form>

            </div>
        )
    }
}