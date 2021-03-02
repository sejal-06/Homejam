import React from 'react'
import './Comment.css'
function Comment(props) {
    return (
        <div className="comment_container">
            <div className="up">
                <img src={props.dp} className="dp"/>
                <div className="about">
                    <div className="name">{props.name}</div>
                    <div className="city">
                        <img src={props.flag} className="flag" />
                        <div className="cityName">{props.city}</div>
                    </div>
                </div>
            </div>
            <div className="down">{props.content}</div>
        </div>
    )
}

export default Comment
