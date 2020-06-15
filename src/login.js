import React from 'react'
import './CSS/login.css'

export default function LOG(){
    return(
        <div>
            <div className='square'>
                <div className='blue'>
                    <div className='c1'></div>
                    <div className='c2'></div>
                    <div className='coding'></div>
                </div>
                <div className='sign'><b>SIGNUP</b></div>
                <div className='login'><b>LOGIN</b></div>
                <div className='sign-box'>
                    <form>
                        NAME:<input id='name' type='text' />
                        MAIL:<input id='mail' type='text' />
                        PASSWORD:<input id='password' type='text' />
                    </form>
                    <div className='lock'></div>
                    <div className='mail'></div>
                    <div className='name'></div>
                </div>
            </div>
        </div>
    )
}