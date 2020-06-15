const express=require('express')
const app=express()
const mongoose=require('mongoose')
const user=require('./model')
const bcrypt=require('bcryptjs')
const nodemailer=require('nodemailer')
const about=require('./abt')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const port=4000;

app.use(express.json()
)
mongoose.connect(process.env.DB_CONNECT, 
    { useNewUrlParser: true,useUnifiedTopology: true}
)

mongoose.connection.once('open',()=>{
    console.log('ATLAS CONNECTED')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.post('/signup',async(req,res)=>{

    const salt= await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(req.body.password,salt)

    const User=new user({
        name: req.body.name,
        password: hashpassword
    })
    try{
        const savedUser=await User.save();
        res.send(User)
    }catch(err){
        res.status(400).send(err)
    }
})

app.post('/login',(req,res)=>{
   user.findOne({name:req.body.name}).then(User=>{
       if(!User) return res.status(404).send('Name not found')
       bcrypt.compare(req.body.password,User.password).then(isMatch=>{
           if(isMatch){
            const token=jwt.sign({_id:User._id},'token',{expiresIn:120})
            res.header('auth-token',token).send(token)
           }else{
               return res.status(400).send('Password incorrect')
           }
       })
   })
})

app.get('/dashboard',verifyToken,(req,res)=>{
    jwt.verify(req.token,'key',(err,authData)=>{
        if(err){
            res.sendStatus(403)
        }else{
            res.send('dashboard accessible')
        }
    })   
})

app.post('/contactus',(req,res)=>{

})

function verifyToken(req,res,next){
    const token=req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied')
    try{
        const verified=jwt.verify(token,'key')
        req.user=verified
    }catch(err){
        res.status(400).send('invalid')
    }
}

app.listen(port,()=>{
    console.log('SERVER CONNECTED')
})

