import React from 'react';
import './Education.css';
import './carousel.css';
import { Carousel } from 'react-responsive-carousel';

export default class Education extends React.Component{
    
    
    render(){
        
        return(
            // <div className="educationCards" >
            <Carousel showThumbs={false} showStatus={false} verticalSwipe='natural'>
            <div className="card1 bordercard1">
            <img className="shadePhoto" src="image/card1.jpg" alt="shadePhoto"></img>
            <p className="secondarySchool">
            <span className="tenth">10th</span><br/>
            St.Phinomenal's High School <br/>
            60 %</p>
            
            </div>

            <div className="card2 bordercard2" >
            <img className="shadePhoto2" src="image/card2.jpg"></img>
            <p className="secondarySchool2">
            <span className="plustwo">+2</span><br/>
            Shri K.K.Naidu higher secondary school <br/>
            60 %</p>
            
            </div>

            <div className="card1 bordercard3" >
            <img className="shadePhoto" src="image/card3.jpg"></img>
            <p className="secondarySchool">
            {/* <div className="hrtag"></div> */}
            <span className="ug">UG</span><br/>
            Bachelor of Computer Application<br/>
            Dr.N.G.P Arts and Science College <br/>
            60 %</p>
            
            
            </div>

            <div className="card2 bordercard4" >
            <img className="shadePhoto2" src="image/card4.jpg"></img>
            <p className="secondarySchool2">
            <span className="pg">PG</span><br/>
            M.Tech<br/>
            Birla Institute of Technology and Science, Pilani <br/>
            7 CGPA</p>
            
            </div>
            </Carousel>
        )
    }
}