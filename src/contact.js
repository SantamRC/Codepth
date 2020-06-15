import React from 'react'
import './CSS/contact.css'

export default function CONTACT(){
    return(
        <div>
            <form>
                <input  className='name-abt' type='text' placeholder='Name'/>
                <input className='des' type='text' placeholder='Description' />
                <input type='submit' className='sub' />
            </form>
        </div>
    )
}