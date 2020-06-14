import React from 'react'
import './CSS/nav.css'
import {Link} from 'react-router-dom'


export default function NAV(){
    return(
        <div className='navigation'>
            <div className='navbar'></div>
            <ul className='links'>
                <div className='about'><Link to='/about'><li>ABOUT</li></Link></div>
                <div className='login'><Link to='/login'><li>LOGIN</li></Link></div>
                <div className='dash'><Link to='/dashboard'><li>DASHBOARD</li></Link></div>
            </ul>
        </div>
    );
}