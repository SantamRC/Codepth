import React, { Component } from 'react'
import './CSS/login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class LOG extends Component{
    constructor(props){
        super(props)
        this.state={
            mail:'',
            password:''
        }
        this.onSubmit=this.onSubmit.bind(this)
        this.onChangeMail=this.onChangeMail.bind(this)
        this.onChangePassword=this.onChangePassword.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        const data={
            mail:this.mail,
            password:this.password
        }
        axios.post('localhost:4000/login',data).then(res=>{
            console.log(res)
        })
    }
    onChangeMail(e){
        this.setState({
            mail:e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    render(){
        return(
            <div>
                <div className='square'>
                    <div className='blue'>
                        <div className='c1'></div>
                        <div className='c2'></div>
                        <div className='coding'></div>
                    </div>
                    <div className='sign'><Link to='/signup'><b>SIGNUP</b></Link></div>
                    <div className='login'><Link to='/login'><b>LOGIN</b></Link></div>
                    <div className='sign-box'>
                        <form onSubmit={this.onSubmit}>
                            <input id='mail' 
                                type='text' 
                                placeholder='E-MAIL'
                                value={this.state.mail}
                                onChange={this.onChangeMail}
                             />
                            <input id='password' 
                                type='text' 
                                placeholder='PASSWORD'
                                value={this.state.password}
                                onChange={this.onChangePassword}
                             />
                            <input id='submit' type='submit' />
                        </form>
                        <div className='lock'></div>
                        <div className='mail'></div>
                    </div>
                </div>
            </div>
    )}
}