import React from 'react'
import './Circle.css'
// import heart from '../images/heart.png'

function Circle(props) {
    
    return (
        // style={{backgroundImage:`url(${props.urll1}) center center/cover no-repeat`}} 
            <div  className="circle"  >
                <div className="circle_body">
                    <div className="icon"> <img src={props.icon} height="20px" width="20px" style={{backgroundImage:`url(${props.urll1}) `}} /></div>
                    <div className="sec">0</div>
                    <div className="third">Label</div>
                </div>
            </div>
            
      
    )
}

export default Circle
