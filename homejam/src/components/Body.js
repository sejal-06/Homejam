import React from 'react'
import left_arrow from '../images/arrow_left.png'
import right_arrow from '../images/arrow_right.png'
import first_dp from '../images/first_dp.png'
import second_dp from '../images/second_dp.png'
import third_dp from '../images/third_dp.png'
import us from '../images/us.png'
import it from '../images/it.png'
import Benny from '../images/Benny.png'
import Vijay from '../images/Vijay.png'
import Andrea from '../images/Andrea.png'
import Shilpa from '../images/Shilpa.png'


import Card from './Card';
import Comment from './Comment';
import './Body.css'

function Body() {
    return (
        <div className="body">
            <div className="head1">
                <div className="left">Upcoming Shows</div>
                <a href="#"className="right">View All</a>
            </div>
            <div className="cards_container">
                <Card photo={Benny} music="Folk" name="Benny Dayal" icon="empty"/>
                <Card photo={Vijay} music="Bollywood" name="Vijay Yesudas" icon="empty"/>
                <Card photo={Andrea} music="Folk" name="Andrea Jeremiah" icon="empty"/>
                <Card photo={Shilpa} music="Folk" name="Shilpa Rao" icon="fill"/>                
            </div>

            <div className="head2">
                <div className="left">Reviews</div>
                <div className="right">1 <span style={{color:'gray',paddingRight:'15px'}}>/12</span> <img src={left_arrow} alt=""/>&emsp;<img src={right_arrow}/></div>               
            </div>
            <div className="comments_container">
                <Comment dp={first_dp} name="Hellen Jummy" flag={us} city="PALO ALTO, CA" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."/>
                <Comment dp={second_dp} name="Isaac Oluwatemilorun" flag={it} city="PALO ALTO, CA" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."/>
                <Comment dp={third_dp} name="Hellen Jummy" flag={us} city="PALO ALTO, CA" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."/>
            </div>
        </div>
    )
}

export default Body
