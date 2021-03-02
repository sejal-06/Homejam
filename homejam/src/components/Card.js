import React from 'react'
import { BookmarkOutline } from 'react-ionicons'
import {Bookmark} from 'react-ionicons'
import './Card.css'
import arrow_right from '../images/arrow_right.png'

function Card(props) {
    return (
        <div className="card_container">
            <img src={props.photo} />
            <div className="down">
                <div className="music">{props.music}</div>
                <div className="name">{props.name}</div>
                <div className="bottom">
                    <a href="#"className="more_info">More Info <img className="right_arrow"src={arrow_right} alt=""/></a>
                    <div className="separator">|</div>
                    {(props.icon=='fill')?<Bookmark color={'rgb(116,1,113)'} 
                        // style={"align-self:flex-end"}
                        title="gjs"
                        height="20px"
                        width="20px"
                        />:<BookmarkOutline
                        color={'rgb(116,1,113)'} 
                        title="gjs"
                        height="20px"
                        width="20px"
                       />}

                </div>
            </div>                
        </div>
    )
}

export default Card
