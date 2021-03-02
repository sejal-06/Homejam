import React from 'react'
import logo from '../images/logo.png'
import bag from '../images/bag.png'
import './Nav.css'
export default function Nav() {
    
    return (
        <nav>
            <img src={logo} alt=""/>
            <ul id="un_list">
                <li> <a href="#"><i class="fa fa-search" aria-hidden="true"/></a>&ensp;<a className="search_text" href="#">Search</a></li>
                <li><a href="#" className="help_text">Help</a></li>
                <li><a href="#" className="account_text">Account</a></li>
                <li><a href="#" ><img src={bag} /></a></li>
            </ul>
        </nav>
    )
}
