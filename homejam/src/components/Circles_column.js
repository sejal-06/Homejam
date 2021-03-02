import React from 'react'
import Circle from './Circle'
import './Circles_column.css'
import heart from '../images/heart.png'
import label from '../images/label.png'
function Circles_column() {
    return (
        <div className="circles_column">
            <Circle urll2='../images/Subtract.png' icon={heart}/>
            <Circle icon={label}/>
            <Circle icon={label} />
            <Circle icon={label}/>            
        </div>
    )
}

export default Circles_column
