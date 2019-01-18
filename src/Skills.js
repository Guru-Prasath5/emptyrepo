import React from 'react';
import './Skills.css';


export default class Skills extends React.Component{


    render(){
        return(
            <div className="SkillsInfo">
                
                <img src="image/skills.jpg" alt="SkillsImg"/>
                <div className="SkillH1">Skills:</div>

                <h1 className="java skillText">Java</h1>
                <div class="java progress-bar blue stripes">
                     <span style={{width : "80%",textAlign:"center"}}>80%</span>
                     
                 </div>
                 <h1 className="Spring skillText">Spring </h1>
                 <div class="Spring progress-bar blue stripes">
                     <span style={{width : "40%",textAlign:"center"}}>40%</span>
                 </div>
                 <h1 className="htmll skillText">HTML</h1>
                 <div class="htmll progress-bar blue stripes">
                     <span style={{width : "70%",textAlign:"center"}}>70%</span>
                 </div>
                 <h1 className="sql skillText">SQL</h1>
                 <div class="sql progress-bar blue stripes">
                     <span style={{width : "50%",textAlign:"center"}}>50%</span>
                 </div>
                 
                 <h1 className="reactjs skillText">ReactJs</h1>
                 <div class="reactjs progress-bar blue stripes">
                     <span style={{width : "50%",textAlign:"center"}}>50%</span>
                 </div>
                 <h1 className="jsj skillText">js</h1>
                 <div class="jsj progress-bar blue stripes">
                     <span style={{width : "70%",textAlign:"center"}}>70%</span>
                 </div>
            </div>
        )
    }
}